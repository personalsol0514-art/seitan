"use client";

import { useEffect, useState } from "react";

const BOOKING = "https://bookom.jp";

const links = [
  { label: "お悩み", href: "#pain" },
  { label: "原因", href: "#causes" },
  { label: "整体Naturalとは", href: "#compare" },
  { label: "対応症状", href: "#symptoms" },
  { label: "料金", href: "#price" },
  { label: "アクセス", href: "#access" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-line transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 h-[68px] flex items-center justify-between gap-4">
        <a href="#top" className="flex flex-col leading-none shrink-0">
          <span className="font-head font-black text-xl text-greenHeader tracking-tight">
            整体 Natural
          </span>
          <span className="text-[10px] text-sub mt-1">岡崎市の整体院</span>
        </a>

        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-ink">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-green transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <div className="flex flex-col items-end leading-tight">
            <span className="text-[10px] text-sub">ご予約・お問い合わせ</span>
            <a
              href="tel:07022825501"
              className="font-head font-black text-xl text-green tracking-tight"
            >
              070-2282-5501
            </a>
            <span className="text-[10px] text-sub">受付 9:00〜20:00</span>
          </div>
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener"
            className="bg-orange hover:bg-orangeDark text-white font-bold text-sm px-5 py-3 rounded-md transition-colors whitespace-nowrap"
          >
            初回1,100円で予約する
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="メニュー"
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-line px-4 py-4">
          <nav className="flex flex-col divide-y divide-line">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-ink font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-1 gap-2">
            <a
              href="tel:07022825501"
              className="flex items-center justify-center gap-2 border border-green text-green font-bold py-3 rounded-md"
            >
              📞 070-2282-5501
            </a>
            <a
              href={BOOKING}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center bg-orange text-white font-bold py-3 rounded-md"
            >
              初回1,100円で予約する →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
