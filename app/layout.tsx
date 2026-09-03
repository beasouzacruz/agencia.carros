import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Sistema de Veículos",
  description: "Gerenciamento de Carros e Concessionárias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <NavBar />
        {/* A tag children renderiza a página atual que o usuário está acessando */}
        <main className="flex-grow">
            {children}
        </main>
      </body>
    </html>
  );
}