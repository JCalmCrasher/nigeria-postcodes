import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Space_Grotesk({
 variable: "--font-geist-sans",
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
   <body className={`${geistSans.className} antialiased`}>
    {children}
    <Footer />
   </body>
  </html>
 );
}
