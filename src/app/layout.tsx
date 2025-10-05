import type { Metadata } from "next";
import Footer from '../components/Footer';
import "./globals.css";


export const metadata: Metadata = {
  title: "ЛР 4",
  description: "Hooks NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>{children}
      <Footer />
      </body>
    </html>
  );
  
}