import { AIBadge, Container, SectionHeading } from "./ui";
import {
  Calendar,
  Check,
  FileText,
  Mail,
  Sparkles,
  Workflow,
  Zap,
} from "./icons";

function Card({
  icon: Icon,
  title,
  body,
  children,
  className = "",
}: {
  icon: typeof Workflow;
  title: string;
  body: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/40 ${className}`}
    >
      <div className="p-6 sm:p-8">
        <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
          <Icon className="size-5" />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 leading-relaxed text-slate-600">{body}</p>
      </div>
      <div className="mt-auto px-6 pb-6 sm:px-8 sm:pb-8">{children}</div>
    </div>
  );
}

function WorkflowMock() {
  const nodes = [
    { label: "New lead from website form", tone: "bg-sky-50 text-sky-700 ring-sky-200", tag: "Trigger" },
    { label: "AI enriches company & scores lead", tone: "bg-brand-50 text-brand-700 ring-brand-200", tag: "AI step" },
    { label: "Score > 70 → assign to sales rep", tone: "bg-amber-50 text-amber-700 ring-amber-200", tag: "Condition" },
    { label: "AI drafts personalised intro email", tone: "bg-violet-50 text-violet-700 ring-violet-200", tag: "AI step" },
  ];
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:p-5">
      <div className="flex flex-col items-stretch">
        {nodes.map((n, i) => (
          <div key={n.label} className="flex flex-col items-center">
            <div
              className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-medium ring-1 ${n.tone}`}
            >
              <span>{n.label}</span>
              <span className="shrink-0 rounded-md bg-white/80 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                {n.tag}
              </span>
            </div>
            {i < nodes.length - 1 && (
              <span className="h-4 w-px bg-slate-300" />
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500">
        <Sparkles className="size-3.5 text-brand-500" />
        Built from: “When a new lead comes in, qualify it and send an intro.”
      </p>
    </div>
  );
}

function SummaryMock() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
      <div className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-slate-200">
        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-rose-50 text-xs font-bold text-rose-600">
          PDF
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-slate-800">
            Master Services Agreement — Acme.pdf
          </p>
          <p className="text-xs text-slate-500">42 pages</p>
        </div>
      </div>
      <div className="mt-3 rounded-xl bg-white p-4 ring-1 ring-brand-100">
        <AIBadge label="Summary" />
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>• 24-month term, auto-renews unless 60 days&apos; notice</li>
          <li>• Net-45 payment, 1.5% late fee</li>
          <li className="text-rose-600">• ⚠ Unlimited liability in §9.2</li>
        </ul>
      </div>
    </div>
  );
}

function EmailMock() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
      <div className="rounded-xl bg-white ring-1 ring-slate-200">
        <div className="space-y-1.5 border-b border-slate-100 px-4 py-3 text-xs">
          <p>
            <span className="text-slate-400">To:</span>{" "}
            <span className="text-slate-700">priya@northwind.io</span>
          </p>
          <p>
            <span className="text-slate-400">Subject:</span>{" "}
            <span className="font-medium text-slate-800">
              Next steps after Tuesday&apos;s demo
            </span>
          </p>
        </div>
        <div className="px-4 py-3 text-sm leading-relaxed text-slate-700">
          Hi Priya, thanks for the great questions on Tuesday. As promised,
          I&apos;ve attached the security overview
          <span className="bg-brand-100/70 text-slate-500">
            {" "}
            and a pricing option for your 25-seat team…
          </span>
          <span className="animate-blink text-brand-600">▍</span>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {["Make it shorter", "More formal", "Add case study"].map((c) => (
          <span
            key={c}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function DayMock() {
  const items = [
    { time: "09:00", text: "Review 3 PRs AI flagged as ready", done: true },
    { time: "10:30", text: "Call with Northwind — brief prepared", done: true },
    { time: "13:00", text: "Approve 8 follow-up emails drafted by AI", done: false },
    { time: "16:00", text: "Pipeline review — 2 deals at risk", done: false },
  ];
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-800">Today, by AI</p>
        <span className="text-xs text-slate-500">4 of 11 tasks need you</span>
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li
            key={it.text}
            className="flex items-center gap-3 rounded-lg bg-white px-3 py-2.5 text-sm ring-1 ring-slate-200"
          >
            <span className="w-11 shrink-0 font-mono text-xs text-slate-400">
              {it.time}
            </span>
            <span
              className={`flex-1 ${it.done ? "text-slate-400 line-through" : "text-slate-700"}`}
            >
              {it.text}
            </span>
            {it.done && <Check className="size-4 text-emerald-500" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CRM() {
  return (
    <section id="crm" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={
            <>
              <Sparkles className="size-3.5" /> AI-centric CRM
            </>
          }
          title="A CRM that works for you — not the other way around"
          description="Stop updating fields and copy-pasting notes. TaskDoc's CRM is built around AI: it builds workflows from plain English, reads your documents, writes your emails and plans your day."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-6">
          <Card
            className="lg:col-span-4"
            icon={Workflow}
            title="AI workflows in plain English"
            body="Describe the process and TaskDoc builds the automation — triggers, conditions and AI actions included. Tweak it visually, then let it run."
          >
            <WorkflowMock />
          </Card>
          <Card
            className="lg:col-span-2"
            icon={FileText}
            title="Document summarisation"
            body="Contracts, proposals, call notes — get the key points, risks and action items in seconds."
          >
            <SummaryMock />
          </Card>
          <Card
            className="lg:col-span-3"
            icon={Mail}
            title="AI decides what to say"
            body="Need to send an email? AI uses the deal history, last meeting and tone of the thread to draft exactly what should be sent. You just hit send."
          >
            <EmailMock />
          </Card>
          <Card
            className="lg:col-span-3"
            icon={Calendar}
            title="Your day, made easy"
            body="Every morning AI organises what matters: tasks to approve, meetings to prep for and deals that need attention — all in one place."
          >
            <DayMock />
          </Card>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-3xl border border-brand-100 bg-gradient-to-r from-brand-50 via-violet-50 to-pink-50 px-6 py-6 sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm">
              <Zap className="size-5" />
            </span>
            <p className="font-medium text-slate-800">
              And more: meeting notes, call transcripts, smart reminders,
              auto-filled contacts and AI search across everything.
            </p>
          </div>
          <a
            href="#get-started"
            className="shrink-0 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Explore the CRM
          </a>
        </div>
      </Container>
    </section>
  );
}
