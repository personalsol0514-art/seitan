import Image from "next/image";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 border-b border-border bg-bgMain md:grid-cols-2"
    >
      <div className="relative min-h-[320px] md:min-h-[480px]">
        <Image
          src="/images/about.jpg"
          alt="整体Natural 院内"
          fill
          className="object-cover"
        />
        <span
          className="absolute bottom-4 left-4 bg-bgMain px-3 py-2 text-[11px] text-textMain"
          style={{ letterSpacing: "0.05em" }}
        >
          整体Natural / 院内
        </span>
      </div>

      <div
        className="flex flex-col justify-center"
        style={{ padding: "44px 40px" }}
      >
        <SectionLabel>ABOUT / 当院について</SectionLabel>
        <p className="font-serif text-[17px] leading-[1.8] text-textMain">
          「体の不調は、
          <br />
          体が正直に出しているサインです。」
        </p>
        <p
          className="mt-6 text-[12px] text-textSub"
          style={{ lineHeight: 2 }}
        >
          長く続く腰痛や肩こりは、ただ我慢すべきものではなく、体が正直に発しているサインです。
          整体Naturalでは、その場しのぎのほぐしで終わらせず、なぜ不調が起きているのかという原因にまで丁寧に目を向けます。
          一人ひとりの体と生活に寄り添いながら、根本から整え、安心して通える整体院を目指しています。
        </p>
      </div>
    </section>
  );
}
