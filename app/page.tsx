import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";
import Portafolio from "./components/Portafolio";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1C] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Servicios />
      <Nosotros />
      <Portafolio />
      <Contacto />
      <Footer />
    </main>
  );
}