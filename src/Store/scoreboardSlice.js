import { createSlice } from "@reduxjs/toolkit";

export const scoreboardSlice = createSlice({
  name: "scoreboard",
  initialState: {
    value: [{ name: "JOE" }, { name: "JOES" }, { name: "JOICE" }],
  },
  reducers: {
    addWiningRobot: (state, action) => {
      const newObject = { ...action.payload };
      state.value = [...state.value, newObject];
    },
  },
});

export const { addWiningRobot } = scoreboardSlice.actions;

export default scoreboardSlice.reducer;
