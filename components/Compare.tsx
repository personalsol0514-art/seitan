const ROWS = [
  {
    common: "痛いところだけ揉む",
    natural: "姿勢・動作・生活習慣まで確認する",
  },
  {
    common: "その場は楽でも戻りやすい",
    natural: "原因を説明してから施術する",
  },
  {
    common: "原因の説明が少ない",
    natural: "筋膜・関節・神経のつながりを見る",
  },
  {
    common: "家で何をすればいいか分からない",
    natural: "セルフケアまで提案する",
  },
];

export default function Compare() {
  return (
    <section id="compare" className="bg-white text-ink">
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-6 md:py-24">
        <div className="text-center">
          <h2 className="font-head font-black text-2xl md:text-4xl leading-tight">
            &quot;その場しのぎ&quot;で終わらせない整体です。
          </h2>
          <p className="mt-3 text-sub text-sm md:text-base">
            整体Naturalが選ばれる理由
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-line">
          {/* Header row */}
          <div className="grid grid-cols-2">
            <div className="bg-cream2 px-4 py-4 text-center font-bold text-sub text-sm md:text-base">
              よくある整体
            </div>
            <div className="bg-green px-4 py-4 text-center font-head font-black text-white text-sm md:text-base">
              整体Natural
            </div>
          </div>

          {/* Body rows */}
          {ROWS.map((row, i) => (
            <div
              key={row.natural}
              className={`grid grid-cols-2 ${i % 2 === 0 ? "bg-white" : "bg-cream/50"}`}
            >
              <div className="flex items-start gap-2 px-4 py-5 border-t border-line text-sub">
                <span className="text-gray-400 font-bold shrink-0">✕</span>
                <span className="text-sm md:text-base">{row.common}</span>
              </div>
              <div className="flex items-start gap-2 px-4 py-5 border-t border-l-2 border-green bg-cream/60">
                <span className="text-orange font-black shrink-0">◎</span>
                <span className="text-sm md:text-base font-medium text-ink">
                  {row.natural}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
