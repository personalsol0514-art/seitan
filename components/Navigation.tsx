"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#treatment", label: "treatment" },
  { href: "#price", label: "price" },
  { href: "#therapist", label: "therapist" },
  { href: "#access", label: "access" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        solid ? "bg-bgMain border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3 md:px-9 md:py-4">
        <a href="#top" className="flex flex-col leading-tight">
          <span
            className={`font-serif text-[18px] ${
              solid ? "text-textMain" : "text-bgMain"
            }`}
          >
            整体 Natural
          </span>
          <span
            className="text-[9px]"
            style={{
              letterSpacing: "0.2em",
              color: solid ? "#9E8E7E" : "rgba(253,250,244,0.7)",
            }}
          >
            SEITAI NATURAL — OKAZAKI
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[12px] tracking-wide transition-colors ${
                solid
                  ? "text-textSub hover:text-textMain"
                  : "text-bgMain/90 hover:text-bgMain"
              }`}
              style={{ letterSpacing: "0.1em" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://bookom.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-[12px] tracking-wide transition-colors"
            style={
              solid
                ? { backgroundColor: "#4A3728", color: "#FDFAF4" }
                : {
                    backgroundColor: "rgba(253,250,244,0.15)",
                    border: "1px solid rgba(253,250,244,0.4)",
                    color: "#FDFAF4",
                  }
            }
          >
            RESERVE →
          </a>
        </nav>

        <button
          type="button"
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[5px] md:hidden"
        >
          <span
            className="block h-[2px] w-6 transition-colors"
            style={{ backgroundColor: solid ? "#4A3728" : "#FDFAF4" }}
          />
          <span
            className="block h-[2px] w-6 transition-colors"
            style={{ backgroundColor: solid ? "#4A3728" : "#FDFAF4" }}
          />
          <span
            className="block h-[2px] w-6 transition-colors"
            style={{ backgroundColor: solid ? "#4A3728" : "#FDFAF4" }}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-bgMain md:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border px-6 py-4 text-[13px] text-textMain"
                style={{ letterSpacing: "0.1em" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://bookom.jp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="px-6 py-4 text-[13px]"
              style={{ backgroundColor: "#4A3728", color: "#FDFAF4" }}
            >
              RESERVE →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
