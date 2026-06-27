import Image from "next/image";

const WORRY_GROUPS = [
  {
    number: "01",
    label: "首・肩",
    image: "/images/worry-shoulder.png",
    alt: "デスクワーク中に肩や首の重さを感じる様子",
    items: [
      "肩が重くて仕事に集中できない",
      "首こりから頭痛が出る",
    ],
  },
  {
    number: "02",
    label: "腰",
    image: "/images/worry-back.png",
    alt: "長時間のデスクワークで腰のつらさを感じる様子",
    items: [
      "長時間座っていると腰がつらい",
      "立ち上がる時に腰が痛い",
    ],
  },
  {
    number: "03",
    label: "姿勢",
    image: "/images/worry-posture.png",
    alt: "鏡で猫背や巻き肩を確認する様子",
    items: [
      "猫背や巻き肩が気になる",
      "病院では「異常なし」と言われた",
    ],
  },
  {
    number: "04",
    label: "慢性疲労",
    image: "/images/worry-fatigue.png",
    alt: "朝起きても疲れが残っている様子",
    items: [
      "マッサージしてもすぐ戻る",
      "寝ても疲れが取れない",
    ],
  },
];

export default function Pain() {
  return (
    <section id="pain" className="overflow-hidden bg-[#f6f1e8] py-16 md:py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="px-5 text-center">
          <p className="text-xs font-bold tracking-[0.22em] text-orange">CHECK</p>
          <span className="mx-auto mt-3 block h-px w-9 bg-orange" />
          <h2 className="mt-5 font-serif text-2xl font-semibold tracking-[0.08em] text-greenHeader sm:text-3xl md:text-4xl">
            こんなお悩み、ありませんか？
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-sub md:text-base">
            気になる症状を、横にスワイプして確認してみてください。
          </p>
        </div>

        <div className="mt-12">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:overflow-visible md:px-5">
            {WORRY_GROUPS.map((group) => (
              <article
                key={group.number}
                className="w-[78vw] max-w-[330px] shrink-0 snap-center overflow-hidden bg-[#fffdf8] md:w-auto"
              >
                <figure className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={group.image}
                    alt={group.alt}
                    fill
                    sizes="(max-width: 767px) 78vw, 260px"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 font-serif text-xs tracking-[0.16em] text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.45)]">
                    {group.number}
                  </span>
                </figure>

                <div className="min-h-[190px] px-5 py-5">
                  <p className="font-serif text-xl font-semibold tracking-[0.08em] text-greenHeader">
                    {group.label}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 border-t border-green/15 pt-3 text-sm leading-6 text-ink"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-2 flex flex-col items-center md:hidden">
            <div className="flex gap-2" aria-hidden>
              {WORRY_GROUPS.map((group, index) => (
                <span
                  key={group.number}
                  className={`h-px ${index === 0 ? "w-8 bg-green" : "w-4 bg-green/30"}`}
                />
              ))}
            </div>
            <p className="mt-3 text-[11px] tracking-[0.14em] text-sub">
              横にスワイプして確認
            </p>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden bg-greenHeader px-6 py-12 text-center text-white md:mx-5 md:mt-16 md:rounded-md md:px-12">
          <div
            className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full border border-white/10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full border border-white/10"
            aria-hidden
          />
          <p className="relative font-serif text-xl font-semibold leading-9 tracking-[0.08em] md:text-3xl md:leading-[1.7]">
            ひとつでも当てはまるなら、
            <br />
            身体のつながりを見直すタイミングです。
          </p>
        </div>
      </div>
    </section>
  );
}
