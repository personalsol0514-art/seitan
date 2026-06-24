import Image from "next/image";

const CIRCLES = [
  { top: "初回限定", main: "1,100円", sub: "60分・税込", big: true },
  { top: "", main: "完全予約制", sub: "待ち時間なし" },
  { top: "", main: "駐車場あり", sub: "店舗裏・無料" },
  { top: "", main: "土日祝も受付", sub: "年中無休" },
  { top: "", main: "岡崎市本町通", sub: "鳥居ビル1F" },
  { top: "★★★★★", main: "口コミ高評価", sub: "地域で多数の声", star: true },
];

export default function TrustBanner() {
  return (
    <section className="relative z-20 bg-cream">
      <div className="mx-auto max-w-[1120px] px-5 pb-12 md:pb-16">
        <div className="-mt-14 flex flex-wrap items-start justify-center gap-x-4 gap-y-6 sm:gap-x-6 md:-mt-24">
          {CIRCLES.map((c) => (
            <div
              key={c.main}
              className="relative flex aspect-square w-[30%] max-w-[170px] flex-col items-center justify-center rounded-full px-1.5 text-center shadow-xl sm:w-36 sm:px-2 md:w-40"
            >
              <Image
                src="/images/badge-circle.png"
                alt=""
                fill
                sizes="200px"
                className="rounded-full object-cover"
              />
              <div className="relative z-10 flex flex-col items-center">
                {c.top && (
                  <span
                    className={`leading-none drop-shadow-sm ${
                      c.star
                        ? "text-orange text-xs tracking-tight md:text-base"
                        : "text-greenHeader text-xs font-bold md:text-sm"
                    }`}
                  >
                    {c.top}
                  </span>
                )}
                <span
                  className={`whitespace-nowrap font-head font-black leading-[1.05] tracking-tight text-greenHeader drop-shadow-sm ${
                    c.big ? "text-xl md:text-3xl" : "text-[11px] sm:text-base md:text-xl"
                  } ${c.top ? "mt-1" : ""}`}
                >
                  {c.main}
                </span>
                <span className="mt-1 whitespace-nowrap text-[9px] font-bold leading-tight text-greenHeader/80 sm:text-[11px] md:text-xs">
                  {c.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
