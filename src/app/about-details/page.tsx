import type { Metadata } from "next";
import AboutDetailsClient from "./AboutDetailsClient";


export const metadata: Metadata = {
  title: "About Arun Kumar | Arun Dev Studio - Full-Stack Developer & AI Engineer",
  description:
    "Learn about Arun Kumar, founder of Arun Dev Studio. 5+ years of experience in Flutter, React, Next.js, and AI solutions. IIT Patna M.Tech in AI & Data Science. Star Award recipient at AU Small Finance Bank. Building scalable digital products for startups and enterprises.",
  keywords: [
    "Arun Kumar",
    "Arun Dev Studio",
    "full stack developer",
    "Flutter developer",
    "React developer",
    "AI engineer",
    "IIT Patna",
    "software engineer India",
    "freelance developer",
    "mobile app developer",
    "App development",
    "Website",
    
  ],
  openGraph: {
    title: "About Arun Kumar | Arun Dev Studio",
    description:
      "Full-Stack Developer & AI Engineer with 5+ years of experience. Founder of Arun Dev Studio. Building scalable digital products for startups and enterprises.",
    url: "https://arundevstudio.com/about-details",
    type: "profile",
    images: [
      {
        url: "/images/prImg.jpg",
        width: 500,
        height: 700,
        alt: "Arun Kumar - Full-Stack Developer & AI Engineer",
      },
    ],
  },
  alternates: {
    canonical: "https://arundevstudio.com/about-details",
  },
};

export default function AboutDetailsPage() {
  return <AboutDetailsClient />;
}