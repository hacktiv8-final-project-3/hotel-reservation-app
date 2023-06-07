const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: [],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, acttion) => {
      state.user = acttion.payload;

      console.warn(state.user, state.login);
    },
    setLogout: (state, action) => {
      state.user = [];
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;
export default loginSlice.reducer;
