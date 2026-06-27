import Image from "next/image";
import CtaRow from "./CtaRow";

const STAFFS = [
  {
    name: "片桐 滉晴",
    role: "整体 Natural 院長 / 整体師",
    image: "/images/therapist.jpg",
    imagePosition: "18% 52%",
    copy: "整体Natural岡崎院、骨膜整体師の片桐滉晴です！",
    lead: "皆様の理想の姿に向けて根本的な改善を目標に施術していきます！よろしくお願いいたします！",
    points: [
      {
        title: "整体師歴10年",
        desc: "肩こり・腰痛・姿勢の不調など、慢性的なお悩みに向き合ってきました。",
      },
      {
        title: "検査と説明を重視",
        desc: "今の身体の状態を確認し、原因の見立てを共有してから施術します。",
      },
      {
        title: "戻りにくい身体へ",
        desc: "その場の軽さだけでなく、日常で戻りにくいケアまで提案します。",
      },
    ],
  },
  {
    name: "谷山 誠",
    role: "整体 Natural スタッフ",
    image: "/images/feature-01.jpg",
    imagePosition: "58% 48%",
    copy: "初めての方にも、安心できる時間を。",
    lead: "お悩みを丁寧に伺い、緊張せずに相談できる雰囲気づくりを大切にしています。",
    points: [
      {
        title: "丁寧なカウンセリング",
        desc: "小さな違和感や不安も話しやすいよう、最初の会話を大切にします。",
      },
      {
        title: "状態に合わせた対応",
        desc: "その日の身体の状態を確認し、無理のない施術を心がけます。",
      },
      {
        title: "セルフケアまで提案",
        desc: "施術後もラクな状態が続くよう、日常でできるケアをお伝えします。",
      },
    ],
  },
];

export default function Therapist() {
  return (
    <section id="therapist" className="overflow-hidden bg-[#f6f1e8] py-16 md:py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="px-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange">
            PROFILE
          </p>
          <span className="mx-auto mt-3 block h-px w-9 bg-orange" />
          <h2 className="mt-5 font-serif text-2xl font-semibold leading-[1.6] tracking-[0.08em] text-greenHeader sm:text-3xl md:text-4xl">
            スタッフ紹介
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-sub md:text-base md:leading-8">
            どんな人が見てくれるのか、初めての方にも伝わるように紹介します。
          </p>
        </div>

        <div className="mt-12">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 [scrollbar-width:none] md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-5 md:pb-0 [&::-webkit-scrollbar]:hidden">
            {STAFFS.map((staff, index) => (
              <article
                key={staff.name}
                className="flex w-[84vw] max-w-[350px] shrink-0 snap-center flex-col bg-[#fffdf8] shadow-[0_16px_36px_rgba(34,48,40,0.10)] md:w-auto md:max-w-none"
              >
                <figure className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={staff.image}
                    alt={`${staff.name}の紹介写真`}
                    fill
                    sizes="(max-width: 767px) 84vw, 520px"
                    className="object-cover"
                    style={{ objectPosition: staff.imagePosition }}
                  />
                </figure>

                <div className="flex min-h-0 flex-1 flex-col px-5 py-5 md:px-8 md:py-8">
                  <div className="border-b border-green/15 pb-4 md:flex md:items-end md:justify-between md:gap-4 md:pb-6">
                    <div>
                      <p className="text-xs font-bold tracking-[0.18em] text-orange">
                        STAFF {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-serif text-[28px] font-semibold tracking-[0.12em] text-greenHeader md:text-[34px]">
                        {staff.name}
                      </h3>
                    </div>
                    <p className="mt-2 text-xs font-bold leading-5 tracking-[0.08em] text-sub md:mt-0 md:text-sm">
                      {staff.role}
                    </p>
                  </div>

                  <p className="mt-4 font-serif text-xl font-semibold leading-[1.55] tracking-[0.08em] text-greenHeader md:mt-6 md:text-[28px] md:leading-[1.65]">
                    {staff.copy}
                  </p>
                  <p className="mt-3 text-xs font-medium leading-6 text-sub md:mt-4 md:text-sm md:leading-8">
                    {staff.lead}
                  </p>

                  <div className="mt-4 min-h-0 flex-1 border-y border-green/15 md:mt-7">
                    {staff.points.map((point, pointIndex) => (
                      <div
                        key={point.title}
                        className="grid grid-cols-[42px_1fr] gap-3 border-green/15 py-3 md:grid-cols-[58px_1fr] md:gap-5 md:py-5 [&:not(:last-child)]:border-b"
                      >
                        <span className="font-serif text-xl font-semibold text-[#b59a5a] md:text-2xl">
                          {String(pointIndex + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h4 className="font-serif text-base font-semibold tracking-[0.06em] text-greenHeader md:text-xl">
                            {point.title}
                          </h4>
                          <p className="mt-1 hidden text-sm font-medium leading-7 text-sub md:block">
                            {point.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-2 flex flex-col items-center md:hidden">
            <div className="flex gap-2" aria-hidden>
              {STAFFS.map((staff, index) => (
                <span
                  key={staff.name}
                  className={`h-px ${index === 0 ? "w-8 bg-green" : "w-4 bg-green/30"}`}
                />
              ))}
            </div>
            <p className="mt-3 text-[11px] tracking-[0.14em] text-sub">
              横にスワイプして確認
            </p>
          </div>

          <div className="relative mx-5 mt-8 bg-greenHeader px-5 py-7 text-center text-white shadow-[0_14px_28px_rgba(7,63,42,0.18)] md:px-8 md:py-8">
            <span className="absolute -top-4 left-1/2 h-8 w-px bg-[#b59a5a]" aria-hidden />
            <p className="font-serif text-xl font-semibold leading-[1.8] tracking-[0.08em] md:text-2xl">
              「どこに行っても良くならない」という方こそ、
              <br className="hidden sm:block" />
              一度ご相談ください。
            </p>
          </div>
        </div>

        <div className="px-5">
          <CtaRow bookLabel="初回1,100円で相談する" />
        </div>
      </div>
    </section>
  );
}
