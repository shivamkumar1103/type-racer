import { Spinner } from "@/components/ui/spinner";

function TypingArenaLoading() {
  return (
    <div className="flex min-h-112 items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 px-6 py-12 text-slate-200 shadow-2xl shadow-black/30 backdrop-blur">
      <div className="flex items-center gap-3 text-sm font-medium tracking-wide text-slate-300">
        <Spinner className="size-5 text-amber-300" />
        Loading text
      </div>
    </div>
  );
}

export default TypingArenaLoading;
