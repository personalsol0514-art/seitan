import SectionHeading from "./SectionHeading";
import Card from "./Card";

const CAUSES = [
  {
    title: "姿勢のクセ",
    desc: "猫背や反り腰が、特定の部位に負担を集中させます。",
  },
  {
    title: "関節の動きの悪さ",
    desc: "動かしにくい関節をかばい、別の場所に負担が出ます。",
  },
  {
    title: "筋膜の硬さ",
    desc: "筋肉を包む筋膜のこわばりが、可動域を狭めます。",
  },
  {
    title: "呼吸の浅さ",
    desc: "浅い呼吸が、首・肩まわりの緊張を強めます。",
  },
  {
    title: "生活習慣",
    desc: "デスクワークやスマホ姿勢の積み重ねが不調の元に。",
  },
  {
    title: "身体の使い方のクセ",
    desc: "無意識の動作のクセが、左右差やゆがみを生みます。",
  },
];

export default function Causes() {
  return (
    <section id="causes" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-5">
        <SectionHeading
          kicker="REASON"
          title="なぜ、何度も戻ってしまうのか？"
          lead="痛い場所だけを揉んでも、戻ってしまう理由があります。整体Naturalでは、姿勢・動作・生活習慣まで確認し、不調の原因を見つけて整えます。"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAUSES.map((c, i) => (
            <Card key={c.title}>
              <span className="font-head text-2xl font-black text-orange">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-head text-lg font-bold text-greenHeader">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sub">{c.desc}</p>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-sm font-medium text-sub">
          だから、原因から整えることが大切です。
        </p>
      </div>
    </section>
  );
}
