import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { ResearchAtAGlance } from "@/components/sections/ResearchAtAGlance";
import { Motivation } from "@/components/sections/Motivation";
import { ResearchQuestions } from "@/components/sections/ResearchQuestions";
import { Methods } from "@/components/sections/Methods";
import { ExperimentalFramework } from "@/components/sections/ExperimentalFramework";
import { Results } from "@/components/sections/Results";
import { Embeddings } from "@/components/sections/Embeddings";
import { ConfusionMatrix } from "@/components/sections/ConfusionMatrix";
import { Findings } from "@/components/sections/Findings";
import { Reproducibility } from "@/components/sections/Reproducibility";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Benchmarking Modern Self-Supervised Learning | Saif Nizami" },
      {
        name: "description",
        content:
          "A comparative study of LeJEPA, SimCLR, BYOL, VICReg, and Barlow Twins for self-supervised image representation learning.",
      },
      {
        property: "og:title",
        content: "Benchmarking Modern Self-Supervised Learning Methods",
      },
      {
        property: "og:description",
        content:
          "A comparative evaluation of LeJEPA, SimCLR, BYOL, VICReg, and Barlow Twins using a common ResNet-18 framework.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ResearchAtAGlance />
      <Motivation />
      <ResearchQuestions />
      <Methods />
      <ExperimentalFramework />
      <Results />
      <Embeddings />
      <ConfusionMatrix/>
      <Findings />
      <Reproducibility />
      <Footer />
    </main>
  );
}
