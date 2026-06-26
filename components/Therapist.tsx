"use client";

import Image from "next/image";
import { useState } from "react";
import CtaRow from "./CtaRow";

const STAFFS = [
  {
    name: "片桐 潤明",
    role: "整体 Natural 院長 / 整体師",
    image: "/images/therapist.jpg",
    imagePosition: "18% 52%",
    copy: "不調の背景まで、一緒に見つけます。",
    lead: "痛い場所だけを見て終わるのではなく、姿勢・動き・生活のクセまで含めて確認します。",
    points: [
      {
        title: "整体師歴10年",
        desc: "肩こり・腰痛・姿勢の不調など、慢性的なお悩みに向き合ってきました。",
      },
      {
        title: "検査と説明を重視",
        desc: "今の身体の状態を確認し、原因の見立てを共有してから施術します。",
      },
      {
        title: "戻りにくい身体へ",
        desc: "その場の軽さだけでなく、日常で戻りにくいケアまで提案します。",
      },
    ],
  },
  {
    name: "スタッフ",
    role: "整体 Natural スタッフ",
    image: "/images/feature-01.jpg",
    imagePosition: "58% 48%",
    copy: "初めての方にも、安心できる時間を。",
    lead: "お悩みを丁寧に伺い、緊張せずに相談できる雰囲気づくりを大切にしています。",
    points: [
      {
        title: "丁寧なカウンセリング",
        desc: "小さな違和感や不安も話しやすいよう、最初の会話を大切にします。",
      },
      {
        title: "状態に合わせた対応",
        desc: "その日の身体の状態を確認し、無理のない施術を心がけます。",
      },
      {
        title: "セルフケアまで提案",
        desc: "施術後もラクな状態が続くよう、日常でできるケアをお伝えします。",
      },
    ],
  },
];

export default function Therapist() {
  const [active, setActive] = useState(0);

  const move = (direction: -1 | 1) => {
    setActive((current) => (current + direction + STAFFS.length) % STAFFS.length);
  };

  return (
    <section id="therapist" className="overflow-hidden bg-[#f6f1e8] py-16 md:py-24">
      <div className="mx-auto max-w-[1120px] px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange">
            PROFILE
          </p>
          <span className="mx-auto mt-3 block h-px w-9 bg-orange" />
          <h2 className="mt-5 font-serif text-2xl font-semibold leading-[1.6] tracking-[0.08em] text-greenHeader sm:text-3xl md:text-4xl">
            スタッフ紹介
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-sub md:text-base md:leading-8">
            どんな人が見てくれるのか、初めての方にも伝わるように紹介します。
          </p>
        </div>

        <div className="mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {STAFFS.map((staff) => (
                <article key={staff.name} className="w-full shrink-0">
                  <div className="grid items-stretch bg-[#fffdf8] shadow-[0_18px_45px_rgba(34,48,40,0.10)] lg:grid-cols-[0.9fr_1.1fr]">
                    <figure className="relative min-h-[280px] overflow-hidden lg:min-h-[590px]">
                      <Image
                        src={staff.image}
                        alt={`${staff.name}の紹介写真`}
                        fill
                        sizes="(max-width: 1023px) 100vw, 500px"
                        className="object-cover"
                        style={{ objectPosition: staff.imagePosition }}
                      />
                    </figure>

                    <div className="relative px-5 py-8 sm:px-8 md:px-10 lg:px-12 lg:py-12">
                      <div className="flex flex-col gap-4 border-b border-green/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="text-xs font-bold tracking-[0.18em] text-orange">
                            STAFF {String(STAFFS.indexOf(staff) + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-3 font-serif text-3xl font-semibold tracking-[0.12em] text-greenHeader md:text-[38px]">
                            {staff.name}
                          </h3>
                        </div>
                        <p className="text-sm font-bold tracking-[0.08em] text-sub">
                          {staff.role}
                        </p>
                      </div>

                      <p className="mt-7 font-serif text-2xl font-semibold leading-[1.65] tracking-[0.08em] text-greenHeader md:text-[32px]">
                        {staff.copy}
                      </p>
                      <p className="mt-5 text-sm font-medium leading-8 text-sub md:text-base md:leading-9">
                        {staff.lead}
                      </p>

                      <div className="mt-8 grid gap-0 border-y border-green/15">
                        {staff.points.map((point, index) => (
                          <div
                            key={point.title}
                            className="grid gap-4 border-green/15 py-5 sm:grid-cols-[64px_1fr] sm:gap-5 [&:not(:last-child)]:border-b"
                          >
                            <span className="font-serif text-2xl font-semibold text-[#b59a5a]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <div>
                              <h4 className="font-serif text-xl font-semibold tracking-[0.06em] text-greenHeader">
                                {point.title}
                              </h4>
                              <p className="mt-2 text-sm font-medium leading-7 text-sub">
                                {point.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <button
                type="button"
                onClick={() => move(-1)}
                className="flex h-12 w-12 items-center justify-center border border-green/20 bg-[#fffdf8] text-xl font-bold text-greenHeader transition-colors hover:bg-greenHeader hover:text-white"
                aria-label="前のスタッフを見る"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                className="flex h-12 w-12 items-center justify-center border border-green/20 bg-[#fffdf8] text-xl font-bold text-greenHeader transition-colors hover:bg-greenHeader hover:text-white"
                aria-label="次のスタッフを見る"
              >
                →
              </button>
            </div>

            <div className="flex items-center justify-center gap-3">
              {STAFFS.map((staff, index) => (
                <button
                  key={staff.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-px transition-all ${
                    active === index ? "w-12 bg-greenHeader" : "w-6 bg-green/25"
                  }`}
                  aria-label={`${staff.name}を見る`}
                />
              ))}
              <span className="ml-1 text-xs font-bold tracking-[0.18em] text-sub">
                {String(active + 1).padStart(2, "0")} / {String(STAFFS.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="relative mt-8 bg-greenHeader px-5 py-7 text-center text-white shadow-[0_14px_28px_rgba(7,63,42,0.18)] md:px-8 md:py-8">
            <span className="absolute -top-4 left-1/2 h-8 w-px bg-[#b59a5a]" aria-hidden />
            <p className="font-serif text-xl font-semibold leading-[1.8] tracking-[0.08em] md:text-2xl">
              「どこに行っても良くならない」という方こそ、
              <br className="hidden sm:block" />
              一度ご相談ください。
            </p>
          </div>
        </div>

        <CtaRow bookLabel="初回1,100円で相談する" />
      </div>
    </section>
  );
}
