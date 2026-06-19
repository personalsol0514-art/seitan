"use client";

import { useEffect, useState } from "react";
import LeafSprig from "./LeafSprig";

const BOOKING_URL = "https://bookom.jp";

const links = [
  { label: "HOME", href: "#top" },
  { label: "初めての方へ", href: "#about" },
  { label: "施術について", href: "#flow" },
  { label: "料金", href: "#price" },
  { label: "お客様の声", href: "#voice" },
  { label: "アクセス", href: "#access" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-line transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <LeafSprig size={26} />
          <span className="leading-tight">
            <span className="block font-serif text-lg text-ink">整体 Natural</span>
            <span className="block text-[10px] tracking-wide text-mute">岡崎市の整体院</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink transition-colors hover:text-green"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-greenDark"
          >
            オンライン予約
          </a>
        </nav>

        <button
          type="button"
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-greenSoft"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-ink border-b border-line/70 transition-colors hover:text-green"
              >
                {l.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-green px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-greenDark"
            >
              オンライン予約 →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
