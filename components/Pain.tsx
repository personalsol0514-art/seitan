import SectionHeading from "./SectionHeading";
import Card from "./Card";
import CtaRow from "./CtaRow";

const WORRIES = [
  "肩が重くて仕事に集中できない",
  "首こりから頭痛が出る",
  "長時間座っていると腰がつらい",
  "立ち上がる時に腰が痛い",
  "猫背や巻き肩が気になる",
  "マッサージしてもすぐ戻る",
  "病院では「異常なし」と言われた",
  "寝ても疲れが取れない",
];

export default function Pain() {
  return (
    <section id="pain" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-5">
        <SectionHeading
          kicker="CHECK"
          title="こんなお悩み、ありませんか？"
          lead="ひとつでも当てはまる方は、お早めにご相談ください。"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WORRIES.map((w) => (
            <Card key={w} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/10 text-sm font-bold text-orange">
                ✓
              </span>
              <p className="text-sm font-medium leading-relaxed text-ink">{w}</p>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative rounded-lg border border-line bg-cream2 px-6 py-6 text-center shadow-sm">
            <span className="absolute left-6 top-0 -translate-y-1/2 rounded-full bg-orange px-3 py-1 text-xs font-bold text-white">
              POINT
            </span>
            <p className="font-head text-base font-bold leading-relaxed text-greenHeader sm:text-lg">
              「その不調、痛い場所だけが原因では
              <br className="hidden sm:block" />
              ないかもしれません。」
            </p>
          </div>
        </div>

        <CtaRow bookLabel="肩こり・腰痛を相談する" />
      </div>
    </section>
  );
}
