export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#4A3728" }}
      className="px-9 py-12 text-bgMain"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-[18px]">整体 Natural</p>
          <p
            className="mt-3 text-[12px]"
            style={{ color: "rgba(253,250,244,0.75)", lineHeight: 1.9 }}
          >
            〒444-0051 愛知県岡崎市本町通2丁目3 鳥居ビル1F
            <br />
            TEL 070-2282-5501
          </p>
        </div>
        <p
          className="text-[11px]"
          style={{ color: "rgba(253,250,244,0.6)" }}
        >
          © 整体Natural All rights reserved.
        </p>
      </div>
    </footer>
  );
}
