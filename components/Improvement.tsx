import Image from "next/image";

const POINTS = [
  {
    number: "01",
    ghost: "01",
    titlePrefix: "",
    highlight: "深いコリ",
    titleSuffix: "に届く",
    body: "骨まわりの硬さに着目し、奥に残るこわばりをゆるめます。",
  },
  {
    number: "02",
    ghost: "02",
    titlePrefix: "すぐ",
    highlight: "動きやすい",
    titleSuffix: "身体へ",
    body: "施術後の軽さや可動域の変化を感じやすい身体へ整えます。",
  },
  {
    number: "03",
    ghost: "03",
    titlePrefix: "",
    highlight: "戻りにくい",
    titleSuffix: "根本改善へ",
    body: "身体のクセを見直し、日常で戻りにくい状態を目指します。",
  },
];

export default function Improvement() {
  return (
    <section id="improvement" className="overflow-hidden bg-[#fffaf1] pb-28 pt-16 md:py-24">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 md:grid-cols-[0.95fr_1.05fr] md:items-start md:gap-14">
        <div className="relative">
          <div
            className="pointer-events-none absolute -right-16 top-16 h-48 w-48 rounded-full bg-[#dcecd7] md:-left-16 md:right-auto md:top-28"
            aria-hidden
          />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange">
              BONE MEMBRANE CARE
            </p>
            <h2 className="mt-5 font-serif text-[30px] font-semibold leading-[1.65] tracking-[0.06em] text-greenHeader sm:text-4xl md:text-[42px]">
              そのお悩み、
              <br />
              整体Naturalで
              <br />
              改善を目指せます
            </h2>
            <p className="mt-6 max-w-md text-sm font-medium leading-8 text-sub md:text-base md:leading-9">
              骨膜整体という手技で、深いコリ・動きにくさ・戻りやすさに向き合います。
            </p>
          </div>

          <figure className="relative mt-9 overflow-hidden rounded-t-[120px] bg-greenHeader md:mt-12 md:rounded-t-[160px]">
            <Image
              src="/images/about.jpg"
              alt="整体Naturalの院内"
              width={900}
              height={760}
              className="h-[250px] w-full object-cover opacity-95 md:h-[430px]"
              sizes="(max-width: 767px) 100vw, 480px"
            />
            <figcaption className="absolute bottom-5 left-5 right-5 border border-white/50 bg-greenHeader/75 px-4 py-4 text-center font-serif text-xl font-semibold leading-8 tracking-[0.08em] text-white md:bottom-8 md:left-8 md:right-8 md:text-2xl md:leading-10">
              骨まわりから、
              <br />
              身体の動きを変える。
            </figcaption>
          </figure>
        </div>

        <div className="md:pt-16">
          <div className="grid gap-4">
            {POINTS.map((point) => (
              <article
                key={point.number}
                className="relative overflow-hidden border border-green/15 border-l-[6px] border-l-green bg-[#fffdf8] px-5 py-5 shadow-[0_13px_28px_rgba(34,48,40,0.08)] md:px-7 md:py-6"
              >
                <span
                  className="pointer-events-none absolute right-4 top-3 font-serif text-[58px] font-bold leading-none text-green/5 md:right-6 md:text-[72px]"
                  aria-hidden
                >
                  {point.ghost}
                </span>
                <span className="relative z-10 inline-flex items-center gap-2 text-xs font-black tracking-[0.2em] text-orange">
                  {point.number}
                  <span className="h-px w-6 bg-orange/60" aria-hidden />
                </span>
                <h3 className="relative z-10 mt-2 text-[22px] font-black leading-snug tracking-[0.04em] text-greenHeader md:text-[26px]">
                  {point.titlePrefix}
                  <span className="text-[26px] text-green md:text-[32px]">
                    {point.highlight}
                  </span>
                  {point.titleSuffix}
                </h3>
                <p className="relative z-10 mt-3 text-sm font-medium leading-7 text-sub md:text-base md:leading-8">
                  {point.body}
                </p>
              </article>
            ))}
          </div>

          <div className="relative mt-8 bg-greenHeader px-5 py-7 text-center text-white shadow-[0_14px_28px_rgba(7,63,42,0.18)] md:mt-10 md:px-8 md:py-9">
            <span
              className="absolute -top-4 left-1/2 h-8 w-px bg-[#b59a5a]"
              aria-hidden
            />
            <p className="text-xs font-black tracking-[0.24em] text-[#f5c36a]">
              だから
            </p>
            <p className="mt-3 font-serif text-2xl font-semibold leading-[1.7] tracking-[0.08em] md:text-[30px]">
              その場しのぎではなく、
              <br />
              変化が続く身体へ。
            </p>
            <p className="mt-4 text-sm font-bold leading-7 text-white/80 md:text-base">
              痛みの原因から整えることで、毎日をもっとラクに。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
