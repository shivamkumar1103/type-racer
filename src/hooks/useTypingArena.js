import {
  useEffect,
  useReducer,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import {
  initialGameState,
  reducer,
} from "../features/typingArena/typingArenaReducer";

function useTypingArena(text) {
  const [
    {
      userInput,
      status,
      isTimeRunning,
      timeRemaining,
      accumulatedCorrectChars,
      accumulatedTotalChars,
    },
    dispatch,
  ] = useReducer(reducer, initialGameState);
  const inputRef = useRef(null);
  const [previousScore, setPreviousScore] = useState(() => {
    const res = localStorage.getItem("previousScore");
    return res ? JSON.parse(res) : { wpm: 0, accuracy: 100 };
  });

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

  function restartGame() {
    dispatch({ type: "restart" });

    // set currentScore as previous Score
    const saved = localStorage.getItem("previousScore");
    if (saved) setPreviousScore(JSON.parse(saved));
  }

  const getNextText = useCallback(function getNextText(
    currentText,
    currentUserInput,
  ) {
    let correctChars = 0;
    for (let i = 0; i < currentUserInput.length; i++) {
      if (currentUserInput.charAt(i) === currentText.charAt(i)) correctChars++;
    }

    dispatch({
      type: "nextText",
      payload: {
        correctChars: correctChars,
        totalChars: currentUserInput.length,
      },
    });
  }, []);

  const { currAccuracy, currWpm } = useMemo(() => {
    // 1. Guard clause: Only show previous score if they haven't typed ANYTHING yet this entire session
    if (userInput.length === 0 && accumulatedTotalChars === 0) {
      return {
        currAccuracy: previousScore.accuracy,
        currWpm: previousScore.wpm,
      };
    }

    // 2. Count correct chars in the CURRENT paragraph
    let correctCharsInCurrent = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput.charAt(i) === text.charAt(i)) correctCharsInCurrent++;
    }

    // 3. COMBINE current paragraph with the accumulator
    const totalSessionCorrect = accumulatedCorrectChars + correctCharsInCurrent;
    const totalSessionTyped = accumulatedTotalChars + userInput.length;

    // 4. Do the math using the SESSION totals
    const accuracy =
      totalSessionTyped > 0
        ? (totalSessionCorrect / totalSessionTyped) * 100
        : 100;
    const timeElapsedInMinutes = (60 - timeRemaining) / 60;

    let wpm = 0;
    if (timeElapsedInMinutes > 0) {
      wpm = totalSessionCorrect / 5 / timeElapsedInMinutes;
    }

    return {
      currAccuracy: Math.round(accuracy),
      currWpm: Math.round(wpm),
    };
  }, [
    text,
    userInput,
    timeRemaining,
    previousScore,
    accumulatedCorrectChars,
    accumulatedTotalChars,
  ]);

  useEffect(
    function () {
      if (status === "finished") {
        const newScore = { wpm: currWpm, accuracy: currAccuracy };
        // store latest score in local storage to fetch when we restart
        localStorage.setItem("previousScore", JSON.stringify(newScore));
      }
    },
    [status, currAccuracy, currWpm],
  );

  function handleChange(e) {
    if (status === "waiting")
      dispatch({ type: "start", payload: e.target.value });
    else dispatch({ type: "input", payload: e.target.value });
  }
  return {
    inputRef,
    timeRemaining,
    status,
    currAccuracy,
    currWpm,
    previousScore,
    handleChange,
    userInput,
    dispatch,
    restartGame,
    getNextText,
  };
}

export default useTypingArena;
