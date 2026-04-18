import { useSelector } from "react-redux";

function ProfileStats() {
  const { bestStats } = useSelector((state) => state.profile);
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
        Your Best Performance
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="group relative rounded-2xl border border-white/10 bg-linear-to-br from-amber-500/10 to-amber-600/5 px-6 py-8 text-center shadow-lg shadow-black/10 transition hover:border-amber-300/30 hover:shadow-amber-500/10">
          <div className="relative z-10">
            <span className="block text-5xl font-black text-amber-300">
              {bestStats.wpm}
            </span>
            <span className="mt-3 block text-xs font-bold uppercase tracking-[0.28em] text-slate-400 group-hover:text-slate-300">
              Words Per Minute
            </span>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-lg shadow-amber-500/20 group-hover:opacity-100 transition" />
        </div>
        <div className="group relative rounded-2xl border border-white/10 bg-linear-to-br from-sky-500/10 to-sky-600/5 px-6 py-8 text-center shadow-lg shadow-black/10 transition hover:border-sky-300/30 hover:shadow-sky-500/10">
          <div className="relative z-10">
            <span className="block text-5xl font-black text-sky-300">
              {bestStats.accuracy}%
            </span>
            <span className="mt-3 block text-xs font-bold uppercase tracking-[0.28em] text-slate-400 group-hover:text-slate-300">
              Accuracy
            </span>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-lg shadow-sky-500/20 group-hover:opacity-100 transition" />
        </div>
      </div>
    </div>
  );
}

export default ProfileStats;
