"use client";
import { ChevronRight, Zap, Users, Shield } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { icon: <Zap size={24} />, value: "7+", label: "Proyectos Exitosos" },
  { icon: <Users size={24} />, value: "12+", label: "Clientes Felices" },
  { icon: <Shield size={24} />, value: "100%", label: "Garantía" },
];

// Frases que rotarán con efecto de tipado
const phrases = [
  "Sitio Web Profesional",
  "Presencia Digital",
  "Tienda Online",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    // Si está esperando después de completar la frase
    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000); // Espera 2 segundos antes de borrar
      return () => clearTimeout(waitTimer);
    }

    // Velocidad de tipado/borrado
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          // Frase completa, esperar
          setIsWaiting(true);
        }
      } else {
        // Borrando
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Terminó de borrar, pasar a siguiente frase
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isWaiting, phraseIndex]);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10 relative overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay oscuro con gradiente para mantener legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C]/40 via-[#0F1729]/30 to-[#1A1F3A]/40" />
        
        {/* Overlay adicional en la parte inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/60 via-transparent to-transparent" />
      </div>
      
      {/* ================================
          EFECTOS DE LUZ CYAN (Simplificado)
          ================================ */}
      {/* Luz cyan principal - arriba izquierda */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Luz cyan - abajo derecha */}
      <div className="absolute -bottom-32 -right-20 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
      
      {/* Luz azul central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl animate-breathe"></div>
      
      {/* Partículas flotantes */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-cyan-500 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-float"></div>
      
      {/* Luces extra pequeñas - puntos de brillo */}
      <div className="absolute top-32 left-1/2 w-16 h-16 bg-white/10 rounded-full blur-lg animate-float"></div>
      <div className="absolute bottom-32 right-1/4 w-12 h-12 bg-cyan-200/20 rounded-full blur-lg animate-float-slow"></div>
      <div className="absolute top-1/4 left-10 w-14 h-14 bg-purple-300/20 rounded-full blur-lg animate-float-delayed"></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-5xl mx-auto flex-1 flex flex-col justify-center">
        {/* Badge con urgencia */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border border-orange-500/40 rounded-full text-orange-400 text-sm font-semibold mb-8 mx-auto animate-fade-in-down">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
          🔥 Consultoría Gratuita - Solo este mes
        </div>

        {/* Título con propuesta de valor clara */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in text-white drop-shadow-2xl">
          <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
            Convierte
          </span>{" "}
          <span className="text-cyan-400 inline-block hover:scale-110 transition-transform duration-300 cursor-default">
            Visitas en Ventas
          </span>{" "}
          <br className="hidden sm:block" />
          <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
            con
          </span>{" "}
          <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
            tu
          </span>{" "}
          <span className="text-cyan-400 inline-block hover:scale-110 transition-transform duration-300 cursor-default min-w-[280px] sm:min-w-[350px]">
            {displayText}
            <span className="inline-block w-1 h-10 sm:h-14 md:h-16 bg-white ml-1 align-middle animate-blink"></span>
          </span>
        </h1>

        {/* Subtítulo con beneficios claros */}
        <p className="text-lg sm:text-xl text-white mb-3 max-w-3xl mx-auto leading-relaxed animate-fade-in-up drop-shadow-lg">
          <strong className="text-cyan-400">Tu sitio web trabajando 24/7 para atraer clientes.</strong>
        </p>
        <p className="text-base sm:text-lg text-white mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up drop-shadow-lg font-medium">
          Desde el dominio hasta el diseño final. Todo incluido. Sin complicaciones.
        </p>

        {/* Botones CTA principales */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 animate-fade-in-up-delayed">
          <Link href="#contacto" className="btn-primary flex items-center justify-center gap-2 group px-8 py-4 text-lg">
            Empezar Mi Proyecto
            <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#portafolio" className="bg-white/90 backdrop-blur-sm text-gray-900 font-bold border-2 border-white hover:bg-white hover:scale-105 transition-all duration-300 px-8 py-4 text-lg rounded-xl">
            Ver Resultados
          </Link>
        </div>

        {/* Estadísticas */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 animate-fade-in-up-delayed-2">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="flex justify-center text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm drop-shadow-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="relative z-10 flex flex-col items-center gap-2 text-gray-500 mt-8 sm:mt-0 animate-fade-in-up-delayed-2">
        <span className="text-xs hidden sm:block">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center hover:border-cyan-500 transition-colors">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}