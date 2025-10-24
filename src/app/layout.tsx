// src/app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GA_ID } from "@/lib/analytics";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alentostore.com.br"),
  title: { default: "ALENTO — Guirlandas de Natal Artesanais", template: "%s | ALENTO" },
  description:
    "Guirlandas de Natal artesanais com toque sofisticado e natural. Compre pelo WhatsApp e receba em casa.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://alentostore.com.br/",
    siteName: "ALENTO",
    title: "ALENTO — Guirlandas de Natal Artesanais",
    description:
      "Guirlandas premium em tons branco gelo, dourado suave e verde-oliva. Luxo + aconchego.",
    images: [{ url: "/og/alento-og.jpg", width: 1200, height: 630, alt: "ALENTO - Guirlandas de Natal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALENTO — Guirlandas de Natal Artesanais",
    description: "Compre pelo WhatsApp. Luxo + aconchego.",
    images: ["/og/alento-og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect/DNS-Prefetch: fonts, GA e WhatsApp */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* Preload do hero (ajuste paths conforme /public) */}
        <link
          rel="preload"
          as="image"
          href="/images/hero/hero-xl.jpg"
          imageSrcSet="/images/hero/hero-sm.jpg 640w, /images/hero/hero-md.jpg 1024w, /images/hero/hero-xl.jpg 1920w"
          imageSizes="100vw"
        />

        {/* GA4 only-if */}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="bg-[rgba(255,255,255,0.8)] backdrop-blur-md antialiased">
        {children}
      </body>
    </html>
  );
}