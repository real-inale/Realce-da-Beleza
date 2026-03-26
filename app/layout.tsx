import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Realce da Beleza ✨ | Aluguer de Vestidos Elegantes em Luanda",
  description: "Ajudamos mulheres a brilharem em momentos especiais com vestidos elegantes para aluguer. Localizado no Camama, Luanda.",
  keywords: "aluguer de vestidos, vestidos de festa Luanda, vestidos elegantes Angola, Realce da Beleza, vestidos para casamento Camama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-sans bg-white text-brand-black antialiased">
        {children}
      </body>
    </html>
  );
}
