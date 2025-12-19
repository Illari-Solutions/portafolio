"use client";
import { MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Contacto() {
  const whatsappNumber = "51931375082";
  const whatsappMessage = encodeURIComponent("¡Hola ILLARI! 👋 Quiero solicitar mi consultoría gratuita para mi sitio web.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Calcular la posición del centro de la pantalla
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calcular el desplazamiento relativo (máximo 80px en cada dirección para que sea más evidente)
      const deltaX = (e.clientX - centerX) / 20;
      const deltaY = (e.clientY - centerY) / 20;

      setEyePosition({
        x: Math.max(-80, Math.min(80, deltaX)),
        y: Math.max(-80, Math.min(80, deltaY))
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="contacto" className="relative py-40 px-4 overflow-hidden bg-black">
      {/* Logo del ojo de fondo - SIGUE AL MOUSE */}
      <div className="absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none">
        <div 
          className="relative w-[900px] h-[900px] transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${eyePosition.x}px, ${eyePosition.y}px) scale(1.05)`,
          }}
        >
          <Image 
            src="/illari-eye.svg" 
            alt="ILLARI Vision" 
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Partículas que reaccionan al mouse */}
      <div 
        className="absolute w-3 h-3 bg-cyan-400 rounded-full blur-sm animate-pulse pointer-events-none"
        style={{
          left: `${mousePosition.x + 150}px`,
          top: `${mousePosition.y - 80}px`,
          transition: 'all 0.2s ease-out'
        }}
      ></div>
      <div 
        className="absolute w-3 h-3 bg-cyan-400 rounded-full blur-sm animate-pulse pointer-events-none"
        style={{
          left: `${mousePosition.x - 150}px`,
          top: `${mousePosition.y + 80}px`,
          transition: 'all 0.3s ease-out',
          animationDelay: '0.2s'
        }}
      ></div>
      <div 
        className="absolute w-3 h-3 bg-cyan-400 rounded-full blur-sm animate-pulse pointer-events-none"
        style={{
          left: `${mousePosition.x + 80}px`,
          top: `${mousePosition.y + 150}px`,
          transition: 'all 0.25s ease-out',
          animationDelay: '0.1s'
        }}
      ></div>
      <div 
        className="absolute w-2 h-2 bg-blue-400 rounded-full blur-sm animate-pulse pointer-events-none"
        style={{
          left: `${mousePosition.x - 80}px`,
          top: `${mousePosition.y - 150}px`,
          transition: 'all 0.35s ease-out',
          animationDelay: '0.15s'
        }}
      ></div>

      {/* Contenido principal - SIMPLIFICADO */}
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Título principal */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
          Comience hoy mismo su
          <br />
          <span className="text-cyan-400">presencia digital</span>
        </h2>

        {/* Subtítulo */}
        <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Conversemos por WhatsApp. Sin compromiso.
        </p>

        {/* Botón CTA ÚNICO */}
        <div className="flex justify-center mb-8">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block"
          >
            {/* Efecto de resplandor sutil */}
            <div className="absolute -inset-1 bg-white/20 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Botón principal */}
            <div className="relative px-12 py-5 bg-white text-black rounded-lg font-bold text-xl group-hover:bg-gray-100 transition-colors">
              EMPEZAR
            </div>
          </a>
        </div>

        {/* Texto pequeño debajo */}
        <p className="text-gray-500 text-sm">
          Consultoría gratuita • Respuesta inmediata
        </p>
      </div>
    </section>
  );
}