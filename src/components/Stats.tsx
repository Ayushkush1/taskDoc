import { Container } from "./ui";

const stats = [
  { value: "12h", label: "saved per person, every week" },
  { value: "3×", label: "faster from ticket to merged PR" },
  { value: "38%", label: "higher lead-to-deal conversion" },
  { value: "90%", label: "of CRM updates done automatically" },
];

export default function Stats() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-10 text-center">
              <p className="text-gradient text-4xl font-semibold tracking-tight sm:text-5xl">
                {s.value}
              </p>
              <p className="mx-auto mt-3 max-w-[16ch] text-sm text-slate-600">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
