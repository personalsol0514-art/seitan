import SectionLabel from "./SectionLabel";

export default function Access() {
  return (
    <section
      id="access"
      className="grid grid-cols-1 border-t border-border bg-bgMain md:grid-cols-2"
    >
      <div className="min-h-[320px] md:min-h-[440px]">
        <iframe
          title="整体Natural 地図"
          src="https://maps.google.com/maps?q=愛知県岡崎市本町通2丁目3+鳥居ビル&output=embed&z=16&hl=ja"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block", minHeight: "320px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div
        className="flex flex-col justify-center"
        style={{ padding: "44px 40px" }}
      >
        <SectionLabel>ACCESS / アクセス</SectionLabel>
        <h2 className="font-serif text-[22px] text-textMain">整体 Natural</h2>
        <dl className="mt-6 space-y-3 text-[13px] text-textSub">
          <div>
            <dt className="text-[10px]" style={{ color: "#9E8E7E", letterSpacing: "0.1em" }}>
              住所
            </dt>
            <dd className="mt-1">
              〒444-0051 愛知県岡崎市本町通2丁目3 鳥居ビル1F
            </dd>
          </div>
          <div>
            <dt className="text-[10px]" style={{ color: "#9E8E7E", letterSpacing: "0.1em" }}>
              アクセス
            </dt>
            <dd className="mt-1">東岡崎駅から徒歩15分</dd>
          </div>
          <div>
            <dt className="text-[10px]" style={{ color: "#9E8E7E", letterSpacing: "0.1em" }}>
              駐車場
            </dt>
            <dd className="mt-1">駐車場あり（店舗裏 タカラパーキング）</dd>
          </div>
          <div>
            <dt className="text-[10px]" style={{ color: "#9E8E7E", letterSpacing: "0.1em" }}>
              営業時間
            </dt>
            <dd className="mt-1">9:00〜20:00（月〜日・完全予約制）</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
