import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const methods = [
  {
    name: "SimCLR",
    year: "2020",
    colour: "bg-chart-1",
    idea: "Contrastive learning with strong augmentations and a learned nonlinear projection head.",
    loss: "NT-Xent",
    detail:
      "Pulls augmented views of the same image closer while pushing other samples apart in normalised projection space.",
  },
  {
    name: "BYOL",
    year: "2020",
    colour: "bg-chart-2",
    idea: "Self-distillation without negative samples, using online and target networks.",
    loss: "MSE on projections",
    detail:
      "The online network predicts the target network's output; the target is an exponential moving average of the online weights.",
  },
  {
    name: "VICReg",
    year: "2021",
    colour: "bg-chart-3",
    idea: "Variance-Invariance-Covariance regularisation without contrastive pairs.",
    loss: "VICReg loss",
    detail:
      "Balances representation invariance across views while preventing collapse through variance and covariance terms.",
  },
  {
    name: "Barlow Twins",
    year: "2021",
    colour: "bg-chart-4",
    idea: "Redundancy reduction by making the cross-correlation matrix near identity.",
    loss: "Barlow Twins loss",
    detail:
      "Encourages the embedding cross-correlation matrix to be identity, aligning representations while removing redundancy.",
  },
  {
    name: "LeJEPA",
    year: "2024",
    colour: "bg-chart-5",
    idea: "Joint-Embedding Predictive Architecture with latent prediction targets.",
    loss: "Latent prediction",
    detail:
      "Predicts representations of masked target patches from context patches in a joint-embedding, non-generative framework.",
  },
];

export function Methods() {
  return (
    <Section id="methods">
      <SectionHeader
        eyebrow="Methods Compared"
        title="Five approaches, one encoder"
        description="From classic contrastive learning to the latest joint-embedding predictive architectures, each method is evaluated on the same ResNet-18 backbone."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {methods.map((method) => (
          <div
            key={method.name}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
          >
            <div className={cn("absolute left-0 top-0 h-1 w-full", method.colour)} />
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{method.name}</h3>
                <p className="text-sm text-muted-foreground">{method.year}</p>
              </div>
              <span className="rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                {method.loss}
              </span>
            </div>
            <p className="mt-4 font-medium text-foreground">{method.idea}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{method.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
