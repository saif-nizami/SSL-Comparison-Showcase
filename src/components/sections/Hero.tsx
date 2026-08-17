import { ArrowDown, Github, FileText, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-16"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.4]" />
      <div className="absolute -right-32 top-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Self-Supervised Learning
              </span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                Computer Vision
              </span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                Representation Learning
              </span>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Benchmarking Modern Self-Supervised Learning
            </h1>

            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
              A comparative evaluation of LeJEPA, SimCLR, BYOL, VICReg, and Barlow Twins using a
              common ResNet-18 evaluation framework.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                Explore Research
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#reproduce"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Github className="h-4 w-4" />
                View GitHub
              </a>
              <a
                href="#reproduce"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <FileText className="h-4 w-4" />
                Read Dissertation
              </a>
            </div>

            <div className="mt-10 flex flex-col gap-1 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Saif Nizami</p>
              <p>Dissertation Project · 2026</p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card glow-border">
              <img
                src="/images/hero-abstract.jpg"
                alt="Abstract visualization of self-supervised representation learning"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-border/50 bg-card/90 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-foreground">5 Methods</p>
                    <p className="text-muted-foreground">Compared under one framework</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">ResNet-18</p>
                    <p className="text-muted-foreground">Common encoder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
