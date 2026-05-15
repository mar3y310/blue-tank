import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavbarPage from "./component/Navbar/Navbar";
import Footer from "./component/footer/Footer";
import WhatsButton from "./component/WhatsButton/WhatsButton";
import ScrollUp from "./component/ScrollUp/ScrollUp";

// Fonts
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "بلو تانك – شركة متخصصة في مجال صناعة خزانات المياه",
  description: "شركة متخصصة في مجال صناعة خزانات المياه",
  icons: {
    icon: "/favicon.png",
  },
};

// Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body
        className={`${cairo.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollUp />
        <WhatsButton />
        <NavbarPage />

        <main className="fix-height mt-[123px]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}