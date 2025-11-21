"use client";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
          
          window.scrollTo({
            top: offsetTop - 80, // Offset para el navbar
            behavior: "smooth",
          });

          // Actualizar URL sin salto
          history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}