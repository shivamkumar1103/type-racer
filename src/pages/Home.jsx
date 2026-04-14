import TypingArena from "../features/typingArena/TypingArena";

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(2,6,23,1))]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <header className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-amber-200/90 shadow-lg shadow-black/10 backdrop-blur">
            Competitive typing
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Type<span className="text-amber-300">Pro</span>
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            A focused typing arena with real-time feedback, a crisp responsive
            layout, and a clean reading surface that stays out of your way.
          </p>
        </header>

        <main className="mt-8 flex flex-1 items-start justify-center lg:mt-12">
          <TypingArena />
        </main>
      </div>
    </div>
  );
}

export default Home;
