import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** ONE shared card style reused across the whole site. */
export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-lg border border-line bg-white p-5 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
