import { Code, Globe, Palette, Server, Rocket, HeadphonesIcon } from "lucide-react";

const services = [
  { icon: <Code size={32} />, title: "Desarrollo Web", desc: "Sitios web modernos, rápidos y 100% responsivos. Desde landing pages hasta e-commerce completos.", color: "from-cyan-500 to-blue-500" },
  { icon: <Globe size={32} />, title: "Dominios & Hosting", desc: "Te ayudamos a elegir el dominio perfecto y configuramos hosting seguro y de alto rendimiento.", color: "from-blue-500 to-purple-500" },
  { icon: <Palette size={32} />, title: "Diseño UI/UX", desc: "Interfaces atractivas y funcionales que mejoran la experiencia de tus usuarios y aumentan conversiones.", color: "from-purple-500 to-pink-500" },
  { icon: <Server size={32} />, title: "Mantenimiento", desc: "Soporte continuo, actualizaciones de seguridad y optimización para mantener tu sitio al día.", color: "from-pink-500 to-orange-500" },
  { icon: <Rocket size={32} />, title: "SEO & Marketing", desc: "Optimizamos tu sitio para buscadores y mejoramos tu visibilidad en internet.", color: "from-orange-500 to-yellow-500" },
  { icon: <HeadphonesIcon size={32} />, title: "Soporte 24/7", desc: "Estamos disponibles cuando nos necesites. Respuesta rápida y soluciones efectivas.", color: "from-cyan-400 to-cyan-600" },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Lo que hacemos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Soluciones completas para establecer y hacer crecer tu presencia digital</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="card-illari group hover:scale-105 cursor-pointer">
              <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}