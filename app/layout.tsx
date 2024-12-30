import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";

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
    <html lang="en">
      {" "}
      <link
        href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
        rel="stylesheet"
      />
      <body className={` antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
