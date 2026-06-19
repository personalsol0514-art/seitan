import Image from "next/image";

const BOOK_URL = "https://bookom.jp";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden bg-sumi">
      <Image
        src="/images/hero.jpg"
        alt="整体 Natural の施術風景"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(22,20,15,0.88) 0%, rgba(22,20,15,0.72) 38%, rgba(22,20,15,0.15) 78%, rgba(22,20,15,0.05) 100%), linear-gradient(0deg, rgba(22,20,15,0.85) 0%, rgba(22,20,15,0.1) 45%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-32 md:px-16 md:pb-28">
        <p className="mb-6 text-xs tracking-[0.3em] text-paper/70 md:text-sm">
          岡崎・東岡崎｜整体師歴10年
        </p>
        <h1 className="font-mincho text-6xl font-extrabold leading-[1.05] text-paper sm:text-7xl md:text-8xl">
          ごまかさない、
          <br />
          <span className="ml-4 inline-block border-b-4 border-wood pb-1 md:ml-8">
            整体。
          </span>
        </h1>
        <p className="mt-8 max-w-xl text-base text-paper/85 md:text-lg">
          痛みの原因を見立て、根本から整える。
        </p>
        <div className="mt-10">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener"
            className="inline-block bg-paper px-8 py-4 text-base font-bold tracking-wide text-sumi transition-colors hover:bg-paper2"
          >
            初回を予約する ｜ 60分 1,100円
          </a>
        </div>
      </div>

      <span className="vertical-rl absolute right-5 top-1/2 z-10 -translate-y-1/2 text-xs tracking-[0.4em] text-paper/50 md:right-8">
        完全予約制
      </span>
    </section>
  );
}
