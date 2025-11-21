"use client";
import { ChevronRight, Zap, Users, Shield } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { icon: <Zap size={24} />, value: "7+", label: "Proyectos" },
  { icon: <Users size={24} />, value: "12+", label: "Clientes" },
  { icon: <Shield size={24} />, value: "99%", label: "Satisfacción" },
];

// Frases que rotarán con efecto de tipado
const phrases = [
  "mundo digital",
  "siguiente nivel",
  "éxito online",
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
      {/* Fondo base */}
      <div className="absolute inset-0 bg-[#0A0F1C]"></div>
      
      {/* ================================
          LUCES PRINCIPALES DEL FONDO
          ================================ */}
      {/* Luz cyan grande - arriba izquierda */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Luz púrpura grande - abajo derecha */}
      <div className="absolute -bottom-32 -right-20 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse-slower"></div>
      
      {/* Luz naranja central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-3xl animate-breathe"></div>
      
      {/* Luz azul grande - arriba derecha */}
      <div className="absolute -top-40 right-1/4 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-3xl animate-pulse-slower"></div>
      
      {/* Luz rosa grande - abajo izquierda */}
      <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] bg-pink-500/15 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* ================================
          LUCES MEDIANAS FLOTANTES
          ================================ */}
      {/* Luz cyan mediana */}
      <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-cyan-400/20 rounded-full blur-2xl animate-float"></div>
      
      {/* Luz púrpura mediana */}
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-400/15 rounded-full blur-2xl animate-float-delayed"></div>
      
      {/* Luz azul mediana */}
      <div className="absolute top-1/3 left-1/3 w-56 h-56 bg-blue-500/20 rounded-full blur-2xl animate-float-slow"></div>
      
      {/* Luz naranja mediana */}
      <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-orange-400/15 rounded-full blur-2xl animate-float"></div>

      {/* ================================
          LUCES PEQUEÑAS DE ACENTO
          ================================ */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-300/25 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute top-40 left-20 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-float-slow"></div>
      <div className="absolute bottom-40 right-40 w-28 h-28 bg-blue-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-40 w-20 h-20 bg-pink-400/25 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute top-1/2 right-20 w-36 h-36 bg-orange-300/15 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-10 w-28 h-28 bg-cyan-500/20 rounded-full blur-xl animate-pulse-slower"></div>
      
      {/* Luces extra pequeñas - puntos de brillo */}
      <div className="absolute top-32 left-1/2 w-16 h-16 bg-white/10 rounded-full blur-lg animate-float"></div>
      <div className="absolute bottom-32 right-1/4 w-12 h-12 bg-cyan-200/20 rounded-full blur-lg animate-float-slow"></div>
      <div className="absolute top-1/4 left-10 w-14 h-14 bg-purple-300/20 rounded-full blur-lg animate-float-delayed"></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-5xl mx-auto flex-1 flex flex-col justify-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-8 mx-auto animate-fade-in-down">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          Transformación Digital para tu Negocio
        </div>

        {/* Título con efecto de tipado rotativo y hover */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
            Llevamos
          </span>{" "}
          <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
            tu
          </span>{" "}
          <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
            negocio
          </span>{" "}
          <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
            al
          </span>{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text-warm inline-block hover:scale-110 transition-transform duration-300 cursor-default min-w-[280px] sm:min-w-[400px]">
            {displayText}
            <span className="inline-block w-1 h-10 sm:h-14 md:h-16 bg-cyan-400 ml-1 align-middle animate-blink"></span>
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
          Creamos páginas web profesionales y te ayudamos a conseguir el dominio perfecto para que tu empresa destaque en internet.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 animate-fade-in-up-delayed">
          <Link href="#contacto" className="btn-primary flex items-center justify-center gap-2 group">
            Comenzar proyecto 
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#portafolio" className="btn-secondary hover:border-cyan-400">
            Ver trabajos
          </Link>
        </div>

        {/* Estadísticas */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 animate-fade-in-up-delayed-2">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="flex justify-center text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
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