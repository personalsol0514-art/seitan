"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/hero.jpg", alt: "整体 Natural の施術風景", pos: "50% 22%" },
  { src: "/images/therapist.jpg", alt: "院長による姿勢チェック", pos: "50% 28%" },
];

const CHIPS = [
  "肩こり",
  "腰痛",
  "姿勢のゆがみ",
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
    <section id="top" className="relative w-full overflow-hidden bg-cream pt-[68px]">
      <div className="relative min-h-[calc(82svh-68px)] overflow-hidden md:min-h-[calc(84svh-68px)]">
        <div className="absolute inset-0">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.src}
              className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
              style={{ opacity: index === active ? 1 : 0 }}
              aria-hidden={index !== active}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: slide.pos }}
              />
            </div>
          ))}
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(10,42,27,0.84) 0%, rgba(10,42,27,0.62) 42%, rgba(10,42,27,0.12) 78%), linear-gradient(0deg, rgba(10,42,27,0.54) 0%, rgba(10,42,27,0.02) 58%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(82svh-68px)] max-w-6xl flex-col justify-center px-5 pb-16 pt-12 md:min-h-[calc(84svh-68px)] md:px-6">
          <p className="text-sm font-bold tracking-[0.08em] text-white/90">
            岡崎市・東岡崎｜完全予約制
          </p>

          <h1 className="mt-5 max-w-4xl font-head text-4xl font-black leading-[1.22] text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            その痛み、
            <br />
            あきらめる前に。
          </h1>

          <p className="mt-5 max-w-2xl text-base font-bold leading-8 text-white/95 drop-shadow md:text-xl">
            肩こり・腰痛・姿勢のゆがみを、
            <br className="sm:hidden" />
            痛い場所だけでなく原因から見直す整体。
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="min-w-24 rounded-full border border-white/55 bg-greenHeader/45 px-4 py-1.5 text-center text-xs font-bold text-white backdrop-blur-sm md:text-sm"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="absolute bottom-6 right-5 flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-white/75 md:right-8">
            <span>0{active + 1}</span>
            <span className="h-px w-9 bg-white/60" />
            <span>0{SLIDES.length}</span>
          </div>
        </div>
      </div>

      <div className="relative flex min-h-[150px] items-center justify-center bg-[#fbfaf5] px-5 py-10 md:min-h-[170px]">
        <a
          href="#pain"
          className="absolute left-1/2 top-0 z-20 flex -translate-x-1/2 -translate-y-[62px] flex-col items-center text-[11px] font-bold tracking-[0.28em] text-[#d6c79c]"
          aria-label="次のセクションへスクロール"
        >
          <span>SCROLL</span>
          <span className="mt-2 h-[92px] w-px bg-[#d6c79c]" aria-hidden />
          <span className="-mt-0.5 h-2 w-2 rounded-full bg-greenHeader" aria-hidden />
        </a>

        <h2 className="text-center font-head text-2xl font-black tracking-[0.08em] text-greenHeader sm:text-3xl md:text-4xl">
          あなたの痛みが繰り返す、
          <span className="mt-1 inline-block border-b-[10px] border-[#dce7d7] leading-[0.65]">
            本当の理由
          </span>
        </h2>
      </div>
    </section>
  );
}
