const BOOKING =
  "https://bookom.jp/reservation?company=84&shop=263&course=1740&lang=ja";

const NAV_LINKS = [
  { label: "お悩み", href: "#pain" },
  { label: "原因", href: "#causes" },
  { label: "整体Naturalとは", href: "#compare" },
  { label: "対応症状", href: "#symptoms" },
  { label: "料金", href: "#price" },
  { label: "アクセス", href: "#access" },
];

export default function Footer() {
  return (
    <footer className="bg-greenHeader text-white pb-16 lg:pb-0">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="font-head font-black text-2xl">整体 Natural</p>
            <p className="mt-1 text-sm text-white/70">岡崎市の整体院</p>
            <p className="mt-5 text-sm leading-relaxed text-white/85">
              〒444-0051 愛知県岡崎市本町通2丁目3 鳥居ビル1F
            </p>
            <p className="mt-2 text-sm text-white/85">
              TEL{" "}
              <a href="tel:07022825501" className="underline underline-offset-4">
                070-2282-5501
              </a>
            </p>
            <p className="mt-2 text-sm text-white/85">
              営業時間 11:00〜20:00（最終受付19:00）／年中無休
            </p>
          </div>

          <div className="flex flex-col md:items-end">
            <nav className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href={BOOKING}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex w-fit items-center bg-orange hover:bg-orangeDark text-white font-bold text-sm px-7 py-3 rounded-md transition-colors"
            >
              予約する →
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-5">
          <p className="text-xs text-white/55">© 2026 整体 Natural</p>
        </div>
      </div>
    </footer>
  );
}
