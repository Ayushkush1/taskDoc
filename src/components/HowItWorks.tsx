import { Container, SectionHeading } from "./ui";
import { Bot, CheckCircle, GitPR, Plus } from "./icons";

const steps = [
  {
    icon: Plus,
    title: "Assign a task",
    body: "Write it the way you'd brief a colleague — or drop in a ticket, doc or email thread.",
  },
  {
    icon: Bot,
    title: "AI plans & manages it",
    body: "TaskDoc breaks the work into steps, sets priorities, tracks deadlines and keeps you posted.",
  },
  {
    icon: GitPR,
    title: "AI does the work",
    body: "It writes code and raises PRs, drafts emails, updates your CRM and summarises documents.",
  },
  {
    icon: CheckCircle,
    title: "You review & approve",
    body: "Stay in control. Approve, request changes or take over — every action is logged.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Delegate like you would to your best hire"
          description="No prompts to engineer, no workflows to wire up. Hand a task to TaskDoc AI and watch it go from to-do to done."
        />

        <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-8 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/50"
            >
              <div className="flex items-center justify-between">
                <span className="relative inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-violet-50 text-brand-600 ring-1 ring-brand-100">
                  <s.icon className="size-5" />
                </span>
                <span className="font-mono text-sm text-slate-300">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
