import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./reducers/testSlice";
import hotelReducer from "./reducers/hotelSlice";

const store = configureStore({
  reducer: {
    test: testSlice,
    hotels: hotelReducer,
  },
});

export default store;
