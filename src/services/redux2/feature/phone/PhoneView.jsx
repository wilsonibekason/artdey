import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incremented, decremented } from "./phoneSlice";
const PhoneView = () => {
  const dispatch = useDispatch();
  const dispatchIncrement = dispatch(incremented());
  const dispatchDecremented = dispatch(decremented());
  const numOfPhone = useSelector((state) => state.phone.numOfFood);
  const increaseCounter = useCallback(
    () => dispatch({ type: "increase-counter" }),
    []
  );
  return (
    <>
      <div>
        <button onClick={dispatchIncrement}>increment phone count</button>
        <button onClick={dispatchDecremented}>decrement phone count </button>
        <h2>{numOfPhone}</h2>
      </div>
    </>
  );
};

export default PhoneView;
