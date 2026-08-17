import { Section, SectionHeader } from "@/components/ui/Section";
import { ArrowRight, Database, DollarSign, BrainCircuit, Scale } from "lucide-react";

const flowSteps = [
  {
    icon: Database,
    title: "Traditional supervised learning",
    description: "Requires massive labelled datasets to train deep models.",
  },
  {
    icon: DollarSign,
    title: "Labelling is expensive",
    description: "Human annotation is slow, costly, and error-prone at scale.",
  },
  {
    icon: BrainCircuit,
    title: "Self-supervised learning",
    description: "Learns useful representations from raw data alone.",
  },
  {
    icon: Scale,
    title: "But which method is best?",
    description: "Different objectives, augmentations, and hyperparameters make comparison hard.",
  },
];

export function Motivation() {
  return (
    <Section id="motivation">
      <SectionHeader
        eyebrow="Motivation"
        title="Why compare self-supervised methods?"
        description="The promise of SSL is clear; the path to choosing a method is not. This project closes that gap with a controlled, reproducible benchmark."
      />

      <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {flowSteps.map((step, index) => (
          <div key={step.title} className="relative">
            <div className="h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
            {index < flowSteps.length - 1 && (
              <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground lg:block" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-8">
        <h3 className="text-xl font-semibold text-foreground">Research gap</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Existing comparisons often vary the encoder architecture, training budget, or evaluation
          protocol across methods. That makes it impossible to isolate whether differences come from
          the SSL objective itself or from confounding factors. This study controls every variable
          except the SSL method, giving a fair answer to the question: under identical conditions,
          which objective learns the best representations?
        </p>
      </div>
    </Section>
  );
}
