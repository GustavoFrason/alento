"use client";
import { getStore } from "@/lib/store";

export function InstagramBar() {
  const STORE = getStore();
  const igUrl = STORE.instagram || "https://www.instagram.com/alentostore";
  const igHandle = igUrl.replace(/^https?:\/\/(www\.)?instagram\.com\//, "@").replace(/\/$/, "");

  return (
    <section aria-label="Instagram">
      <div className="mx-auto max-w-6xl px-4 py-10 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-sm">Acompanhe novidades e bastidores no Instagram</p>
        <a
          href={igUrl}
          target="_blank"
          rel="noopener nofollow"
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-zinc-50"
          aria-label={`Abrir Instagram ${igHandle} em nova aba`}
        >
          {/* ícone minimal */}
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="currentColor">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 17.8 2.8 2.8 0 0 0 12 10.2ZM17.8 7a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2Z"/>
          </svg>
          <span>{igHandle}</span>
          <span className="sr-only">(abre em nova aba)</span>
        </a>
      </div>
    </section>
  );
}