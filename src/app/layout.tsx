import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Snowfall } from "@/components/common/Snowfall";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alentostore.com.br"),
  title: "ALENTO - Guirlandas de Natal artesanais",
  description:
    "Guirlandas feitas à mão com amor e propósito. Transforme seu lar com ALENTO.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ALENTO",
  },
  openGraph: {
    type: "website",
    title: "ALENTO - Guirlandas de Natal artesanais",
    description:
      "Guirlandas feitas à mão com amor e propósito. Transforme seu lar com ALENTO.",
    images: ["/images/hero-guirlanda.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3F5A3A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-inter bg-[#F8F6F2] text-gray-900 antialiased">
        <Snowfall />
        <Header />
        {children}
      </body>
    </html>
  );
}
