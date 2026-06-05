import IllustFrame from "./IllustFrame";
import SectionLabel from "./SectionLabel";

const items = [
  {
    no: "01",
    illust: "/images/illust-01.png",
    title: "肩こり",
    text: ["整体に通っても", "すぐ元に戻ってしまう"],
  },
  {
    no: "02",
    illust: "/images/illust-02.png",
    title: "不眠",
    text: ["眠れない・疲れが", "取れない日が続く"],
  },
  {
    no: "03",
    illust: "/images/illust-03.png",
    title: "腰痛",
    text: ["原因がわからないまま", "痛みと付き合っている"],
  },
];

export default function Pain() {
  return (
    <section
      id="pain"
      className="bg-bgSub"
      style={{ padding: "52px 32px" }}
    >
      <SectionLabel>PAIN / こんなお悩みはありませんか</SectionLabel>
      <h2 className="font-serif text-textMain text-[22px] leading-relaxed">
        「また来てしまった」その繰り返しを、断ち切りたい。
      </h2>

      <div
        className="mt-9 grid grid-cols-1 gap-px border border-border md:grid-cols-3"
        style={{ backgroundColor: "#D9CEB8" }}
      >
        {items.map((item) => (
          <div key={item.no} className="bg-bgSub p-6">
            <p
              className="mb-4 text-[11px]"
              style={{ letterSpacing: "0.15em", color: "#9E8E7E" }}
            >
              — {item.no}
            </p>
            <IllustFrame src={item.illust} alt={item.title} />
            <h3 className="mt-5 font-serif text-[16px] text-textMain">
              {item.title}
            </h3>
            <p
              className="mt-2 text-[12px] text-textSub"
              style={{ lineHeight: 1.9 }}
            >
              {item.text[0]}
              <br />
              {item.text[1]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
