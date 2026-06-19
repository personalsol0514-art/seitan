import Image from "next/image";

const STEPS = [
  {
    no: "01",
    title: "カウンセリング・問診",
    sub: "お悩みと生活習慣を丁寧に伺います。",
    img: "/images/therapist.jpg",
  },
  {
    no: "02",
    title: "姿勢・動作チェック（検査）",
    sub: "姿勢や動きを確認し、原因を特定します。",
    img: "/images/feature-03.jpg",
  },
  {
    no: "03",
    title: "施術",
    sub: "原因をご説明してから根本に施術します。",
    img: "/images/feature-02.jpg",
  },
  {
    no: "04",
    title: "セルフケア指導",
    sub: "再発させない習慣をお伝えします。",
    img: "/images/feature-01.jpg",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="bg-greenHeader text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
        <div className="text-center">
          <h2 className="font-head font-black text-2xl md:text-4xl">施術の流れ</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.no}
              className="bg-white text-ink rounded-xl overflow-hidden shadow-md"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute top-0 left-0 bg-orange text-white font-head font-black text-lg px-3 py-1.5">
                  {step.no}
                </span>
              </div>
              <div className="px-4 py-4">
                <p className="font-head font-black text-base leading-snug">
                  {step.title}
                </p>
                <p className="mt-2 text-sm text-sub leading-relaxed">
                  {step.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
