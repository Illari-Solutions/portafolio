import { ExternalLink, TrendingUp, Users, ShoppingCart, ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Incaltex SRL",
    type: "Sitio Corporativo",
    desc: "Catálogo industrial optimizado para la exposición y cotización técnica de productos textiles.",
    gradient: "from-blue-600 to-indigo-700",
    result: "Catálogo Digital",
    icon: <Users size={24} />,
    url: "https://incaltex-jet.vercel.app/"
  },
  {
    name: "SmartVentas",
    type: "E-commerce",
    desc: "Plataforma de comercio electrónico con flujo de conversión ágil y gestión de inventario.",
    gradient: "from-cyan-500 to-blue-600",
    result: "Ventas Digitales",
    icon: <ShoppingCart size={24} />,
    url: "https://smart-ventas-express-git-main-illari-solutions-projects.vercel.app"
  },
  {
    name: "Academia Berkeley",
    type: "Plataforma Educativa",
    desc: "Portal interactivo desarrollado para la administración de matrículas y visualización de cursos.",
    gradient: "from-purple-500 to-indigo-600",
    result: "Matrículas Online",
    icon: <Users size={24} />,
    url: "https://academia-berkeley.vercel.app/"
  },
  {
    name: "Restaurante Grieta",
    type: "Landing Page",
    desc: "Sitio web gastronómico con menú interactivo y optimización de reservas en tiempo real.",
    gradient: "from-orange-500 to-red-500",
    result: "Reservas Web",
    icon: <TrendingUp size={24} />,
    url: "https://grieta-q9kn.vercel.app/"
  },
  {
    name: "Acciona Inmobiliaria",
    type: "Portal Inmobiliario",
    desc: "Plataforma para la visualización de propiedades y captación automatizada de leads calificados.",
    gradient: "from-emerald-500 to-teal-600",
    result: "Captación 2x",
    icon: <TrendingUp size={24} />,
    url: "https://acciona-inmobiliaria.vercel.app"
  },
  {
    name: "Restaurante InKari",
    type: "Sitio Gastronómico",
    desc: "Interfaz web enfocada en la experiencia del usuario para pedidos locales y posicionamiento de marca.",
    gradient: "from-amber-500 to-orange-600",
    result: "Pedidos Integrados",
    icon: <ShoppingCart size={24} />,
    url: "https://inkari-restaurante.vercel.app"
  },
];

export default function Portafolio() {
  return (
    <section id="portafolio" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-500/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Casos de Éxito</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="gradient-text">Resultados Reales</span> de Negocios Reales
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-2">
            <strong className="text-cyan-400">No solo creamos sitios bonitos.</strong>
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Creamos sitios que generan ventas y hacen crecer negocios
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer text-white no-underline"
            >
              <div className={`relative bg-linear-to-br ${project.gradient} rounded-2xl p-8 h-72 flex flex-col justify-between overflow-hidden transition-transform hover:scale-105`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>

                {/* Badge de tipo e ícono de enlace */}
                <div className="relative z-10 flex justify-between items-center">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                    {project.type}
                  </span>
                  <ExternalLink size={18} className="text-white/70 group-hover:text-white transition-colors" />
                </div>

                {/* Contenido principal */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3 text-white/90">
                    {project.icon}
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm mb-4">{project.desc}</p>

                  {/* Resultado destacado */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                    <TrendingUp size={18} />
                    <span className="font-bold text-lg">{project.result}</span>
                  </div>
                </div>

                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Testimonios actualizados con los nuevos proyectos reales */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="card-illari bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
            <div className="text-4xl mb-4">💬</div>
            <p className="text-gray-300 italic leading-relaxed mb-4">
              "ILLARI no solo creó nuestra página, nos ayudó a entender cómo usar la web para crecer. En 3 meses duplicamos nuestras ventas online."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center font-bold text-white">
                JR
              </div>
              <div>
                <p className="font-bold text-cyan-400">Juan Rodríguez</p>
                <p className="text-gray-500 text-sm">CEO, SmartVentas</p>
              </div>
            </div>
          </div>

          <div className="card-illari bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
            <div className="text-4xl mb-4">⭐</div>
            <p className="text-gray-300 italic leading-relaxed mb-4">
              "Profesionales, rápidos y muy pacientes explicando todo. Ahora nuestros clientes nos encuentran fácilmente en Google."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-white">
                MC
              </div>
              <div>
                <p className="font-bold text-purple-400">María Contreras</p>
                <p className="text-gray-500 text-sm">Dueña, Restaurante Grieta</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 text-xl font-bold mb-6">
            ¿Quieres <span className="text-cyan-400">resultados como estos</span> para tu negocio?
          </p>
          <a href="#contacto" className="inline-flex items-center gap-2 btn-primary px-8 py-4 text-lg mb-3">
            Empezar Mi Proyecto <ArrowRight size={20} />
          </a>
          <p className="text-gray-500 text-sm">Consultoría gratuita • Sin compromiso • Respuesta inmediata</p>
        </div>
      </div>
    </section>
  );
}