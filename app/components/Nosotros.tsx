import { CheckCircle, Shield, Clock, Award } from "lucide-react";

const features = [
  "Entrega garantizada en tiempo acordado",
  "Soporte incluido por 3 meses",
  "Precios transparentes, sin sorpresas",
  "Revisiones ilimitadas hasta tu aprobación",
  "Hosting y dominio incluido primer año",
  "Capacitación personalizada incluida",
];

const guarantees = [
  {
    icon: <Shield size={28} />,
    title: "Garantía 100%",
    desc: "Si no estás satisfecho, te devolvemos tu dinero",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: <Clock size={28} />,
    title: "Entrega Rápida",
    desc: "Tu sitio listo en 2-4 semanas, no meses",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Award size={28} />,
    title: "Calidad Certificada",
    desc: "Diseños profesionales que impresionan",
    color: "from-orange-500 to-yellow-500"
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Por qué confiar en nosotros</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="gradient-text">Garantizamos</span> Tu Éxito Digital
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg">
              En <strong className="text-cyan-400">ILLARI</strong>, tu sitio web es más que código: <strong>es tu mejor vendedor trabajando 24/7.</strong>
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Trabajamos contigo desde el primer click hasta tu primer cliente. Sin tecnicismos. Sin costos ocultos. Solo resultados.
            </p>

            {/* Garantías destacadas */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {guarantees.map((item, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:scale-105 transition-transform">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} mb-3`}>
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-cyan-400 font-semibold mb-3">Lo que incluye tu proyecto:</p>
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-cyan-400 shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-linear-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-3xl p-10 text-center glow-cyan">
              <div className="text-7xl sm:text-8xl font-bold mb-2">5+</div>
              <div className="text-2xl font-semibold mb-4">Años de experiencia</div>
              <div className="text-white/90 text-lg mb-6">Transformando negocios locales en digitales</div>
              
              {/* Badges de credibilidad */}
              <div className="space-y-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                  <div className="text-3xl font-bold">12+</div>
                  <div className="text-sm">Clientes Activos</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Proyectos Entregados</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-2xl -z-10 opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-400 rounded-2xl -z-10 opacity-60"></div>
            </div>
            
            {/* Badge flotante de ubicación */}
            <div className="absolute -bottom-6 -right-6 bg-[#111827] border border-cyan-500/50 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-cyan-400">Disponible Ahora</span>
              </div>
              <div className="text-gray-400 text-xs">📍 Arequipa, Perú</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}