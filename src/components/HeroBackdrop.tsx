/**
 * Hero backdrop: soft drifting aurora light and a fine grain. Kept quiet on
 * purpose so the headline stays the focus.
 */
export default function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Aurora */}
      <div className="absolute -top-48 left-1/2 h-[560px] w-[1000px] -translate-x-1/2 opacity-80">
        <div className="animate-aurora absolute top-0 left-[8%] size-[460px] rounded-full bg-brand-300/40 blur-[100px]" />
        <div className="animate-aurora absolute top-10 right-[6%] size-[420px] rounded-full bg-fuchsia-300/30 blur-[100px] [animation-delay:-6s] [animation-direction:alternate-reverse]" />
        <div className="animate-aurora absolute top-32 left-[34%] size-[380px] rounded-full bg-sky-200/45 blur-[100px] [animation-delay:-12s]" />
      </div>

      {/* Grain */}
      <div className="bg-grain absolute inset-0 opacity-[0.04]" />

      {/* Fade into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}
