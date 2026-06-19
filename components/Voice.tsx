import SectionTitle from "./SectionTitle";

const PersonIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green">
    <circle cx="12" cy="8" r="4" />
    <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
  </svg>
);

const voices = [
  {
    headline: "肩こりが楽になり、仕事に集中できるようになりました！",
    body: "長年の肩こりに悩んでいましたが、原因をしっかり説明してもらい納得できました。施術後は肩が軽くなり、仕事の効率も上がっています。",
    attr: "30代・女性",
  },
  {
    headline: "腰痛が改善して、趣味のゴルフを楽しめています！",
    body: "ぎっくり腰をきっかけに通い始めました。今では痛みも気にならなくなり、ゴルフを思いきり楽しめるようになりました。",
    attr: "40代・男性",
  },
  {
    headline: "姿勢が良くなり、見た目も変わったと言われます！",
    body: "猫背や反り腰が気になっていましたが、通ううちに姿勢が整い、周りからも『姿勢良くなったね』と言われます。",
    attr: "20代・女性",
  },
];

export default function Voice() {
  return (
    <section id="voice" className="bg-greenSoft">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <SectionTitle title="お客様の声" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {voices.map((v) => (
            <div key={v.attr} className="rounded-2xl bg-white p-7 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-greenSoft">
                {PersonIcon}
              </div>
              <h3 className="mt-4 text-base font-bold leading-relaxed text-ink">
                {v.headline}
              </h3>
              <p className="mt-3 text-sm leading-loose text-sub">{v.body}</p>
              <p className="mt-4 text-xs text-mute">{v.attr}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
