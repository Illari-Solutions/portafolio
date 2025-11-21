"use client";
import { useEffect, useState, useRef } from "react";

// 🔵 Las paletas originales convertidas a RGBA numéricos para hacer blending real
const parseColor = (rgba: string) => rgba.match(/[\d.]+/g)!.map(Number);

const colorThemes = [
  {
    primary: parseColor("rgba(6,182,212,0.15)"),
    secondary: parseColor("rgba(59,130,246,0.1)"),
    inner: parseColor("rgba(6,182,212,0.2)"),
    innerSecondary: parseColor("rgba(59,130,246,0.1)"),
    center: parseColor("rgba(6,182,212,0.6)"),
  },
  {
    primary: parseColor("rgba(139,92,246,0.15)"),
    secondary: parseColor("rgba(236,72,153,0.1)"),
    inner: parseColor("rgba(139,92,246,0.2)"),
    innerSecondary: parseColor("rgba(168,85,247,0.1)"),
    center: parseColor("rgba(139,92,246,0.6)"),
  },
  {
    primary: parseColor("rgba(249,115,22,0.15)"),
    secondary: parseColor("rgba(234,179,8,0.1)"),
    inner: parseColor("rgba(249,115,22,0.2)"),
    innerSecondary: parseColor("rgba(251,146,60,0.1)"),
    center: parseColor("rgba(249,115,22,0.6)"),
  },
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Mezcla 2 colores RGBA suavemente
const lerpColor = (a: number[], b: number[], t: number) =>
  `rgba(${[
    Math.round(lerp(a[0], b[0], t)),
    Math.round(lerp(a[1], b[1], t)),
    Math.round(lerp(a[2], b[2], t)),
    lerp(a[3], b[3], t),
  ].join(",")})`;

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [t, setT] = useState(0); // interpolación 0 → 1

  const animationRef = useRef<number>(10);

  // 🟣 cambiar de paleta cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % colorThemes.length);
      setT(0); // reinicia transición
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 Transición progresiva entre paletas
  useEffect(() => {
    const animateBlend = () => {
      setT((prev) => Math.min(prev + 0.015, 1)); // velocidad de mezcla
      requestAnimationFrame(animateBlend);
    };
    animateBlend();
  }, []);

  // 🖱 Seguimiento del mouse
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const leave = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  // 🌀 Movimiento suave
  useEffect(() => {
    const animate = () => {
      setSmoothPosition((p) => ({
        x: p.x + (position.x - p.x) * 0.1,
        y: p.y + (position.y - p.y) * 0.1,
      }));
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationRef.current!);
  }, [position]);

  // 🎨 paleta interpolada
  const current = colorThemes[index];
  const next = colorThemes[(index + 1) % colorThemes.length];

  const theme = {
    primary: lerpColor(current.primary, next.primary, t),
    secondary: lerpColor(current.secondary, next.secondary, t),
    inner: lerpColor(current.inner, next.inner, t),
    innerSecondary: lerpColor(current.innerSecondary, next.innerSecondary, t),
    center: lerpColor(current.center, next.center, t),
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Glow grande */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl transition-opacity duration-700"
        style={{
          left: smoothPosition.x - 192,
          top: smoothPosition.y - 192,
          background: `radial-gradient(circle, ${theme.primary} 0%, ${theme.secondary} 50%, transparent 70%)`,
        }}
      />

      {/* Glow mediano */}
      <div
        className="absolute w-64 h-64 rounded-full blur-2xl transition-opacity duration-700"
        style={{
          left: smoothPosition.x - 128,
          top: smoothPosition.y - 128,
          background: `radial-gradient(circle, ${theme.inner} 0%, ${theme.innerSecondary} 50%, transparent 70%)`,
        }}
      />

      {/* Glow pequeño */}
      <div
        className="absolute w-32 h-32 rounded-full blur-xl transition-opacity duration-700 opacity-60"
        style={{
          left: smoothPosition.x - 64,
          top: smoothPosition.y - 64,
          background: `radial-gradient(circle, ${theme.center} 0%, transparent 70%)`,
        }}
      />

      {/* Punto del cursor */}
      <div
        className="absolute w-3 h-3 rounded-full blur-sm transition-opacity duration-500"
        style={{
          left: position.x - 6,
          top: position.y - 6,
          background: theme.center,
        }}
      />

      <div
        className="absolute w-2 h-2 rounded-full"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          background: "white",
          boxShadow: `0 0 12px ${theme.center}`,
        }}
      />
    </div>
  );
}
