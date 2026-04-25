import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://arundevstudio.com";

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arun Dev Studio | Web Development, Mobile Apps & AI Solutions",
    template: "%s | Arun Dev Studio",
  },
  description:
    "Arun Dev Studio is a freelance software development company specializing in web development, mobile app development (Flutter, React Native), and AI agent solutions. We help startups, businesses, and entrepreneurs build scalable, high-performance digital products. Based in India, serving clients globally.",
  keywords: [
    "Arun Dev Studio",
    "Arun Dev Studio Saharsa",
    "Arun Dev Studio Bihar",
    "software development company",
    "freelance web developer",
    "freelance app developer",
    "Flutter app development",
    "React developer",
    "Next.js developer",
    "AI agent development",
    "mobile app development",
    "web development services",
    "custom software development",
    "AI solutions",
    "business automation",
    "digital transformation",
    "e-commerce development",
    "government portal development",
    "full stack developer India",
    "Arun Kumar developer",
    "Arun Kumar software engineer",
    "hire Flutter developer",
    "hire React developer",
    "startup technology partner",
    "scalable web applications",
    "cross-platform mobile apps",
    "n8n automation",
    "LangChain AI",
    "Llama3 AI solutions",
  ],
  authors: [{ name: "Arun Kumar", url: SITE_URL }],
  creator: "Arun Kumar",
  publisher: "Arun Dev Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Arun Dev Studio | Web Development, Mobile Apps & AI Solutions",
    description:
      "Arun Dev Studio is a freelance software development company specializing in web development, mobile app development, and AI agent solutions. We help startups and businesses build scalable digital products.",
    url: SITE_URL,
    siteName: "Arun Dev Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/arun_dev_stuido_logo.png",
        width: 1200,
        height: 630,
        alt: "Arun Dev Studio - Web Development, Mobile Apps & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Dev Studio | Web Development, Mobile Apps & AI Solutions",
    description:
      "Freelance software development company specializing in web, mobile app, and AI agent solutions. Helping startups & businesses build scalable digital products.",
    images: ["/images/arun_dev_stuido_logo.png"],
  },
  verification: {
    // Add your Google Search Console verification code here after registering
    // google: "your-google-verification-code",
  },
  other: {
    "google-site-verification": "", // Will be filled after Google Search Console setup
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
        <link rel="canonical" href={SITE_URL} />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Arun Dev Studio",
              alternateName: ["ArunDevStudio", "Arun Dev Studio Saharsa"],
              url: SITE_URL,
              logo: `${SITE_URL}/images/arun_dev_stuido_logo.png`,
              description:
                "Arun Dev Studio is a freelance software development company specializing in web development, mobile app development (Flutter, React Native), and AI agent solutions. We help startups, businesses, and entrepreneurs build scalable, high-performance digital products.",
              foundingDate: "2021",
              founder: {
                "@type": "Person",
                name: "Arun Kumar",
                jobTitle: "Full-Stack Developer & AI Engineer",
                url: SITE_URL,
                sameAs: [
                  "https://www.linkedin.com/in/imarunjnv/",
                  "https://github.com/arun2github",
                  "https://www.instagram.com/thefreeguy.dev/",
                ],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Saharsa",
                addressRegion: "Bihar",
                addressCountry: "IN",
                postalCode: "852201",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "arun.devfolio@gmail.com",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.linkedin.com/in/imarunjnv/",
                "https://github.com/arun2github",
                "https://www.instagram.com/thefreeguy.dev/",
                "https://www.facebook.com/arun.disambiguation",
              ],
              serviceType: [
                "Web Development",
                "Mobile App Development",
                "AI Agent Development",
                "Flutter Development",
                "React Development",
                "Custom Software Development",
                "Business Automation",
                "E-commerce Development",
              ],
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 25.8839,
                  longitude: 86.5944,
                },
              },
            }),
          }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Arun Dev Studio",
              url: SITE_URL,
              description:
                "Arun Dev Studio - Freelance software development company specializing in web, mobile, and AI solutions.",
              publisher: {
                "@type": "Organization",
                name: "Arun Dev Studio",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Structured Data - Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Arun Dev Studio",
              image: `${SITE_URL}/images/arun_dev_stuido_logo.png`,
              url: SITE_URL,
              telephone: "",
              email: "arun.devfolio@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Saharsa",
                addressRegion: "Bihar",
                addressCountry: "IN",
                postalCode: "852201",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.8839,
                longitude: 86.5944,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "5",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        <ScrollProgress />
        <FloatingCTA />
        <ParallaxWrapper>
          <Navbar />
          {children}
        </ParallaxWrapper>
      </body>
    </html>
  );
}