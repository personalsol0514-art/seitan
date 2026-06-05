import SectionLabel from "./SectionLabel";

const plans = [
  {
    badge: "初回限定",
    title: "カウンセリング＋整体",
    time: "60分",
    price: "¥1,100",
  },
  { badge: null, title: "整体", time: "30分", price: "¥8,800" },
  { badge: null, title: "整体", time: "50分", price: "¥13,200" },
];

export default function Price() {
  return (
    <section id="price" className="bg-bgSub" style={{ padding: "52px 32px" }}>
      <SectionLabel>PRICE / 料金</SectionLabel>
      <h2 className="font-serif text-[22px] text-textMain">料金のご案内</h2>

      <div
        className="mt-9 grid grid-cols-1 gap-px border border-border md:grid-cols-3"
        style={{ backgroundColor: "#D9CEB8" }}
      >
        {plans.map((p, i) => (
          <div key={i} className="bg-bgSub p-7">
            {p.badge ? (
              <span
                className="inline-block px-3 py-1 text-[10px]"
                style={{
                  backgroundColor: "#4A3728",
                  color: "#FDFAF4",
                  letterSpacing: "0.1em",
                }}
              >
                {p.badge}
              </span>
            ) : (
              <span className="inline-block h-[22px]" />
            )}
            <h3 className="mt-4 text-[13px] text-textMain">{p.title}</h3>
            <p className="mt-1 text-[11px]" style={{ color: "#9E8E7E" }}>
              {p.time}
            </p>
            <p className="mt-3 font-serif text-[28px] text-textMain">
              {p.price}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-[11px] text-textSub" style={{ lineHeight: 1.9 }}>
        回数券・月額プランは初診時にご案内。クレジットカード・PayPay対応。
      </p>
    </section>
  );
}
