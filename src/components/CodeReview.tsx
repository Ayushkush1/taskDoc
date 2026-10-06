import { Container, SectionHeading } from "./ui";
import { Bot, Code, GitPR, Shield, Zap } from "./icons";

const features = [
  {
    icon: GitPR,
    title: "Automatic pull requests",
    body: "AI writes the code, adds tests, and opens a clean PR with a clear description linked to the task.",
  },
  {
    icon: Shield,
    title: "AI code review",
    body: "Every PR, human or AI, gets reviewed for bugs, security issues, performance and style.",
  },
  {
    icon: Zap,
    title: "Fix with one click",
    body: "Accept suggested changes inline, or let AI push the fixes and re-request review.",
  },
];

const diff = [
  { n: 41, t: "  export async function handleRenewal(event: Stripe.Event) {", k: " " },
  { n: 42, t: "-   const sub = event.data.object;", k: "-" },
  { n: 42, t: "+   const sub = event.data.object as Stripe.Subscription;", k: "+" },
  { n: 43, t: "+   if (await isProcessed(event.id)) return;", k: "+" },
  { n: 44, t: "    await db.subscriptions.update({", k: " " },
  { n: 45, t: "      where: { stripeId: sub.id },", k: " " },
  { n: 46, t: "+     data: { renewedAt: new Date(), status: sub.status },", k: "+" },
];

export default function CodeReview() {
  return (
    <section
      id="code"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-24 sm:py-32"
    >
      <div className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          dark
          eyebrow={
            <>
              <Code className="size-3.5" /> For engineering teams
            </>
          }
          title={
            <>
              AI raises the PR.{" "}
              <span className="bg-gradient-to-r from-brand-300 to-pink-300 bg-clip-text text-transparent">
                AI reviews the code.
              </span>
            </>
          }
          description="Ship faster without cutting corners. TaskDoc turns tickets into reviewed, tested pull requests and gives every change a senior-level second pair of eyes."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Diff mock */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1629] shadow-2xl lg:col-span-3">
            <div className="flex flex-wrap items-center gap-3 border-b border-white/10 px-5 py-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">
                <GitPR className="size-3.5" /> Open
              </span>
              <p className="text-sm font-medium text-white">
                feat: idempotent Stripe renewal webhook{" "}
                <span className="text-slate-500">#482</span>
              </p>
              <span className="ml-auto text-xs text-slate-500">
                opened by TaskDoc AI · 2m ago
              </span>
            </div>
            <div className="border-b border-white/10 px-5 py-2 font-mono text-xs text-slate-400">
              src/billing/webhooks.ts
            </div>
            <pre className="overflow-x-auto py-3 font-mono text-[12.5px] leading-6">
              {diff.map((l, i) => (
                <div
                  key={i}
                  className={`flex px-5 ${
                    l.k === "+"
                      ? "bg-emerald-500/10 text-emerald-200"
                      : l.k === "-"
                        ? "bg-rose-500/10 text-rose-200"
                        : "text-slate-300"
                  }`}
                >
                  <span className="mr-5 w-6 shrink-0 text-right text-slate-600 select-none">
                    {l.n}
                  </span>
                  <span className="whitespace-pre">{l.t}</span>
                </div>
              ))}
            </pre>

            {/* AI review comment */}
            <div className="m-4 mt-1 rounded-xl border border-brand-400/30 bg-brand-500/10 p-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 text-white">
                  <Bot className="size-3.5" />
                </span>
                <span className="text-sm font-semibold text-white">
                  TaskDoc Reviewer
                </span>
                <span className="rounded bg-amber-400/15 px-1.5 py-0.5 text-[11px] font-medium text-amber-300">
                  Suggestion
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                Nice, the idempotency check prevents double-processing on
                Stripe retries. Consider wrapping the update in a transaction
                with <code className="rounded bg-white/10 px-1 font-mono text-[12px] text-brand-200">markProcessed()</code>{" "}
                so a crash between the two calls can&apos;t leave the event
                half-applied.
              </p>
              <div className="mt-3 flex gap-2">
                <span className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-slate-900">
                  Apply fix
                </span>
                <span className="rounded-md border border-white/15 px-3 py-1.5 text-xs font-medium text-slate-300">
                  Dismiss
                </span>
              </div>
            </div>
          </div>

          {/* Feature list */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand-400/40 hover:bg-white/[0.06]"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/20">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {f.body}
                </p>
              </div>
            ))}
            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
              {[
                ["3×", "faster merges"],
                ["40%", "fewer bugs"],
                ["24/7", "reviews"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="text-2xl font-semibold text-white">{v}</p>
                  <p className="mt-1 text-xs text-slate-400">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
