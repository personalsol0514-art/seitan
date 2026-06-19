const BOOKING = "https://bookom.jp";

const ITEMS = [
  "マッサージしてもすぐ戻る肩こり",
  "朝起きた時から腰が重い",
  "デスクワークで首肩が限界",
  "姿勢が悪いと言われる",
  "病院では「異常なし」と言われた",
  "疲れているのに眠れない",
];

export default function Pain() {
  return (
    <section id="pain" className="bg-cream text-ink">
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-6 md:py-24">
        <div className="text-center">
          <h2 className="font-head font-black text-2xl md:text-4xl leading-tight">
            こんなお悩み、ありませんか？
          </h2>
          <p className="mt-3 text-sub text-sm md:text-base">
            ひとつでも当てはまる方は、ご相談ください。
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
          {ITEMS.map((text) => (
            <li
              key={text}
              className="flex items-center gap-3 bg-white border border-line rounded-lg px-4 py-4 shadow-sm"
            >
              <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-orange text-white font-bold text-sm">
                ✓
              </span>
              <span className="font-medium text-[15px] md:text-base">{text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <p className="font-head font-black text-xl md:text-2xl text-greenHeader">
            その不調、&quot;原因&quot;から改善できます。
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <a
              href={BOOKING}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center bg-orange hover:bg-orangeDark text-white font-bold text-base px-8 py-4 rounded-md transition-colors"
            >
              肩こり・腰痛を相談する →
            </a>
            <span className="inline-flex items-center bg-cream2 text-greenHeader text-xs md:text-sm font-bold px-4 py-1.5 rounded-full">
              初回限定 60分 1,100円(税込)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
