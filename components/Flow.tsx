import Image from "next/image";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    no: "01",
    title: "カウンセリング",
    sub: "生活習慣・お仕事・過去のケガまで丁寧に伺います。",
    img: "/images/therapist.jpg",
  },
  {
    no: "02",
    title: "姿勢・動作チェック",
    sub: "姿勢や身体の動きから、不調の原因を見つけます。",
    img: "/images/feature-03.jpg",
  },
  {
    no: "03",
    title: "施術",
    sub: "筋膜・関節・筋肉のつながりを見ながら、原因に合わせて施術します。",
    img: "/images/feature-02.jpg",
  },
  {
    no: "04",
    title: "セルフケア指導",
    sub: "再発を防ぐために、自宅でできるケアや生活のポイントをお伝えします。",
    img: "/images/feature-01.jpg",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-5">
        <SectionHeading kicker="FLOW" title="施術の流れ" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.no}
              className="overflow-hidden rounded-lg border border-line bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute left-0 top-0 bg-orange px-3 py-1.5 font-head text-lg font-black text-white">
                  {step.no}
                </span>
              </div>
              <div className="px-4 py-4">
                <p className="font-head text-base font-bold leading-snug text-greenHeader">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-sub">{step.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
