type Props = {
  flip?: boolean;
  className?: string;
  size?: number;
};

export default function LeafSprig({ flip = false, className = "", size = 22 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`text-green ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <path d="M12 21V6" />
      <path d="M12 8c-1.6-2-4-2.4-6-2 .3 2.2 1.7 4.1 4 4.6 .9.2 1.6.1 2-.2" />
      <path d="M12 12c1.6-2 4-2.4 6-2-.3 2.2-1.7 4.1-4 4.6-.9.2-1.6.1-2-.2" />
      <path d="M12 16c-1.4-1.7-3.4-2.1-5.2-1.7.3 1.9 1.5 3.5 3.5 4 .8.2 1.4.1 1.7-.1" />
    </svg>
  );
}
