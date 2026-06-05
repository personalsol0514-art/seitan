import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="整体Natural 院内の様子"
        fill
        priority
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(60,42,28,0.45)" }}
      />
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="px-9 pb-12" style={{ paddingTop: "48px" }}>
          <p
            className="mb-5 text-[10px]"
            style={{
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            SEITAI NATURAL / 岡崎市の整体院
          </p>
          <h1
            className="font-serif leading-[1.4] text-bgMain text-[28px] md:text-[34px]"
          >
            体は、
            <br />
            <span
              style={{ borderBottom: "2px solid #D9CEB8" }}
            >
              変われる。
            </span>
            <br />
            ただ、正直に。
          </h1>
          <p
            className="mt-6 text-[13px]"
            style={{
              lineHeight: 2,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            慢性的な痛み・自律神経・姿勢のゆがみ——
            <br />
            その奥にある原因から、丁寧に整えます。
          </p>
        </div>
      </div>
    </section>
  );
}
