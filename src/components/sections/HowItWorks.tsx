function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 ring-1 ring-zinc-200">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-900 font-semibold">{n}</span>
        <p className="font-medium">{title}</p>
      </div>
      <p className="mt-2 text-sm text-zinc-600">{text}</p>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white/60 border-y border-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-3 gap-8">
        <Step n={1} title="Escolha" text="Selecione um modelo ou peça sob medida." />
        <Step n={2} title="Personalize" text="Defina laço, cores e mensagem de boas-vindas." />
        <Step n={3} title="Receba" text="Envio rápido e seguro para todo o Brasil." />
      </div>
    </section>
  );
}