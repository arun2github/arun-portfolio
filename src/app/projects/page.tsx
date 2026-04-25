import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects | Arun Dev Studio - Web, Mobile & AI Solutions Portfolio",
  description:
    "Explore projects by Arun Dev Studio — web applications, mobile apps (Flutter, React Native), and AI agent solutions built for startups and enterprises. 20+ projects shipped across banking, healthcare, e-commerce, and government sectors.",
  keywords: [
    "Arun Dev Studio projects",
    "web development portfolio",
    "mobile app development",
    "Flutter projects",
    "React projects",
    "AI agent development",
    "software development portfolio",
    "freelance developer projects",
    "startup app development",
    "enterprise software solutions",
  ],
  openGraph: {
    title: "Projects | Arun Dev Studio",
    description:
      "20+ projects shipped — web apps, mobile apps, and AI solutions by Arun Dev Studio. Built for startups and enterprises worldwide.",
    url: "https://arundevstudio.com/projects",
    type: "website",
    images: [
      {
        url: "/images/herobg.png",
        width: 1200,
        height: 630,
        alt: "Arun Dev Studio Projects - Web, Mobile & AI Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://arundevstudio.com/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}