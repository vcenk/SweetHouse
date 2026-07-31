"use client";

import Reveal from "./Reveal";
import { Star } from "./icons";

const reviews = [
  {
    quote:
      "The cold baklava, şöbiyet and classic pistachio were all incredible — you feel every thin, crisp layer. Rich but never overly sweet.",
    name: "Aylin K.",
    place: "Vancouver, BC",
  },
  {
    quote:
      "Flaky, rich, and perfectly sweet without being overwhelming. Honestly the most authentic baklava I've had outside of Türkiye.",
    name: "Marcus D.",
    place: "Burnaby, BC",
  },
  {
    quote:
      "Every bite was a journey through Turkish confectionery. The Turkish coffee and lokum combo is my new weekend ritual.",
    name: "Sophie L.",
    place: "East Van",
  },
  {
    quote:
      "The friendly staff, the smell of fresh börek, endless çay — it feels like being welcomed into someone's home. A gem on Hastings.",
    name: "Deniz A.",
    place: "Vancouver, BC",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-espresso py-24 text-cream sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-30">
        <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-honey/40 blur-[120px]" />
        <div className="absolute right-[8%] bottom-0 h-72 w-72 rounded-full bg-pistachio/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-amber">
              Loved by locals
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mx-auto mt-4 max-w-2xl text-4xl sm:text-6xl">
              8,900 sweet-tooths can&rsquo;t be wrong.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-[2rem] border border-cream/10 bg-cream/5 p-7 backdrop-blur">
                <div className="flex gap-1 text-amber">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-cream/90">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-honey text-sm font-bold text-espresso">
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-bold">{r.name}</span>
                    <span className="block text-sm text-cream/60">{r.place}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
