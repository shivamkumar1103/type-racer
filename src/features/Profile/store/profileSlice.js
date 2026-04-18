import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "Lucy",
  bestStats: { wpm: 0, accuracy: 0 },
  history: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    saveGameResult: (state, action) => {
      const { wpm, accuracy } = action.payload;
      if (wpm > state.bestStats.wpm) {
        state.bestStats.wpm = wpm;
      }
      if (accuracy > state.bestStats.accuracy) {
        state.bestStats.accuracy = accuracy;
      }
      state.history.push(action.payload);
    },
    resetHistory: (state) => {
      state.history = [];
      state.bestStats = { wpm: 0, accuracy: 0 };
    },
  },
});

export const { setUserName, saveGameResult, resetHistory } =
  profileSlice.actions;

export default profileSlice.reducer;
