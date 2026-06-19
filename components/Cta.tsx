const BOOKING = "https://bookom.jp";

export default function Cta() {
  return (
    <section className="bg-green text-white">
      <div className="mx-auto max-w-4xl px-5 py-16 md:px-6 md:py-24 text-center">
        <h2 className="font-head font-black text-2xl md:text-4xl leading-tight">
          まずは初回1,100円で、身体の変化を。
        </h2>
        <p className="mt-4 text-white/90 text-sm md:text-base">
          完全予約制・駐車場あり・土日祝も受付。
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center bg-orange hover:bg-orangeDark text-white font-bold text-lg px-9 py-4 rounded-md transition-colors"
          >
            今すぐ予約する →
          </a>
          <a
            href="tel:07022825501"
            className="inline-flex items-center justify-center gap-2 bg-white text-green font-bold text-lg px-8 py-4 rounded-md hover:bg-cream transition-colors"
          >
            📞 070-2282-5501
          </a>
        </div>

        <p className="mt-5 text-xs text-white/80">
          受付 9:00〜20:00（年中無休）
        </p>
      </div>
    </section>
  );
}
