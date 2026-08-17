import { Section, SectionHeader } from "@/components/ui/Section";
import { Layers, Database, Cpu, Gauge, FlaskConical } from "lucide-react";

const metrics = [
  {
    value: "5",
    label: "SSL Methods",
    icon: Layers,
    description: "SimCLR, BYOL, VICReg, Barlow Twins, LeJEPA",
  },
  {
    value: "2",
    label: "Datasets",
    icon: Database,
    description: "CIFAR-10 and STL-10 for evaluation",
  },
  {
    value: "1",
    label: "Common Encoder",
    icon: Cpu,
    description: "ResNet-18 backbone across all methods",
  },
  {
    value: "200",
    label: "Training Epochs",
    icon: Gauge,
    description: "Standardised pre-training schedule",
  },
  {
    value: "4",
    label: "Experiments",
    icon: FlaskConical,
    description: "Linear probe, fine-tuning, k-NN, visualisation",
  },
];

export function ResearchAtAGlance() {
  return (
    <Section id="overview" variant="muted">
      <SectionHeader
        eyebrow="Research at a Glance"
        title="The entire project, in about ten seconds"
        description="We benchmark five leading self-supervised methods on a shared ResNet-18 pipeline to understand which approach learns the most useful image representations."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <metric.icon className="h-5 w-5" />
            </div>
            <p className="text-3xl font-bold tracking-tight text-foreground">{metric.value}</p>
            <p className="mt-1 font-medium text-foreground">{metric.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-card p-8">
        <p className="text-lg leading-relaxed text-foreground">
          Self-supervised learning (SSL) promises to learn visual representations without expensive
          labels. But with so many methods - each with its own objective, augmentations, and
          hyperparameters - it is hard to know which one to choose. This study fixes the encoder,
          datasets, and training budget, then compares five representative methods head-to-head on
          downstream classification and representation quality.
        </p>
      </div>
    </Section>
  );
}
