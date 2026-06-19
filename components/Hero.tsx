import Image from "next/image";
import Button from "./Button";

const BOOKING_URL = "https://bookom.jp";

export default function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-5 py-14 lg:min-h-[88vh] lg:flex-row lg:gap-12 lg:py-20">
        <div className="w-full lg:w-[48%]">
          <h1 className="font-serif text-3xl leading-relaxed text-ink sm:text-4xl lg:text-5xl lg:leading-relaxed">
            慢性的な
            <span className="border-b-2 border-green">肩こり・腰痛</span>
            を、
            <span className="border-b-2 border-green">原因</span>
            から整える整体院。
          </h1>
          <p className="mt-6 font-serif text-lg text-sub sm:text-xl">
            体は、変われる、ただ、正直に。
          </p>
          <p className="mt-4 text-sm leading-loose text-sub">
            姿勢・筋膜・生活習慣まで見て、不調の根本改善を目指します。
          </p>

          <div className="mt-7 inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl bg-cream px-5 py-4 shadow-sm">
            <span className="rounded-full bg-green px-3 py-1 text-xs font-medium text-white">
              初回限定
            </span>
            <span className="text-sm text-ink">カウンセリング＋整体 60分</span>
            <span className="font-serif text-2xl font-medium text-green">1,100円</span>
            <span className="text-xs text-mute">(税込)</span>
          </div>

          <div className="mt-7">
            <Button href={BOOKING_URL} external>
              初回整体を予約する
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-[52%]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-md sm:aspect-[3/4]">
            <Image
              src="/images/hero.jpg"
              alt="整体 Natural の施術風景"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
