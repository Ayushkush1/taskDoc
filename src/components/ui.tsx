import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
        dark
          ? "border-white/15 bg-white/5 text-brand-200"
          : "border-brand-100 bg-brand-50 text-brand-700"
      }`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = "center",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${
            dark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Browser/app chrome used to frame product mockups. */
export function AppFrame({
  children,
  title,
  className = "",
}: {
  children: ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.25)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        {title && (
          <span className="ml-3 truncate text-xs font-medium text-slate-500">
            {title}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

export function Avatar({
  initials,
  className = "bg-slate-200 text-slate-700",
}: {
  initials: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ring-2 ring-white ${className}`}
    >
      {initials}
    </span>
  );
}

export function AIBadge({ label = "AI" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-gradient-to-r from-brand-600 to-violet-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
      ✦ {label}
    </span>
  );
}
