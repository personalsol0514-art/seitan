import Image from "next/image";

export default function Therapist() {
  return (
    <section id="therapist" className="bg-white text-ink">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch lg:grid-cols-2">
        <div className="relative min-h-[440px] w-full lg:min-h-[680px]">
          <Image
            src="/images/therapist.jpg"
            alt="院長 片桐 潤明"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-16 md:px-14 md:py-24">
          <div className="flex items-start gap-6">
            <span className="vertical-rl mt-1 text-xs tracking-[0.4em] text-inkSub">
              院長
            </span>
            <div>
              <h2 className="font-mincho text-3xl font-extrabold leading-[1.2] md:text-5xl">
                “その場しのぎ”の
                <br />
                整体は、しない。
              </h2>
              <p className="mt-8 max-w-xl text-base leading-loose text-inkSub md:text-lg">
                当院ではまず、身体を丁寧に「見立てる」ことから始めます。痛みの出ている場所だけでなく、姿勢・動き・生活習慣のクセまで確認し、不調の根本原因を見つけ出す。そのうえで一人ひとりに合わせて施術を組み立てます。
              </p>

              <div className="mt-10 border-t border-line pt-6">
                <p className="font-mincho text-2xl font-extrabold md:text-3xl">
                  片桐 潤明
                </p>
                <p className="mt-2 text-sm text-inkSub">
                  整体 Natural 院長 ／ 整体師歴10年
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
