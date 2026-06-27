import Image from "next/image";
import SectionHeading from "./SectionHeading";
import CtaRow from "./CtaRow";

const MAP_SRC =
  "https://maps.google.com/maps?q=愛知県岡崎市本町通2丁目3+鳥居ビル&output=embed&z=16&hl=ja";
const MAP_LINK =
  "https://maps.google.com/maps?q=愛知県岡崎市本町通2丁目3+鳥居ビル";

const INFO = [
  { label: "院名", value: "整体 Natural（ナチュラル）" },
  { label: "住所", value: "〒444-0051 愛知県岡崎市本町通2丁目3 鳥居ビル1F" },
  { label: "最寄", value: "東岡崎駅 徒歩15分" },
  { label: "目印", value: "本町通沿い・鳥居ビル1F" },
  { label: "駐車場", value: "店舗裏 タカラパーキング（無料）" },
  { label: "営業", value: "11:00〜20:00（最終受付19:00）" },
  { label: "定休", value: "年中無休（土日祝も受付）・完全予約制" },
  { label: "TEL", value: "070-2282-5501" },
];

const SUB_PHOTOS = [
  { src: "/images/feature-03.jpg", caption: "施術室" },
  { src: "/images/feature-01.jpg", caption: "施術風景" },
];

export default function Access() {
  return (
    <section id="access" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-5">
        <SectionHeading kicker="ACCESS" title="アクセス" />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-line shadow-sm">
              <Image
                src="/images/about.jpg"
                alt="整体 Natural の院内"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute bottom-2 left-2 rounded bg-greenHeader/80 px-2 py-1 text-xs font-bold text-white">
                院内
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {SUB_PHOTOS.map((p) => (
                <div
                  key={p.src}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-line shadow-sm"
                >
                  <Image
                    src={p.src}
                    alt={p.caption}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-1.5 left-1.5 rounded bg-greenHeader/80 px-2 py-0.5 text-[11px] font-bold text-white">
                    {p.caption}
                  </span>
                </div>
              ))}
            </div>

            <dl className="mt-6 border-t border-line">
              {INFO.map((row) => (
                <div key={row.label} className="flex gap-4 border-b border-line py-3">
                  <dt className="w-14 shrink-0 text-sm font-bold text-green">
                    {row.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 text-sm text-sub">
              お車でお越しの方は、店舗裏のタカラパーキングをご利用ください。
            </p>

            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center font-bold text-green transition-colors hover:text-greenDark"
            >
              Googleマップで見る →
            </a>
          </div>

          <div className="min-h-[380px] w-full overflow-hidden rounded-lg border border-line shadow-sm">
            <iframe
              title="整体 Natural の地図"
              src={MAP_SRC}
              className="h-full min-h-[380px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <CtaRow bookLabel="初回1,100円で予約する" />
      </div>
    </section>
  );
}
