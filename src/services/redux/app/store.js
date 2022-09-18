// const configureStore = require("@reduxjs/toolkit").configureStore;
// const reduxLogger = require("redux-logger");
// const cakeReducer = require("../features/cake/CakeSlice");
// const iceReducer = require("../features/icecream/icecreamSlice");
// const userReducer = require("../features/user/fetchUserSlice");
import iceReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/fetchUserSlice";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
const logger = createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceReducer,
    user: userReducer,
  },
  /// the reducer is used to specify all the slices that belong to the features directory
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// module.exports = store;
export default store;
