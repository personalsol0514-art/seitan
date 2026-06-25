import Image from "next/image";

const REASONS = [
  {
    number: "01",
    title: "姿勢・動作のクセ",
    body: "日常の身体の使い方が、同じ場所へ負担をかけ続けます。",
    mark: "姿勢",
  },
  {
    number: "02",
    title: "筋肉・関節の連動不足",
    body: "動きにくい場所をほかの部分がかばい、別の場所の不調につながります。",
    mark: "連動",
  },
  {
    number: "03",
    title: "生活習慣による負担",
    body: "仕事・睡眠・運動習慣の積み重ねが、身体の回復を妨げることがあります。",
    mark: "習慣",
  },
];

export default function TrustBanner() {
  return (
    <section id="causes" className="overflow-hidden bg-[#fbfaf5] pb-16 md:pb-24">
      <div className="mx-auto max-w-[980px] px-5 pt-8 md:px-8 md:pt-14">
        <p className="mx-auto max-w-2xl text-center font-serif text-sm leading-8 tracking-[0.06em] text-sub md:text-base">
          痛む場所だけを整えても、原因が身体の別の場所に残っていれば、
          <br className="hidden sm:block" />
          不調は繰り返してしまいます。
        </p>

        <div className="relative mx-auto mt-12 max-w-[760px] md:mt-16">
          <span
            className="absolute bottom-10 left-[34px] top-10 w-px bg-green/25 md:left-1/2"
            aria-hidden
          />

          <div className="space-y-12 md:space-y-16">
            {REASONS.map((reason, index) => (
              <article
                key={reason.number}
                className={`relative grid grid-cols-[68px_1fr] items-center gap-5 md:grid-cols-[1fr_88px_1fr] md:gap-10 ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                <div
                  className={`hidden md:block ${
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-3"
                  }`}
                >
                  <p className="font-serif text-2xl font-semibold tracking-[0.08em] text-greenHeader">
                    {reason.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-sub">{reason.body}</p>
                </div>

                <div className="relative z-10 col-start-1 flex aspect-square w-[68px] flex-col items-center justify-center rounded-full border border-green/30 bg-[#eef5e9] text-center shadow-[0_8px_22px_rgba(18,61,39,0.08)] md:col-start-2 md:row-start-1 md:w-[88px]">
                  <span className="font-serif text-[11px] tracking-[0.18em] text-green/70">
                    {reason.number}
                  </span>
                  <span className="mt-1 font-serif text-sm font-semibold tracking-[0.08em] text-greenHeader">
                    {reason.mark}
                  </span>
                </div>

                <div className="col-start-2 md:hidden">
                  <h3 className="font-serif text-xl font-semibold tracking-[0.06em] text-greenHeader">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-sub">{reason.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[1080px] px-0 sm:px-5 md:mt-24">
        <figure className="relative aspect-[4/3] overflow-hidden sm:rounded-t-[28px] md:aspect-[16/7]">
          <Image
            src="/images/hero.jpg"
            alt="身体全体のつながりを確認しながら行う整体施術"
            fill
            sizes="(max-width: 640px) 100vw, 1080px"
            className="object-cover"
            style={{ objectPosition: "50% 38%" }}
          />
        </figure>

        <div className="relative mx-4 -mt-1 rounded-b-[28px] rounded-t-[28px] bg-[#fffdf8] px-6 py-10 text-center shadow-[0_14px_34px_rgba(18,61,39,0.08)] sm:mx-0 sm:-mt-8 md:px-12 md:py-12">
          <span
            className="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 -translate-y-7 bg-[#c8a861]"
            aria-hidden
          />
          <span
            className="absolute left-1/2 top-3 h-2 w-2 -translate-x-1/2 rounded-full bg-[#c8a861]"
            aria-hidden
          />
          <p className="font-serif text-xl font-semibold leading-[1.8] tracking-[0.08em] text-greenHeader md:text-3xl">
            痛みの場所だけでなく、
            <br />
            つながり全体を整える。
          </p>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-sub md:text-base">
            だから整体Naturalは、姿勢・動き・生活習慣まで確認し、
            一人ひとりの身体に合わせて施術します。
          </p>
        </div>
      </div>
    </section>
  );
}
