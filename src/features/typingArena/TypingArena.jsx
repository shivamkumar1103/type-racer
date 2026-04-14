import { useEffect } from "react";
import StatsBar from "../../components/StatsBar";
import TextDisplay from "../../components/TextDisplay";
import useTypingArena from "../../hooks/useTypingArena";
import Button from "../../components/Button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getText } from "../../services/apiText";
import { Spinner } from "@/components/ui/spinner";
import Error from "@/components/ui/Error";

function TypingArena() {
  const { isPending, data, error } = useQuery({
    queryKey: ["text"],
    queryFn: getText,
  });
  const text = data?.quote ?? "";

  const {
    inputRef,
    timeRemaining,
    status,
    currAccuracy,
    currWpm,
    previousScore,
    handleChange,
    userInput,
    restartGame,
    getNextText,
  } = useTypingArena(text);

  const queryClient = useQueryClient();
  useEffect(
    function () {
      if (!text) return;
      if (userInput.length !== text.length) return;
      if (userInput.length === 0) return;
      getNextText(text, userInput);
      queryClient.invalidateQueries({ queryKey: ["text"] });
    },
    [userInput, getNextText, text, queryClient],
  );

  function handleRestart() {
    restartGame(); // set state to initial values
    queryClient.invalidateQueries({ queryKey: ["text"] }); // fetch new text from api
    inputRef.current?.focus();
  }

  if (isPending)
    return (
      <div className="flex min-h-112 items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 px-6 py-12 text-slate-200 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="flex items-center gap-3 text-sm font-medium tracking-wide text-slate-300">
          <Spinner className="size-5 text-amber-300" />
          Loading text
        </div>
      </div>
    );
  if (error) return <Error message={error} />;

  return (
    <div
      className="group relative w-full max-w-5xl cursor-text rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-6 lg:p-8"
      onClick={() => inputRef.current?.focus()}
      role="presentation"
    >
      <StatsBar
        status={status}
        timeRemaining={timeRemaining}
        currAccuracy={currAccuracy}
        currWpm={currWpm}
        previousScore={previousScore}
      />

      <input
        ref={inputRef}
        type="text"
        value={userInput}
        onChange={handleChange}
        autoFocus
        className="absolute h-0 w-0 opacity-0"
        disabled={status === "finished"}
      />
      <TextDisplay text={text} userInput={userInput} />
      <Button onClick={handleRestart}>Restart</Button>
    </div>
  );
}

export default TypingArena;
