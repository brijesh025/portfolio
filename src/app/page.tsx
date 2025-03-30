import Hero from "@/components/Hero";
import FeaturedWorks from "@/components/FeaturedWorks";
import SkillShowcase from "@/components/SkillShowcase";
import WhyHireMe from "@/components/WhyHireMe";
import CTASection from "@/components/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brijesh Singh - Full Stack Developer",
  description:
    "Portfolio of Brijesh Singh, a Full Stack Developer specializing in React, Next.js, Node.js and real-time applications.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <SkillShowcase />
      <FeaturedWorks />
      <WhyHireMe />
      <CTASection />
    </main>
  );
}
