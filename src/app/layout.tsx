import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

const spaceGrotesk = Space_Grotesk({
 variable: "--font-space-grotesk",
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
   <body className={`${spaceGrotesk.className} antialiased`}>
    {children}
    <ScrollToTop />
    <Footer />
   </body>
  </html>
 );
}
