const { cakeActions } = require("../cake/CakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
  numOfIcecream: 10,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  //   extraReducers: {
  //     ["icecream/ordered"]: (state) => {
  //       state.numOfIcecream--;
  //     },
  //   },
  //   extraReducers: (builder) => {
  //     builder.addCase(cakeActions.ordered, (state) => {
  //       state.numOfIcecream--;
  //     });
  //   },
});
// module.exports = icecreamSlice.reducer;
export default icecreamSlice.reducer;
// module.exports.iceCreamActions = icecreamSlice.actions;
export const { ordered, restocked } = icecreamSlice.actions;
