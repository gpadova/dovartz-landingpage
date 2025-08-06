import { Home, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center flex flex-col items-center justify-center">
          <Image
            src="/logos/black-logo.png"
            alt="Dovartz Smart Home logo"
            width={200}
            height={200}
          />
          <p className="text-zinc-400 mb-8 text-sm mx-auto max-w-sm">
            Vamos nos conectar! Siga nossas contas para ver mais sobre automação
            residencial e se inspirar em soluções para sua casa.
          </p>
          <div className="flex justify-center mb-4">
            <Link
              href="#"
              className="bg-secondary hover:bg-gray-700 p-3 rounded-full transition-colors"
            >
              <Instagram className="size-6" />
            </Link>
          </div>
          <p className="text-gray-600 text-sm">
            © 2025 Dovartz. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
