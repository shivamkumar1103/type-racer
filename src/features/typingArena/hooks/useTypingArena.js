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
} from "@/features/typingArena/store/typingArenaReducer";
import { useDispatch } from "react-redux";
import { saveGameResult } from "@/features/Profile/store/profileSlice";

function useTypingArena(text) {
  const dispatchProfile = useDispatch();

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
    function handleTimerTick() {
      if (timeRemaining == 0) {
        dispatch({ type: "finish" });
      }

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
        correctChars,
        totalChars: currentUserInput.length,
      },
    });
  }, []);

  const { currAccuracy, currWpm } = useMemo(() => {
    if (userInput.length === 0 && accumulatedTotalChars === 0) {
      return {
        currAccuracy: previousScore.accuracy,
        currWpm: previousScore.wpm,
      };
    }

    let correctCharsInCurrent = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput.charAt(i) === text.charAt(i)) correctCharsInCurrent++;
    }

    const totalSessionCorrect = accumulatedCorrectChars + correctCharsInCurrent;
    const totalSessionTyped = accumulatedTotalChars + userInput.length;

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
    function persistScoreWhenFinished() {
      if (status === "finished") {
        const timeStamp = new Date().toISOString();
        const newScore = { wpm: currWpm, accuracy: currAccuracy, timeStamp };
        dispatchProfile(saveGameResult(newScore));
        localStorage.setItem("previousScore", JSON.stringify(newScore));
      }
    },
    [status, currAccuracy, currWpm, dispatchProfile],
  );

  function handleChange(e) {
    if (status === "waiting") {
      dispatch({ type: "start", payload: e.target.value });
      return;
    }

    dispatch({ type: "input", payload: e.target.value });
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
    restartGame,
    getNextText,
  };
}

export default useTypingArena;
