import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-md scroll-mt-10 px-4 py-8 md:max-w-6xl md:py-12"
    >
      <h2 className="h2 sm:mb-6 md:px-12 text-4xl lg:text-5xl">
        Vamos Conversar!
      </h2>
      <div className="grid gap-y-10 md:grid-cols-2">
        <div className="border-primary-900 pt-4 sm:pt-8 md:border-r md:pl-12 md:pr-20">
          <p className="description text-lg">
            Dê o próximo passo para modernizar seu imóvel. Tem dúvidas ou está
            pronto para receber um orçamento? Entre em contato conosco!
          </p>
          <div className="mx-auto mt-8 hidden aspect-square overflow-hidden md:block">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD"
              alt="automação residencial"
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="md:pl-20 md:pr-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          SEU NOME
        </label>
        <Input
          id="name"
          type="text"
          className="h-12 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white"
          placeholder=""
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          E-MAIL PARA CONTATO
        </label>
        <Input
          id="email"
          type="email"
          className="h-12 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white"
          placeholder=""
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          MENSAGEM
        </label>
        <Textarea
          id="message"
          rows={6}
          className="border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white resize-none"
          placeholder=""
        />
      </div>

      <Button
        type="submit"
        className="w-full h-12 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-md transition-colors"
      >
        ENVIAR
      </Button>
    </form>
  );
}
