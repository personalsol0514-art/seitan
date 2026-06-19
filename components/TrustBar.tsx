const ITEMS = [
  { value: "初回限定 1,100円", label: "カウンセリング＋整体60分" },
  { value: "整体師歴10年", label: "院長が一貫して担当" },
  { value: "完全予約制", label: "待ち時間なし" },
  { value: "駐車場あり", label: "店舗裏・無料" },
  { value: "土日祝も受付", label: "年中無休" },
  { value: "お子様連れOK", label: "ママも安心" },
];

export default function TrustBar() {
  return (
    <section className="bg-green text-white">
      <div className="mx-auto max-w-6xl px-4 py-7">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/20 overflow-hidden rounded-lg">
          {ITEMS.map((item) => (
            <div
              key={item.value}
              className="bg-green flex flex-col items-center text-center px-3 py-4"
            >
              <span className="font-head font-black text-base md:text-lg leading-tight">
                {item.value}
              </span>
              <span className="mt-1 text-[11px] text-white/80">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm">
            <span className="text-star tracking-tight">★★★★★</span>
            <span className="text-white/90 font-medium">地域で多数の口コミ</span>
          </span>
        </div>
      </div>
    </section>
  );
}
