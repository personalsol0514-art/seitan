const ITEMS = [
  {
    no: "01",
    title: "肩こり・腰痛・姿勢改善",
    sub: "根本からアプローチ",
  },
  {
    no: "02",
    title: "完全予約制",
    sub: "待ち時間なし",
  },
  {
    no: "03",
    title: "整体師歴10年",
    sub: "身体の見立てから施術まで一貫対応",
  },
  {
    no: "04",
    title: "岡崎市本町通",
    sub: "駐車場あり",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-green text-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item, i) => (
          <div
            key={item.no}
            className={`border-lineDark px-6 py-10 md:px-8 ${
              i !== 0 ? "border-t lg:border-t-0 lg:border-l" : ""
            } ${i === 1 ? "sm:border-t-0 sm:border-l" : ""} ${
              i === 2 ? "sm:border-l-0 lg:border-l" : ""
            } ${i === 3 ? "sm:border-l" : ""}`}
          >
            <span className="font-mincho text-2xl font-semibold text-paper/55">
              {item.no}
            </span>
            <p className="mt-4 text-lg font-bold leading-snug">{item.title}</p>
            <p className="mt-2 text-sm text-paper/70">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
