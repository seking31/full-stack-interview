import { createSlice } from "@reduxjs/toolkit";

export const scoreboardSlice = createSlice({
  name: "scoreboard",
  initialState: {
    value: [
      { name: "JOE", date: "Sat Mar 26 2022" },
      { name: "JOES", date: "Fri Mar 25 2022" },
      { name: "JOICE", date: "Sat Thu 25 2022" },
    ],
  },
  reducers: {
    addWiningRobot: (state, action) => {
      const newObject = { name: action.payload };
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      newObject.date = today.toDateString();
      state.value = [...state.value, newObject];
    },
  },
});

export const { addWiningRobot } = scoreboardSlice.actions;

export default scoreboardSlice.reducer;
