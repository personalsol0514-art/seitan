import Image from "next/image";

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-sumi text-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[340px] w-full lg:min-h-[600px]">
          <Image
            src="/images/feature-02.jpg"
            alt="施術中の手元"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-16 md:px-14 md:py-24">
          <div className="flex items-start gap-6">
            <span className="vertical-rl mt-1 text-xs tracking-[0.4em] text-paper/55">
              施術方針
            </span>
            <div>
              <h2 className="font-mincho text-4xl font-extrabold leading-[1.15] text-paper md:text-6xl">
                ほぐすだけでは、
                <br />
                戻る。
              </h2>
              <p className="mt-8 max-w-xl text-base leading-loose text-paper/80 md:text-lg">
                表面の筋肉をほぐすだけでは、数日で元の身体に戻ってしまう。大切なのは「なぜそこに負担が集まるのか」を見つけること。当院は姿勢・動き・生活習慣のクセまで確認し、身体全体のバランスから根本原因にアプローチします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
