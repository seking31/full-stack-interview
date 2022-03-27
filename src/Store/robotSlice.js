import { createSlice } from "@reduxjs/toolkit";

export const robotSlice = createSlice({
  name: "robots",
  initialState: {
    value: [
      { id: 0, name: "joe", color: "#FF0000", attack: "8", defense: "8" },
      { id: 1, name: "joes", color: "#FFF000", attack: "1", defense: "9" },
      { id: 2, name: "joice", color: "#FFJJ00", attack: "3", defense: "7" },
    ],
  },
  reducers: {},
});

export const {} = robotSlice.actions;

export default robotSlice.reducer;
