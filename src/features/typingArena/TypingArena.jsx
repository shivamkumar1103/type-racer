import { useEffect } from "react";
import styles from "./TypingArena.module.css";
import StatsBar from "../../components/StatsBar";
import TextDisplay from "../../components/TextDisplay";
import useTypingArena from "../../hooks/useTypingArena";
import Button from "../../components/Button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getText } from "../../services/apiText";

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
    inputRef.current.focus();
  }

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error fetching text</div>;

  return (
    <div
      className={`${styles.arena} ${status === "finished" ? styles.finished : ""}`}
      onClick={() => inputRef.current.focus()}
      style={{ cursor: "text" }}
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
        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
        disabled={status === "finished"}
      />
      <TextDisplay text={text} userInput={userInput} />
      <Button onClick={handleRestart}>Restart</Button>
    </div>
  );
}

export default TypingArena;
