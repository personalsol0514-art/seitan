import Button from "./Button";
import LeafSprig from "./LeafSprig";

const BOOKING_URL = "https://bookom.jp";

export default function Cta() {
  return (
    <section id="cta" className="bg-gradient-to-b from-greenSoft to-cream">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <div className="flex items-center justify-center gap-3">
          <LeafSprig />
          <LeafSprig flip />
        </div>
        <h2 className="mt-4 font-serif text-2xl leading-relaxed text-ink md:text-3xl md:leading-relaxed">
          つらい不調を、根本から整えたいあなたへ
        </h2>
        <p className="mt-4 text-sm leading-loose text-sub">
          まずは初回整体で、身体の変化を体感してください。
        </p>

        <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-2xl bg-white px-5 py-4 shadow-sm">
          <span className="rounded-full bg-green px-3 py-1 text-xs font-medium text-white">
            初回限定
          </span>
          <span className="text-sm text-ink">カウンセリング＋整体 60分</span>
          <span className="font-serif text-2xl font-medium text-green">1,100円</span>
          <span className="text-xs text-mute">(税込)</span>
        </div>

        <div className="mt-8">
          <Button href={BOOKING_URL} external>
            初回整体を予約する
          </Button>
        </div>
      </div>
    </section>
  );
}
