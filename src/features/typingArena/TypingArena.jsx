import { useEffect } from "react";
import { useText } from "../../contexts/TestContext";
import styles from "./TypingArena.module.css";
import StatsBar from "../../components/StatsBar";
import TextDisplay from "../../components/TextDisplay";
import useTypingArena from "../../hooks/useTypingArena";
import Button from "../../components/Button";

function TypingArena() {
  const { text, getText } = useText();

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

  useEffect(
    function () {
      getText();
    },
    [getText],
  );

  useEffect(
    function () {
      if (userInput.length !== text.length) return;
      if (userInput.length === 0) return;
      getNextText(text, userInput);
      getText();
    },
    [userInput, getText, text.length, getNextText, text],
  );

  function handleRestart() {
    restartGame(); // set state to initial values
    getText(); // fetch new text from api
    inputRef.current.focus();
  }

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
