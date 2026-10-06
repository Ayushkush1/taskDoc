import { AIBadge, AppFrame, Avatar, Container } from "./ui";
import {
  ArrowRight,
  Bot,
  CheckCircle,
  GitPR,
  Play,
  Sparkles,
} from "./icons";

const steps = [
  { label: "Understood the task & acceptance criteria", done: true },
  { label: "Broke it into 4 sub-tasks", done: true },
  { label: "Wrote code + unit tests", done: true },
  { label: "Opened PR #482 and requested review", done: false },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-300/40 via-violet-300/40 to-pink-300/30 blur-3xl" />

      <Container className="relative pt-16 pb-20 sm:pt-24 lg:pb-28">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <a
            href="#teammate"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 py-1 pr-3 pl-1 text-sm text-slate-700 shadow-sm backdrop-blur transition hover:border-brand-200"
          >
            <span className="rounded-full bg-brand-600 px-2 py-0.5 text-xs font-semibold text-white">
              New
            </span>
            AI now raises & reviews pull requests
            <ArrowRight className="size-4 text-slate-400 transition group-hover:translate-x-0.5" />
          </a>

          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-6xl lg:text-7xl">
            AI isn&apos;t your tool.
            <br />
            It&apos;s your <span className="text-gradient">teammate.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-slate-600 sm:text-xl">
            Assign a task to TaskDoc AI and it plans, manages and completes it
            for you, from writing code and opening pull requests to running
            your CRM, drafting emails and converting leads.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto"
            >
              Assign your first task
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
            >
              <Play className="size-4 text-brand-600" />
              See how it works
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Free 14-day trial · No credit card required · Set up in 2 minutes
          </p>
        </div>

        {/* Product mockup */}
        <div className="relative mx-auto mt-16 max-w-6xl sm:mt-20">
          <AppFrame title="TaskDoc · Sprint 24 / Engineering">
            <div className="grid lg:grid-cols-[220px_1fr_340px]">
              {/* Sidebar */}
              <aside className="hidden border-r border-slate-100 bg-slate-50/60 p-4 lg:block">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Workspace
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  {[
                    ["My tasks", true],
                    ["AI Teammate", false],
                    ["Pull requests", false],
                    ["CRM pipeline", false],
                    ["Workflows", false],
                    ["Documents", false],
                  ].map(([name, active]) => (
                    <li
                      key={name as string}
                      className={`rounded-md px-2.5 py-1.5 ${
                        active
                          ? "bg-white font-medium text-slate-900 shadow-sm ring-1 ring-slate-200"
                          : "text-slate-600"
                      }`}
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </aside>

              {/* Task board */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-900">
                    In progress
                  </h3>
                  <span className="text-xs text-slate-500">6 tasks</span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    {
                      t: "Add Stripe webhooks for subscription renewals",
                      tag: "Backend",
                      ai: true,
                      pct: 75,
                    },
                    {
                      t: "Summarise Q3 customer interviews",
                      tag: "Research",
                      ai: true,
                      pct: 100,
                    },
                    {
                      t: "Follow up with 12 warm leads from webinar",
                      tag: "Sales",
                      ai: true,
                      pct: 40,
                    },
                    {
                      t: "Finalise onboarding copy",
                      tag: "Design",
                      ai: false,
                      pct: 20,
                    },
                  ].map((task) => (
                    <div
                      key={task.t}
                      className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-medium text-slate-800">
                          {task.t}
                        </p>
                        {task.ai ? (
                          <AIBadge label="Assigned to AI" />
                        ) : (
                          <Avatar
                            initials="RK"
                            className="bg-amber-100 text-amber-700"
                          />
                        )}
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                          {task.tag}
                        </span>
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`h-full rounded-full ${
                              task.pct === 100
                                ? "bg-emerald-500"
                                : "bg-gradient-to-r from-brand-500 to-violet-500"
                            }`}
                            style={{ width: `${task.pct}%` }}
                          />
                        </div>
                        <span className="w-9 text-right text-[11px] tabular-nums text-slate-500">
                          {task.pct}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI activity panel */}
              <div className="border-t border-slate-100 bg-gradient-to-b from-brand-50/60 to-white p-4 sm:p-6 lg:border-t-0 lg:border-l">
                <div className="flex items-center gap-2">
                  <span className="relative inline-flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-violet-600 text-white">
                    <Bot className="size-4" />
                    <span className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full bg-emerald-400 ring-2 ring-white" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      TaskDoc AI
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Working on: Stripe webhooks
                    </p>
                  </div>
                </div>

                <ol className="mt-5 space-y-3">
                  {steps.map((s) => (
                    <li key={s.label} className="flex items-start gap-2.5">
                      {s.done ? (
                        <CheckCircle className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                      ) : (
                        <span className="mt-1 size-3 shrink-0 animate-pulse rounded-full border-2 border-brand-500" />
                      )}
                      <span
                        className={`text-[13px] ${
                          s.done ? "text-slate-600" : "font-medium text-slate-900"
                        }`}
                      >
                        {s.label}
                        {!s.done && (
                          <span className="ml-0.5 animate-blink text-brand-600">
                            ▍
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-5 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="flex items-center gap-2 text-[13px] font-medium text-slate-800">
                    <GitPR className="size-4 text-emerald-600" />
                    feat: handle subscription renewals
                  </div>
                  <div className="mt-2 flex items-center gap-3 font-mono text-[11px]">
                    <span className="text-emerald-600">+214</span>
                    <span className="text-rose-500">−18</span>
                    <span className="text-slate-400">7 files</span>
                    <span className="ml-auto rounded bg-emerald-50 px-1.5 py-0.5 font-sans font-medium text-emerald-700">
                      Tests passing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AppFrame>

          {/* Floating chips */}
          <div className="absolute -top-6 -left-4 hidden animate-float rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-xl md:flex md:items-center md:gap-2">
            <Sparkles className="size-4 text-violet-600" />
            <span className="text-xs font-medium text-slate-700">
              Doc summarised in 4s
            </span>
          </div>
          <div className="absolute -right-4 -bottom-6 hidden animate-float rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-xl [animation-delay:1.5s] md:flex md:items-center md:gap-2">
            <span className="size-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-slate-700">
              Lead “Acme Retail” moved to Won
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
