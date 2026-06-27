import type { Metadata } from "next";
import {
  Zen_Kaku_Gothic_New,
  Noto_Sans_JP,
  Noto_Serif_JP,
} from "next/font/google";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-head",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seitan.pages.dev"),
  title: "整体Natural | 岡崎市の整体院 腰痛・肩こり・姿勢改善",
  description:
    "岡崎市・東岡崎駅から徒歩15分の整体院「整体Natural」。腰痛・肩こり・姿勢改善に対応。初回60分1,100円。完全予約制・個室対応。根本から整える独自の整体をご体験ください。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://seitan.pages.dev",
    title: "整体Natural | 岡崎市の整体院 腰痛・肩こり・姿勢改善",
    description:
      "岡崎市・東岡崎駅から徒歩15分の整体院「整体Natural」。腰痛・肩こり・姿勢改善に対応。初回60分1,100円。完全予約制・個室対応。根本から整える独自の整体をご体験ください。",
    images: ["/images/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "整体Natural | 岡崎市の整体院 腰痛・肩こり・姿勢改善",
    description:
      "岡崎市・東岡崎駅から徒歩15分の整体院「整体Natural」。腰痛・肩こり・姿勢改善に対応。初回60分1,100円。完全予約制・個室対応。根本から整える独自の整体をご体験ください。",
    images: ["/images/hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "整体Natural",
  telephone: "+81-70-2282-5501",
  priceRange: "¥1,100〜",
  url: "https://seitan.pages.dev",
  image: "https://seitan.pages.dev/images/hero.jpg",
  address: {
    "@type": "PostalAddress",
    postalCode: "444-0051",
    addressRegion: "愛知県",
    addressLocality: "岡崎市",
    streetAddress: "本町通2丁目3 鳥居ビル1F",
    addressCountry: "JP",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "20:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${zenKaku.variable} ${notoSansJP.variable} ${notoSerifJP.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
