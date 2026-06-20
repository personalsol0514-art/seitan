type Props = {
  kicker: string;
  title: string;
  lead?: string;
  light?: boolean;
};

export default function SectionHeading({ kicker, title, lead, light }: Props) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="flex flex-col items-center">
        <span
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-orange" : "text-orange"
          }`}
        >
          {kicker}
        </span>
        <span className="mt-2 block h-[3px] w-9 rounded-full bg-orange" />
      </div>
      <h2
        className={`mt-4 font-head font-black text-2xl leading-tight sm:text-3xl md:text-[34px] ${
          light ? "text-white" : "text-greenHeader"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base ${
            light ? "text-white/85" : "text-sub"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
