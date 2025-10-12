function Item({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl bg-white ring-1 ring-zinc-200 p-5">
      <summary className="marker:none list-none flex items-center justify-between cursor-pointer select-none">
        <span className="font-medium">{q}</span>
        <span className="ml-4 text-zinc-400 group-open:rotate-180 transition">⌄</span>
      </summary>
      <p className="mt-2 text-sm text-zinc-600">{a}</p>
    </details>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="font-serif text-3xl text-center">Perguntas frequentes</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <Item q="Qual o prazo de produção e envio?" a="Pronta-entrega: 24–48h. Personalizadas: 3–5 dias úteis." />
        <Item q="Quais tamanhos estão disponíveis?" a="35, 45 e 60 cm (diâmetro). Consultar medidas especiais." />
        <Item q="Como faço a manutenção?" a="Guardar em local seco, longe do sol direto. Limpar com pano levemente úmido." />
        <Item q="Posso retirar em loja física?" a="Sim, combinamos o melhor horário via WhatsApp." />
      </div>
    </section>
  );
}