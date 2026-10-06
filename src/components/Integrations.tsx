import { Container } from "./ui";

const tools = [
  "GitHub",
  "GitLab",
  "Bitbucket",
  "Slack",
  "Gmail",
  "Outlook",
  "Google Drive",
  "Notion",
  "Jira",
  "Linear",
  "Zoom",
  "LinkedIn",
];

export default function Integrations() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-10">
      <Container>
        <p className="text-center text-sm font-medium text-slate-500">
          Works with the tools your team already lives in
        </p>
      </Container>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {[...tools, ...tools].map((t, i) => (
            <span
              key={`${t}-${i}`}
              aria-hidden={i >= tools.length}
              className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-500 shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
