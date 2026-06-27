import SectionHeading from "./SectionHeading";
import Card from "./Card";

const REVIEWS = [
  {
    initial: "A",
    who: "A.K様",
    meta: "40代・女性",
    tag: "肩こり・首こり",
    head: "マッサージでは戻っていた肩こりが楽に",
    body: "どこに行っても戻っていた肩こりが、原因から見てもらえて本当に楽に。仕事に集中できます。",
  },
  {
    initial: "T",
    who: "T.S様",
    meta: "40代・男性",
    tag: "腰痛",
    head: "ぎっくり腰から趣味を再開できた",
    body: "その場しのぎでなく原因から見てくれて、今はゴルフも楽しめています。",
  },
  {
    initial: "M",
    who: "M.N様",
    meta: "20代・女性",
    tag: "猫背・姿勢",
    head: "姿勢が良くなったと言われる",
    body: "猫背を指摘されて来院。通ううちに姿勢が整い、周りからも変化を言われます。",
  },
  {
    initial: "Y",
    who: "Y.H様",
    meta: "30代・女性",
    tag: "産後の不調",
    head: "子連れでも安心して通える",
    body: "子どもを連れて行けるのが助かります。説明も丁寧で安心できました。",
  },
  {
    initial: "R",
    who: "R.I様",
    meta: "50代・男性",
    tag: "腰痛",
    head: "長年の腰痛が軽くなった",
    body: "長く付き合ってきた腰痛。生活のクセまで見てもらい、軽くなりました。",
  },
  {
    initial: "S",
    who: "S.K様",
    meta: "30代・女性",
    tag: "首こり・頭痛",
    head: "頭痛の回数が減った",
    body: "首こりからの頭痛が悩みでしたが、回数が減って助かっています。",
  },
];

export default function Voice() {
  return (
    <section id="voice" className="bg-cream2 py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-5">
        <SectionHeading kicker="VOICE" title="お客様の声" />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <Card key={r.who} className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-line/60 font-head font-black text-sub">
                  {r.initial}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-ink">{r.who}</p>
                  <p className="text-xs text-sub">{r.meta}・Google口コミ</p>
                </div>
              </div>
              <div className="mt-3 tracking-tight text-star">★★★★★</div>
              <p className="mt-2 font-serif text-base font-semibold leading-snug tracking-[0.04em] text-greenHeader">
                「{r.head}」
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-sub">
                {r.body}
              </p>
              <span className="mt-4 inline-flex w-fit items-center rounded-full bg-orange/10 px-3 py-1 text-xs font-bold text-orange">
                {r.tag}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
