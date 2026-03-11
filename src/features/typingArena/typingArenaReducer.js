const initialGameState = {
  userInput: "",
  isTimeRunning: false,
  timeRemaining: 10,
  status: "waiting", // "waiting", "playing", "finished"
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
    default:
      return state;
  }
}

export { initialGameState, reducer };
