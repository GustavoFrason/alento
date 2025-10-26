import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Snowfall } from "@/components/common/Snowfall";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alento-lime.vercel.app"),
  title: "Alento - Guirlandas de Natal artesanais",
  description:
    "Guirlandas feitas à mão com amor e propósito. Transforme seu lar com Alento.",
  openGraph: {
    type: "website",
    title: "Alento - Guirlandas de Natal artesanais",
    description:
      "Guirlandas feitas à mão com amor e propósito. Transforme seu lar com Alento.",
    images: ["/images/hero-guirlanda.jpg"],
  },
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
