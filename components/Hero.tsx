"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/hero.jpg", alt: "整体 Natural の施術風景", pos: "50% 22%" },
  { src: "/images/therapist.jpg", alt: "院長による姿勢チェック", pos: "50% 28%" },
  { src: "/images/about.jpg", alt: "整体 Natural の院内", pos: "50% 42%" },
];

const CHIPS = [
  "✓完全予約制",
  "✓駐車場あり（無料）",
  "✓土日祝も受付",
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % SLIDES.length),
      4500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[90vh] w-full overflow-hidden pt-[68px]"
    >
      {/* Slideshow */}
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <div
            key={s.src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: s.pos }}
            />
          </div>
        ))}
      </div>

      {/* Scrim */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(15,40,25,0.78) 0%, rgba(15,40,25,0.6) 42%, rgba(15,40,25,0.15) 80%), linear-gradient(0deg, rgba(15,40,25,0.7) 0%, rgba(15,40,25,0.05) 55%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(90vh-68px)] max-w-6xl flex-col justify-center px-5 py-12 md:px-6">
        <p className="flex items-center gap-1.5 text-sm text-white/90">
          <span aria-hidden>📍</span>
          岡崎市・東岡崎の整体院｜完全予約制
        </p>

        <h1 className="mt-4 font-head font-black text-4xl leading-[1.18] text-white sm:text-5xl md:text-6xl">
          <span className="border-b-4 border-orange pb-1">
            肩こり・腰痛・姿勢
          </span>
          のゆがみを、
          <br className="hidden sm:block" />
          根本から改善。
        </h1>

        {/* Orange ribbon */}
        <div className="mt-7 inline-flex w-fit items-center bg-orange text-white font-bold text-sm md:text-base px-5 py-3 rounded-md shadow-lg">
          初回限定　カウンセリング＋整体 60分　1,100円(税込)
        </div>

        {/* Info chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {CHIPS.map((c) => (
            <span
              key={c}
              className="bg-white/95 text-greenHeader text-xs md:text-sm font-bold px-3 py-1.5 rounded-full"
            >
              {c}
            </span>
          ))}
        </div>

        <a
          href="#pain"
          className="mt-10 inline-flex w-fit flex-col gap-1 text-xs font-bold tracking-[0.24em] text-white/85 transition-colors hover:text-white"
        >
          <span>SCROLL</span>
          <span className="h-8 w-px bg-white/70" aria-hidden />
        </a>
      </div>
    </section>
  );
}
