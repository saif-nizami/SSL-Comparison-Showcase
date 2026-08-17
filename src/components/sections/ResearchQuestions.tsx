import { Section, SectionHeader } from "@/components/ui/Section";
import { Target, Zap, BarChart3, Clock } from "lucide-react";

const questions = [
  {
    id: "RQ1",
    icon: BarChart3,
    title: "Downstream classification performance",
    text: "How do the five SSL methods compare in linear probe and fine-tuned accuracy on standard image benchmarks?",
  },
  {
    id: "RQ2",
    icon: Clock,
    title: "Convergence behaviour",
    text: "How quickly does each method converge, and how stable is the training loss across epochs?",
  },
  {
    id: "RQ3",
    icon: Target,
    title: "Representation quality",
    text: "How separable and transferable are the learned representations, as measured by k-NN and visualisation?",
  },
  {
    id: "RQ4",
    icon: Zap,
    title: "Performance vs. efficiency",
    text: "Which method provides the best balance between downstream accuracy and computational cost?",
  },
];

export function ResearchQuestions() {
  return (
    <Section id="questions" variant="muted">
      <SectionHeader
        eyebrow="Research Questions"
        title="What we set out to answer"
        description="Four focused questions guide the experimental design and the interpretation of results."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {questions.map((q) => (
          <div
            key={q.id}
            className="flex gap-5 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <q.icon className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                {q.id}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{q.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
