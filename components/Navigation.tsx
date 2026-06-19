"use client";

import { useEffect, useState } from "react";

const BOOK_URL = "https://bookom.jp";

const NAV_LINKS = [
  { label: "院長", href: "#therapist" },
  { label: "施術方針", href: "#philosophy" },
  { label: "流れ", href: "#flow" },
  { label: "料金", href: "#price" },
  { label: "アクセス", href: "#access" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid
            ? "border-b border-line bg-paper text-ink"
            : "bg-transparent text-paper"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="flex items-baseline gap-2 leading-none">
            <span className="font-mincho text-xl font-extrabold tracking-wide">
              整体 Natural
            </span>
            <span className="hidden text-[11px] tracking-wide opacity-70 sm:inline">
              岡崎市の整体院
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm tracking-wide transition-opacity hover:opacity-60"
              >
                {l.label}
              </a>
            ))}
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener"
              className="bg-green px-5 py-2 text-sm font-bold tracking-wide text-paper transition-colors hover:bg-greenDeep"
            >
              予約
            </a>
          </nav>

          <button
            type="button"
            aria-label="メニュー"
            onClick={() => setOpen(true)}
            className="lg:hidden"
          >
            <span className="flex flex-col gap-[6px]">
              <span className="block h-[2px] w-7 bg-current" />
              <span className="block h-[2px] w-7 bg-current" />
              <span className="block h-[2px] w-7 bg-current" />
            </span>
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-sumi text-paper lg:hidden">
          <div className="flex h-16 items-center justify-between px-5">
            <span className="font-mincho text-xl font-extrabold">整体 Natural</span>
            <button
              type="button"
              aria-label="閉じる"
              onClick={() => setOpen(false)}
              className="text-3xl leading-none"
            >
              ×
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-7 px-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mincho text-3xl font-extrabold tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block w-fit bg-paper px-8 py-3 text-base font-bold text-sumi"
            >
              予約する
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
