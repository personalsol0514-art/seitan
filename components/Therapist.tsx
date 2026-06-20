import Image from "next/image";
import Card from "./Card";
import CtaRow from "./CtaRow";

const POINTS = [
  {
    title: "整体師歴10年",
    desc: "これまで多くの肩こり・腰痛・姿勢の不調に向き合ってきました。",
  },
  {
    title: "これまで見てきた症状",
    desc: "肩こり・腰痛・姿勢のゆがみ・頭痛・自律神経の乱れ など",
  },
  {
    title: "大切にしている考え方",
    desc: "痛みの“原因”を見つけ、説明してから施術する。再発させないケアまで提案する。",
  },
];

export default function Therapist() {
  return (
    <section id="therapist" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-5">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-line shadow-sm">
            <Image
              src="/images/therapist.jpg"
              alt="院長 片桐 潤明"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange">
                DOCTOR｜院長紹介
              </span>
              <span className="mt-2 block h-[3px] w-9 rounded-full bg-orange" />
            </div>

            <p className="mt-5 font-head text-xl font-black leading-snug text-greenHeader sm:text-2xl">
              「痛い場所を揉むだけでは、本当の改善にはつながらない。」
            </p>
            <p className="mt-5 text-sm leading-relaxed text-sub sm:text-base">
              そんな想いから、当院では最初のカウンセリングと検査を大切にしています。お一人おひとりの身体を見立て、原因を見つけてからご説明し、施術します。
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {POINTS.map((p, i) => (
                <Card key={p.title}>
                  <span className="font-head text-xl font-black text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-head text-base font-bold text-greenHeader">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-sub">
                    {p.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-lg border-l-4 border-orange bg-cream2 px-6 py-5 shadow-sm">
          <p className="font-head text-sm font-bold text-greenHeader">初めての方へ</p>
          <p className="mt-2 text-sm leading-relaxed text-ink">
            「どこに行っても良くならない」という方こそ、一度ご相談ください。一緒に改善までの道すじを考えます。
          </p>
          <p className="mt-4 text-sm font-bold text-greenHeader">
            片桐 潤明 ／ 整体 Natural 院長・整体師歴10年
          </p>
        </div>

        <CtaRow bookLabel="初回1,100円で相談する" />
      </div>
    </section>
  );
}
