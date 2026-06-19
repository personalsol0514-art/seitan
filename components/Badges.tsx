const HandsIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green">
    <path d="M8 13V7a1.5 1.5 0 0 1 3 0v5" />
    <path d="M11 12V6a1.5 1.5 0 0 1 3 0v6" />
    <path d="M14 12V8a1.5 1.5 0 0 1 3 0v6c0 3-2 5-5 5-2 0-3-1-4-2l-3-3a1.5 1.5 0 0 1 2-2l2 2" />
  </svg>
);

const CalendarIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green">
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <path d="M4 9h16" />
    <path d="M8 3v3M16 3v3" />
    <path d="M9 14l2 2 3.5-3.5" />
  </svg>
);

const MedalIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green">
    <circle cx="12" cy="9" r="5" />
    <path d="M12 7v2l1.5 1" />
    <path d="M9 13l-2 8 5-3 5 3-2-8" />
  </svg>
);

const CarIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green">
    <path d="M5 16v2M19 16v2" />
    <path d="M3 15v-3l2-5a2 2 0 0 1 2-1.4h10A2 2 0 0 1 19 7l2 5v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
    <path d="M5 12h14" />
    <circle cx="7.5" cy="15" r="1" />
    <circle cx="16.5" cy="15" r="1" />
  </svg>
);

const items = [
  { icon: HandsIcon, top: "肩こり・腰痛・姿勢改善", sub: "根本からアプローチ" },
  { icon: CalendarIcon, top: "完全予約制", sub: "待ち時間なし" },
  { icon: MedalIcon, top: "国家資格保有", sub: "整体師歴10年" },
  { icon: CarIcon, top: "駐車場あり", sub: "岡崎市本町通" },
];

export default function Badges() {
  return (
    <section className="bg-greenSoft/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line lg:gap-y-0">
        {items.map((it) => (
          <div key={it.top} className="flex flex-col items-center text-center lg:px-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-greenSoft">
              {it.icon}
            </div>
            <p className="mt-3 text-sm font-bold text-ink">{it.top}</p>
            <p className="mt-1 text-xs text-sub">{it.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
