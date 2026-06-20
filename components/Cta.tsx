const BOOKING = "https://bookom.jp";

export default function Cta() {
  return (
    <section id="cta-final" className="bg-greenHeader text-white">
      <div className="mx-auto max-w-[1080px] px-5 py-16 text-center md:py-24">
        <h2 className="font-head text-2xl font-black leading-tight md:text-[34px]">
          まずは初回1,100円で、
          <br className="sm:hidden" />
          身体の状態を確認しませんか？
        </h2>
        <p className="mt-4 text-sm text-white/85 md:text-base">
          完全予約制・駐車場あり・土日祝も受付。お気軽にご相談ください。
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-md bg-orange px-9 py-4 text-lg font-bold text-white transition-colors hover:bg-orangeDark sm:w-auto"
          >
            今すぐ予約する →
          </a>
          <a
            href="tel:07022825501"
            className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-md border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            📞 070-2282-5501
          </a>
        </div>

        <p className="mt-5 text-xs text-white/75">受付 9:00〜20:00（年中無休）</p>
      </div>
    </section>
  );
}
