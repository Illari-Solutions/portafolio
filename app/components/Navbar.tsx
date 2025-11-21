"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0A0F1C]/95 backdrop-blur-md shadow-lg shadow-cyan-500/5" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="#home" className="flex items-center gap-3">
            <Image src="/logo_nobg.png" alt="ILLARI" width={45} height={45} className="rounded-lg" />
            <span className="text-2xl font-bold gradient-text">ILLARI</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                {link.label}
              </Link>
            ))}
            <Link href="#contacto" className="ml-4 px-6 py-2 bg-linear-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:opacity-90 transition">
              Cotizar
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#111827] rounded-2xl mb-4 border border-gray-700/50 overflow-hidden">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block px-6 py-4 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition border-b border-gray-700/50 last:border-0">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}