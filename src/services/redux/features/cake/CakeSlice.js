// const createSlice = require("@reduxjs/toolkit").createSlice
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducer: {
    increment: (state, action) => {},
    order: (state, action) => {
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
    },
    ordered: (state, action) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});
/// the entire application of redux is split into slices and managed individually__esModule.ex
// module.exports = cakeSlice.reducer;
export default cakeSlice.reducer;
// module.exports.cakeActions = cakeSlice.actions;
export const { order, ordered, restocked } = cakeSlice.actions;
