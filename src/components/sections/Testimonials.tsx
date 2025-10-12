function Testimonial({ nome, texto }: { nome: string; texto: string }) {
  return (
    <figure className="bg-white rounded-2xl p-6 ring-1 ring-zinc-200">
      <blockquote className="text-sm text-zinc-700">“{texto}”</blockquote>
      <figcaption className="mt-3 text-sm font-medium">{nome}</figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section aria-labelledby="titulo-depoimentos" className="bg-white border-y border-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 id="titulo-depoimentos" className="font-serif text-3xl text-center">Quem já recebeu um Alento?</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Testimonial nome="Carme Garasto" texto="Renovou a magia do meu Natal e encantou os vizinhos!" />
          <Testimonial nome="Daniela Azevedo" texto="Acabamento perfeito e entrega rápida. Recomendo!" />
          <Testimonial nome="Marcelo Nunes" texto="Atendimento atencioso e produto de altíssima qualidade." />
        </div>
      </div>
    </section>
  );
}