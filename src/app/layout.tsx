import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alentostore.com.br"),
  title: "ALENTO - Produtos Importados dos EUA",
  description:
    "Roupas, bolsas, acessórios e eletrônicos importados dos Estados Unidos. 100% originais com garantia.",
  icons: {
    icon: "/favicon.svg",
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ALENTO",
  },
  openGraph: {
    type: "website",
    title: "ALENTO - Produtos Importados dos EUA",
    description:
      "Roupas, bolsas, acessórios e eletrônicos importados dos Estados Unidos. 100% originais com garantia.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-inter bg-cream text-charcoal antialiased">
        <Header />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
