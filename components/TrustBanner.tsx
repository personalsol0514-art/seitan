const ITEMS = [
  { icon: "✓", value: "初回 1,100円", label: "初回限定 60分" },
  { icon: "✓", value: "整体師歴10年", label: "院長が一貫担当" },
  { icon: "✓", value: "完全予約制", label: "待ち時間なし" },
  { icon: "✓", value: "駐車場あり", label: "店舗裏・無料" },
  { icon: "✓", value: "土日祝も受付", label: "年中無休" },
  { icon: "✓", value: "お子様連れOK", label: "ママも安心" },
  { icon: "✓", value: "岡崎市本町通", label: "鳥居ビル1F" },
  { icon: "★★★★★", value: "口コミ高評価", label: "地域で多数の声", star: true },
];

export default function TrustBanner() {
  return (
    <section className="bg-green text-white">
      <div className="mx-auto max-w-[1080px] px-5 py-10 md:py-12">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-white/15 md:grid-cols-4">
          {ITEMS.map((item) => (
            <div
              key={item.value}
              className="flex flex-col items-center bg-green px-3 py-5 text-center"
            >
              <span
                className={`text-sm leading-none ${
                  item.star ? "text-star tracking-tight" : "text-orange"
                }`}
                aria-hidden
              >
                {item.icon}
              </span>
              <span className="mt-2 font-head text-base font-black leading-tight md:text-lg">
                {item.value}
              </span>
              <span className="mt-1 text-[11px] text-white/80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
