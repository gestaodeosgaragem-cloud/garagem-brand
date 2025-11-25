import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import "./theme.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garagem Design System",
  description: "Repositório oficial da marca Garagem - Design System, logos, cores e componentes",
};

import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navigation />
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
