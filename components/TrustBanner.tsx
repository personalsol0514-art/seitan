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
              className="flex aspect-square w-[30%] max-w-[170px] flex-col items-center justify-center rounded-full px-2 text-center text-white shadow-xl ring-4 ring-white/60 sm:w-36 md:w-40"
              style={{
                background:
                  "radial-gradient(circle at 36% 30%, #f4923f 0%, #ec7324 52%, #d4621a 100%)",
              }}
            >
              {c.top && (
                <span
                  className={`leading-none ${
                    c.star ? "text-star text-[11px] tracking-tight md:text-sm" : "text-[11px] font-bold md:text-xs"
                  }`}
                >
                  {c.top}
                </span>
              )}
              <span
                className={`font-head font-black leading-tight ${
                  c.big ? "text-xl md:text-2xl" : "text-[13px] sm:text-base md:text-lg"
                } ${c.top ? "mt-1" : ""}`}
              >
                {c.main}
              </span>
              <span className="mt-1 text-[10px] leading-tight text-white/90 md:text-[11px]">
                {c.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
