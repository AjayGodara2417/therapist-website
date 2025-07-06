import OceanBanner from "@/components/Banner";
import About from "./about/page";
import ServicesPage from "./services/page";
import SessionFeeSection from "./sessionFee/page";
import ClientNotice from "@/components/ClientNotice";
import Hero from "./hero/page";
import FAQSection from "./faq/page";
import Contact from './contact/page'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ServicesPage />
      <SessionFeeSection />
      <ClientNotice />
      <OceanBanner />
      <FAQSection />
      <Contact />
    </div>
  );
}
