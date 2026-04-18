function HomeHeader() {
  return (
    <header className="flex flex-col items-center justify-between gap-4 text-center md:items-start md:text-left">
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
  );
}

export default HomeHeader;
