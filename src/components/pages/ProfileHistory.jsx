import { useSelector } from "react-redux";
import { formatTimestamp } from "@/features/Profile/services/helper";

function ProfileHistory() {
  const { history } = useSelector((state) => state.profile);
  const reversedHistory = [...history].reverse();
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
        Match History
      </h2>
      {reversedHistory.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-white/20 bg-slate-950/20 px-6 py-12 text-center">
          <p className="text-sm font-medium text-slate-400">
            No matches played yet
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Start typing to build your history
          </p>
        </div>
      ) : (
        <ul className="mt-6 space-y-3">
          {reversedHistory.map((game, index) => (
            <li
              key={game.timeStamp ?? `${game.wpm}-${game.accuracy}-${index}`}
              className="group flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-linear-to-r from-slate-900/40 to-slate-950/40 px-6 py-4 transition hover:border-white/20 hover:from-slate-900/60 hover:to-slate-950/60"
            >
              <span className="text-sm font-medium text-slate-300">
                {formatTimestamp(game.timeStamp)}
              </span>
              <div className="flex gap-6 text-sm font-bold">
                <span className="text-amber-300">{game.wpm} WPM</span>
                <span className="text-sky-300">{game.accuracy}% Acc</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProfileHistory;
