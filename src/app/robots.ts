import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"], // ajuste se expuser APIs públicas
      },
    ],
    sitemap: "https://alentostore.com.br/sitemap.xml",
    host: "https://alentostore.com.br",
  };
}