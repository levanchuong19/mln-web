"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { UnderstandingSection } from "@/components/sections/understanding-section";
import { AnalysisSection } from "@/components/sections/analysis-section";
import { DataSection } from "@/components/sections/data-section";
import { FooterSection } from "@/components/footer-section";
import { CentralQuestionSection } from "@/components/sections/central-question-section";
import { YouthPerspectiveSection } from "@/components/sections/youth-perspective-section";
import { QuizSection } from "@/components/sections/quiz-section";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-bg-secondary)]">
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <HeroSection youtubeVideoId="W1oxnaKv5Q4" />
        <UnderstandingSection />
        <AnalysisSection />
        <DataSection />
        <CentralQuestionSection />
        <YouthPerspectiveSection />
        <QuizSection />
        <FooterSection />
      </div>
    </main>
  );
}
