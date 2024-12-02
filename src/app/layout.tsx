import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import "./css/responsive.css"
import "./css/animate.css"

const font1 = Roboto({
  subsets: ['latin'],
  weight: "400",
})

export const metadata: Metadata = {
  title: "CRUD",
  description: "Criar, Ler, Atualizar e Deletar Usuarios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${font1.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
