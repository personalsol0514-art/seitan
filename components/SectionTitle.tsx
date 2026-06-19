import LeafSprig from "./LeafSprig";

type Props = {
  label?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ label, title, subtitle }: Props) {
  return (
    <div className="text-center">
      {label && <p className="eng-label mb-3">{label}</p>}
      <div className="flex items-center justify-center gap-3">
        <LeafSprig />
        <h2 className="font-serif text-2xl md:text-3xl text-ink leading-relaxed">
          {title}
        </h2>
        <LeafSprig flip />
      </div>
      {subtitle && (
        <p className="mt-4 text-sm text-sub leading-loose max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
