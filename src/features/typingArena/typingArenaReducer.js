const initialGameState = {
  userInput: "",
  isTimeRunning: false,
  timeRemaining: 60,
  status: "waiting", // "waiting", "playing", "finished"
  accumulatedCorrectChars: 0,
  accumulatedTotalChars: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        status: "playing",
        userInput: action.payload,
        isTimeRunning: true,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        isTimeRunning: false,
      };
    case "input":
      return {
        ...state,
        userInput: action.payload,
      };
    case "decTimer":
      return {
        ...state,
        timeRemaining: state.timeRemaining - 1,
      };
    case "restart":
      return initialGameState;
    case "nextText":
      return {
        ...state,
        userInput: "",
        accumulatedCorrectChars:
          state.accumulatedCorrectChars + action.payload.correctChars,
        accumulatedTotalChars:
          state.accumulatedTotalChars + action.payload.totalChars,
      };
    default:
      return state;
  }
}

export { initialGameState, reducer };
