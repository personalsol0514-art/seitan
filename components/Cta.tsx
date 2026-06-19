const BOOK_URL = "https://bookom.jp";

export default function Cta() {
  return (
    <section className="bg-sumi text-paper">
      <div className="mx-auto max-w-[1100px] px-6 py-24 text-center md:px-16 md:py-32">
        <h2 className="font-mincho text-4xl font-extrabold leading-[1.2] md:text-6xl">
          身体を、ちゃんと
          <br className="sm:hidden" />
          見てもらう。
        </h2>
        <p className="mt-6 text-base text-paper/80 md:text-lg">
          まずは初回、60分 1,100円から。
        </p>
        <div className="mt-10">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener"
            className="inline-block bg-paper px-10 py-4 text-base font-bold tracking-wide text-sumi transition-colors hover:bg-paper2"
          >
            初回を予約する →
          </a>
        </div>
        <p className="mt-8 text-sm text-paper/60">
          完全予約制／お電話でも受付：
          <a href="tel:070-2282-5501" className="underline underline-offset-4">
            070-2282-5501
          </a>
        </p>
      </div>
    </section>
  );
}
