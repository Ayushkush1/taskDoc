"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./ui";
import { Logo, Menu, X } from "./icons";

const links = [
  { href: "#teammate", label: "AI Teammate" },
  { href: "#code", label: "PR & Review" },
  { href: "#crm", label: "AI CRM" },
  { href: "#growth", label: "Growth" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 pt-3 sm:pt-4">
      <Container>
        <div
          className={`rounded-2xl border transition-all duration-300 ${
            scrolled || open
              ? "border-slate-200/80 bg-white/80 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl"
              : "border-slate-200/60 bg-white/60 backdrop-blur-md"
          }`}
        >
          <div className="flex h-14 items-center justify-between pl-4 pr-2 sm:pl-5 sm:pr-3">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo />
              <span className="text-lg font-semibold tracking-tight text-slate-900">
                TaskDoc
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href="#"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                Sign in
              </a>
              <a
                href="#get-started"
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Start free
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="border-t border-slate-100 lg:hidden">
              <div className="flex flex-col gap-1 p-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <a
                    href="#"
                    className="rounded-lg border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-slate-800"
                  >
                    Sign in
                  </a>
                  <a
                    href="#get-started"
                    onClick={() => setOpen(false)}
                    className="rounded-lg bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white"
                  >
                    Start free
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
