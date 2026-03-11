import { createContext, useCallback, useContext, useReducer } from "react";

const TextContext = createContext();

const initialState = {
  isLoading: false,
  text: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "text/loading":
      return {
        ...state,
        isLoading: true,
      };
    case "text/loaded":
      return {
        ...state,
        isLoading: false,
        text: action.payload,
      };
    default:
      return state;
  }
}

function TextProvider({ children }) {
  const [{ text, isLoading }, dispatch] = useReducer(reducer, initialState);

  const getText = useCallback(async function getText() {
    dispatch({ type: "text/loading" });
    const res = await fetch(`https://dummyjson.com/quotes/random`);
    const data = await res.json();
    dispatch({ type: "text/loaded", payload: data.quote });
  }, []);

  return (
    <TextContext.Provider value={{ text, isLoading, getText }}>
      {children}
    </TextContext.Provider>
  );
}

function useText() {
  const context = useContext(TextContext);
  if (context === undefined)
    throw new Error(`TextContext was used outside TextProvider`);
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { TextProvider, useText };
