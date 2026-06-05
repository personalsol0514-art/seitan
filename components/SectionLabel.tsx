export default function SectionLabel({ children }: { children: string }) {
  return (
    <p className="eng-label mb-4" style={{ letterSpacing: "0.2em" }}>
      {children}
    </p>
  );
}
