import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "@/features/Profile/store/profileSlice";

function ProfileHeader() {
  const { userName } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(userName);

  const handleEditClick = () => {
    setIsEditing(true);
    setTempName(userName);
  };

  const handleSave = () => {
    if (tempName.trim()) {
      dispatch(setUserName(tempName.trim()));
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempName(userName);
  };

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/90">
        Profile
      </p>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex-1">
          {isEditing ? (
            <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className="min-w-0 flex-1 rounded-lg border border-amber-300/40 bg-slate-950/60 px-4 py-3 text-2xl font-bold tracking-tight text-white placeholder-slate-500 shadow-lg shadow-black/20 focus:border-amber-300/80 focus:outline-none focus:ring-2 focus:ring-amber-300/40 sm:text-3xl"
                placeholder="Enter username"
                maxLength={32}
                autoFocus
              />
              <button
                onClick={handleSave}
                className="rounded-lg bg-linear-to-r from-amber-400 to-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/30 transition hover:from-amber-300 hover:to-amber-200 hover:shadow-amber-400/50 sm:shrink-0"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="rounded-lg border border-white/20 bg-slate-950/40 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-950/60 hover:border-white/40 sm:shrink-0"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4">
              <div className="min-w-0">
                <p className="text-sm text-slate-300">Typist Name</p>
                <h1 className="mt-2 wrap-break-word text-3xl font-bold tracking-tight text-white sm:text-5xl">
                  {userName}
                </h1>
              </div>
              <button
                onClick={handleEditClick}
                className="self-start rounded-lg border border-amber-300/30 bg-slate-950/40 px-4 py-2.5 text-sm font-medium text-amber-300 transition hover:bg-slate-950/60 hover:border-amber-300/60 sm:self-auto"
              >
                ✎ Edit
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-slate-300 sm:text-base">
        Your Typing Statistics
      </p>
    </div>
  );
}

export default ProfileHeader;
