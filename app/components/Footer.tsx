import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
  { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
];

const quickLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#070B14] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#home" className="flex items-center gap-3 mb-4">
              <Image src="/logo_nobg.png" alt="ILLARI" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold gradient-text">ILLARI</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Transformamos tu visión en una presencia digital impactante. Desarrollo web profesional desde Arequipa.</p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} aria-label={social.label} className="w-10 h-10 bg-gray-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Desarrollo Web</li>
              <li>Dominios & Hosting</li>
              <li>Diseño UI/UX</li>
              <li>Mantenimiento</li>
              <li>SEO & Marketing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>contacto@illari.pe</li>
              <li>+51 999 888 777</li>
              <li>Arequipa, Perú</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} ILLARI. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-gray-300 transition">Política de privacidad</Link>
            <Link href="#" className="hover:text-gray-300 transition">Términos de servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}