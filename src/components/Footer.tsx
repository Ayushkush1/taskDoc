import { Container } from "./ui";
import { Logo } from "./icons";

const cols = [
  {
    title: "Product",
    links: ["AI Teammate", "Pull requests", "Code review", "AI CRM", "Workflows", "Pricing"],
  },
  {
    title: "Solutions",
    links: ["Engineering", "Sales", "Operations", "Agencies", "Startups"],
  },
  {
    title: "Resources",
    links: ["Docs", "Blog", "Changelog", "Help center", "API"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Privacy", "Terms"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="text-lg font-semibold tracking-tight text-slate-900">
                TaskDoc
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              The AI teammate that manages your tasks, ships your code and
              grows your pipeline.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-sm font-semibold text-slate-900">{c.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-slate-600 transition hover:text-slate-900"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} TaskDoc. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500" />
            All systems operational
          </p>
        </div>
      </Container>
    </footer>
  );
}
