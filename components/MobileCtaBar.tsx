const BOOKING = "https://bookom.jp";

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.12)]">
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
  );
}
