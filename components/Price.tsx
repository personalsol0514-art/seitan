import SectionHeading from "./SectionHeading";
import CtaRow from "./CtaRow";

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

        <div className="mx-auto mt-14 max-w-[720px]">
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

            <div className="relative rounded-[18px] bg-white">
              {/* 初回限定バッジ */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 font-head text-sm font-black tracking-[0.08em] text-white shadow-[0_8px_18px_rgba(236,115,36,0.35)]"
                  style={{
                    background:
                      "linear-gradient(135deg, #f4923f 0%, #ec7324 55%, #d4621a 100%)",
                  }}
                >
                  ★ 初回限定
                </span>
              </div>

              <div className="px-6 pb-9 pt-12 text-center md:px-12 md:pb-11 md:pt-14">
                {/* 価格 */}
                <div className="mx-auto flex max-w-[440px] flex-col items-center rounded-2xl bg-[#fff7ef] px-5 py-7 md:py-8">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded bg-orange px-2.5 py-1 text-[11px] font-bold tracking-[0.04em] text-white md:text-xs">
                      5,500円 OFF
                    </span>
                    <span className="text-base text-sub line-through md:text-lg">
                      通常 ¥6,600
                    </span>
                  </div>

                  <div className="mt-3 flex items-end justify-center text-orange">
                    <span className="pb-2.5 font-head text-2xl font-black md:text-3xl">
                      ¥
                    </span>
                    <span className="font-head text-[64px] font-black leading-[0.9] tracking-tight md:text-[88px]">
                      1,100
                    </span>
                    <span className="pb-3 pl-1 font-head text-lg font-black md:text-xl">
                      税込
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs font-bold tracking-[0.06em] text-greenHeader/70">
                    初回のみの特別価格です
                  </p>
                </div>

                {/* 含まれる内容 */}
                <ul className="mx-auto mt-8 grid max-w-[520px] grid-cols-1 gap-x-7 gap-y-3.5 text-left sm:grid-cols-2">
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
            現金・各種クレジットカード・QR決済対応
          </p>
        </div>

        <CtaRow bookLabel="初回1,100円で予約する" />
      </div>
    </section>
  );
}
