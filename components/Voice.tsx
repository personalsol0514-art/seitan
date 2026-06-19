const REVIEWS = [
  {
    head: "原因をしっかり説明してくれた",
    body: "どこに行っても良くならなかった肩こりが、通ううちに本当に楽になりました。仕事に集中できます。",
    who: "A.K様（40代・女性／肩こり）",
  },
  {
    head: "もう戻らないと実感",
    body: "ぎっくり腰で駆け込みました。その場しのぎでなく、原因から見てくれて今は趣味も楽しめています。",
    who: "T.S様（40代・男性／腰痛）",
  },
  {
    head: "姿勢が変わった",
    body: "猫背を指摘されて通い始め、周りから“姿勢が良くなったね”と言われるように。",
    who: "M.N様（20代・女性／姿勢）",
  },
  {
    head: "子連れでも安心",
    body: "子どもを連れて通えるのが本当に助かります。先生が優しく、説明も丁寧です。",
    who: "Y.H様（30代・女性／産後の不調）",
  },
];

export default function Voice() {
  return (
    <section id="voice" className="bg-cream text-ink">
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-6 md:py-24">
        <div className="text-center">
          <h2 className="font-head font-black text-2xl md:text-4xl">お客様の声</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {REVIEWS.map((r) => (
            <figure
              key={r.who}
              className="bg-white border border-line rounded-xl p-6 shadow-sm"
            >
              <div className="text-star text-lg tracking-tight">★★★★★</div>
              <p className="mt-3 font-head font-black text-lg text-greenHeader leading-snug">
                「{r.head}」
              </p>
              <blockquote className="mt-3 text-[15px] leading-relaxed text-sub">
                {r.body}
              </blockquote>
              <figcaption className="mt-4 border-t border-line pt-3 text-sm font-medium text-ink">
                — {r.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
