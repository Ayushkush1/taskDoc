import { brands as tools } from "./brands";
import { Container } from "./ui";

export default function Integrations() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-10">
      <Container>
        <p className="text-center text-sm font-medium text-slate-500">
          Works with the tools your team already lives in
        </p>
      </Container>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 pr-12">
          {[...tools, ...tools].map((t, i) => (
            <span
              key={`${t.name}-${i}`}
              aria-hidden={i >= tools.length}
              className="flex items-center gap-2.5 text-base font-semibold text-slate-600"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-6 shrink-0"
                fill={t.color}
                aria-hidden="true"
              >
                <path d={t.path} />
              </svg>
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
