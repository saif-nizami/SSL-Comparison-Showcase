import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import lejepaTsne from "@/assets/lejepa_tsne.png";
import simclrTsne from "@/assets/simclr_tsne.png";
import byolTsne from "@/assets/byol_tsne.png";
import vicregTsne from "@/assets/vicreg_tsne.png";
import barlowTsne from "@/assets/barlow_twins_tsne.png";
import lejepaUmap from "@/assets/lejepa_umap.png";
import simclrUmap from "@/assets/simclr_umap.png";
import byolUmap from "@/assets/byol_umap.png";
import vicregUmap from "@/assets/vicreg_umap.png";
import barlowUmap from "@/assets/barlow_twins_umap.png";
import lejepaStl from "@/assets/lejepa_tsne_stl10.png";
import simclrStl from "@/assets/simclr_tsne_stl10.png";
import byolStl from "@/assets/byol_tsne_stl10.png";
import vicregStl from "@/assets/vicreg_tsne_stl10.png";
import barlowStl from "@/assets/barlow_twins_tsne_stl10.png";
import lejepaStlUmap from "@/assets/lejepa_umap_stl10.png";
import simclrStlUmap from "@/assets/simclr_umap_stl10.png";
import byolStlUmap from "@/assets/byol_umap_stl10.png";
import vicregStlUmap from "@/assets/vicreg_umap_stl10.png";
import barlowStlUmap from "@/assets/barlow_twins_umap_stl10.png";

type Plot = { method: string; src: string; note: string; featured?: boolean };
type View = { blurb: string; caption: string; plots: Plot[] };

const views: Record<string, Record<string, View>> = {
  "CIFAR-10": {
    "t-SNE": {
      blurb:
        "2-D t-SNE of frozen backbone features on the CIFAR-10 test set, coloured by ground-truth class. Cluster compactness and separation track linear-probe accuracy closely.",
      caption:
        "Perplexity 30, 1,000 iterations, PCA-50 initialisation. Identical ResNet-18 backbone and pre-training budget across all methods.",
      plots: [
        {
          method: "LeJEPA",
          src: lejepaTsne,
          note: "Ten tight, well-separated clusters with minimal class bleed — the cleanest embedding geometry of the five.",
          featured: true,
        },
        {
          method: "Barlow Twins",
          src: barlowTsne,
          note: "Partial separation: several classes form clear islands while animal classes overlap in the centre.",
        },
        {
          method: "BYOL",
          src: byolTsne,
          note: "Vehicle classes separate strongly; fine-grained animal classes remain entangled.",
        },
        {
          method: "SimCLR",
          src: simclrTsne,
          note: "Broad topical regions emerge, but cluster boundaries stay diffuse without a hard separation margin.",
        },
        {
          method: "VICReg",
          src: vicregTsne,
          note: "Most diffuse structure at this training budget, with heavy mixing across the central region.",
        },
      ],
    },
    UMAP: {
      blurb:
        "UMAP projections of the same frozen CIFAR-10 features. UMAP preserves more global structure, showing how the class manifolds sit relative to one another rather than only local neighbourhoods.",
      caption:
        "n_neighbors 15, min_dist 0.1, cosine metric. Same frozen ResNet-18 features used for the t-SNE views.",
      plots: [
        {
          method: "LeJEPA",
          src: lejepaUmap,
          note: "Distinct, largely contiguous class regions with only one dense mixed pocket — strongest global structure.",
          featured: true,
        },
        {
          method: "Barlow Twins",
          src: barlowUmap,
          note: "Vehicle and ship/truck manifolds pull apart cleanly; the animal super-cluster stays mixed.",
        },
        {
          method: "BYOL",
          src: byolUmap,
          note: "Clear filament structure with well-formed vehicle arms and a broad entangled animal core.",
        },
        {
          method: "SimCLR",
          src: simclrUmap,
          note: "Coherent regions for a few classes, but a large shared basin where several animal classes overlap.",
        },
        {
          method: "VICReg",
          src: vicregUmap,
          note: "Weakest global organisation: classes spread across long overlapping filaments with few clean boundaries.",
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
          src: lejepaStl,
          note: "Transfers best: a very dense airplane-side cluster plus several clean class islands, with mixing confined to the middle band.",
          featured: true,
        },
        {
          method: "VICReg",
          src: vicregStl,
          note: "Separates the vehicle/animal super-groups into opposite corners, though within-group boundaries stay soft.",
        },
        {
          method: "Barlow Twins",
          src: barlowStl,
          note: "A coherent lower-right animal region and an isolated left cluster, with a broad mixed upper area.",
        },
        {
          method: "BYOL",
          src: byolStl,
          note: "Splits into two large hemispheres rather than ten clusters — coarse structure survives transfer, fine structure does not.",
        },
        {
          method: "SimCLR",
          src: simclrStl,
          note: "Weakest transfer at this resolution: only partial regional grouping, with most classes interleaved.",
        },
      ],
    },
    UMAP: {
      blurb:
        "UMAP projections of the frozen STL-10 features. The global view makes the transfer gap between methods especially stark: only LeJEPA retains ten recognisable class islands at 96x96 resolution.",
      caption:
        "n_neighbors 15, min_dist 0.1, cosine metric, evaluated on a labelled STL-10 subset. Same frozen features as the STL-10 t-SNE views.",
      plots: [
        {
          method: "LeJEPA",
          src: lejepaStlUmap,
          note: "Ten compact, well-spaced islands along a clean diagonal — by far the strongest STL-10 transfer of the five.",
          featured: true,
        },
        {
          method: "BYOL",
          src: byolStlUmap,
          note: "Splits into a vehicle-leaning right region and an animal-leaning left region, with little within-group structure.",
        },
        {
          method: "SimCLR",
          src: simclrStlUmap,
          note: "Thin filaments with a few pure pockets, but most classes share a wide interleaved basin.",
        },
        {
          method: "VICReg",
          src: vicregStlUmap,
          note: "Fragmented into many small mixed shards; a couple of classes isolate cleanly, the rest do not.",
        },
        {
          method: "Barlow Twins",
          src: barlowStlUmap,
          note: "Broad regional tendencies only — the densest, most uniformly mixed STL-10 embedding.",
        },
      ],
    },
  },
};

const datasets = Object.keys(views);

export function Embeddings() {
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
    <Section id="embeddings">
      <SectionHeader
        eyebrow="Embedding space"
        title="Embedding projections"
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
        <div
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
            >
              {name}
            </button>
          ))}
        </div>
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
