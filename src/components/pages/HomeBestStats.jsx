import { useSelector } from "react-redux";
import { Link } from "react-router";

function HomeBestStats() {
  const { userName, bestStats } = useSelector((state) => state.profile);

  return (
    <div className="rounded-2xl border border-white/10 bg-linear-to-br from-slate-900/50 to-slate-950/50 p-8 shadow-lg shadow-black/20 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Your Personal Best
          </p>
          <p className="mt-3 text-sm text-slate-300">Typist</p>
          <p className="mt-1 text-3xl font-semibold text-white">{userName}</p>
        </div>

        <div className="hidden flex-1 gap-12 px-8 sm:flex">
          <div className="text-center">
            <span className="block text-4xl font-bold text-amber-300">
              {bestStats.wpm}
            </span>
            <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Max WPM
            </span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-bold text-sky-300">
              {bestStats.accuracy}%
            </span>
            <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Max Accuracy
            </span>
          </div>
        </div>

        <Link
          to="/profile"
          className="inline-flex items-center justify-center rounded-lg border border-amber-300/30 bg-linear-to-r from-amber-400 to-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/30 transition hover:shadow-amber-400/50 hover:from-amber-300 hover:to-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          View Profile
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:hidden">
        <div className="rounded-lg border border-white/10 bg-slate-950/40 px-4 py-3 text-center">
          <span className="block text-2xl font-bold text-amber-300">
            {bestStats.wpm}
          </span>
          <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Max WPM
          </span>
        </div>
        <div className="rounded-lg border border-white/10 bg-slate-950/40 px-4 py-3 text-center">
          <span className="block text-2xl font-bold text-sky-300">
            {bestStats.accuracy}%
          </span>
          <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Max Accuracy
          </span>
        </div>
      </div>
    </div>
  );
}
export default HomeBestStats;
