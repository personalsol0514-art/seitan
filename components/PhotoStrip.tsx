import Image from "next/image";

const photos = [
  { src: "/images/feature-01.jpg", caption: "丁寧なヒアリング" },
  { src: "/images/feature-02.jpg", caption: "独自の手技" },
  { src: "/images/feature-03.jpg", caption: "完全個室の空間" },
];

export default function PhotoStrip() {
  return (
    <div
      className="grid grid-cols-1 gap-px md:grid-cols-3"
      style={{ backgroundColor: "#D9CEB8" }}
    >
      {photos.map((p) => (
        <div key={p.src} className="relative" style={{ height: "140px" }}>
          <Image src={p.src} alt={p.caption} fill className="object-cover" />
          <div
            className="absolute bottom-0 left-0 w-full px-3 py-1.5 text-[11px] text-bgMain"
            style={{ backgroundColor: "#4A3728", letterSpacing: "0.05em" }}
          >
            {p.caption}
          </div>
        </div>
      ))}
    </div>
  );
}
