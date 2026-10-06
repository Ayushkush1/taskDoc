"use client";

import { useState } from "react";
import { Container, SectionHeading } from "./ui";
import { Check } from "./icons";

const plans = [
  {
    name: "Starter",
    desc: "For freelancers and small teams getting started with AI.",
    monthly: 0,
    yearly: 0,
    cta: "Start for free",
    features: [
      "Up to 3 users",
      "50 AI tasks / month",
      "AI document summaries",
      "AI email drafts",
      "Basic CRM & pipeline",
    ],
  },
  {
    name: "Pro",
    desc: "For growing teams that want AI working on every task.",
    monthly: 29,
    yearly: 24,
    cta: "Start 14-day trial",
    popular: true,
    features: [
      "Unlimited users",
      "Unlimited AI tasks",
      "Auto pull requests & AI code review",
      "AI workflow builder",
      "Lead finding & scoring",
      "Opportunity tracking & forecasts",
      "Slack, GitHub & Gmail integrations",
    ],
  },
  {
    name: "Enterprise",
    desc: "For organisations with advanced security and scale needs.",
    monthly: null,
    yearly: null,
    cta: "Talk to sales",
    features: [
      "Everything in Pro",
      "SSO & SCIM provisioning",
      "Custom AI models & data residency",
      "Audit logs & role permissions",
      "Dedicated success manager",
      "99.9% uptime SLA",
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section
      id="pricing"
      className="scroll-mt-20 bg-slate-50/70 py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing. Hire your AI teammate today."
          description="Start free, upgrade when your team is ready. Per-user pricing — your AI teammate is always included."
        />

        <div className="mt-10 flex justify-center">
          <div
            role="radiogroup"
            aria-label="Billing period"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1 text-sm font-medium shadow-sm"
          >
            {[
              { label: "Monthly", value: false },
              { label: "Yearly", value: true },
            ].map((o) => (
              <button
                key={o.label}
                type="button"
                role="radio"
                aria-checked={yearly === o.value}
                onClick={() => setYearly(o.value)}
                className={`rounded-full px-5 py-2 transition ${
                  yearly === o.value
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {o.label}
                {o.value && (
                  <span
                    className={`ml-2 rounded-full px-1.5 py-0.5 text-[11px] ${
                      yearly ? "bg-white/15 text-white" : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    −20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
          {plans.map((p) => {
            const price = yearly ? p.yearly : p.monthly;
            return (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl p-8 ${
                  p.popular
                    ? "bg-ink text-white shadow-2xl shadow-brand-900/30 ring-1 ring-brand-500/50 lg:-my-4 lg:py-12"
                    : "border border-slate-200 bg-white"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-brand-500 to-violet-500 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3
                  className={`text-lg font-semibold ${p.popular ? "text-white" : "text-slate-900"}`}
                >
                  {p.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${p.popular ? "text-slate-400" : "text-slate-600"}`}
                >
                  {p.desc}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  {price === null ? (
                    <span className="text-4xl font-semibold tracking-tight">
                      Custom
                    </span>
                  ) : (
                    <>
                      <span className="text-5xl font-semibold tracking-tight">
                        ${price}
                      </span>
                      <span
                        className={`text-sm ${p.popular ? "text-slate-400" : "text-slate-500"}`}
                      >
                        / user / month
                      </span>
                    </>
                  )}
                </div>
                <a
                  href="#get-started"
                  className={`mt-8 rounded-xl px-4 py-3 text-center text-sm font-semibold transition ${
                    p.popular
                      ? "bg-white text-slate-900 hover:bg-slate-100"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {p.cta}
                </a>
                <ul className="mt-8 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <Check
                        className={`size-5 shrink-0 ${p.popular ? "text-brand-300" : "text-brand-600"}`}
                      />
                      <span className={p.popular ? "text-slate-300" : "text-slate-700"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
