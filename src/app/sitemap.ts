import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://alentostore.com.br";
  const now = new Date();

  // Rotas principais da LP
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Seções âncora opcionais como páginas (motores aceitam, mas não é obrigatório):
    // { url: `${base}/#colecoes`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    // { url: `${base}/#como-funciona`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // { url: `${base}/#faq`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  return routes;
}
