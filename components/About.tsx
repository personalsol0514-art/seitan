import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/images/feature-01.jpg"
            alt="整体 Natural の施術の様子"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eng-label mb-3">ABOUT</p>
          <h2 className="font-serif text-2xl leading-relaxed text-ink md:text-3xl md:leading-relaxed">
            その場しのぎではなく、原因を見つけて整える整体。
          </h2>
          <p className="mt-6 text-sm leading-loose text-sub">
            当院では、カウンセリング・姿勢チェック・動作確認をもとに、あなたの不調の原因を丁寧に見つけ出します。身体のバランス・筋膜・関節・神経の動きを整え、「戻りにくい身体」へ導きます。一人ひとりに合わせたオーダーメイド整体で、健康的で快適な毎日をサポートします。
          </p>
          <div className="mt-7">
            <Button href="#flow">詳しく見る</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
