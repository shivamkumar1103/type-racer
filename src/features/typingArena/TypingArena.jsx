import { useEffect, useReducer, useRef } from "react";
import { useText } from "../../contexts/TestContext";
import { initialGameState, reducer } from "./typingArenaReducer";
import styles from "./TypingArena.module.css";

function TypingArena() {
  const { text, getText } = useText();
  const [{ userInput, status, isTimeRunning, timeRemaining }, dispatch] =
    useReducer(reducer, initialGameState);
  const inputRef = useRef(null);

  useEffect(
    function () {
      getText();
    },
    [getText],
  );

  useEffect(
    function () {
      if (timeRemaining == 0) dispatch({ type: "finish" });
      let timer;
      if (isTimeRunning) {
        timer = setTimeout(() => dispatch({ type: "decTimer" }), 1000);
      }
      return () => clearTimeout(timer);
    },
    [timeRemaining, isTimeRunning],
  );

  function handleChange(e) {
    if (status === "finished") return;

    if (status === "waiting")
      dispatch({ type: "start", payload: e.target.value });
    else dispatch({ type: "input", payload: e.target.value });
  }

  return (
    <div
      className={`${styles.arena} ${status === "finished" ? styles.finished : ""}`}
      onClick={() => inputRef.current.focus()}
      style={{ cursor: "text" }}
    >
      {/* Sleek Stats Bar */}
      <div className={styles.statsBar}>
        <div>{timeRemaining}s</div>
        {/* We will add WPM here next! */}
        {status === "finished" && <div>Game Over!</div>}
      </div>

      <input
        ref={inputRef}
        type="text"
        value={userInput}
        onChange={handleChange}
        autoFocus
        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
      />

      {/* Styled Text Display */}
      <div className={styles.textDisplay}>
        {text.split("").map((char, index) => {
          let colorClass = styles.notTyped;

          if (userInput.charAt(index) === "") {
            colorClass = styles.notTyped;
          } else if (userInput.charAt(index) !== char) {
            colorClass = styles.incorrect;
          } else {
            colorClass = styles.correct;
          }

          return (
            <span key={index} className={colorClass}>
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default TypingArena;
