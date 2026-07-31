"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";
import { Arrow, Star, MapPin } from "./icons";

const word = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-44">
      {/* Warm ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber/25 blur-[120px]" />
        <div className="absolute right-[-5%] top-[20%] h-[380px] w-[380px] rounded-full bg-pistachio/20 blur-[110px]" />
        <div className="absolute left-[-5%] bottom-[0%] h-[360px] w-[360px] rounded-full bg-pomegranate/10 blur-[110px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-honey/40 bg-sugar/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-honey-deep backdrop-blur"
          >
            <span className="flex gap-0.5 text-amber">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3" />
              ))}
            </span>
            Vancouver&rsquo;s house of Turkish sweets
          </motion.div>

          <h1 className="display text-[15vw] text-espresso sm:text-7xl lg:text-[5.6rem]">
            {["Baklava", "the way"].map((w, i) => (
              <span key={w} className="block overflow-hidden">
                <motion.span custom={i} variants={word} initial="hidden" animate="show" className="block">
                  {w}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden">
              <motion.span custom={2} variants={word} initial="hidden" animate="show" className="block">
                it&rsquo;s <span className="honey-text italic">meant</span> to be.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-espresso-soft/80"
          >
            Paper-thin filo, real Antep pistachio, and honey we pour by hand —
            plus warm börek, lokum and Turkish coffee. Made fresh every morning
            on East Hastings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={site.uberEats}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full bg-espresso px-7 py-4 text-base font-bold text-cream shadow-[0_18px_40px_-16px_rgba(42,22,12,0.7)] transition-all hover:-translate-y-0.5 hover:bg-espresso-soft"
            >
              Order on Uber Eats
              <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#menu"
              className="flex items-center gap-2 rounded-full border-2 border-espresso/15 bg-sugar/50 px-7 py-4 text-base font-bold text-espresso transition-all hover:border-espresso/30 hover:bg-sugar"
            >
              Explore the menu
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-8 flex items-center gap-2 text-sm font-medium text-espresso-soft/70"
          >
            <MapPin className="h-4 w-4 text-pistachio" />
            {site.addressShort}
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute inset-0 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-honey to-pistachio opacity-30 blur-sm" />

            {/* Floating pistachios */}
            {!reduce &&
              [
                { t: "6%", l: "18%", d: "0s", s: "text-3xl", r: "-18deg" },
                { t: "82%", l: "10%", d: "1.2s", s: "text-2xl", r: "14deg" },
                { t: "70%", l: "88%", d: "2.1s", s: "text-3xl", r: "-8deg" },
                { t: "30%", l: "94%", d: "0.6s", s: "text-xl", r: "22deg" },
              ].map((p, i) => (
                <span
                  key={i}
                  className={`float pointer-events-none absolute z-20 ${p.s} drop-shadow-md`}
                  style={{ top: p.t, left: p.l, animationDelay: p.d, ["--r" as string]: p.r }}
                  aria-hidden="true"
                >
                  🥜
                </span>
              ))}

            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border-[6px] border-sugar shadow-[0_40px_80px_-30px_rgba(42,22,12,0.6)]">
              {reduce ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src="/images/hero-baklava.jpg"
                  alt="Fresh golden baklava topped with crushed pistachio"
                  className="h-full w-full object-cover"
                />
              ) : (
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/images/hero-baklava.jpg"
                  aria-label="Fresh baklava being prepared"
                >
                  <source src="/videos/hero-baklava.mp4" type="video/mp4" />
                </video>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent" />
            </div>

            {/* Floating badge — rating */}
            <div className="float absolute -left-4 top-10 rounded-2xl border border-espresso/10 bg-sugar/95 px-4 py-3 shadow-xl backdrop-blur sm:-left-8">
              <div className="flex items-center gap-1 text-amber">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
              <p className="mt-1 text-xs font-semibold text-espresso">Loved by 8,900+ locals</p>
            </div>

            {/* Floating badge — fresh daily seal */}
            <div
              className="float absolute -right-3 bottom-8 grid h-24 w-24 place-items-center rounded-full bg-espresso text-center sm:-right-6"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="spin-slow absolute inset-0">
                <svg viewBox="0 0 100 100" className="h-full w-full fill-amber text-[9px] uppercase tracking-[0.2em]">
                  <defs>
                    <path id="circlePath" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                  </defs>
                  <text>
                    <textPath href="#circlePath">
                      Fresh daily · Made by hand · Since Istanbul ·
                    </textPath>
                  </text>
                </svg>
              </div>
              <span className="display text-2xl text-amber">✦</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
