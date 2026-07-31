"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { Leaf } from "./icons";

const stats = [
  { n: "40+", l: "layers of filo, hand-brushed" },
  { n: "100%", l: "real Antep pistachio" },
  { n: "Daily", l: "baked fresh each morning" },
];

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* Images collage */}
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <Reveal className="mt-10">
              <div className="overflow-hidden rounded-[2rem] border-4 border-sugar shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/baklava-pistachio.jpg" alt="Pistachio baklava close-up" className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="overflow-hidden rounded-[2rem] border-4 border-sugar shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/turkish-coffee.jpg" alt="Traditional Turkish coffee" className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </Reveal>
          </div>
          <div className="float absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-pistachio px-5 py-2.5 text-sm font-bold text-sugar shadow-lg">
            <Leaf className="h-4 w-4" /> Freshly ground pistachio
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-honey-deep">
              Our story
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-4 text-4xl text-espresso sm:text-6xl">
              A little corner of{" "}
              <span className="honey-text">Türkiye</span> on East&nbsp;Hastings.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-espresso-soft/80">
              Emilee&rsquo;s Sweet House was born from a simple homesick craving:
              baklava that actually tastes like home. We roll our own filo, toast
              our own nuts, and pour honey the old way — slowly, patiently, by
              hand. Pull up a stool, order a Turkish coffee, and stay a while.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.n} delay={0.2 + i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-espresso/10 bg-sugar/60 p-4 text-center"
                >
                  <div className="display text-3xl text-honey-deep sm:text-4xl">{s.n}</div>
                  <div className="mt-1 text-xs font-medium leading-tight text-espresso-soft/70">{s.l}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
