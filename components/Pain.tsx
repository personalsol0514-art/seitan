import SectionTitle from "./SectionTitle";

const svgBase = {
  viewBox: "0 0 48 48",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-14 w-14 text-green",
};

const ShoulderIcon = (
  <svg {...svgBase}>
    <circle cx="24" cy="14" r="5" />
    <path d="M14 34c0-6 4-10 10-10s10 4 10 10" />
    <path d="M14 25c2-1.5 5-2 10-2s8 .5 10 2" className="text-clay" stroke="#cf7a6a" strokeWidth={2} />
  </svg>
);

const BackIcon = (
  <svg {...svgBase}>
    <circle cx="24" cy="11" r="4" />
    <path d="M24 15v16" />
    <path d="M24 31l-4 8M24 31l4 8" />
    <path d="M24 18l-6 3M24 18l6 3" />
    <circle cx="24" cy="28" r="2.4" stroke="#cf7a6a" strokeWidth={2} className="text-clay" />
  </svg>
);

const PostureIcon = (
  <svg {...svgBase}>
    <circle cx="20" cy="12" r="4" />
    <path d="M20 16c0 4 6 5 6 10s-6 6-10 10" stroke="#cf7a6a" strokeWidth={2} className="text-clay" />
    <path d="M16 38h14" />
  </svg>
);

const NerveIcon = (
  <svg {...svgBase}>
    <circle cx="24" cy="26" r="8" />
    <path d="M14 14c2 1 3 0 4-1M30 13c2 1 3 0 4-1" stroke="#cf7a6a" strokeWidth={2} className="text-clay" />
    <path d="M11 20c2 .5 3-.5 3.5-1.5M37 19c-2 .5-3-.5-3.5-1.5" stroke="#cf7a6a" strokeWidth={2} className="text-clay" />
  </svg>
);

const RepeatIcon = (
  <svg {...svgBase} stroke="#cf7a6a">
    <path d="M14 18a12 12 0 0 1 20-4l3 3" />
    <path d="M37 11v6h-6" />
    <path d="M34 30a12 12 0 0 1-20 4l-3-3" />
    <path d="M11 37v-6h6" />
  </svg>
);

const items = [
  { icon: ShoulderIcon, top: "慢性的な肩こり", sub: "がつらい" },
  { icon: BackIcon, top: "腰の痛みが", sub: "なかなか良くならない" },
  { icon: PostureIcon, top: "姿勢のゆがみが", sub: "気になる" },
  { icon: NerveIcon, top: "自律神経の乱れで", sub: "体を崩しやすい" },
  { icon: RepeatIcon, top: "マッサージでは", sub: "すぐに戻ってしまう" },
];

export default function Pain() {
  return (
    <section className="bg-greenSoft">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <SectionTitle title="このような悩みはありませんか？" />

        <div className="mt-12 flex flex-wrap items-start justify-center gap-x-2 gap-y-8 lg:flex-nowrap">
          {items.map((it, i) => (
            <div key={it.top} className="flex items-start">
              <div className="flex w-32 flex-col items-center text-center sm:w-36">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-sm">
                  {it.icon}
                </div>
                <p className="mt-4 text-sm font-bold text-ink">{it.top}</p>
                <p className="mt-1 text-xs text-sub">{it.sub}</p>
              </div>
              {i < items.length - 1 && (
                <span className="mx-1 hidden self-center text-2xl text-mute lg:block">›</span>
              )}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-loose text-sub">
          当院では、症状のある場所だけでなく、身体全体のバランスや生活習慣まで含めて原因を見つけ、根本改善を目指します。
        </p>
      </div>
    </section>
  );
}
