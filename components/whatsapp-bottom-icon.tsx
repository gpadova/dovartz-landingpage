import { WHATSAPP_URL } from "@/lib/contants";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsappIcon() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex w-12 items-center justify-center cursor-pointer rounded-full bg-green-500 p-2 shadow-lg transition-transform duration-200 hover:scale-110">
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={28} className="text-white" />
      </a>
    </div>
  );
}
