import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gpx7.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "GPX7 | Soluções audiovisuais para eventos corporativos",
  description:
    "Audiovisual, informática e iluminação para congressos, feiras e convenções em Goiânia. Estrutura própria e equipe técnica especializada desde 2003.",
  keywords: [
    "audiovisual",
    "eventos corporativos",
    "congressos",
    "feiras",
    "convenções",
    "Goiânia",
    "iluminação",
    "transmissão ao vivo",
    "GPX7",
  ],
  authors: [{ name: "GPX7 Soluções Audiovisuais" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "GPX7",
    title: "GPX7 | Soluções audiovisuais para eventos corporativos",
    description:
      "Audiovisual, informática e iluminação para congressos, feiras e convenções em Goiânia. Estrutura própria e equipe técnica especializada desde 2003.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GPX7 — Soluções audiovisuais para eventos corporativos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPX7 | Soluções audiovisuais para eventos corporativos",
    description:
      "Audiovisual, informática e iluminação para congressos, feiras e convenções em Goiânia.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
