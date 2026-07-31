# Emilee's Sweet House — Demo Website

A fast, animated one-page site for **Emilee's Sweet House**, an authentic Turkish
baklava & dessert café in Vancouver, BC. Built as a pitch/demo.

Live-feeling, lightweight, and ready to deploy to **Vercel**.

## Tech

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling
- **Framer Motion** for tasteful scroll/entrance animations
- Pure-CSS marquee, floating badges & grain (no heavy libraries)
- All imagery is self-hosted in `/public/images` — no external hotlinks
- **~150 kB First Load JS**, fully static prerender

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

## Deploy to Vercel

The easiest path:

```bash
npm i -g vercel
vercel
```

Or push the folder to a GitHub repo and "Import Project" on vercel.com —
zero configuration needed (Next.js is auto-detected).

## Customize (the bits to swap for the client)

Almost everything is centralized in **`lib/site.ts`**:

| Field | What it is |
| --- | --- |
| `uberEats` | **Replace with the exact Uber Eats store URL.** Currently a search link. |
| `phone` | Placeholder — add the real number. |
| `address`, `hours` | Verify against current shop info. |
| `instagram`, `tiktok`, `facebook`, `maps` | Social + map links. |

- **Menu items & prices:** `components/Menu.tsx` (prices are illustrative).
- **Reviews:** `components/Testimonials.tsx` (paraphrased from public reviews).
- **Photos:** drop new `.jpg`s into `public/images/` and update the `src` paths.
  For a real launch, swap in the shop's own photography.

## Notes

This is a demo. Copy, prices, and some photos are representative and should be
confirmed with the business before going live.
