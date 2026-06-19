const BOOKING = "https://bookom.jp";

const ROWS = [
  { label: "2回目以降　整体 60分", price: "¥6,600(税込)" },
  { label: "2回目以降　整体 90分", price: "¥9,900(税込)" },
];

export default function Price() {
  return (
    <section id="price" className="bg-white text-ink">
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-6 md:py-24">
        <div className="text-center">
          <h2 className="font-head font-black text-2xl md:text-4xl">料金</h2>
        </div>

        {/* Featured first-visit block */}
        <div className="mt-10 rounded-2xl border-2 border-orange bg-cream p-6 md:p-8 text-center shadow-md">
          <span className="inline-block bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
            初回限定
          </span>
          <p className="mt-3 font-medium text-sm md:text-base text-sub">
            カウンセリング＋整体 60分
          </p>
          <p className="mt-2 flex items-baseline justify-center gap-2">
            <span className="text-sub line-through text-lg">¥6,600</span>
            <span className="font-head font-black text-5xl md:text-6xl text-orange">
              ¥1,100
            </span>
          </p>
          <p className="mt-1 text-sm text-sub">(税込)</p>
        </div>

        {/* Repeat-visit table */}
        <div className="mt-8 rounded-xl border border-line overflow-hidden">
          {ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-center justify-between px-5 py-4 ${
                i !== 0 ? "border-t border-line" : ""
              }`}
            >
              <span className="font-medium text-[15px] md:text-base">
                {row.label}
              </span>
              <span className="font-head font-black text-lg md:text-xl text-greenHeader">
                {row.price}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-sm text-sub">
          現金・各種クレジットカード・QR決済対応／完全予約制
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center bg-orange hover:bg-orangeDark text-white font-bold text-base px-7 py-4 rounded-md transition-colors"
          >
            初回1,100円で予約する →
          </a>
          <a
            href="tel:07022825501"
            className="inline-flex items-center justify-center gap-2 border border-green text-green font-bold text-base px-7 py-4 rounded-md hover:bg-green hover:text-white transition-colors"
          >
            📞 070-2282-5501
          </a>
        </div>
      </div>
    </section>
  );
}
