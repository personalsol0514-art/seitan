const BOOKING =
  "https://bookom.jp/reservation?company=84&shop=263&course=1740&lang=ja";

type Props = {
  bookLabel: string;
};

export default function CtaRow({ bookLabel }: Props) {
  return (
    <div className="mt-10 hidden items-center justify-center gap-3 lg:flex">
      <a
        href={BOOKING}
        target="_blank"
        rel="noopener"
        className="inline-flex min-w-[280px] items-center justify-center gap-4 rounded-md bg-orange px-8 py-4 text-base font-bold text-white shadow-[0_6px_18px_rgba(236,115,36,0.2)] transition-colors hover:bg-orangeDark"
      >
        {bookLabel} →
      </a>
    </div>
  );
}
