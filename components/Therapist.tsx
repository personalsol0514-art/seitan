import Image from "next/image";

export default function Therapist() {
  return (
    <section className="bg-cream text-ink">
      <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 px-5 py-16 md:px-6 md:py-24">
        <div className="relative w-full aspect-[4/5] lg:aspect-[4/5] overflow-hidden rounded-xl shadow-md">
          <Image
            src="/images/therapist.jpg"
            alt="院長 片桐 潤明"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-block bg-green text-white text-xs font-bold px-3 py-1 rounded-full">
            院長
          </span>
          <h2 className="mt-4 font-head font-black text-2xl md:text-4xl leading-tight">
            身体を&quot;見立てる&quot;ことから始めます。
          </h2>
          <p className="mt-6 text-[15px] md:text-base leading-loose text-sub">
            当院ではまず、痛みの出ている場所だけでなく、姿勢・動き・生活習慣のクセまで丁寧に確認します。原因を見つけ、ご説明してから施術。再発させないためのセルフケアまでお伝えします。
          </p>
          <div className="mt-8 border-t border-line pt-5">
            <p className="font-head font-black text-xl">片桐 潤明</p>
            <p className="mt-1 text-sm text-sub">
              整体 Natural 院長・整体師歴10年
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
