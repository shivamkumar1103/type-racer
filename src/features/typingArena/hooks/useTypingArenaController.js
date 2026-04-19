import { useEffect, useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useTypingArena from "@/features/typingArena/hooks/useTypingArena";
import { getText } from "@/features/typingArena/services/getText";

function normalizeErrorMessage(error) {
  if (!error) return "";
  if (typeof error === "string") return error;
  if (error instanceof Error) return error.message;
  return "Failed to load typing text. Please try again.";
}

function useTypingArenaController() {
  const { isPending, data, error } = useQuery({
    queryKey: ["text"],
    queryFn: getText,
  });

  const text = data?.quote ?? "";
  const author = data?.author ?? "Unknown";

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

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 100);
    return () => clearTimeout(t);
  }, [inputRef]);

  const queryClient = useQueryClient();

  useEffect(
    function syncOnQuoteFinished() {
      if (!text) return;
      if (userInput.length !== text.length) return;
      if (userInput.length === 0) return;

      getNextText(text, userInput);
      queryClient.invalidateQueries({ queryKey: ["text"] });
    },
    [userInput, getNextText, text, queryClient],
  );

  const handleRestart = useCallback(
    function handleRestart() {
      restartGame();
      queryClient.invalidateQueries({ queryKey: ["text"] });
      inputRef.current?.focus();
    },
    [restartGame, queryClient, inputRef],
  );

  const focusInput = useCallback(
    function focusInput() {
      inputRef.current?.focus();
    },
    [inputRef],
  );

  return {
    isPending,
    error,
    errorMessage: normalizeErrorMessage(error),
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
  };
}

export default useTypingArenaController;
