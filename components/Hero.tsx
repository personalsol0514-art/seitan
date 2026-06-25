"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  {
    src: "/images/hero.jpg",
    alt: "整体 Natural の施術風景",
    desktopPos: "50% 22%",
    mobilePos: "36% 22%",
    flip: false,
  },
  {
    src: "/images/therapist.jpg",
    alt: "院長による姿勢チェック",
    desktopPos: "50% 28%",
    mobilePos: "24% 28%",
    flip: true,
  },
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
                className={`hero-slide-image object-cover ${
                  slide.flip ? "hero-slide-image-flip" : ""
                }`}
                style={
                  {
                    "--hero-position-desktop": slide.desktopPos,
                    "--hero-position-mobile": slide.mobilePos,
                  } as React.CSSProperties
                }
              />
            </div>
          ))}
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,43,27,0.48) 0%, rgba(8,43,27,0.28) 34%, rgba(8,43,27,0.04) 62%, transparent 78%), linear-gradient(0deg, rgba(8,43,27,0.2) 0%, transparent 42%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(82svh-68px)] max-w-6xl flex-col justify-center px-5 pb-16 pt-12 md:min-h-[calc(84svh-68px)] md:px-6">
          <p className="font-serif text-xs font-medium tracking-[0.12em] text-white md:text-sm">
            岡崎市・東岡崎｜完全予約制
          </p>

          <h1 className="mt-5 max-w-3xl font-serif text-[34px] font-semibold leading-[1.42] tracking-[0.04em] text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.22)] sm:text-[40px] md:text-[48px] lg:text-[56px]">
            その痛み、
            <br />
            あきらめる前に。
          </h1>

          <p className="mt-5 max-w-xl font-serif text-sm font-medium leading-7 tracking-[0.04em] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.2)] md:text-base md:leading-8">
            肩こり・腰痛・姿勢のゆがみを、
            <br className="sm:hidden" />
            痛い場所だけでなく原因から見直す整体。
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="min-w-24 rounded-full border border-white/70 bg-transparent px-4 py-1.5 text-center font-serif text-[11px] font-medium tracking-[0.08em] text-white md:text-xs"
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

        <h2 className="text-center font-serif text-[22px] font-semibold leading-[1.75] tracking-[0.1em] text-greenHeader sm:text-[26px] md:text-[34px]">
          あなたの痛みが繰り返す、
          <span className="mt-1 inline-block border-b-[8px] border-[#dce7d7] leading-[0.7]">
            本当の理由
          </span>
        </h2>
      </div>
    </section>
  );
}
