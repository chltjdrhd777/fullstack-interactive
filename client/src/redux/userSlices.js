import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { loginData: { loginstate: null, err: null } },
  reducers: {
    loginUser: (state, action) => {
      state.loginData = action.payload;
    },
  },
});

export default user;

export const { loginUser } = user.actions;
