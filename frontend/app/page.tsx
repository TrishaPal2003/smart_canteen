// import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/home/Hero";
import Specials from "@/components/home/Specials";
import HowItWorks from "@/components/home/HowItWorks";
import Benefits from "@/components/home/Benefits";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#d9ffee] text-[#003629] font-body">

      <div className="pt-16">
        <Hero />
        <Specials />
        <HowItWorks />
        <Benefits />
      </div>
       <Footer />
    </main>
  );
}