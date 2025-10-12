export function getStore() {
  return {
    name: "ALENTO",
    slogan: "arte de celebrar com afeto",
    phone: "+55 41 99999-9999",
    whatsapp: (process.env.NEXT_PUBLIC_WA || "5541999999999").replace(/\D/g, ""),
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    instagram: "https://instagram.com/alento.store",
  } as const;
}

export function getWaLink(text?: string) {
  const { whatsapp } = getStore();
  const msg = encodeURIComponent(text ?? "Olá! Vim do site da Alento.");
  return `https://wa.me/${whatsapp}?text=${msg}`;
}