import SectionHeading from "./SectionHeading";

const SYMPTOMS = [
  "肩こり",
  "首こり",
  "腰痛",
  "猫背",
  "巻き肩",
  "反り腰",
  "姿勢のゆがみ",
  "頭痛",
  "自律神経の乱れ",
  "不眠",
  "産後の不調",
  "デスクワーク疲れ",
];

export default function Symptoms() {
  return (
    <section id="symptoms" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-5">
        <SectionHeading
          kicker="SUPPORT"
          title="対応しているお悩み"
          lead="肩こり・腰痛・姿勢改善を中心に、幅広い不調に対応しています。"
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {SYMPTOMS.map((s) => (
            <div
              key={s}
              className="group flex items-center justify-center gap-2 rounded-lg border border-line bg-cream2 px-4 py-4 text-center shadow-sm transition-colors hover:border-orange hover:bg-orange"
            >
              <span className="text-sm font-bold text-orange transition-colors group-hover:text-white">
                ✓
              </span>
              <span className="text-sm font-bold text-ink transition-colors group-hover:text-white">
                {s}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-sub">
          上記以外のお悩みもお気軽にご相談ください。
        </p>
      </div>
    </section>
  );
}
