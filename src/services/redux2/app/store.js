import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { setupListeners } from "@reduxjs/toolkit/query";
import phoneReducer from "../feature/phone/phoneSlice";
import userReducer from "../feature/user/fetchUser";
import { weatherApi } from "../feature/weatherQuery/WeatherQuerySlice";
const logger = createLogger();
const store = configureStore({
  reducer: {
    phone: phoneReducer,
    user: userReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
setupListeners(store.dispatch);
