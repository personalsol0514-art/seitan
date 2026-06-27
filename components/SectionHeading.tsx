type Props = {
  kicker: string;
  title: string;
  lead?: string;
  light?: boolean;
};

export default function SectionHeading({ kicker, title, lead, light }: Props) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold tracking-[0.22em] text-orange">
        {kicker}
      </p>
      <span className="mx-auto mt-3 block h-px w-9 bg-orange" />
      <h2
        className={`mt-5 font-serif text-2xl font-semibold leading-[1.7] tracking-[0.08em] sm:text-3xl md:text-4xl ${
          light ? "text-white" : "text-greenHeader"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mx-auto mt-5 max-w-xl text-sm leading-7 md:text-base md:leading-8 ${
            light ? "text-white/85" : "text-sub"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
