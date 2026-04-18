import { cn } from "@/lib/utils";

function TypingArenaRestartButton({
  onClick,
  children,
  className = "",
  disabled = false,
}) {
  return (
    <div className="mt-8 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-full border border-amber-300/20 bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-300/20 transition duration-200 hover:-translate-y-0.5 hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50 sm:px-8 sm:py-3.5 sm:text-base",
          className,
        )}
      >
        {children}
      </button>
    </div>
  );
}

export default TypingArenaRestartButton;
