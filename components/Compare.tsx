import SectionHeading from "./SectionHeading";
import CtaRow from "./CtaRow";

const COMMON = [
  "痛いところだけを揉む",
  "説明が少ない",
  "その場は楽でも戻りやすい",
  "セルフケアが分からない",
  "通う目的が曖昧",
];

const NATURAL = [
  "姿勢・動作・生活習慣まで確認",
  "原因を説明してから施術",
  "筋膜・関節・神経のつながりを見る",
  "自宅でできるケアまで提案",
  "改善までの流れを一緒に考える",
];

export default function Compare() {
  return (
    <section id="compare" className="bg-cream2 py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-5">
        <SectionHeading
          kicker="COMPARE"
          title="“その場しのぎ”で終わらせない。"
          lead="整体Naturalが選ばれる理由"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* よくある整体 */}
          <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
            <div className="rounded-md bg-line/40 px-4 py-2 text-center font-bold text-sub">
              よくある整体
            </div>
            <ul className="mt-5 space-y-3">
              {COMMON.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-bold text-gray-400">✕</span>
                  <span className="text-sm leading-relaxed text-sub">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 整体Natural */}
          <div className="rounded-lg border-2 border-green bg-[#f1f5ee] p-6 shadow-sm">
            <div className="rounded-md bg-green px-4 py-2 text-center font-head font-black text-white">
              整体Natural
            </div>
            <ul className="mt-5 space-y-3">
              {NATURAL.map((n) => (
                <li key={n} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-black text-orange">◎</span>
                  <span className="text-sm font-medium leading-relaxed text-ink">
                    {n}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <CtaRow bookLabel="まずは初回1,100円で身体の状態を確認する" />
      </div>
    </section>
  );
}
