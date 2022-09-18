import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfFood: 9,
};
const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    incremented: (state, action) => {
      state.numOfFood += action.payload;
    },
    decremented: (state) => {
      state.numOfFood--;
    },
  },
});

export default phoneSlice.reducer;
export const { incremented, decremented } = phoneSlice.actions;
