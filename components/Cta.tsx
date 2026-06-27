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

        <div className="mt-8 hidden items-center justify-center lg:flex">
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener"
            className="inline-flex min-w-[300px] items-center justify-center gap-4 rounded-md bg-orange px-9 py-4 text-lg font-bold text-white shadow-[0_7px_20px_rgba(0,0,0,0.16)] transition-colors hover:bg-orangeDark"
          >
            今すぐ予約する →
          </a>
        </div>

        <p className="mt-5 text-xs text-white/75">受付 9:00〜20:00（年中無休）</p>
      </div>
    </section>
  );
}
