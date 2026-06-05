"use client";

import { useState } from "react";

export default function IllustFrame({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex w-full items-center justify-center"
        style={{
          aspectRatio: "4 / 3",
          backgroundColor: "#EDE5D4",
          border: "1.5px dashed #C8B8A4",
        }}
        aria-label={alt}
      >
        <span className="text-[10px]" style={{ color: "#9E8E7E" }}>
          illustration
        </span>
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-full object-cover"
      style={{ aspectRatio: "4 / 3" }}
    />
  );
}
