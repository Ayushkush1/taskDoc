import { AIBadge, Avatar, Container, SectionHeading } from "./ui";
import { Search, Target, TrendingUp, Users } from "./icons";

const pillars = [
  {
    icon: Search,
    title: "Find leads",
    body: "Describe your ideal customer. AI finds matching companies and decision-makers, enriched and ready to contact.",
  },
  {
    icon: Users,
    title: "Convert leads",
    body: "AI scores every lead, suggests the next best action and writes follow-ups so no prospect goes cold.",
  },
  {
    icon: Target,
    title: "Track opportunities",
    body: "A pipeline that updates itself from emails and meetings, with deal-risk alerts before it's too late.",
  },
  {
    icon: TrendingUp,
    title: "Grow revenue",
    body: "Forecasts, win/loss insights and weekly AI reports that show exactly where to focus to grow.",
  },
];

type Deal = {
  co: string;
  v: string;
  score: number;
  who: string;
  hot?: boolean;
  risk?: boolean;
};

const columns: { name: string; total: string; deals: Deal[] }[] = [
  {
    name: "Qualified",
    total: "$48k",
    deals: [
      { co: "Northwind", v: "$18k", score: 82, who: "PS" },
      { co: "Globex", v: "$30k", score: 64, who: "JL" },
    ],
  },
  {
    name: "Proposal",
    total: "$76k",
    deals: [
      { co: "Acme Retail", v: "$42k", score: 91, who: "AK", hot: true },
      { co: "Initech", v: "$34k", score: 47, who: "MR", risk: true },
    ],
  },
  {
    name: "Won",
    total: "$120k",
    deals: [{ co: "Umbrella Co", v: "$120k", score: 100, who: "DT" }],
  },
];

function scoreColor(s: number) {
  if (s >= 80) return "bg-emerald-50 text-emerald-700";
  if (s >= 60) return "bg-amber-50 text-amber-700";
  return "bg-rose-50 text-rose-700";
}

export default function Growth() {
  return (
    <section
      id="growth"
      className="scroll-mt-20 bg-gradient-to-b from-white via-brand-50/40 to-white py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow={
            <>
              <TrendingUp className="size-3.5" /> Sales & growth
            </>
          }
          title="From first touch to closed-won, with AI on every deal"
          description="Finding leads, converting them and tracking opportunities used to take a whole team. Now it takes TaskDoc."
        />

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[1fr_1.35fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex gap-4 rounded-2xl border border-transparent p-4 transition hover:border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm ring-1 ring-slate-200">
                  <p.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pipeline mock */}
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Opportunity pipeline
                </p>
                <p className="text-xs text-slate-500">Q4 · Updated by AI 3 min ago</p>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                <TrendingUp className="size-3.5" /> Forecast $244k · +32%
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {columns.map((c) => (
                <div key={c.name} className="rounded-2xl bg-slate-50 p-3">
                  <div className="flex items-center justify-between px-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {c.name}
                    </p>
                    <p className="text-xs font-medium text-slate-700">
                      {c.total}
                    </p>
                  </div>
                  <div className="mt-3 space-y-2.5">
                    {c.deals.map((d) => (
                      <div
                        key={d.co}
                        className={`rounded-xl bg-white p-3 shadow-sm ring-1 ${
                          d.hot
                            ? "ring-brand-300"
                            : d.risk
                              ? "ring-rose-200"
                              : "ring-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-slate-800">
                            {d.co}
                          </p>
                          <Avatar
                            initials={d.who}
                            className="size-6 bg-slate-100 text-[10px] text-slate-600"
                          />
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-900">
                            {d.v}
                          </span>
                          <span
                            className={`rounded-md px-1.5 py-0.5 text-[11px] font-semibold ${scoreColor(d.score)}`}
                          >
                            {d.score}
                          </span>
                        </div>
                        {d.hot && (
                          <p className="mt-2 text-[11px] font-medium text-brand-600">
                            ✦ Likely to close this week
                          </p>
                        )}
                        {d.risk && (
                          <p className="mt-2 text-[11px] font-medium text-rose-600">
                            ⚠ No reply in 9 days
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-brand-100 bg-brand-50/60 p-4">
              <div className="flex items-center gap-2">
                <AIBadge label="Next best action" />
              </div>
              <p className="mt-2 text-sm text-slate-700">
                <span className="font-semibold">Initech</span> has gone quiet
                after the proposal. I&apos;ve drafted a check-in with a revised
                payment plan — their CFO opened the pricing page twice
                yesterday.
              </p>
              <div className="mt-3 flex gap-2">
                <span className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
                  Review draft
                </span>
                <span className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                  Snooze
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
