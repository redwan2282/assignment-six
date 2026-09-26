import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import ItemProvider from "@/context/itemProvider";
import Navbar from "@/app/components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitLog",
  description: "Workout Library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex flex-col min-h-screen w-full max-w-[1400px] mx-auto bg-[#0d0e12] text-white">
        <ItemProvider>
          <Navbar />

          <main className="flex-1">{children}</main>

          <footer className="bg-base-100 flex items-center justify-between px-[30px] pb-[40px] pt-[10px] shadow-inner">
            <div className="flex gap-1 items-center">
              <Image src={logo} alt="logo"/>
              <p className="btn btn-ghost text-xl">FITLOG</p>
            </div>
            <div>
              <p className="text-[12px] text-[#6b7280]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
          </footer>
        </ItemProvider>
      </body>
    </html>
  );
}