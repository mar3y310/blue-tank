import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarPage from "./component/Navbar/Navbar";
import Footer from "./component/footer/Footer";
import WhatsButton from "./component/WhatsButton/WhatsButton";
import ScrollUp from "./component/ScrollUp/ScrollUp";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "بلو تانك  – شركة متخصصة في  مجال صناعة خزانات المياه",
  description: " شركة متخصصة في  مجال صناعة خزانات المياه",
    icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <head>
      {/* <link rel="icon" href="/newBlueLogo-removebg-preview.png" type="image/png" /> */}
      </head>
        <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <ScrollUp/>
        <WhatsButton/>

       
        <NavbarPage/>
      
        <main className="fix-height mt-[123px]">
         
        {children}
    
        </main>
        <Footer/>
      </body>
    </html>
  );
}
