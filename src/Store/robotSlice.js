import { createSlice } from "@reduxjs/toolkit";

export const robotSlice = createSlice({
  name: "robots",
  initialState: {
    value: [
      { id: 0, name: "JOE", color: "#FF0000", attack: "8", defense: "8" },
      { id: 1, name: "JOES", color: "#FFF000", attack: "1", defense: "9" },
      { id: 2, name: "JOICE", color: "#FFJJ00", attack: "3", defense: "7" },
    ],
  },
  reducers: {
    addRobot: (state, action) => {
      const newObject = { ...action.payload };
      newObject.id = state.value.length;
      state.value = [...state.value, newObject];
    },
    removeRobot: (state, action) => {
      const updatedArray = state.value.filter(
        (item) => item.id !== action.payload
      );
      state.value = updatedArray;
    },
  },
});

export const { addRobot, removeRobot } = robotSlice.actions;

export default robotSlice.reducer;
