import Image from "next/image";
import SectionTitle from "./SectionTitle";

const steps = [
  {
    no: "01",
    title: "カウンセリング",
    text: "お悩みや生活習慣を丁寧にお伺いします。",
    img: "/images/therapist.jpg",
  },
  {
    no: "02",
    title: "姿勢・動作チェック",
    text: "姿勢や動きの癖を確認し、不調の原因を見つけます。",
    img: "/images/feature-03.jpg",
  },
  {
    no: "03",
    title: "施術",
    text: "身体のバランスを整え、不調の改善を目指します。",
    img: "/images/feature-02.jpg",
  },
  {
    no: "04",
    title: "セルフケア・生活指導",
    text: "再発予防のためのストレッチや生活のアドバイスを行います。",
    img: "/images/feature-01.jpg",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <SectionTitle
          title="初回の流れ"
          subtitle="丁寧なカウンセリングと検査で、原因を見つけ出します。"
        />

        <div className="mt-12 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.no} className="flex items-start">
              <div className="flex-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-green px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {s.no}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-loose text-sub">{s.text}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="mx-1 mt-16 hidden self-start text-2xl text-mute lg:block">›</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
