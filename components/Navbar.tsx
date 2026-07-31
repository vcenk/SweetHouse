"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { Arrow } from "./icons";

const links = [
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`flex w-full items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "border-espresso/10 bg-cream/80 shadow-[0_10px_40px_-18px_rgba(42,22,12,0.5)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-espresso text-amber">
              <LogoMark />
            </span>
            <span className="display text-lg leading-none tracking-tight text-espresso sm:text-xl">
              Emilee&rsquo;s
              <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-honey-deep font-sans">
                Sweet House
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm font-semibold text-espresso-soft transition-colors hover:text-espresso"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-honey transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a
              href={site.uberEats}
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-sm font-bold text-cream transition-all hover:bg-espresso-soft sm:flex"
            >
              Order on Uber Eats
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-espresso/15 lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 h-0.5 w-full bg-espresso transition-all ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-full bg-espresso transition-all ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-full bg-espresso transition-all ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-5 rounded-3xl border border-espresso/10 bg-cream/95 p-5 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-lg font-semibold text-espresso hover:bg-honey/10"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={site.uberEats}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-espresso px-5 py-3.5 text-base font-bold text-cream"
              >
                Order on Uber Eats <Arrow className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function LogoMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 9l8-5 8 5-8 5-8-5Z" strokeLinejoin="round" />
      <path d="M4 9v6l8 5 8-5V9" strokeLinejoin="round" />
      <path d="M8 6.5l8 5M16 6.5l-8 5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}
