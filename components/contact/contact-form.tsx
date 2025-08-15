"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { sendContactEmail } from "@/actions/send-contact-email";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "E-mail inválido" }),
  message: z.string().min(1, { message: "Mensagem é obrigatória" }),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setIsLoading(true);
    try {
      await sendContactEmail(values.email, values.name, values.message);
      setIsSuccess(true);
      toast.success("Mensagem enviada com sucesso!");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      form.reset({
        name: "",
        email: "",
        message: "",
      });
    }
  }

  return (
    <>
      <Toaster richColors />
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SEU NOME</FormLabel>
                <FormControl>
                  <Input
                    id="name"
                    type="text"
                    className="h-12 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-MAIL PARA CONTATO</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    className="h-12 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>MENSAGEM</FormLabel>
                <FormControl>
                  <Textarea
                    id="message"
                    rows={10}
                    className="border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white resize-none"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isLoading || isSuccess}
            className="w-full h-12 cursor-pointer bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-md transition-colors"
          >
            {isLoading ? (
              <Loader2 className="size-4 animate-spin" />
            ) : isSuccess ? (
              "Mensagem enviada!"
            ) : (
              "ENVIAR"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
}
