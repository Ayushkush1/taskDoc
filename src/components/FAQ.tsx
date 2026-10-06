import { Container, SectionHeading } from "./ui";
import { Plus } from "./icons";

const faqs = [
  {
    q: "What does “AI as a teammate” actually mean?",
    a: "You assign tasks to TaskDoc AI exactly like you would to a person. It plans the work, breaks it into steps, executes what it can (code, emails, CRM updates, document work), keeps you updated and asks for approval where needed.",
  },
  {
    q: "Can the AI really raise pull requests on its own?",
    a: "Yes. Connect GitHub, GitLab or Bitbucket and assign an engineering task. TaskDoc writes the code and tests on a new branch, opens a PR with a clear description and links it to the task. Nothing is merged without a human approving it.",
  },
  {
    q: "How does the AI code review work?",
    a: "Every PR — whether written by AI or your team — is reviewed for bugs, security issues, performance and style. Comments appear inline with suggested fixes you can apply in one click.",
  },
  {
    q: "Do I need to set up workflows manually?",
    a: "No. Describe the process in plain English (e.g. “when a lead fills the form, score it and send an intro”) and TaskDoc builds the workflow. You can fine-tune it in the visual editor anytime.",
  },
  {
    q: "Can I import my existing CRM data?",
    a: "Yes. Import contacts, companies and deals via CSV or directly from popular CRMs. AI cleans duplicates and enriches missing fields during import.",
  },
  {
    q: "Is my data secure?",
    a: "Your data is encrypted in transit and at rest, never used to train public models, and access is controlled with role-based permissions. Enterprise plans add SSO, audit logs and data residency options.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Questions, answered"
          description={
            <>
              Can&apos;t find what you&apos;re looking for?{" "}
              <a href="#" className="font-medium text-brand-600 hover:underline">
                Talk to our team
              </a>
              .
            </>
          }
        />
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                <span className="font-medium text-slate-900">{f.q}</span>
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-open:rotate-45 group-open:border-brand-200 group-open:bg-brand-50 group-open:text-brand-600">
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="mt-3 pr-12 leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
