import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { ContactForm } from "./contact-form";

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
