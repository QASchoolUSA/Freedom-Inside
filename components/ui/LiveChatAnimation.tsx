"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type ChatMessage = {
  side: "in" | "out";
  text: string;
  time: string;
};

export type ChatConversation = {
  title: string;
  messages: ChatMessage[];
};

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-cream-300 bg-white px-4 py-3 shadow-[0_4px_16px_-6px_rgba(20,52,61,0.2)]">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-2 w-2 rounded-full bg-ink-soft/40"
            animate={{ y: [0, -4, 0], opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}

function ChatBubble({ message }: { message: ChatMessage }) {
  const isOut = message.side === "out";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.38, ease: [0.22, 0.61, 0.36, 1] }}
      className={`flex ${isOut ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-3 text-[0.92rem] leading-relaxed shadow-[0_6px_20px_-8px_rgba(20,52,61,0.25)] sm:max-w-[85%] sm:px-5 sm:py-3.5 sm:text-[0.95rem] ${
          isOut
            ? "rounded-br-md bg-[#d9f5c8] text-[#1f3d1a]"
            : "rounded-bl-md border border-cream-300 bg-white text-ink"
        }`}
      >
        <p>{message.text}</p>
        <p
          className={`mt-1.5 flex items-center justify-end gap-1 text-[11px] ${
            isOut ? "text-[#5a8a4a]" : "text-ink-soft/60"
          }`}
        >
          {message.time}
          {isOut && (
            <span className="text-[10px] leading-none text-[#5a8a4a]" aria-hidden>
              ✓✓
            </span>
          )}
        </p>
      </div>
    </motion.div>
  );
}

export function LiveChatAnimation({
  conversations,
  label,
}: {
  conversations: ChatConversation[];
  label: string;
}) {
  const reduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [conversationIndex, setConversationIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);

  const conversation = conversations[conversationIndex];
  const messages = conversation?.messages ?? [];

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setStarted(true);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || messages.length === 0) return;

    if (visibleCount >= messages.length) {
      const pause = setTimeout(() => {
        setVisibleCount(0);
        setTyping(false);
        setConversationIndex((index) => (index + 1) % conversations.length);
      }, 4500);
      return () => clearTimeout(pause);
    }

    const nextMessage = messages[visibleCount];
    const baseDelay = visibleCount === 0 ? 600 : nextMessage.side === "out" ? 900 : 0;

    if (nextMessage.side === "in") {
      setTyping(true);
      const typingMs = reduceMotion
        ? 200
        : Math.min(2200, 500 + nextMessage.text.length * 12);
      const timer = setTimeout(() => {
        setTyping(false);
        setVisibleCount((count) => count + 1);
      }, typingMs + baseDelay);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisibleCount((count) => count + 1);
    }, baseDelay);
    return () => clearTimeout(timer);
  }, [started, visibleCount, messages, conversations.length, conversationIndex, reduceMotion]);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 640px)").matches;

    node.scrollTo({
      top: node.scrollHeight,
      behavior: prefersReducedMotion || isMobile ? "auto" : "smooth",
    });
  }, [visibleCount, typing, conversationIndex]);

  if (reduceMotion) {
    const fallback = conversations[0]?.messages ?? [];
    return (
      <div className="space-y-4">
        {fallback.map((message, index) => (
          <ChatBubble key={index} message={message} />
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-cream-300 bg-[#e8f0d8] shadow-[0_12px_40px_-16px_rgba(20,52,61,0.35)]">
      <div className="flex items-center gap-3 border-b border-cream-300/80 bg-white/90 px-4 py-3 backdrop-blur-sm">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-700 to-teal-900 text-xs font-semibold text-cream-50">
          А
        </span>
        <div className="min-w-0 text-left">
          <p className="truncate text-sm font-semibold text-ink">{conversation.title}</p>
          <p className="text-xs text-teal-700">{label}</p>
        </div>
        <span className="ml-auto flex items-center gap-1">
          <motion.span
            className="h-2 w-2 rounded-full bg-emerald-500"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-700">
            live
          </span>
        </span>
      </div>

      <div
        ref={scrollRef}
        className="chat-pattern relative h-[28rem] space-y-3 overflow-y-auto overscroll-contain [overflow-anchor:none] px-3 py-4 sm:h-[32rem] sm:px-4 sm:py-5"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={conversationIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            {messages.slice(0, visibleCount).map((message, index) => (
              <ChatBubble key={`${conversationIndex}-${index}`} message={message} />
            ))}
            {typing && <TypingIndicator />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
