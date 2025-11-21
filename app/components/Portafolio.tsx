import { ExternalLink } from "lucide-react";

const projects = [
  { name: "TechStore", type: "E-commerce", desc: "Tienda online completa con pasarela de pagos", gradient: "from-cyan-500 to-blue-600" },
  { name: "Restaurante Sabor", type: "Landing Page", desc: "Página web con menú digital y reservas", gradient: "from-orange-500 to-red-500" },
  { name: "Consultora Legal", type: "Sitio Corporativo", desc: "Portal profesional con blog integrado", gradient: "from-gray-600 to-gray-800" },
  { name: "FitGym", type: "Aplicación Web", desc: "Sistema de gestión de membresías", gradient: "from-green-500 to-emerald-600" },
  { name: "Inmobiliaria Plus", type: "Portal Web", desc: "Catálogo de propiedades con filtros", gradient: "from-purple-500 to-pink-500" },
  { name: "Clínica Dental", type: "Sitio Institucional", desc: "Web con sistema de citas online", gradient: "from-blue-400 to-cyan-500" },
];

export default function Portafolio() {
  return (
    <section id="portafolio" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-500/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Nuestro trabajo</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="gradient-text">Portafolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Algunos de los proyectos que hemos desarrollado para nuestros clientes</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`relative bg-linear-to-br ${project.gradient} rounded-2xl p-8 h-64 flex flex-col justify-end overflow-hidden transition-transform hover:scale-105`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-3">{project.type}</span>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    {project.name}
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-white/80 text-sm">{project.desc}</p>
                </div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">¿Te gustaría ver tu proyecto aquí?</p>
          <a href="#contacto" className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition">
            Conversemos sobre tu idea <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}