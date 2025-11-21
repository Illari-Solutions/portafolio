import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ILLARI - Solutions",
  description: "Llevamos tu negocio al mundo digital. Creación de páginas web profesionales y gestión de dominios en Arequipa, Perú.",
  keywords: ["desarrollo web", "páginas web", "dominios", "hosting", "Arequipa", "Perú", "ILLARI"],
  authors: [{ name: "ILLARI" }],
  openGraph: {
    title: "ILLARI - Desarrollo Web & Dominios",
    description: "Llevamos tu negocio al mundo digital",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}