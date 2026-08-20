import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";

import lejepa_cf from "@/assets/lejepa_cm.png";
import simclr_cf from "@/assets/simclr_cm.png";
import byol_cf from "@/assets/byol_cm.png";
import vicreg_cf from "@/assets/vicreg_cm.png";
import barlow_cf from "@/assets/barlow_twins_cm.png";

import lejepa_stl from "@/assets/lejepa_cm_stl10.png";
import simclr_stl from "@/assets/simclr_cm_stl10.png";
import byol_stl from "@/assets/byol_cm_stl10.png";
import vicreg_stl from "@/assets/vicreg_cm_stl10.png";
import barlow_stl from "@/assets/barlow_twins_cm_stl10.png";

type Plot = { method: string; src: string; note: string; featured?: boolean };
type View = { blurb: string; caption: string; plots: Plot[] };

const views: Record<string, Record<string, View>> = {
  "CIFAR-10": {
    "t-SNE": {
      blurb:
        "A confusion matrix shows the model’s classification performance by comparing actual labels (rows) with predicted labels (columns). Higher diagonal values indicate more correct predictions, while off-diagonal values represent misclassifications.",
      caption:
        "Perplexity 30, 1,000 iterations, PCA-50 initialisation. Identical ResNet-18 backbone and pre-training budget across all methods.",
      plots: [
        {
          method: "LeJEPA",
          src: lejepa_cf,
          note: "Best overall performance, with the strongest diagonal dominance and fewest misclassifications.",
          featured: true,
        },
        {
          method: "Barlow Twins",
          src: barlow_cf,
          note: "Good performance, but noticeably more confusion between several classes.",
        },
        {
          method: "BYOL",
          src: byol_cf,
          note: "Moderate performance with relatively strong diagonal predictions, but more errors than LeJEPA.",
        },
        {
          method: "SimCLR",
          src: simclr_cf,
          note: "Moderate classification quality, with higher confusion in classes 2–5.",
        },
        {
          method: "VICReg",
          src: vicreg_cf,
          note: "Weakest overall, showing substantial off-diagonal confusion across multiple classes.",
        },
      ],
    },
  },
  "STL-10": {
    "t-SNE": {
      blurb:
        "t-SNE of frozen features on the higher-resolution STL-10 test set, coloured by class. STL-10's 96x96 images and smaller labelled split make the separation test noticeably harder than CIFAR-10.",
      caption:
        "Perplexity 30, 1,000 iterations, PCA-50 initialisation, evaluated on a labelled STL-10 subset. Same backbone and transfer protocol as the CIFAR-10 runs.",
      plots: [
        {
          method: "LeJEPA",
          src: lejepa_stl,
          note: "Best overall performance, with the strongest diagonal dominance and fewest misclassifications.",
          featured: true,
        },
        {
          method: "VICReg",
          src: vicreg_stl,
          note: "Weakest overall, showing substantial off-diagonal confusion across multiple classes.",
        },
        {
          method: "Barlow Twins",
          src: barlow_stl,
          note: "Good performance, but noticeably more confusion between several classes.",
        },
        {
          method: "BYOL",
          src: byol_stl,
          note: "Moderate performance with relatively strong diagonal predictions, but more errors than LeJEPA.",
        },
        {
          method: "SimCLR",
          src: simclr_stl,
          note: "Moderate classification quality, with higher confusion in classes 2–5.",
        },
      ],
    },
  },
};

const datasets = Object.keys(views);

export function ConfusionMatrix() {
  const [dataset, setDataset] = useState(datasets[0]!);
  const projections = Object.keys(views[dataset]!);
  const [projection, setProjection] = useState(projections[0]!);
  const active = views[dataset]![projection] ?? views[dataset]![projections[0]!]!;
  const activeProjection = views[dataset]![projection] ? projection : projections[0]!;

  const selectDataset = (next: string) => {
    setDataset(next);
    const available = Object.keys(views[next]!);
    if (!available.includes(projection)) setProjection(available[0]!);
  };

  const tabClass = (selected: boolean) =>
    `rounded-full px-5 py-2 text-sm font-medium transition-colors ${
      selected
        ? "bg-primary text-primary-foreground"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <Section id="confusionmatrix">
      <SectionHeader
        eyebrow="Dataset Wise Confusion Matrix"
        title="Confusion Matrix"
        description={active.blurb}
      />

      <div className="mb-8 flex flex-wrap items-center gap-3">
        <div
          role="tablist"
          aria-label="Dataset"
          className="inline-flex rounded-full border border-border bg-card p-1"
        >
          {datasets.map((name) => (
            <button
              key={name}
              role="tab"
              aria-selected={dataset === name}
              onClick={() => selectDataset(name)}
              className={tabClass(dataset === name)}
            >
              {name}
            </button>
          ))}
        </div>
        {/* <div
          role="tablist"
          aria-label="Projection method"
          className="inline-flex rounded-full border border-border bg-card p-1"
        >
          {projections.map((name) => (
            <button
              key={name}
              role="tab"
              aria-selected={activeProjection === name}
              onClick={() => setProjection(name)}
              className={tabClass(activeProjection === name)}
              hidden
            >
              {name}
            </button>
          ))}
        </div> */}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {active.plots.map((plot) => (
          <figure
            key={`${dataset}-${activeProjection}-${plot.method}`}
            className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="bg-white p-2">
              <img
                src={plot.src}
                alt={`${activeProjection} projection of ${plot.method} representations on the ${dataset} test set, coloured by class`}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full object-contain"
              />
            </div>
            <figcaption className="flex flex-1 flex-col gap-2 border-t border-border p-5">
              <div className="flex items-center gap-2">
                <span className="font-heading text-base font-semibold text-foreground">
                  {plot.method}
                </span>
                {plot.featured && (
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                    Best separation
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{plot.note}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">{active.caption}</p>
    </Section>
  );
}
