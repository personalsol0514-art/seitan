type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export default function Button({ href, children, external = false, className = "" }: Props) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a
      href={href}
      {...externalProps}
      className={`inline-flex items-center gap-2 rounded-full bg-green px-7 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-greenDark ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}
