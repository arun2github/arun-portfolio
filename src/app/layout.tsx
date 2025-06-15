import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { ParallaxProvider } from 'react-scroll-parallax'; // No longer needed here
import ParallaxWrapper from "@/components/ParallaxWrapper"; // Import the new wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arun - Frontend Developer Portfolio", // Updated title
  description: "Portfolio of Arun, a skilled frontend developer.", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ParallaxWrapper>{children}</ParallaxWrapper>
      </body>
    </html>
  );
}
