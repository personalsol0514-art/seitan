const BOOKING = "https://bookom.jp";

export default function MobileCtaBar() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 bg-white px-3 pb-[max(env(safe-area-inset-bottom),12px)] pt-2 shadow-[0_-6px_24px_rgba(8,35,22,0.16)] lg:hidden">
        <p className="mb-1.5 text-center text-[10px] font-bold tracking-[0.04em] text-greenHeader">
          空き状況は30秒で確認できます
        </p>
        <a
          href={BOOKING}
          target="_blank"
          rel="noopener"
          className="flex min-h-[56px] w-full items-center justify-center gap-5 rounded-md bg-orange px-5 text-white shadow-[0_5px_14px_rgba(236,115,36,0.25)] transition-colors active:bg-orangeDark"
          aria-label="初回1,100円でWEB予約する"
        >
          <span className="flex flex-col items-center leading-none">
            <span className="text-base font-bold">初回1,100円で予約</span>
            <span className="mt-1.5 text-[10px] font-medium text-white/85">24時間WEB受付</span>
          </span>
          <span className="text-xl" aria-hidden>→</span>
        </a>
      </div>

      <div className="fixed right-0 top-1/2 z-50 hidden w-[112px] -translate-y-1/2 overflow-hidden rounded-l-[18px] shadow-[0_12px_38px_rgba(8,35,22,0.24)] lg:block">
        <a
          href={BOOKING}
          target="_blank"
          rel="noopener"
          className="flex h-[270px] flex-col items-center justify-center gap-5 bg-orange text-white transition-colors hover:bg-orangeDark"
          aria-label="WEB予約を開く"
        >
          <span className="text-xs font-bold tracking-[0.08em]">初回 1,100円</span>
          <span
            className="font-head text-lg font-bold tracking-[0.2em]"
            style={{ writingMode: "vertical-rl" }}
          >
            WEB予約
          </span>
          <span className="text-xl" aria-hidden>→</span>
        </a>
      </div>
    </>
  );
}
