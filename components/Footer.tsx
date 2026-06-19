import LeafSprig from "./LeafSprig";

const BOOKING_URL = "https://bookom.jp";

const links = [
  { label: "HOME", href: "#top" },
  { label: "初めての方へ", href: "#about" },
  { label: "施術について", href: "#flow" },
  { label: "料金", href: "#price" },
  { label: "お客様の声", href: "#voice" },
  { label: "アクセス", href: "#access" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <LeafSprig size={26} />
            <span className="leading-tight">
              <span className="block font-serif text-lg text-ink">整体 Natural</span>
              <span className="block text-[10px] tracking-wide text-mute">岡崎市の整体院</span>
            </span>
          </div>
        </div>

        <nav className="flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-sub transition-colors hover:text-green"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div>
          <p className="text-sm font-bold text-ink">ご予約・お問い合わせ</p>
          <a href="tel:070-2282-5501" className="mt-3 block font-serif text-2xl text-green">
            ☎ 070-2282-5501
          </a>
          <p className="mt-2 text-xs text-sub">
            営業時間 9:00〜20:00／年中無休・完全予約制
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-greenDark"
          >
            オンライン予約 →
          </a>
        </div>
      </div>

      <p className="border-t border-line py-5 text-center text-xs text-mute">
        © 2026 整体 Natural
      </p>
    </footer>
  );
}
