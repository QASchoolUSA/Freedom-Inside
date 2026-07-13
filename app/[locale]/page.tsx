import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Pain } from "@/components/sections/Pain";
import { Statement } from "@/components/sections/Statement";
import { Modules } from "@/components/sections/Modules";
import { ForYou } from "@/components/sections/ForYou";
import { Format } from "@/components/sections/Format";
import { Author } from "@/components/sections/Author";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pain />
        <Statement />
        <Modules />
        <ForYou />
        <Format />
        <Author />
        <Testimonials />
        <Faq />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
