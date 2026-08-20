import { Section, SectionHeader } from "@/components/ui/Section";
import { Github, FileText, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";

const installCommand =
  "git clone https://github.com/saif-nizami/lejepa-comparison-framework\ncd lejepa-comparison-framework && pip install -r requirements.txt\npython -m scripts.train --method lejepa --dataset cifar10\npython -m scripts.linear_probe --method lejepa --dataset cifar10";

export function Reproducibility() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="reproduce">
      <SectionHeader
        eyebrow="Reproducibility"
        title="Run the benchmark yourself"
        description="All code, configurations, and the full dissertation are available. The repository includes training scripts, hyperparameters, and pre-trained checkpoints."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground">Quick start</h3>
          <div className="mt-4 overflow-hidden rounded-xl border border-border bg-ink p-4">
            <div className="flex items-center justify-between border-b border-background/10 pb-2">
              <span className="text-xs font-medium text-background/60">bash</span>
              <button
                onClick={copy}
                className="inline-flex items-center gap-1 text-xs font-medium text-background/80 transition-colors hover:text-background"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" /> Copy
                  </>
                )}
              </button>
            </div>
            <pre className="mt-3 overflow-x-auto text-sm leading-relaxed text-background/90">
              <code>{installCommand}</code>
            </pre>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Replace <code className="rounded bg-muted px-1 py-0.5 text-foreground">lejepa</code>{" "}
            with <code className="rounded bg-muted px-1 py-0.5 text-foreground">simclr</code>,{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-foreground">byol</code>,{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-foreground">vicreg</code>, or{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-foreground">barlow_twins</code> to run
            other methods.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Replace <code className="rounded bg-muted px-1 py-0.5 text-foreground">cifar10</code>{" "}
            with <code className="rounded bg-muted px-1 py-0.5 text-foreground">stl10</code>,{" "}
            to train/probe on other datasets.
          </p>
        </div>

        <div className="grid gap-4">
          <a
            href="https://github.com/saif-nizami/lejepa-comparison-framework"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">GitHub repository</h3>
                <p className="text-sm text-muted-foreground">
                  Training code, configs, and checkpoints
                </p>
              </div>
            </div>
            <ExternalLink className="h-5 w-5 text-muted-foreground" />
          </a>

          <a
            href="/files/Dissertation_IRP_2026_CU.pdf"
            className="flex items-center justify-between rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            download="Dissertation_IRP_2026_CU.pdf"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Full dissertation</h3>
                <p className="text-sm text-muted-foreground">PDF download</p>
              </div>
            </div>
            <ExternalLink className="h-5 w-5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </Section>
  );
}
