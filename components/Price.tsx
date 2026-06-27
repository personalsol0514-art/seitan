import Image from "next/image";
import SectionHeading from "./SectionHeading";

const BOOKING =
  "https://bookom.jp/reservation?company=84&shop=263&course=1740&lang=ja";

const INCLUDED = [
  "カウンセリング込み",
  "身体の状態を確認",
  "施術方針を説明",
  "無理な回数券の押し売りなし",
  "完全予約制",
];

const ROWS = [
  { label: "2回目以降　骨膜整体", price: "¥8,800", note: "税込" },
];

export default function Price() {
  return (
    <section id="price" className="bg-[#fbfaf5] py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-5">
        <SectionHeading kicker="PRICE" title="料金" />

        <div className="mx-auto mt-14 max-w-[860px]">
          {/* 初回限定カード */}
          <div className="relative rounded-[20px] bg-white p-[2px] shadow-[0_20px_50px_rgba(18,61,39,0.12)]">
            {/* オレンジの枠線グラデーション */}
            <div
              className="absolute inset-0 rounded-[20px]"
              style={{
                background:
                  "linear-gradient(135deg, #f4923f 0%, #ec7324 50%, #d4621a 100%)",
              }}
            />

            <div className="relative grid grid-cols-1 overflow-hidden rounded-[18px] bg-white md:grid-cols-[44%_1fr]">
              {/* 写真 */}
              <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-full">
                <Image
                  src="/images/price-treatment.jpg"
                  alt="整体 Natural の施術"
                  fill
                  sizes="(max-width: 767px) 100vw, 380px"
                  className="object-cover"
                  style={{ objectPosition: "50% 50%" }}
                />
                {/* 初回限定バッジ */}
                <span className="absolute left-0 top-6 rounded-r-md bg-greenHeader/95 py-2 pl-4 pr-5 font-serif text-[13px] font-semibold tracking-[0.22em] text-white shadow-[0_6px_16px_rgba(7,40,25,0.28)] backdrop-blur-sm md:text-sm">
                  初回限定
                </span>
              </div>

              {/* 価格・内容 */}
              <div className="px-6 py-8 md:px-9 md:py-9">
                <div className="flex items-center gap-2.5">
                  <span className="rounded bg-orange px-2.5 py-1 text-[11px] font-bold tracking-[0.04em] text-white md:text-xs">
                    5,500円 OFF
                  </span>
                  <span className="text-sm text-sub line-through md:text-base">
                    通常 ¥6,600
                  </span>
                </div>

                <div className="mt-3 flex items-baseline text-orange">
                  <span className="font-head text-3xl font-black md:text-4xl">¥</span>
                  <span className="font-head text-[68px] font-black leading-none tracking-tight md:text-[80px]">
                    1,100
                  </span>
                  <span className="ml-1.5 font-head text-base font-bold text-orange/90 md:text-lg">
                    税込
                  </span>
                </div>
                <p className="mt-2 text-xs font-bold tracking-[0.06em] text-greenHeader/70">
                  初回のみの特別価格です
                </p>

                <div className="mt-6 h-px w-full bg-greenHeader/12" />

                <ul className="mt-6 grid grid-cols-1 gap-y-3 text-left">
                  {INCLUDED.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm font-medium text-ink"
                    >
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/12 text-[11px] font-black text-orange"
                        aria-hidden
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={BOOKING}
                  target="_blank"
                  rel="noopener"
                  className="mt-7 flex w-full items-center justify-center gap-3 rounded-md bg-orange px-6 py-4 text-base font-bold text-white shadow-[0_6px_18px_rgba(236,115,36,0.25)] transition-colors hover:bg-orangeDark"
                >
                  初回1,100円で予約する →
                </a>
              </div>
            </div>
          </div>

          {/* 2回目以降 */}
          <div className="mt-12">
            <p className="mb-4 text-center font-serif text-lg font-semibold tracking-[0.08em] text-greenHeader">
              2回目以降の料金
            </p>
            <div className="overflow-hidden rounded-xl border border-line bg-white">
              {ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between gap-4 px-6 py-5 md:px-8 ${
                    i !== 0 ? "border-t border-line" : ""
                  }`}
                >
                  <span className="text-sm font-medium text-ink md:text-base">
                    {row.label}
                  </span>
                  <span className="flex items-baseline gap-1 whitespace-nowrap">
                    <span className="font-head text-xl font-black text-greenHeader md:text-2xl">
                      {row.price}
                    </span>
                    <span className="text-xs text-sub">{row.note}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-sub">
            各種クレジットカード・QR決済対応（キャッシュレス決済）
          </p>
        </div>
      </div>
    </section>
  );
}
