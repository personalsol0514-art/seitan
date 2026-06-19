import Image from "next/image";

const STEPS = [
  {
    no: "01",
    title: "カウンセリング・問診",
    sub: "お悩みと生活習慣を伺います",
    img: "/images/therapist.jpg",
  },
  {
    no: "02",
    title: "身体の見立て（検査）",
    sub: "姿勢・動き・関節を確認し、原因を特定します",
    img: "/images/feature-03.jpg",
  },
  {
    no: "03",
    title: "施術",
    sub: "根本原因にアプローチし、整えます",
    img: "/images/feature-02.jpg",
  },
  {
    no: "04",
    title: "セルフケア指導",
    sub: "再発させない習慣をお伝えします",
    img: "/images/feature-01.jpg",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="bg-white text-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-16 md:py-28">
        <h2 className="font-mincho text-3xl font-extrabold md:text-5xl">
          施術の流れ
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.no} className="border-t-2 border-ink pt-5">
              <span className="font-mincho text-4xl font-extrabold text-wood">
                {step.no}
              </span>
              <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 font-mincho text-xl font-extrabold leading-snug">
                {step.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-inkSub">
                {step.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
