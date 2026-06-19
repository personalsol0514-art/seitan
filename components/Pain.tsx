const ITEMS = [
  { no: "01", text: "朝起きると、もう肩が重い" },
  { no: "02", text: "何年も腰痛と付き合っている" },
  { no: "03", text: "マッサージしても、すぐ戻る" },
  { no: "04", text: "姿勢の悪さを指摘される" },
  { no: "05", text: "寝ても疲れが取れない" },
];

export default function Pain() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-16 md:py-28">
        <h2 className="font-mincho text-3xl font-extrabold leading-tight md:text-5xl">
          こんな身体、
          <br className="sm:hidden" />
          放っていませんか。
        </h2>

        <ul className="mt-12 border-t border-line">
          {ITEMS.map((item) => (
            <li
              key={item.no}
              className="flex items-baseline gap-5 border-b border-line py-6 md:gap-10"
            >
              <span className="font-mincho text-3xl font-extrabold text-wood md:text-4xl">
                {item.no}
              </span>
              <span className="font-mincho text-xl font-semibold md:text-2xl">
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-inkSub md:text-base">
          ——その多くは、痛みの「原因」が放置されているだけです。
        </p>
      </div>
    </section>
  );
}
