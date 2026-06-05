import Image from "next/image";
import SectionLabel from "./SectionLabel";

const tags = ["整体師歴10年", "根本改善", "自律神経", "姿勢改善"];

export default function Therapist() {
  return (
    <section
      id="therapist"
      className="grid grid-cols-1 bg-bgAccent md:grid-cols-2"
    >
      <div className="relative" style={{ aspectRatio: "3 / 4" }}>
        <Image
          src="/images/therapist.jpg"
          alt="整体Natural 院長 片桐 潤明"
          fill
          className="object-cover"
        />
      </div>

      <div
        className="flex flex-col justify-center"
        style={{ padding: "44px 40px" }}
      >
        <SectionLabel>THERAPIST / 院長紹介</SectionLabel>
        <h2 className="font-serif text-[24px] text-textMain">片桐 潤明</h2>
        <p className="mt-1 text-[11px]" style={{ color: "#9E8E7E" }}>
          整体Natural 院長 / Therapist
        </p>

        <div
          className="my-6 w-full"
          style={{ borderTop: "1px solid #D9CEB8" }}
        />

        <p className="text-[13px] text-textSub" style={{ lineHeight: 2.2 }}>
          「また揉んでもらうだけ」では、本当は変わらない。
          <br />
          私はそう考え、その場の気持ちよさで終わらない整体を続けてきました。
          痛みや不調の奥にある原因を一緒に探し、なぜそうなったのかを丁寧にお伝えします。
          お一人おひとりの体と生活に合わせて、根本から整えていくことが私の役割です。
          通い終えたあとも自分で体を守れるよう、最後まで責任を持って向き合います。
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 text-[11px] text-textSub"
              style={{ border: "1px solid #C8B8A4" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
