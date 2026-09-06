import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400", "600", "700"] });

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0a1f0a" };
export const metadata: Metadata = {
  title: "Zeytindalı (BZYT) | İnsanlık İçin Bir Dal",
  description: "Zeytindalı BZYT; üretim, şeffaflık ve sosyal faydayı aynı vizyonda buluşturan Base Network projesidir.",
  keywords: ["Zeytindalı", "BZYT", "Base Network", "sürdürülebilir tarım", "Abdusselam Tokmakçı"],
  authors: [{ name: "Abdusselam Tokmakçı" }],
  openGraph: { type: "website", locale: "tr_TR", title: "Zeytindalı (BZYT) | İnsanlık İçin Bir Dal", description: "Üretimden doğan değer, insanlığa dokunsun." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr" className={`${inter.variable} ${playfair.variable}`}><body className="bg-olive-900 font-sans text-gray-100 antialiased">{children}</body></html>;
}
