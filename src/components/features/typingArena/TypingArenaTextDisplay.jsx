import { cn } from "@/lib/utils";
import { normalizeTypingChar } from "@/features/typingArena/utils/normalizeTyping";

function TypingArenaTextDisplay({ text, userInput, author, status }) {
  const currentIndex = userInput.length;

  return (
    <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/50 p-4 text-base leading-8 tracking-wide text-slate-400 shadow-inner shadow-black/20 sm:p-6 sm:text-lg sm:leading-9 lg:p-8 lg:text-xl lg:leading-[2.4rem]">
      {text.split("").map((char, index) => {
        let colorClass = "text-slate-500/75";
        const isCurrentTarget =
          index === currentIndex && status !== "finished" && text.length > 0;
        const currentInputChar = userInput.charAt(index);
        const isCorrectChar =
          normalizeTypingChar(currentInputChar) === normalizeTypingChar(char);

        if (currentInputChar === "") {
          colorClass = "text-slate-500/75";
        } else if (!isCorrectChar) {
          colorClass = "rounded-sm bg-rose-500/10 px-0.5 text-rose-300";
        } else {
          colorClass = "text-slate-100";
        }

        return (
          <span
            key={index}
            className={cn("transition-colors duration-150", colorClass)}
          >
            {isCurrentTarget ? (
              <span
                aria-hidden="true"
                className="mr-0.5 inline-block h-[1.15em] w-0.5 animate-pulse rounded-full bg-amber-300 align-middle shadow-[0_0_10px_rgba(251,191,36,0.95)]"
              />
            ) : null}
            {char}
          </span>
        );
      })}

      <div className="mt-5 flex items-center justify-end gap-2 border-t border-white/10 pt-3">
        <span className="inline-block h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(251,191,36,0.85)]" />
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300/95">
          - {author}
        </p>
      </div>
    </div>
  );
}

export default TypingArenaTextDisplay;
