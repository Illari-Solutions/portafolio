"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  { icon: <Mail size={24} />, title: "Email", value: "contacto@illari.pe", link: "mailto:contacto@illari.pe" },
  { icon: <Phone size={24} />, title: "Teléfono", value: "+51 999 888 777", link: "tel:+51999888777" },
  { icon: <MessageCircle size={24} />, title: "WhatsApp", value: "+51 999 888 777", link: "https://wa.me/51999888777" },
  { icon: <MapPin size={24} />, title: "Ubicación", value: "Arequipa, Perú", link: "#" },
];

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("¡Mensaje enviado! Nos pondremos en contacto pronto.");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-24 px-4 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Hablemos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="gradient-text">Contáctanos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">¿Listo para comenzar tu proyecto? Escríbenos y te responderemos en menos de 24 horas</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Información de contacto</h3>
            {contactInfo.map((info, i) => (
              <a key={i} href={info.link} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-800/50 transition group">
                <div className="w-12 h-12 bg-linear-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <div className="text-gray-400 text-sm">{info.title}</div>
                  <div className="font-semibold text-lg">{info.value}</div>
                </div>
              </a>
            ))}
            <div className="mt-8 p-6 bg-linear-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20">
              <p className="text-gray-300 italic">"ILLARI transformó nuestra presencia digital. Excelente trabajo y atención."</p>
              <p className="text-cyan-400 font-semibold mt-3">— Cliente satisfecho</p>
            </div>
          </div>

          <div className="card-illari">
            <h3 className="text-xl font-bold mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Tu nombre</label>
                <input type="text" required value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition" placeholder="Ej: Juan Pérez" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Tu email</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Tu mensaje</label>
                <textarea required rows={4} value={formData.mensaje} onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })} className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition resize-none" placeholder="Cuéntanos sobre tu proyecto..." />
              </div>
              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                <Send size={18} /> Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}