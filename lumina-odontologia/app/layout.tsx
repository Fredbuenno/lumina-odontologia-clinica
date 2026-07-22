import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumina Odontologia",
  description: "Clínica odontológica especializada em cuidar do seu sorriso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.className} min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}