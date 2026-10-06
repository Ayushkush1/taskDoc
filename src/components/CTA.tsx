import { Container } from "./ui";
import { ArrowRight } from "./icons";

export default function CTA() {
  return (
    <section id="get-started" className="scroll-mt-20 pb-24 sm:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center sm:px-16 sm:py-24">
          <div className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-600/50 via-violet-600/40 to-pink-500/30 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              Give your team the teammate that never sleeps.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
              Assign your first task in under two minutes. Free for 14 days, no
              credit card needed.
            </p>

            <form
              action="#"
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="cta-email" className="sr-only">
                Work email
              </label>
              <input
                id="cta-email"
                type="email"
                required
                placeholder="you@company.com"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Get started <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
