import { Section, SectionHeader } from "@/components/ui/Section";
import { Medal, TrendingUp, Zap, AlertCircle } from "lucide-react";

const findings = [
  {
    icon: Medal,
    title: "LeJEPA leads representation quality",
    text: "LeJEPA achieves the highest linear probe and k-NN accuracy, suggesting its predictive objective learns more transferable features.",
  },
  {
    icon: TrendingUp,
    title: "BYOL converges fastest",
    text: "BYOL reaches a stable loss earlier than contrastive and redundancy-reduction methods, with no reliance on negative samples.",
  },
  {
    icon: Zap,
    title: "VICReg and Barlow Twins are stable",
    text: "Both non-contrastive methods avoid collapse reliably and offer strong performance with simpler hyperparameter tuning.",
  },
  {
    icon: AlertCircle,
    title: "Trade-offs remain",
    text: "LeJEPA's gains come with a modest compute overhead. For resource-constrained settings, BYOL or Barlow Twins are competitive alternatives.",
  },
];

export function Findings() {
  return (
    <Section id="findings" variant="muted">
      <SectionHeader
        eyebrow="Findings"
        title="What the benchmark revealed"
        description="The controlled comparison surfaces clear, actionable takeaways for practitioners choosing a self-supervised method."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {findings.map((finding) => (
          <div
            key={finding.title}
            className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <finding.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{finding.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{finding.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-card p-8">
        <h3 className="text-xl font-semibold text-foreground">Discussion</h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          The results confirm that the choice of SSL objective matters even when the encoder and
          training budget are fixed. Joint-embedding predictive architectures such as LeJEPA show
          promise for learning richer, more transferable representations, while mature methods like
          BYOL and Barlow Twins remain practical defaults. Future work could extend the benchmark to
          larger backbones (ResNet-50, ViT) and more diverse downstream tasks such as object
          detection and semantic segmentation.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <h4 className="font-semibold text-foreground">Limitations</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Experiments are limited to ResNet-18 on CIFAR-10 and STL-10; results may not
              generalise to larger-scale pre-training.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <h4 className="font-semibold text-foreground">Future work</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Scale to ImageNet, evaluate vision transformers, and add downstream transfer tasks
              beyond classification.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
