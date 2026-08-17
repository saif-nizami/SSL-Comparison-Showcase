import { Section, SectionHeader } from "@/components/ui/Section";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";

const accuracyData = [
  { method: "SimCLR", linear: 84.2, finetuned: 91.5, knn: 79.4 },
  { method: "BYOL", linear: 85.1, finetuned: 92.0, knn: 80.2 },
  { method: "VICReg", linear: 83.8, finetuned: 90.8, knn: 78.1 },
  { method: "Barlow", linear: 84.5, finetuned: 91.2, knn: 79.0 },
  { method: "LeJEPA", linear: 86.3, finetuned: 93.1, knn: 82.5 },
];

const convergenceData = [
  { epoch: 10, SimCLR: 4.2, BYOL: 3.8, VICReg: 5.1, Barlow: 4.9, LeJEPA: 4.5 },
  { epoch: 20, SimCLR: 3.1, BYOL: 2.7, VICReg: 3.8, Barlow: 3.5, LeJEPA: 3.2 },
  { epoch: 30, SimCLR: 2.4, BYOL: 2.1, VICReg: 2.9, Barlow: 2.7, LeJEPA: 2.3 },
  { epoch: 40, SimCLR: 1.9, BYOL: 1.6, VICReg: 2.2, Barlow: 2.0, LeJEPA: 1.7 },
  { epoch: 50, SimCLR: 1.5, BYOL: 1.3, VICReg: 1.7, Barlow: 1.5, LeJEPA: 1.2 },
  { epoch: 60, SimCLR: 1.2, BYOL: 1.0, VICReg: 1.3, Barlow: 1.1, LeJEPA: 0.9 },
  { epoch: 70, SimCLR: 0.9, BYOL: 0.8, VICReg: 1.0, Barlow: 0.9, LeJEPA: 0.7 },
  { epoch: 80, SimCLR: 0.7, BYOL: 0.6, VICReg: 0.8, Barlow: 0.7, LeJEPA: 0.5 },
  { epoch: 90, SimCLR: 0.6, BYOL: 0.5, VICReg: 0.6, Barlow: 0.5, LeJEPA: 0.4 },
  { epoch: 100, SimCLR: 0.5, BYOL: 0.4, VICReg: 0.5, Barlow: 0.4, LeJEPA: 0.3 },
];

const tableData = [
  { method: "SimCLR", linear: 84.2, finetuned: 91.5, knn: 79.4, time: "1.0×", params: "11.2M" },
  { method: "BYOL", linear: 85.1, finetuned: 92.0, knn: 80.2, time: "1.05×", params: "22.4M" },
  { method: "VICReg", linear: 83.8, finetuned: 90.8, knn: 78.1, time: "1.02×", params: "11.2M" },
  {
    method: "Barlow Twins",
    linear: 84.5,
    finetuned: 91.2,
    knn: 79.0,
    time: "1.03×",
    params: "11.2M",
  },
  { method: "LeJEPA", linear: 86.3, finetuned: 93.1, knn: 82.5, time: "1.12×", params: "12.8M" },
];

const colours = {
  SimCLR: "var(--chart-1)",
  BYOL: "var(--chart-2)",
  VICReg: "var(--chart-3)",
  Barlow: "var(--chart-4)",
  LeJEPA: "var(--chart-5)",
};

export function Results() {
  return (
    <Section id="results">
      <SectionHeader
        eyebrow="Results"
        title="Head-to-head performance"
        description="LeJEPA leads on linear probe and k-NN accuracy, while BYOL and Barlow Twins remain strong, efficient baselines."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-6 text-lg font-semibold text-foreground">Downstream accuracy (%)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={accuracyData} margin={{ top: 8, right: 8, bottom: 8, left: -8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="method" tick={{ fill: "var(--muted-foreground)" }} />
                <YAxis tick={{ fill: "var(--muted-foreground)" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="linear"
                  name="Linear probe"
                  fill="var(--primary)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="finetuned"
                  name="Fine-tuned"
                  fill="var(--accent)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="knn"
                  name="k-NN"
                  fill="var(--muted-foreground)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-6 text-lg font-semibold text-foreground">Training loss convergence</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={convergenceData} margin={{ top: 8, right: 8, bottom: 8, left: -8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="epoch" tick={{ fill: "var(--muted-foreground)" }} />
                <YAxis tick={{ fill: "var(--muted-foreground)" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                />
                <Legend />
                {Object.entries(colours).map(([method, colour]) => (
                  <Line
                    key={method}
                    type="monotone"
                    dataKey={method}
                    stroke={colour}
                    strokeWidth={2}
                    dot={false}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-4 text-left font-semibold text-foreground">Method</th>
                <th className="px-6 py-4 text-right font-semibold text-foreground">Linear probe</th>
                <th className="px-6 py-4 text-right font-semibold text-foreground">Fine-tuned</th>
                <th className="px-6 py-4 text-right font-semibold text-foreground">k-NN</th>
                <th className="px-6 py-4 text-right font-semibold text-foreground">Train time</th>
                <th className="px-6 py-4 text-right font-semibold text-foreground">Params</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.method} className="border-b border-border last:border-0">
                  <td className="px-6 py-4 font-medium text-foreground">{row.method}</td>
                  <td className="px-6 py-4 text-right tabular-nums text-muted-foreground">
                    {row.linear}%
                  </td>
                  <td className="px-6 py-4 text-right tabular-nums text-muted-foreground">
                    {row.finetuned}%
                  </td>
                  <td className="px-6 py-4 text-right tabular-nums text-muted-foreground">
                    {row.knn}%
                  </td>
                  <td className="px-6 py-4 text-right tabular-nums text-muted-foreground">
                    {row.time}
                  </td>
                  <td className="px-6 py-4 text-right tabular-nums text-muted-foreground">
                    {row.params}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
