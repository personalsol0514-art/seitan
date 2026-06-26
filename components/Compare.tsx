import Image from "next/image";
import { Fragment } from "react";
import CtaRow from "./CtaRow";

const DIFFERENCES = [
  {
    label: "よくある整体",
    title: "つらい場所をその場でほぐす",
    body: "一時的に楽になることはあっても、原因が残ると戻りやすい状態です。",
    tone: "muted",
  },
  {
    label: "整体Natural",
    title: "原因を見つけ、身体全体から整える",
    body: "姿勢・動作・生活習慣まで確認し、戻りにくい身体づくりを目指します。",
    tone: "natural",
  },
];

export default function Compare() {
  return (
    <section id="compare" className="overflow-hidden bg-[#f6f1e8] py-16 md:py-24">
      <div className="mx-auto max-w-[1120px] px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.22em] text-orange">
            BEFORE / AFTER
          </p>
          <span className="mx-auto mt-3 block h-px w-9 bg-orange" />
          <h2 className="mt-5 font-serif text-2xl font-semibold leading-[1.7] tracking-[0.08em] text-greenHeader sm:text-3xl md:text-4xl">
            違いは、
            <br className="sm:hidden" />
            施術後の戻りにくさ。
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-sub md:text-base md:leading-8">
            一般的な整体との違いを、施術の考え方と施術後の変化で比べてみてください。
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[960px] md:mt-14">
          <div className="grid gap-4 md:grid-cols-[1fr_72px_1fr] md:items-stretch md:gap-0">
            {DIFFERENCES.map((item, index) => (
              <Fragment key={item.label}>
                <article
                  className={`grid overflow-hidden bg-[#fffdf8] shadow-[0_12px_26px_rgba(34,48,40,0.07)] md:min-h-[260px] ${
                    item.tone === "natural"
                      ? "md:col-start-3 md:row-start-1"
                      : "md:col-start-1 md:row-start-1"
                  }`}
                >
                  <div className="grid grid-cols-[82px_1fr] md:grid-cols-1">
                    <div
                      className={`flex items-center justify-center px-3 py-5 text-center text-xs font-black leading-5 tracking-[0.14em] text-white md:min-h-[56px] ${
                        item.tone === "natural" ? "bg-green" : "bg-[#8e938b]"
                      }`}
                    >
                      <span className="[writing-mode:vertical-rl] md:[writing-mode:horizontal-tb]">
                        {item.label}
                      </span>
                    </div>
                    <div
                      className={`px-5 py-6 md:px-7 md:py-8 ${
                        item.tone === "natural" ? "bg-[#edf6eb]" : ""
                      }`}
                    >
                      <p className="text-xs font-black tracking-[0.2em] text-orange">
                        {index === 0 ? "BEFORE" : "AFTER"}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl font-semibold leading-[1.55] tracking-[0.08em] text-greenHeader md:text-[28px]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm font-medium leading-7 text-sub md:text-base md:leading-8">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </article>

                {index === 0 && (
                  <div className="flex h-14 items-center justify-center text-4xl font-black text-orange md:col-start-2 md:row-start-1 md:h-auto md:text-5xl">
                    <span className="md:rotate-[-90deg]">↓</span>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        <figure className="relative mx-auto mt-10 h-[260px] max-w-[820px] overflow-hidden rounded-b-[90px] bg-greenHeader md:mt-14 md:h-[360px] md:rounded-b-[140px]">
          <Image
            src="/images/hero.jpg"
            alt="整体Naturalの施術風景"
            width={1100}
            height={720}
            className="h-full w-full object-cover object-[52%_32%]"
            sizes="(max-width: 767px) 100vw, 820px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-greenHeader/80 via-greenHeader/25 to-transparent" />
          <figcaption className="absolute inset-x-6 bottom-7 text-center md:bottom-10">
            <p className="font-serif text-2xl font-semibold leading-[1.65] tracking-[0.08em] text-white md:text-4xl">
              その場の軽さから、
              <br />
              続く変化へ。
            </p>
          </figcaption>
        </figure>

        <div className="mx-auto mt-10 max-w-[820px] border-y border-green/20 px-2 py-8 text-center md:mt-12 md:py-10">
          <p className="font-serif text-xl font-semibold leading-9 tracking-[0.08em] text-greenHeader md:text-3xl md:leading-[1.7]">
            痛みの場所だけでなく、
            <br />
            原因から向き合う整体です。
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-sub md:text-base">
            初回では身体の状態を確認し、今の痛みがどこから来ているのかを一緒に整理します。
          </p>
        </div>

        <CtaRow bookLabel="まずは初回1,100円で身体の状態を確認する" />
      </div>
    </section>
  );
}
