import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WhatsappIcon } from "@/components/whatsapp-bottom-icon";
import { Process } from "@/components/process";
import { ProductsSpecificList } from "@/components/products-specific-list";
import { Benefits } from "@/components/benefits";
import { ProductsGrid } from "@/components/products-grid/products-grid";
import { Location } from "@/components/location/location";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white w-screen">
      <Navigation />
      <Hero />
      <ProductsGrid />
      <Process />
      <ProductsSpecificList />
      <Benefits />
      <Location />
      <Contact />
      <Footer />
      <WhatsappIcon />
    </div>
  );
}
