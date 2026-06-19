import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const MAPS_URL =
  "https://maps.google.com/maps?q=愛知県岡崎市本町通2丁目3+鳥居ビル&output=embed&z=16&hl=ja";

const PinIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-shrink-0 text-green">
    <path d="M12 21s7-5.6 7-11a7 7 0 0 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
const CarIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-shrink-0 text-green">
    <path d="M3 15v-3l2-5a2 2 0 0 1 2-1.4h10A2 2 0 0 1 19 7l2 5v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
    <path d="M5 12h14" />
  </svg>
);
const ClockIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-shrink-0 text-green">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l2.5 2" />
  </svg>
);
const CalIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-shrink-0 text-green">
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <path d="M4 9h16M8 3v3M16 3v3" />
  </svg>
);

const rows = [
  { icon: PinIcon, text: "最寄「東岡崎駅」徒歩15分" },
  { icon: CarIcon, text: "駐車場：店舗裏 タカラパーキング" },
  { icon: ClockIcon, text: "営業時間：9:00〜20:00（最終受付19:00）" },
  { icon: CalIcon, text: "定休日：年中無休（完全予約制）" },
];

export default function Access() {
  return (
    <section id="access" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <SectionTitle title="アクセス" />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/about.jpg"
                alt="整体 Natural の院内"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6">
              <p className="text-base font-bold text-ink">整体 Natural（ナチュラル）</p>
              <p className="mt-1 text-sm text-sub">
                〒444-0051 愛知県岡崎市本町通2丁目3 鳥居ビル1F
              </p>
              <div className="mt-4 space-y-2.5">
                {rows.map((r) => (
                  <p key={r.text} className="flex items-center gap-2 text-sm text-sub">
                    {r.icon}
                    {r.text}
                  </p>
                ))}
              </div>
              <div className="mt-6">
                <Button href={MAPS_URL} external>
                  Googleマップで見る
                </Button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-md">
            <iframe
              src={MAPS_URL}
              title="整体 Natural の地図"
              loading="lazy"
              className="h-full min-h-[360px] w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
