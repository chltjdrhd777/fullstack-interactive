import user from "./userSlices";

export const mainReducer = {
  user: user.reducer,
};

export const selectUser = (everyState) => {
  return everyState.user;
};
