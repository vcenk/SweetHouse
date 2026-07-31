"use client";

import Reveal from "./Reveal";
import { site } from "@/lib/site";
import { Arrow, Clock, MapPin, Phone } from "./icons";

export default function Visit() {
  return (
    <section id="visit" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Order CTA band */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-honey via-amber to-honey-deep p-8 sm:p-14">
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-sugar/20 blur-2xl" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="display text-4xl text-espresso sm:text-5xl">
                  Craving hits at 9pm? We deliver.
                </h2>
                <p className="mt-4 text-lg font-medium text-espresso/80">
                  Fresh baklava, warm börek and Turkish coffee — brought straight
                  to your door on Uber Eats. Open every day until 10.
                </p>
              </div>
              <a
                href={site.uberEats}
                target="_blank"
                rel="noreferrer"
                className="group flex shrink-0 items-center gap-2 rounded-full bg-espresso px-8 py-5 text-lg font-bold text-cream shadow-xl transition-all hover:-translate-y-0.5 hover:bg-espresso-soft"
              >
                Order on Uber Eats
                <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Visit details */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-honey-deep">
                Come say merhaba
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-4 text-4xl text-espresso sm:text-6xl">
                Visit the shop
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-espresso-soft/80">
                Tucked on East Hastings, our little counter is where the tea is
                always hot and the trays are always full. Dine in, take away, or
                grab a gift box of lokum on the way out.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {[
                { icon: MapPin, label: site.address, href: site.maps },
                { icon: Clock, label: site.hours },
                { icon: Phone, label: site.phone },
              ].map((row, i) => {
                const Icon = row.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-espresso/10 bg-sugar/60 p-4 transition-colors hover:border-honey/40">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-espresso text-amber">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-semibold text-espresso">{row.label}</span>
                  </div>
                );
                return (
                  <Reveal key={i} delay={0.18 + i * 0.06}>
                    {row.href ? (
                      <a href={row.href} target="_blank" rel="noreferrer">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Map */}
          <Reveal delay={0.15}>
            <div className="h-full min-h-[360px] overflow-hidden rounded-[2.5rem] border-4 border-sugar shadow-xl">
              <iframe
                title="Emilee's Sweet House location"
                src="https://www.google.com/maps?q=3671+E+Hastings+St,+Vancouver,+BC&output=embed"
                className="h-full min-h-[360px] w-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
