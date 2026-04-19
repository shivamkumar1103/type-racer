import TypingArenaStatsBar from "@/components/features/typingArena/TypingArenaStatsBar";
import TypingArenaTextDisplay from "@/components/features/typingArena/TypingArenaTextDisplay";
import TypingArenaRestartButton from "@/components/features/typingArena/TypingArenaRestartButton";
import TypingArenaErrorState from "@/components/features/typingArena/TypingArenaErrorState";
import TypingArenaInput from "@/components/features/typingArena/TypingArenaInput";
import TypingArenaLoading from "@/components/features/typingArena/TypingArenaLoading";
import TypingArenaShell from "@/components/features/typingArena/TypingArenaShell";
import useTypingArenaController from "@/features/typingArena/hooks/useTypingArenaController";

function TypingArena() {
  const {
    isPending,
    error,
    errorMessage,
    inputRef,
    text,
    author,
    userInput,
    status,
    timeRemaining,
    currAccuracy,
    currWpm,
    previousScore,
    handleChange,
    handleRestart,
    focusInput,
  } = useTypingArenaController();

  if (isPending) return <TypingArenaLoading />;
  if (error)
    return (
      <TypingArenaErrorState message={errorMessage} onRetry={handleRestart} />
    );

  return (
    <TypingArenaShell onClick={focusInput}>
      <TypingArenaStatsBar
        status={status}
        timeRemaining={timeRemaining}
        currAccuracy={currAccuracy}
        currWpm={currWpm}
        previousScore={previousScore}
      />

      <TypingArenaInput
        inputRef={inputRef}
        userInput={userInput}
        handleChange={handleChange}
        disabled={status === "finished"}
      />
      <TypingArenaTextDisplay
        text={text}
        author={author}
        userInput={userInput}
        status={status}
      />
      <TypingArenaRestartButton onClick={handleRestart}>
        Restart
      </TypingArenaRestartButton>
    </TypingArenaShell>
  );
}

export default TypingArena;
