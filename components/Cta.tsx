export default function Cta() {
  return (
    <section
      className="text-center"
      style={{ backgroundColor: "#B89A7A", padding: "64px 32px" }}
    >
      <p
        className="text-[10px]"
        style={{ letterSpacing: "0.2em", color: "rgba(253,250,244,0.8)" }}
      >
        RESERVATION
      </p>
      <h2 className="mt-4 font-serif text-[22px] text-bgMain md:text-[26px]">
        まず、体の声を聞きにきてください。
      </h2>
      <p
        className="mt-4 text-[13px]"
        style={{ color: "rgba(253,250,244,0.9)", lineHeight: 1.9 }}
      >
        初回カウンセリング＋整体 60分 1,100円
        <br />
        岡崎市 東岡崎駅徒歩15分 ／ 駐車場あり
      </p>
      <a
        href="https://bookom.jp"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block px-10 py-4 text-[14px]"
        style={{ backgroundColor: "#FDFAF4", color: "#4A3728" }}
      >
        オンライン予約へ
      </a>
      <p
        className="mt-5 text-[11px]"
        style={{ color: "rgba(253,250,244,0.8)" }}
      >
        24時間受付 ／ 完全予約制
      </p>
    </section>
  );
}
