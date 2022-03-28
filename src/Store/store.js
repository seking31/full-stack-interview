import { configureStore } from "@reduxjs/toolkit";
import robotReducer from "./robotSlice";
import scoreboardReducer from "./scoreboardSlice";

export default configureStore({
  reducer: {
    robots: robotReducer,
    scoreboard: scoreboardReducer,
  },
});
