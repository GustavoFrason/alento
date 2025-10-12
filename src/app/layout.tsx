import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { GA_ID } from "@/lib/analytics";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "ALENTO – Guirlandas de Natal artesanais",
    template: "%s | ALENTO",
  },
  description: "Guirlandas de Natal feitas à mão com materiais naturais. Compre pelo WhatsApp.",
  openGraph: {
    type: "website",
    title: "ALENTO – Guirlandas de Natal artesanais",
    description: "Design exclusivo, materiais naturais e acabamento premium.",
    images: ["/images/hero-guirlanda.jpg"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      {/* GA4 only if present */}
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      <body className="min-h-dvh bg-transparent text-zinc-800">
        <div className="min-h-dvh bg-white/85 backdrop-blur-[1px]">
          {children}
        </div>
      </body>
    </html>
  );
}