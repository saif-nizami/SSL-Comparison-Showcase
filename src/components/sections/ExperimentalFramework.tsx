import { Section, SectionHeader } from "@/components/ui/Section";
import { CheckCircle2, Image, Layers, Ruler, Settings, Shuffle } from "lucide-react";

const pipeline = [
  { step: "1", label: "Raw images", icon: Image },
  { step: "2", label: "Augmentations", icon: Shuffle },
  { step: "3", label: "SSL encoder", icon: Layers },
  { step: "4", label: "Pre-training", icon: Settings },
  { step: "5", label: "Evaluation", icon: Ruler },
];

const datasets = [
  {
    name: "CIFAR-10",
    samples: "60,000",
    classes: "10",
    resolution: "32 × 32",
    use: "Primary benchmark for linear probe and fine-tuning.",
  },
  {
    name: "STL-10",
    samples: "113,000",
    classes: "10",
    resolution: "96 × 96",
    use: "Higher-resolution transfer and semi-supervised evaluation.",
  },
];

const metrics = [
  "Linear probe top-1 accuracy",
  "Fine-tuned top-1 accuracy",
  "k-NN classification accuracy",
  "Training loss convergence",
  "t-SNE / UMAP visualisation",
];

const config = [
  { label: "Backbone", value: "ResNet-18" },
  { label: "Optimiser", value: "SGD with cosine annealing" },
  { label: "Batch size", value: "256" },
  { label: "Pre-training epochs", value: "100" },
  { label: "Learning rate", value: "Tuned per method" },
  { label: "Projection head", value: "Standard 2-layer MLP" },
];

export function ExperimentalFramework() {
  return (
    <Section id="framework" variant="muted">
      <SectionHeader
        eyebrow="Experimental Framework"
        title="A controlled, reproducible pipeline"
        description="Every method shares the same encoder, datasets, training schedule, and evaluation protocol so differences in performance reflect the SSL objective itself."
      />

      <div className="mb-12 overflow-x-auto rounded-2xl border border-border bg-card p-6">
        <div className="flex min-w-[600px] items-center justify-between gap-4">
          {pipeline.map((item, index) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-center text-xs font-medium text-muted-foreground">
                  {item.label}
                </span>
              </div>
              {index < pipeline.length - 1 && <div className="h-px w-12 bg-border" />}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground">Datasets</h3>
          <div className="mt-6 space-y-4">
            {datasets.map((dataset) => (
              <div key={dataset.name} className="rounded-xl border border-border bg-muted/30 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-foreground">{dataset.name}</h4>
                  <span className="text-xs text-muted-foreground">{dataset.resolution}</span>
                </div>
                <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
                  <span>{dataset.samples} images</span>
                  <span>{dataset.classes} classes</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{dataset.use}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground">Training configuration</h3>
          <dl className="mt-6 grid gap-3">
            {config.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg border border-border p-3"
              >
                <dt className="text-sm text-muted-foreground">{item.label}</dt>
                <dd className="text-sm font-semibold text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground">Evaluation metrics</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric} className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
              {metric}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
