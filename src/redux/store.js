import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./reducers/testSlice";

const store = configureStore({
  reducer: {
    test: testSlice,
  },
});

export default store;
