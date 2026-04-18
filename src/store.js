import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./features/Profile/store/profileSlice";

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("profile");
    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
  }
}

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("profile", serializedState);
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
}

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => {
  saveToLocalStorage({
    profile: store.getState().profile,
  });
});

export default store;
