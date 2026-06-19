const ROWS = [
  {
    label: "初回（カウンセリング＋見立て＋整体 60分）",
    price: "1,100",
    feature: true,
  },
  {
    label: "2回目以降　整体 60分",
    price: "6,600",
    feature: false,
  },
  {
    label: "2回目以降　整体 90分",
    price: "9,900",
    feature: false,
  },
];

export default function Price() {
  return (
    <section id="price" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1100px] px-6 py-20 md:px-16 md:py-28">
        <h2 className="font-mincho text-3xl font-extrabold md:text-5xl">料金</h2>

        <div className="mt-12 border-t-2 border-ink">
          {ROWS.map((row) => (
            <div
              key={row.label}
              className={`flex flex-col gap-3 border-b border-line py-7 sm:flex-row sm:items-end sm:justify-between ${
                row.feature ? "bg-paper2/60 px-4 sm:px-6" : ""
              }`}
            >
              <div className="flex flex-col gap-2">
                {row.feature && (
                  <span className="w-fit bg-green px-3 py-1 text-xs font-bold tracking-wide text-paper">
                    初回限定
                  </span>
                )}
                <span className="text-base font-medium leading-snug md:text-lg">
                  {row.label}
                </span>
              </div>
              <div className="flex items-baseline gap-1 sm:shrink-0">
                <span
                  className={`font-mincho text-4xl font-extrabold md:text-5xl ${
                    row.feature ? "text-wood" : "text-ink"
                  }`}
                >
                  {row.price}
                </span>
                <span className="text-sm text-inkSub">円(税込)</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-inkSub">
          現金・各種クレジットカード・QR決済対応／完全予約制
        </p>
      </div>
    </section>
  );
}
