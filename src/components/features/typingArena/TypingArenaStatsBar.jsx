import { cn } from "@/lib/utils";

function renderDelta(current, previous) {
  if (previous === 0) return null;

  const delta = current - previous;
  if (delta > 0)
    return (
      <span className="ml-2 text-xs font-semibold text-emerald-300">
        +{delta}
      </span>
    );
  if (delta < 0)
    return (
      <span className="ml-2 text-xs font-semibold text-rose-300">{delta}</span>
    );
  return <span className="ml-2 text-xs font-semibold text-slate-400">+0</span>;
}

function TypingArenaStatsBar({
  timeRemaining,
  currAccuracy,
  currWpm,
  previousScore,
  status,
}) {
  const statusLabel =
    status === "finished"
      ? "Complete"
      : status === "playing"
        ? "Playing"
        : "Ready";

  const statusStyles =
    status === "finished"
      ? "border-emerald-400/20 bg-emerald-400/10"
      : status === "playing"
        ? "border-amber-300/25 bg-amber-300/10"
        : "border-white/10 bg-slate-950/70";

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 shadow-lg shadow-black/20">
        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
          Time
        </div>
        <div className="mt-2 text-2xl font-semibold text-slate-50">
          {timeRemaining}s
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 shadow-lg shadow-black/20">
        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
          Accuracy
        </div>
        <div className="mt-2 text-2xl font-semibold text-slate-50">
          {currAccuracy}%
          {status === "finished"
            ? renderDelta(currAccuracy, previousScore.accuracy)
            : null}
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 shadow-lg shadow-black/20">
        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
          WPM
        </div>
        <div className="mt-2 text-2xl font-semibold text-slate-50">
          {currWpm}
          {status === "finished"
            ? renderDelta(currWpm, previousScore.wpm)
            : null}
        </div>
      </div>
      <div
        className={cn(
          "rounded-2xl border px-4 py-3 shadow-lg shadow-black/20",
          statusStyles,
        )}
      >
        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
          Status
        </div>
        <div className="mt-2 text-2xl font-semibold text-slate-50">
          {statusLabel}
        </div>
        {status === "playing" && (
          <div className="mt-1 text-sm font-medium text-amber-200">
            Game in progress
          </div>
        )}
        {status === "finished" && (
          <div className="mt-1 text-sm font-medium text-emerald-300">
            Game over
          </div>
        )}
      </div>
    </div>
  );
}

export default TypingArenaStatsBar;
