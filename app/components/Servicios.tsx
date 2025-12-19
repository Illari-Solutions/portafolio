import { Code, Globe, Palette, Server, Rocket, HeadphonesIcon } from "lucide-react";

const services = [
  { 
    icon: <Code size={32} />, 
    title: "Sitios Web que Venden", 
    desc: "Tu página trabajará 24/7 para atraer clientes. Diseños optimizados para conversión que transforman visitantes en ventas reales.", 
    color: "from-cyan-500 to-blue-500",
    benefit: "Aumenta tus ventas online"
  },
  { 
    icon: <Globe size={32} />, 
    title: "Tu Marca en Internet", 
    desc: "Te conseguimos el dominio perfecto (.pe, .com) y configuramos todo el hosting. Tú solo te preocupas por tu negocio.", 
    color: "from-blue-500 to-purple-500",
    benefit: "Profesional desde el día 1"
  },
  { 
    icon: <Palette size={32} />, 
    title: "Diseño que Impacta", 
    desc: "Primera impresión cuenta. Diseños modernos que generan confianza y hacen que tus clientes regresen por más.", 
    color: "from-purple-500 to-pink-500",
    benefit: "Destaca sobre tu competencia"
  },
  { 
    icon: <Server size={32} />, 
    title: "Sin Dolores de Cabeza", 
    desc: "Nos encargamos de todo: actualizaciones, seguridad, respaldos. Tu sitio siempre funcionando sin que tengas que preocuparte.", 
    color: "from-pink-500 to-orange-500",
    benefit: "Tranquilidad garantizada"
  },
  { 
    icon: <Rocket size={32} />, 
    title: "Más Visibilidad", 
    desc: "Optimizamos tu sitio para que aparezca en Google. Más visitas = más clientes potenciales para tu negocio.", 
    color: "from-orange-500 to-yellow-500",
    benefit: "Aparece en Google"
  },
  { 
    icon: <HeadphonesIcon size={32} />, 
    title: "Siempre Contigo", 
    desc: "¿Problema? Lo resolvemos rápido. Soporte en español cuando lo necesites, sin largas esperas ni respuestas automáticas.", 
    color: "from-cyan-400 to-cyan-600",
    benefit: "Respuesta inmediata"
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Solución Completa</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Todo lo que Necesitas <span className="gradient-text">En Un Solo Lugar</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-2">
            <strong className="text-cyan-400">Un solo proveedor.</strong> Sin complicaciones.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            De la idea al lanzamiento, nosotros nos encargamos de todo
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="card-illari group hover:scale-105 cursor-pointer">
              <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full mb-3">
                ✓ {service.benefit}
              </div>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
          <p className="text-xl sm:text-2xl font-bold mb-4">
            ¿Listo para comenzar? <span className="text-cyan-400">Tu consultoría es gratis</span>
          </p>
          <a href="#contacto" className="inline-flex items-center gap-2 btn-primary px-8 py-4 text-lg">
            Empezar Mi Sitio Web
          </a>
          <p className="text-gray-500 text-sm mt-4">Primera consultoría sin costo • Sin compromiso • Respuesta en 24hrs</p>
        </div>
      </div>
    </section>
  );
}