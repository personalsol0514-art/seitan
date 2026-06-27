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
  { label: "2回目以降　骨膜整体", price: "¥8,800(税込)" },
];

export default function Price() {
  return (
    <section id="price" className="bg-[#fbfaf5] py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-5">
        <SectionHeading kicker="PRICE" title="料金" />

        <div className="mx-auto mt-12 max-w-[760px]">
          <div className="overflow-hidden rounded-lg border border-greenHeader/20 bg-white shadow-[0_12px_34px_rgba(18,61,39,0.08)]">
            <div className="flex items-center justify-between bg-greenHeader px-5 py-4 text-white md:px-8">
              <span className="font-serif text-lg font-semibold tracking-[0.1em] md:text-xl">
                初回限定
              </span>
              <span className="text-xs font-bold tracking-[0.05em] text-[#f2d9a6] md:text-sm">
                5,500円 OFF
              </span>
            </div>

            <div className="px-5 pb-7 pt-8 text-center md:px-10 md:pb-10 md:pt-10">
              <p className="font-serif text-base font-semibold tracking-[0.06em] text-greenHeader md:text-xl">
                カウンセリング＋整体 60分
              </p>

              <div className="mt-5 flex items-end justify-center gap-3">
                <span className="pb-2 text-base text-sub line-through md:text-lg">通常 ¥6,600</span>
                <p className="flex items-end text-orange">
                  <span className="pb-1 font-head text-2xl font-black">¥</span>
                  <span className="font-head text-6xl font-black leading-none md:text-7xl">1,100</span>
                </p>
              </div>
              <p className="mt-2 text-xs font-medium text-sub">税込・初回のみ</p>

              <div className="mx-auto mt-7 h-px max-w-[560px] bg-greenHeader/15" />

              <ul className="mx-auto mt-6 grid max-w-[590px] grid-cols-1 gap-x-8 gap-y-3 text-left sm:grid-cols-2">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                    <span className="font-bold text-orange" aria-hidden>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-center font-serif text-lg font-semibold tracking-[0.08em] text-greenHeader">
              2回目以降の料金
            </p>
            <div className="overflow-hidden rounded-md border border-line bg-white">
            {ROWS.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between gap-4 px-5 py-4 md:px-7 ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <span className="text-sm font-medium text-ink">
                  {row.label}
                </span>
                <span className="whitespace-nowrap font-head text-base font-black text-greenHeader md:text-lg">
                  {row.price}
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
