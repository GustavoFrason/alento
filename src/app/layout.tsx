import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { ConciergeCTA } from "@/components/common/ConciergeCTA";
import { ThemeProvider } from "@/context/ThemeContext";
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
      <ThemeProvider>
        <body className="font-inter bg-brand-champagne text-charcoal antialiased transition-colors duration-500 dark:bg-navy dark:text-brand-champagne">
          <Header />
          {children}
          <ConciergeCTA />
        </body>
      </ThemeProvider>
    </html>
  );
}
