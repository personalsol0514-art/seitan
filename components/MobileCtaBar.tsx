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

      <div className="fixed bottom-6 right-6 z-50 hidden w-[300px] overflow-hidden rounded-lg bg-white shadow-[0_12px_36px_rgba(15,40,25,0.22)] ring-1 ring-line lg:block">
        <div className="bg-greenHeader px-5 py-3 text-white">
          <p className="text-xs font-bold tracking-wide">ご予約・お問い合わせ</p>
          <p className="mt-0.5 text-[11px] text-white/80">完全予約制 / 受付 9:00〜20:00</p>
        </div>
        <div className="grid grid-cols-2 gap-2 p-3">
          <a
            href="tel:07022825501"
            className="flex items-center justify-center rounded-md border border-green px-3 py-3 text-sm font-black text-green transition-colors hover:bg-cream"
          >
            電話する
          </a>
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center rounded-md bg-orange px-3 py-3 text-sm font-bold text-white transition-colors hover:bg-orangeDark"
          >
            予約する
          </a>
        </div>
      </div>
    </>
  );
}
