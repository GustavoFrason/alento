import { getStore, getWaLink } from "@/lib/store";

export function Footer() {
  const STORE = getStore();
  const waLink = getWaLink();

  return (
    <footer id="contato" className="bg-emerald-900 text-emerald-50">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <p className="font-serif text-xl">{STORE.name}</p>
          <p className="mt-1 text-emerald-100/90">{STORE.slogan}</p>
        </div>
        <div>
          <p className="font-semibold">Contato</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href={waLink} className="underline underline-offset-4">WhatsApp</a></li>
            <li><a href={`tel:${STORE.phone}`} className="underline underline-offset-4">{STORE.phone}</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Atendimento</p>
          <p className="mt-2 text-sm">Seg–Sex, 9h às 18h<br />Envios para todo o Brasil</p>
        </div>
        <div>
          <p className="font-semibold">Links</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#colecoes" className="hover:underline">Coleções</a></li>
            <li><a href="#personalizada" className="hover:underline">Personalizadas</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-emerald-800/70">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs flex items-center justify-between">
          <p>© {new Date().getFullYear()} {STORE.name}. Todos os direitos reservados.</p>
          <p className="text-emerald-100/70">Feito com carinho em Curitiba/PR</p>
        </div>
      </div>
    </footer>
  );
}