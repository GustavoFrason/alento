import { getStore } from "@/lib/store";

export function Footer() {
  const { name, slogan, instagram, whatsapp } = getStore();

  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-100 py-10">
      <div className="mx-auto max-w-6xl px-4 text-center text-gray-700">
        <p className="text-lg font-medium">{name}</p>
        <p className="mb-4 text-sm">{slogan}</p>

        <div className="mb-4 flex justify-center gap-6">
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            💬 WhatsApp
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            📸 Instagram
          </a>
        </div>

        <p className="text-xs opacity-70">
          © {new Date().getFullYear()} {name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
