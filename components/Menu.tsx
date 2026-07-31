"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { site } from "@/lib/site";
import { Arrow } from "./icons";

type Item = {
  name: string;
  tr?: string;
  desc: string;
  price: string;
  tag?: "Signature" | "Popular" | "New";
};

const categories: Record<string, Item[]> = {
  Baklava: [
    { name: "Pistachio Baklava", tr: "Fıstıklı", desc: "The classic — 40 layers of filo, packed with green Antep pistachio.", price: "$4.50", tag: "Signature" },
    { name: "Şöbiyet", desc: "Filo pockets of clotted cream & pistachio. Rich but never heavy.", price: "$4.90", tag: "Popular" },
    { name: "Cold Baklava", tr: "Soğuk Baklava", desc: "Milk-soaked, chilled, cocoa-dusted. A modern Istanbul favourite.", price: "$5.20", tag: "New" },
    { name: "Kadayıf", desc: "Shredded pastry nests, buttered and stuffed with walnut.", price: "$4.20" },
  ],
  "Pastries & Börek": [
    { name: "Su Böreği", desc: "Water börek — silky boiled-then-baked layers with white cheese.", price: "$6.50", tag: "Popular" },
    { name: "Spinach & Feta Börek", desc: "Flaky rolls, golden and warm from the oven.", price: "$5.50" },
    { name: "Simit", desc: "Sesame-crusted Turkish street bagel. Best with tea.", price: "$3.00" },
    { name: "Poğaça", desc: "Soft savoury buns, filled with cheese or olive.", price: "$3.50" },
  ],
  "Sweets & Lokum": [
    { name: "Turkish Delight", tr: "Lokum", desc: "Rosewater, pomegranate & double-pistachio. Boxed to gift.", price: "$9.00", tag: "Signature" },
    { name: "Künefe", desc: "Warm cheese pastry in syrup, crowned with pistachio.", price: "$7.50", tag: "Popular" },
    { name: "Pistachio Gelato", desc: "Slow-churned, made in-house. Two scoops.", price: "$5.00" },
    { name: "Sütlaç", desc: "Oven-baked Turkish rice pudding with cinnamon.", price: "$4.50" },
  ],
  "Coffee & Tea": [
    { name: "Turkish Coffee", tr: "Türk Kahvesi", desc: "Copper-pot brewed, served with lokum & water.", price: "$4.00", tag: "Signature" },
    { name: "Turkish Tea", tr: "Çay", desc: "Bottomless glass, poured tulip-style.", price: "$2.50" },
    { name: "Salep", desc: "Warm orchid-root drink, dusted with cinnamon.", price: "$4.50" },
    { name: "Turkish Breakfast (for 2)", desc: "Cheeses, olives, eggs, simit, jams & endless tea.", price: "$34.00", tag: "Popular" },
  ],
};

const tabs = Object.keys(categories);

const tagStyles: Record<string, string> = {
  Signature: "bg-honey text-espresso",
  Popular: "bg-pistachio text-sugar",
  New: "bg-pomegranate text-sugar",
};

export default function Menu() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section id="menu" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-honey-deep">
                Fresh from the tray
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-4 text-4xl text-espresso sm:text-6xl">
                The menu
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <a
              href={site.uberEats}
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-2 rounded-full border-2 border-espresso/15 px-6 py-3 text-sm font-bold text-espresso transition-all hover:border-espresso/30 sm:flex"
            >
              Order the full menu
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                active === t ? "text-cream" : "text-espresso-soft hover:text-espresso"
              }`}
            >
              {active === t && (
                <motion.span
                  layoutId="menu-pill"
                  className="absolute inset-0 rounded-full bg-espresso"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{t}</span>
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid gap-x-10 gap-y-2 sm:grid-cols-2"
          >
            {categories[active].map((item) => (
              <div
                key={item.name}
                className="group flex items-start justify-between gap-6 border-b border-espresso/10 py-6"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="display text-2xl text-espresso">{item.name}</h3>
                    {item.tr && (
                      <span className="text-sm italic text-honey-deep/80">{item.tr}</span>
                    )}
                    {item.tag && (
                      <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${tagStyles[item.tag]}`}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-espresso-soft/70">
                    {item.desc}
                  </p>
                </div>
                <div className="display shrink-0 text-2xl text-honey-deep">{item.price}</div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <Reveal delay={0.1}>
          <a
            href={site.uberEats}
            target="_blank"
            rel="noreferrer"
            className="mt-10 flex items-center justify-center gap-2 rounded-full bg-espresso px-6 py-4 text-base font-bold text-cream transition-all hover:bg-espresso-soft sm:hidden"
          >
            Order the full menu <Arrow className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
