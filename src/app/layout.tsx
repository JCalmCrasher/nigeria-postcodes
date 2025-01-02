import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
 variable: "--font-geist-sans",
 subsets: ["latin"]
});

const geistMono = Geist_Mono({
 variable: "--font-geist-mono",
 subsets: ["latin"]
});

export const metadata: Metadata = {
 title: "Nigeria Postcodes",
 description: "Easily find and manage postcodes across Nigeria"
};

export default function RootLayout({
 children
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
   </head>
   <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    {children}
    <Footer />
   </body>
  </html>
 );
}
