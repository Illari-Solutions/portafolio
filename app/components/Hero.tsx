import { ChevronRight, Zap, Users, Shield } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: <Zap size={24} />, value: "50+", label: "Proyectos" },
  { icon: <Users size={24} />, value: "40+", label: "Clientes" },
  { icon: <Shield size={24} />, value: "99%", label: "Satisfacción" },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0F1C]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-8">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          Transformación Digital para tu Negocio
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Llevamos tu negocio al{" "}
          <span className="gradient-text-warm">mundo digital</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Creamos páginas web profesionales y te ayudamos a conseguir el dominio perfecto para que tu empresa destaque en internet.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="#contacto" className="btn-primary flex items-center justify-center gap-2">
            Comenzar proyecto <ChevronRight size={20} />
          </Link>
          <Link href="#portafolio" className="btn-secondary">
            Ver trabajos
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center text-cyan-400 mb-2">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
