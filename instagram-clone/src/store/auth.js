import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
};

const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUserA(state, action) {
      // if (action.payload) {
      //   localStorage.setItem("user", JSON.stringify(action.payload));
      // } else {
      //   localStorage.removeItem("user");
      // }
      state.user = action.payload;
    },
  },
});

export const { setUserA } = auth.actions;
export default auth.reducer;
