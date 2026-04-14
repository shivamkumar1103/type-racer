import { cn } from "@/lib/utils";

function TextDisplay({ text, userInput }) {
  return (
    <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/50 p-4 font-mono text-base leading-8 tracking-wide text-slate-400 shadow-inner shadow-black/20 sm:p-6 sm:text-lg sm:leading-9 lg:p-8 lg:text-xl lg:leading-[2.4rem]">
      {text.split("").map((char, index) => {
        let colorClass = "text-slate-500/75";

        if (userInput.charAt(index) === "") {
          colorClass = "text-slate-500/75";
        } else if (userInput.charAt(index) !== char) {
          colorClass = "rounded-sm bg-rose-500/10 px-0.5 text-rose-300";
        } else {
          colorClass = "text-slate-100";
        }

        return (
          <span
            key={index}
            className={cn("transition-colors duration-150", colorClass)}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}

export default TextDisplay;
