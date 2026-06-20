import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    q: "初めてでも大丈夫ですか？",
    a: "はい。多くの方が初めてのご来院です。丁寧にご説明しながら進めますのでご安心ください。",
  },
  {
    q: "どんな服装で行けばいいですか？",
    a: "動きやすい服装がおすすめです。お着替えのご用意もございます。",
  },
  {
    q: "駐車場はありますか？",
    a: "はい。店舗裏のタカラパーキングをご利用いただけます（無料）。",
  },
  {
    q: "子ども連れでも大丈夫ですか？",
    a: "はい。お子様連れでも安心してご来院いただけます。",
  },
  {
    q: "施術は痛いですか？",
    a: "強い刺激ではなく、原因に合わせて調整します。痛みが心配な方はご相談ください。",
  },
  {
    q: "どれくらい通えばいいですか？",
    a: "症状により異なります。初回に状態を確認し、通院の目安をお伝えします。",
  },
  {
    q: "予約は必要ですか？",
    a: "完全予約制です。お電話またはオンラインからご予約ください。",
  },
  {
    q: "支払い方法は何がありますか？",
    a: "現金・各種クレジットカード・QR決済に対応しています。",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-5">
        <SectionHeading kicker="FAQ" title="よくあるご質問" />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-lg border border-line bg-white shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-start gap-3 px-5 py-4">
                <span className="font-head text-lg font-black text-orange">Q</span>
                <span className="flex-1 text-sm font-bold text-ink sm:text-base">
                  {f.q}
                </span>
                <span className="mt-1 shrink-0 text-orange transition-transform group-open:rotate-45">
                  ＋
                </span>
              </summary>
              <div className="flex items-start gap-3 border-t border-line px-5 py-4">
                <span className="font-head text-lg font-black text-green">A</span>
                <p className="flex-1 text-sm leading-relaxed text-sub">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
