import SectionLabel from "./SectionLabel";

const items = [
  {
    no: "01",
    title: "筋膜の奥からアプローチする独自手技",
    body: "表面をほぐすだけでなく、動きの根本を変える施術。体質から変わります。",
  },
  {
    no: "02",
    title: "生活習慣まで掘り下げるカウンセリング",
    body: "既往歴・日常の癖・仕事環境まで丁寧にヒアリング。今日の方針を必ず共有します。",
  },
  {
    no: "03",
    title: "自律神経・不眠にも対応",
    body: "肩こり・腰痛だけでなく、自律神経の乱れや不眠にも対応できる数少ない整体院。",
  },
  {
    no: "04",
    title: "再発させないためのセルフケア指導",
    body: "通院が終わっても自分でケアできるよう、個別のストレッチ・習慣をお伝えします。",
  },
];

export default function WhyNatural() {
  return (
    <section
      id="treatment"
      className="bg-bgSub"
      style={{ padding: "52px 32px" }}
    >
      <SectionLabel>WHY NATURAL / 選ばれる理由</SectionLabel>
      <h2 className="font-serif text-[22px] text-textMain">誤魔化さない、整体。</h2>

      <div
        className="mt-9 grid grid-cols-1 gap-px border border-border md:grid-cols-2"
        style={{ backgroundColor: "#D9CEB8" }}
      >
        {items.map((item) => {
          return (
            <div key={item.no} className="bg-bgSub p-7">
              <span
                className="font-serif text-[30px]"
                style={{ color: "#D9CEB8" }}
              >
                {item.no}
              </span>
              <h3 className="mt-3 font-serif text-[15px] text-textMain">
                {item.title}
              </h3>
              <p
                className="mt-2 text-[12px] text-textSub"
                style={{ lineHeight: 1.9 }}
              >
                {item.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
