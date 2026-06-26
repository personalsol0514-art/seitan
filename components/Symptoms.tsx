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
    <section id="symptoms" className="bg-[#fffdf8] py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.24em] text-orange">
            SUPPORT
          </p>
          <span className="mx-auto mt-3 block h-px w-9 bg-orange" />
          <h2 className="mt-5 font-serif text-2xl font-semibold tracking-[0.08em] text-greenHeader sm:text-3xl md:text-4xl">
            対応しているお悩み
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-sub md:text-base md:leading-8">
            肩こり・腰痛・姿勢改善を中心に、幅広い不調に対応しています。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {SYMPTOMS.map((s) => (
            <div
              key={s}
              className="group flex min-h-[72px] items-center justify-center gap-2 border border-green/15 bg-[#f7f1e6] px-4 py-4 text-center shadow-[0_10px_24px_rgba(34,48,40,0.06)] transition-colors hover:border-green/35 hover:bg-greenHeader"
            >
              <span className="font-serif text-sm font-semibold text-orange transition-colors group-hover:text-[#f5c36a]">
                ✓
              </span>
              <span className="text-sm font-bold tracking-[0.04em] text-ink transition-colors group-hover:text-white md:text-base">
                {s}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-9 text-center font-serif text-base font-semibold leading-8 tracking-[0.08em] text-greenHeader md:text-xl">
          上記以外のお悩みもお気軽にご相談ください。
        </p>
      </div>
    </section>
  );
}
