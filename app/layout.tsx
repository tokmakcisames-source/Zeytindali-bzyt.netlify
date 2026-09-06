import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400", "600", "700"] });

const siteUrl = "https://zeytindali-bzyt.netlify.app";
const description = "ZEYTİNDALI BZYT; tarım, hayvancılık, sürdürülebilir üretim ve blockchain şeffaflığı üzerine geliştirilen lansman öncesi bir proje tanıtım sitesidir. Bu içerik yatırım, kesin kazanç veya bağış vaadi değildir.";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0a1f0a" };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ZEYTİNDALI BZYT | Sürdürülebilir Üretim ve Blockchain Projesi",
  description,
  keywords: ["Zeytindalı BZYT", "sürdürülebilir tarım projesi", "hayvancılık ve üretim", "Base blockchain projesi", "lansman öncesi token tanıtımı", "şeffaf sosyal fayda projesi", "Abdusselam Tokmakçı"],
  authors: [{ name: "Abdusselam Tokmakçı" }],
  creator: "Abdusselam Tokmakçı",
  publisher: "ZEYTİNDALI BZYT",
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "ZEYTİNDALI BZYT",
    title: "ZEYTİNDALI BZYT | Sürdürülebilir Üretim Projesi",
    description,
  },
  twitter: { card: "summary_large_image", title: "ZEYTİNDALI BZYT | Proje Tanıtımı", description },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "ZEYTİNDALI BZYT",
      url: siteUrl,
      founder: { "@type": "Person", name: "Abdusselam Tokmakçı" },
      description: "Tarım, hayvancılık, sürdürülebilir üretim ve blockchain şeffaflığı üzerine geliştirilen lansman öncesi proje.",
    },
    {
      "@type": "WebSite",
      name: "ZEYTİNDALI BZYT",
      url: siteUrl,
      inLanguage: "tr-TR",
      description,
    },
    {
      "@type": "WebPage",
      name: "ZEYTİNDALI BZYT proje tanıtımı",
      url: siteUrl,
      isPartOf: { "@type": "WebSite", name: "ZEYTİNDALI BZYT", url: siteUrl },
      about: ["sürdürülebilir tarım", "hayvancılık", "blockchain şeffaflığı", "sosyal fayda"],
      description,
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="bg-olive-900 font-sans text-gray-100 antialiased">
        {children}
        <script src="//code.jivosite.com/widget/MJfedssMfO" async />
      </body>
    </html>
  );
}
