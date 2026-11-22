import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elqobtan.com"),
  title: "القبطان لدق طلمبات المياة واستخراج المياه الجوفية | 01204746971",
  description:
    "مؤسسة القبطان لدق وعمل طلمبات المياة الجوفية وحفر الآبار وعمل البريمات والمجسات بمواسير بلاستيك وحديد معتمدة في جميع محافظات مصر - اتصل الآن: 01204746971",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "القبطان لدق طلمبات المياة واستخراج المياه الجوفية | 01204746971",
    description: "أفضل أسعار دق طلمبات المياة الجوفية وحفر وتطهير الآبار بأحدث المعدات في مصر.",
    url: "https://elqobtan.com",
    siteName: "القبطان لدق طلمبات المياة الجوفية",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/1.webp",
        width: 800,
        height: 600,
        alt: "دق طلمبات المياة الجوفية القبطان",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "BnQgXIjUgiEiAZw3Ul74NaIjl6OOPl2xALkdoF-kjuM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexSansArabic.className}>
      <body>{children}</body>
    </html>
  );
}
