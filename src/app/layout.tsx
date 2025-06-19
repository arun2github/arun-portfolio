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
  title: "Arun Kumar - AI Agent Developer & Frontend Developer Portfolio",
  description: "Portfolio of Arun Kumar, a skilled AI Agent Developer and Frontend Developer specializing in modern web experiences, AI automation, and intelligent applications.",
  keywords: ["AI Agent Developer", "Frontend Developer", "Web Developer", "AI Automation", "LangChain", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Arun Kumar" }],
  creator: "Arun Kumar",
  publisher: "Arun Kumar",
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Arun Kumar - AI Agent Developer & Frontend Developer",
    description: "Explore the portfolio of Arun Kumar, featuring AI agents, modern web applications, and innovative development solutions.",
    url: "https://arun-portfolio.vercel.app",
    siteName: "Arun Kumar Portfolio",
    type: "website",
    images: [
      {
        url: "/images/portfoilio_icon.png",
        width: 1200,
        height: 630,
        alt: "Arun Kumar - AI Agent Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Kumar - AI Agent Developer & Frontend Developer",
    description: "Explore innovative AI agents and modern web applications by Arun Kumar.",
    images: ["/images/portfoilio_icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ParallaxWrapper>{children}</ParallaxWrapper>
      </body>
    </html>
  );
}
