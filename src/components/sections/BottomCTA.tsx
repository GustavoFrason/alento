import { getWaLink } from "@/lib/store";

export function BottomCTA() {
  const wa = getWaLink("Quero uma guirlanda personalizada");
  return (
    <section className="bg-[#3F5A3A]">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center">
        <a
          href={wa}
          className="inline-flex items-center rounded-lg bg-[#C9A648] text-white px-6 py-3 text-sm font-semibold shadow hover:opacity-90"
        >
          MONTE A SUA GUIRLANDA PERSONALIZADA
        </a>
      </div>
    </section>
  );
}