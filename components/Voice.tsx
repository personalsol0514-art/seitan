const QUOTES = [
  {
    text: "原因をきちんと説明してくれて、納得して通えました。肩が軽くなり、仕事に集中できています。",
    who: "30代・女性（肩こり）",
  },
  {
    text: "ぎっくり腰から通い始め、今は趣味のゴルフを思いきり楽しめています。",
    who: "40代・男性（腰痛）",
  },
  {
    text: "猫背が整い、周りから“姿勢が良くなったね”と言われるようになりました。",
    who: "20代・女性（姿勢）",
  },
];

export default function Voice() {
  return (
    <section className="bg-green text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-16 md:py-28">
        <span className="vertical-rl text-xs tracking-[0.4em] text-paper/55">
          お客様の声
        </span>
        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {QUOTES.map((q) => (
            <figure key={q.who} className="flex flex-col">
              <span className="font-mincho text-6xl font-extrabold leading-none text-paper/40">
                「
              </span>
              <blockquote className="-mt-4 font-mincho text-xl font-semibold leading-relaxed text-paper md:text-2xl">
                {q.text}
              </blockquote>
              <figcaption className="mt-6 border-t border-lineDark pt-4 text-sm text-paper/60">
                {q.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
