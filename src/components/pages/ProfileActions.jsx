import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { resetHistory } from "@/features/Profile/store/profileSlice";

function ProfileActions() {
  const dispatch = useDispatch();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const openConfirm = () => setIsConfirmOpen(true);
  const closeConfirm = () => setIsConfirmOpen(false);
  const confirmDeleteHistory = () => {
    dispatch(resetHistory());
    closeConfirm();
  };

  return (
    <>
      <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row">
        <Link
          to="/"
          className="inline-flex flex-1 items-center justify-center rounded-lg border border-amber-300/30 bg-linear-to-r from-amber-400 to-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/30 transition hover:shadow-amber-400/50 hover:from-amber-300 hover:to-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Back to Arena
        </Link>
        <button
          onClick={openConfirm}
          className="inline-flex flex-1 items-center justify-center rounded-lg border border-red-500/30 bg-linear-to-r from-red-500 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:shadow-red-500/50 hover:from-red-400 hover:to-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Clear History
        </button>
      </div>

      {isConfirmOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-black/40">
            <h3 className="text-lg font-semibold text-white">Clear history?</h3>
            <p className="mt-2 text-sm text-slate-300">
              This will remove all saved matches and reset your best stats.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                onClick={closeConfirm}
                className="rounded-lg border border-white/20 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-950/70"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteHistory}
                className="rounded-lg border border-red-500/30 bg-linear-to-r from-red-500 to-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:from-red-400 hover:to-red-500"
              >
                Yes, clear all
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProfileActions;
