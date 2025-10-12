import { getStore } from "@/lib/store";

export function InstagramBar() {
  const STORE = getStore();
  return (
    <section className="bg-white/60 border-y border-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-10 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-sm">Acompanhe novidades e bastidores no Instagram</p>
        <a href={STORE.instagram} className="rounded-full border px-4 py-2 text-sm hover:bg-zinc-50">
          @alentodecor
        </a>
      </div>
    </section>
  );
}