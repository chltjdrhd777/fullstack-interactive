import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./mainReducer";
import ReduxThunk from "redux-thunk";
import ReduxPromise from "redux-promise";

const middleware = [ReduxThunk, ReduxPromise];

export default configureStore({
  reducer: mainReducer,
  middleware,
});
