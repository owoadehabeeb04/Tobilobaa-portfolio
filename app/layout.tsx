import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Indie_Flower } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-indie-flower",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Tobiloba's Portfolio",
  description: "UI/UX Designer & Webflow Developer"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${indieFlower.variable}`}
    >
      <body className="bg-base font-sans text-body antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
