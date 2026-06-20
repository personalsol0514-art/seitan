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
  { label: "2回目以降　整体 60分", price: "¥6,600(税込)" },
  { label: "2回目以降　整体 90分", price: "¥9,900(税込)" },
];

export default function Price() {
  return (
    <section id="price" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-5">
        <SectionHeading kicker="PRICE" title="料金" />

        <div className="mx-auto mt-12 max-w-2xl">
          {/* Featured first-visit card */}
          <div className="rounded-lg border-2 border-orange bg-cream p-6 shadow-sm md:p-8">
            <div className="text-center">
              <span className="font-head text-lg font-black text-greenHeader">
                初回限定
              </span>
              <p className="mt-3 text-sm font-medium text-sub">
                カウンセリング＋整体 60分
              </p>
              <p className="mt-2 flex items-baseline justify-center gap-2">
                <span className="text-lg text-sub line-through">¥6,600</span>
                <span className="font-head text-5xl font-black text-orange md:text-6xl">
                  ¥1,100
                </span>
              </p>
              <p className="mt-1 text-sm text-sub">(税込)</p>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="font-bold text-orange">✓</span>
                  <span className="text-sm text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Repeat-visit table */}
          <div className="mt-8 overflow-hidden rounded-lg border border-line">
            {ROWS.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-5 py-4 ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <span className="text-sm font-medium text-ink md:text-base">
                  {row.label}
                </span>
                <span className="font-head text-lg font-black text-greenHeader md:text-xl">
                  {row.price}
                </span>
              </div>
            ))}
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
