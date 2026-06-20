const BOOKING = "https://bookom.jp";

type Props = {
  bookLabel: string;
  light?: boolean;
};

export default function CtaRow({ bookLabel, light }: Props) {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <a
        href={BOOKING}
        target="_blank"
        rel="noopener"
        className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-md bg-orange px-7 py-4 text-base font-bold text-white transition-colors hover:bg-orangeDark sm:w-auto"
      >
        {bookLabel} →
      </a>
      <a
        href="tel:07022825501"
        className={`inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-md border-2 px-7 py-4 text-base font-bold transition-colors sm:w-auto ${
          light
            ? "border-white bg-transparent text-white hover:bg-white/10"
            : "border-green bg-white text-green hover:bg-cream"
        }`}
      >
        📞 070-2282-5501
      </a>
    </div>
  );
}
