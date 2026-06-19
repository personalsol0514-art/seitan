import Image from "next/image";
import SectionTitle from "./SectionTitle";

const ReserveIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green">
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <path d="M4 9h16M8 3v3M16 3v3" />
    <path d="M9 14l2 2 3.5-3.5" />
  </svg>
);
const CarIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green">
    <path d="M3 15v-3l2-5a2 2 0 0 1 2-1.4h10A2 2 0 0 1 19 7l2 5v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
    <path d="M5 12h14" />
    <circle cx="7.5" cy="15" r="1" />
    <circle cx="16.5" cy="15" r="1" />
  </svg>
);
const BabyIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green">
    <circle cx="12" cy="7" r="3" />
    <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
    <path d="M9 13c1 1 5 1 6 0" />
  </svg>
);
const CardIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green">
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M3 10h18M7 15h4" />
  </svg>
);

const features = [
  { icon: ReserveIcon, title: "完全予約制", sub: "お一人ずつ丁寧に対応します。" },
  { icon: CarIcon, title: "駐車場あり", sub: "お車でのご来院も安心です。" },
  { icon: BabyIcon, title: "お子様連れOK", sub: "ベビーカーのままご来院いただけます。" },
  { icon: CardIcon, title: "お支払い方法", sub: "現金・クレジットカード・各種QR決済対応" },
];

export default function Price() {
  return (
    <section id="price" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <SectionTitle title="料金" />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="rounded-2xl bg-white p-7 shadow-md">
              <span className="inline-block rounded-full bg-green px-3 py-1 text-xs font-medium text-white">
                初回限定
              </span>
              <p className="mt-4 text-sm text-ink">カウンセリング＋整体 60分</p>
              <p className="mt-1">
                <span className="font-serif text-3xl font-medium text-green">1,100円</span>
                <span className="ml-1 text-xs text-mute">(税込)</span>
              </p>

              <hr className="my-6 border-line" />

              <p className="text-sm font-bold text-ink">2回目以降</p>
              <div className="mt-3 space-y-2 text-sm text-sub">
                <div className="flex items-baseline justify-between">
                  <span>整体 60分</span>
                  <span className="font-medium text-ink">6,600円(税込)</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span>整体 90分</span>
                  <span className="font-medium text-ink">9,900円(税込)</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-mute">
                ※初回はカウンセリング・検査時間を含みます。
              </p>
            </div>

            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/images/about.jpg"
                alt="整体 Natural の院内"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-greenSoft">
                  {f.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{f.title}</p>
                  <p className="mt-1 text-sm leading-loose text-sub">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
