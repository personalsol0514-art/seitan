import Image from "next/image";

const MAP_SRC =
  "https://maps.google.com/maps?q=愛知県岡崎市本町通2丁目3+鳥居ビル&output=embed&z=16&hl=ja";
const MAP_LINK =
  "https://maps.google.com/maps?q=愛知県岡崎市本町通2丁目3+鳥居ビル";

const INFO = [
  { label: "住所", value: "〒444-0051 愛知県岡崎市本町通2丁目3 鳥居ビル1F" },
  { label: "最寄", value: "東岡崎駅 徒歩15分" },
  { label: "駐車場", value: "店舗裏 タカラパーキング" },
  { label: "営業", value: "9:00〜20:00（最終受付19:00）" },
  { label: "定休", value: "年中無休（完全予約制）" },
];

export default function Access() {
  return (
    <section id="access" className="bg-white text-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-16 md:py-28">
        <h2 className="font-mincho text-3xl font-extrabold md:text-5xl">
          アクセス
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="整体 Natural の院内"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <p className="mt-8 font-mincho text-2xl font-extrabold">
              整体 Natural
            </p>

            <dl className="mt-6 border-t border-line">
              {INFO.map((row) => (
                <div
                  key={row.label}
                  className="flex gap-4 border-b border-line py-4"
                >
                  <dt className="w-16 shrink-0 text-sm font-bold text-inkSub">
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
              className="mt-8 inline-block border border-ink px-7 py-3 text-sm font-bold tracking-wide transition-colors hover:bg-ink hover:text-paper"
            >
              Googleマップで見る
            </a>
          </div>

          <div className="min-h-[380px] w-full overflow-hidden">
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
