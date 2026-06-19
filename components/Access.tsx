import Image from "next/image";

const MAP_SRC =
  "https://maps.google.com/maps?q=愛知県岡崎市本町通2丁目3+鳥居ビル&output=embed&z=16&hl=ja";
const MAP_LINK =
  "https://maps.google.com/maps?q=愛知県岡崎市本町通2丁目3+鳥居ビル";

const INFO = [
  { label: "住所", value: "〒444-0051 愛知県岡崎市本町通2丁目3 鳥居ビル1F" },
  { label: "最寄", value: "東岡崎駅 徒歩15分" },
  { label: "駐車場", value: "店舗裏 タカラパーキング（無料）" },
  { label: "営業", value: "9:00〜20:00（最終受付19:00）" },
  { label: "定休", value: "年中無休（土日祝も受付）／完全予約制" },
];

export default function Access() {
  return (
    <section id="access" className="bg-cream text-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
        <div className="text-center">
          <h2 className="font-head font-black text-2xl md:text-4xl">アクセス</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
              <Image
                src="/images/about.jpg"
                alt="整体 Natural の院内"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <p className="mt-6 font-head font-black text-xl">整体 Natural</p>

            <dl className="mt-4 border-t border-line">
              {INFO.map((row) => (
                <div
                  key={row.label}
                  className="flex gap-4 border-b border-line py-3"
                >
                  <dt className="w-14 shrink-0 text-sm font-bold text-green">
                    {row.label}
                  </dt>
                  <dd className="text-sm leading-relaxed">{row.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center font-bold text-green hover:text-greenDark transition-colors"
            >
              Googleマップで見る →
            </a>
          </div>

          <div className="min-h-[380px] w-full overflow-hidden rounded-xl shadow-md">
            <iframe
              title="整体 Natural の地図"
              src={MAP_SRC}
              className="h-full min-h-[380px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
