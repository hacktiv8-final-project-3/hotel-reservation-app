const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  book: [],
  bookHistory: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBook: (state, acttion) => {
      state.book = acttion.payload;
      console.warn(state.book);
    },
    setBookHistory: (state, acttion) => {
      state.bookHistory = [...state.bookHistory, acttion.payload];
      console.warn(state.bookHistory);
      state.book = [];
    },
  },
});

export const { setBook, unsetBook, setBookHistory } = bookSlice.actions;
export default bookSlice.reducer;
