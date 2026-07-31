"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { site } from "@/lib/site";
import { Instagram } from "./icons";

const shots = [
  { src: "/images/baklava-tray.jpg", alt: "Tray of fresh baklava", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/lokum.jpg", alt: "Turkish delight / lokum", span: "" },
  { src: "/images/pastries-display.jpg", alt: "Display of Turkish pastries", span: "" },
  { src: "/images/coffee-flatlay.jpg", alt: "Turkish coffee flat lay", span: "" },
  { src: "/images/baklava-pistachio.jpg", alt: "Pistachio baklava", span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-honey-deep">
                Straight from the counter
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-4 text-4xl text-espresso sm:text-6xl">
                Feast your eyes
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full border-2 border-espresso/15 px-5 py-2.5 text-sm font-bold text-espresso transition-all hover:border-espresso/30"
            >
              <Instagram className="h-4 w-4" /> @emilees_sweet_house
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-4">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.06} className={s.span}>
              <motion.div
                whileHover={{ scale: 0.985 }}
                className={`group relative h-full w-full overflow-hidden rounded-[1.75rem] border-4 border-sugar shadow-lg`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
