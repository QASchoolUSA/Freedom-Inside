# Состояние — Пространство внутренней свободы

Bilingual (RU / UK) landing page for the «Состояние» inner-freedom program.
Built with Next.js 16 (App Router), Tailwind CSS v4, next-intl and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000/ru](http://localhost:3000/ru) (Russian, default) or
[http://localhost:3000/uk](http://localhost:3000/uk) (Ukrainian).

## Configure your links

All external links live in one file — [`lib/config.ts`](lib/config.ts):

| Constant        | Purpose                                        |
| --------------- | ---------------------------------------------- |
| `ZENEDU_URL`    | Zenedu course page (every CTA button links here) |
| `INSTAGRAM_URL` | Instagram link in the footer                   |
| `TELEGRAM_URL`  | Telegram link in the footer                    |

Replace the placeholders with the real URLs before deploying.

## Editing the copy

All text lives in [`messages/ru.json`](messages/ru.json) and
[`messages/uk.json`](messages/uk.json). Both files share the same structure,
one section per landing block (hero, pain, modules, pricing, faq, …).

## Project structure

- `app/[locale]/` — locale-aware layout and the landing page
- `components/sections/` — the 12 landing sections in page order
- `components/ui/` — shared UI (CTA button, ornaments, icons, scroll reveal)
- `i18n/`, `proxy.ts` — next-intl routing (`/ru` default, `/uk`)
- `public/images/` — photos and the logo cropped from the reference art in `pics/`

## Production

```bash
npm run build
npm start
```

Both locales are prerendered as static HTML.
