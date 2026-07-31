import { site } from "@/lib/site";
import { Instagram, TikTok, Arrow } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-espresso/10 bg-cream pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-12 pb-14 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-espresso text-amber">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 9l8-5 8 5-8 5-8-5Z" strokeLinejoin="round" />
                  <path d="M4 9v6l8 5 8-5V9" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="display text-xl text-espresso">Emilee&rsquo;s Sweet House</span>
            </div>
            <p className="mt-4 text-espresso-soft/70">{site.tagline}</p>
            <div className="mt-6 flex gap-3">
              <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-espresso/15 text-espresso transition-colors hover:bg-espresso hover:text-cream">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={site.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="grid h-11 w-11 place-items-center rounded-full border border-espresso/15 text-espresso transition-colors hover:bg-espresso hover:text-cream">
                <TikTok className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-honey-deep">Explore</h3>
              <ul className="mt-4 space-y-2.5 text-espresso-soft/80">
                <li><a href="#story" className="hover:text-espresso">Our Story</a></li>
                <li><a href="#menu" className="hover:text-espresso">Menu</a></li>
                <li><a href="#gallery" className="hover:text-espresso">Gallery</a></li>
                <li><a href="#visit" className="hover:text-espresso">Visit</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-honey-deep">Visit</h3>
              <ul className="mt-4 space-y-2.5 text-espresso-soft/80">
                <li>{site.addressShort}</li>
                <li>{site.hours}</li>
                <li><a href={site.maps} target="_blank" rel="noreferrer" className="hover:text-espresso">Get directions</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-honey-deep">Order</h3>
              <a
                href={site.uberEats}
                target="_blank"
                rel="noreferrer"
                className="group mt-4 inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-3 text-sm font-bold text-cream transition-all hover:bg-espresso-soft"
              >
                Uber Eats <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-espresso/10 py-7 text-sm text-espresso-soft/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Emilee&rsquo;s Sweet House. All rights reserved.</p>
          <p>
            Demo site design — crafted with care for a sweeter web.
          </p>
        </div>
      </div>
    </footer>
  );
}
