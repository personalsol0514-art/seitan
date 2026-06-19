const BOOK_URL = "https://bookom.jp";

const NAV_LINKS = [
  { label: "院長", href: "#therapist" },
  { label: "施術方針", href: "#philosophy" },
  { label: "流れ", href: "#flow" },
  { label: "料金", href: "#price" },
  { label: "アクセス", href: "#access" },
];

export default function Footer() {
  return (
    <footer className="bg-greenDeep text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="font-mincho text-2xl font-extrabold">整体 Natural</p>
            <p className="mt-2 text-sm text-paper/70">岡崎市の整体院</p>
            <p className="mt-6 text-sm leading-relaxed text-paper/80">
              〒444-0051 愛知県岡崎市本町通2丁目3 鳥居ビル1F
            </p>
            <p className="mt-2 text-sm text-paper/80">
              TEL{" "}
              <a
                href="tel:070-2282-5501"
                className="underline underline-offset-4"
              >
                070-2282-5501
              </a>
            </p>
          </div>

          <div className="flex flex-col md:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm tracking-wide text-paper/80 transition-opacity hover:opacity-60"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <p className="mt-6 text-sm text-paper/70">
              営業時間 9:00〜20:00（最終受付19:00）
            </p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-block w-fit bg-paper px-7 py-3 text-sm font-bold tracking-wide text-sumi transition-colors hover:bg-paper2"
            >
              予約
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-lineDark pt-6">
          <p className="text-xs text-paper/55">© 2026 整体 Natural</p>
        </div>
      </div>
    </footer>
  );
}
