import SectionLabel from "./SectionLabel";

const voices = [
  {
    tag: "腰痛 · 10年来の慢性痛",
    voice:
      "「原因をちゃんと説明してもらえて、通うたびに体が軽くなっていくのを実感しました。」",
    attr: "40代・女性",
  },
  {
    tag: "自律神経 · 不眠",
    voice:
      "「体が整うと、気持ちまで楽になるんだと初めて知りました。よく眠れています。」",
    attr: "30代・女性",
  },
];

export default function Voice() {
  return (
    <section id="voice" className="bg-bgMain" style={{ padding: "52px 32px" }}>
      <SectionLabel>VOICE / お客様の声</SectionLabel>
      <h2 className="font-serif text-[22px] text-textMain">変わった、の声。</h2>

      <div
        className="mt-9 grid grid-cols-1 gap-px border border-border md:grid-cols-2"
        style={{ backgroundColor: "#D9CEB8" }}
      >
        {voices.map((v) => (
          <div key={v.tag} className="bg-bgMain p-7">
            <p
              className="text-[11px] text-textSub"
              style={{ borderLeft: "2px solid #B89A7A", paddingLeft: "8px" }}
            >
              {v.tag}
            </p>
            <p
              className="mt-4 font-serif text-[13px] text-textMain"
              style={{ lineHeight: 2 }}
            >
              {v.voice}
            </p>
            <p className="mt-4 text-[11px]" style={{ color: "#9E8E7E" }}>
              {v.attr}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
