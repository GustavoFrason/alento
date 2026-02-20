import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ALENTO — Produtos Importados dos EUA",
    short_name: "ALENTO",
    description:
      "Roupas, bolsas, acessórios e eletrônicos importados dos Estados Unidos. 100% originais.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#FAFAF8",
    theme_color: "#0F172A",
    lang: "pt-BR",
    icons: [
      { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
