import { AIBadge, Avatar, Container, SectionHeading } from "./ui";
import { Bot, Calendar, Check, Clock, Message } from "./icons";

const points = [
  "Turns a one-line request into a clear plan with sub-tasks",
  "Prioritises, schedules and chases deadlines on its own",
  "Asks clarifying questions only when it really needs to",
  "Posts progress updates to Slack, email or the task itself",
];

export default function Teammate() {
  return (
    <section
      id="teammate"
      className="scroll-mt-20 bg-gradient-to-b from-white via-slate-50/70 to-white py-24 sm:py-32"
    >
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow={
              <>
                <Bot className="size-3.5" /> AI Teammate
              </>
            }
            title="Assign it. AI manages it. AI completes it."
            description="TaskDoc AI sits on your board like any other team member. Give it work and it takes full ownership — planning, executing and reporting back until the task is done."
          />
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <span className="text-slate-700">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mock: task assignment conversation */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-100 via-violet-50 to-pink-50 blur-2xl" />
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10 sm:p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <p className="text-xs font-medium text-slate-500">TASK-1284</p>
                <p className="mt-1 font-semibold text-slate-900">
                  Prepare investor update for October
                </p>
              </div>
              <AIBadge label="AI owner" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2 py-1 text-slate-600">
                <Calendar className="size-3.5" /> Due Fri, Oct 10
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-rose-50 px-2 py-1 font-medium text-rose-600">
                High priority
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2 py-1 text-slate-600">
                <Clock className="size-3.5" /> ~2h saved
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex gap-3">
                <Avatar initials="SM" className="bg-sky-100 text-sky-700" />
                <div className="rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-2.5 text-sm text-slate-700">
                  Can you put together the monthly investor update? Pull
                  numbers from the revenue sheet and highlight the new deals.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-violet-600 text-white ring-2 ring-white">
                  <Bot className="size-3.5" />
                </span>
                <div className="flex-1 rounded-2xl rounded-tl-sm border border-brand-100 bg-brand-50/60 px-4 py-3 text-sm text-slate-700">
                  On it. Here&apos;s my plan:
                  <ol className="mt-2 space-y-1.5">
                    {[
                      ["Pull MRR & churn from Revenue Q3.xlsx", true],
                      ["Summarise 5 deals closed in CRM", true],
                      ["Draft update in your usual format", false],
                      ["Send to you for review by Thu", false],
                    ].map(([label, done]) => (
                      <li
                        key={label as string}
                        className="flex items-center gap-2"
                      >
                        <span
                          className={`inline-flex size-4 items-center justify-center rounded border ${
                            done
                              ? "border-emerald-500 bg-emerald-500 text-white"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          {done && <Check className="size-3" strokeWidth={3} />}
                        </span>
                        <span className={done ? "text-slate-500 line-through" : ""}>
                          {label}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-400">
              <Message className="size-4" />
              Reply or add context…
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
