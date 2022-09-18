import React, { useDebugValue, useState } from "react";
import { useSyncExternalStore } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
const IceCreamView = () => {
  const [value, setValue] = useState(2);
  const debug = useDebugValue();
  const dispatch = useDispatch();
  const dispatchOrder = () => dispatch(ordered());
  const dispatchRestake = () => dispatch(restocked(value));
  const store = useSyncExternalStore();
  const numOfIcecream = useSelector((state) => state.iceCream.numOfIcecream);
  // the useselector hook is used to read data from the redux store
  return (
    <>
      <div>
        <h2>number of cakes</h2>
        <button>order cakes</button>
        <input
          type="text"
          name=""
          id=""
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <button onClick={dispatchRestake}>restock cakes</button>
      </div>
    </>
  );
};

export default IceCreamView;
