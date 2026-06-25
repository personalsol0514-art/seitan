const BOOKING = "https://bookom.jp";

export default function MobileCtaBar() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 shadow-[0_-4px_12px_rgba(0,0,0,0.12)] lg:hidden">
        <a
          href="tel:07022825501"
          className="flex items-center justify-center gap-1.5 bg-green text-white font-bold py-4 text-sm"
        >
          📞 電話する
        </a>
        <a
          href={BOOKING}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-1.5 bg-orange text-white font-bold py-4 text-sm"
        >
          予約する →
        </a>
      </div>

      <div className="fixed right-0 top-1/2 z-50 hidden w-[112px] -translate-y-1/2 overflow-hidden rounded-l-[22px] shadow-[0_12px_38px_rgba(8,35,22,0.3)] lg:block">
        <a
          href="tel:07022825501"
          className="flex h-[190px] flex-col items-center justify-center gap-4 bg-greenHeader text-white transition-colors hover:bg-greenDark"
          aria-label="電話で問い合わせる"
        >
          <span className="text-3xl leading-none" aria-hidden>☎</span>
          <span
            className="font-head text-xl font-bold tracking-[0.28em]"
            style={{ writingMode: "vertical-rl" }}
          >
            電話
          </span>
          <span className="h-12 w-px bg-white/75" aria-hidden />
        </a>
        <a
          href={BOOKING}
          target="_blank"
          rel="noopener"
          className="flex h-[190px] flex-col items-center justify-center gap-4 border-l border-greenHeader/20 bg-[#fbfaf5] text-greenHeader transition-colors hover:bg-cream"
          aria-label="WEB予約を開く"
        >
          <span className="text-3xl leading-none" aria-hidden>▣</span>
          <span
            className="font-head text-lg font-bold tracking-[0.18em]"
            style={{ writingMode: "vertical-rl" }}
          >
            WEB予約
          </span>
        </a>
      </div>
    </>
  );
}
