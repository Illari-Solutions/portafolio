import { CheckCircle } from "lucide-react";

const features = [
  "Desarrollo a medida para cada cliente",
  "Soporte técnico personalizado",
  "Precios competitivos y transparentes",
  "Entrega en tiempos acordados",
  "Tecnologías modernas y escalables",
  "Capacitación incluida",
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Quiénes somos</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Sobre <span className="gradient-text">Nosotros</span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed text-lg">
              Somos <strong className="text-cyan-400">ILLARI</strong>, un equipo apasionado por la tecnología y el diseño web. Nuestra misión es ayudar a empresas y emprendedores a establecer una presencia digital sólida y profesional.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Con años de experiencia en desarrollo web, diseño y gestión de dominios, ofrecemos soluciones integrales que permiten a nuestros clientes destacar en el competitivo mundo digital. Desde Arequipa para todo el Perú y el mundo.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
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
              <div className="text-white/80">Transformando ideas en realidad digital</div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-2xl -z-10 opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-400 rounded-2xl -z-10 opacity-60"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#111827] border border-gray-700 rounded-2xl p-4 shadow-xl">
              <div className="text-2xl font-bold text-orange-400">100%</div>
              <div className="text-gray-400 text-sm">Proyectos entregados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}