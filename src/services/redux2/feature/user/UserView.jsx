import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./fetchUser";
const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers);
  }, []);
  return (
    <>
      <div>
        {user.loading && <h1>loading ...</h1>}
        {user.loading && user.error ? <p>user: {user.error?.code} </p> : null}
        {user.loading && user.users.length >= 1 ? (
          <>
            <ul>
              {user.users?.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </>
        ) : (
          <h1>no fetched users </h1> || null
        )}
      </div>
    </>
  );
};

export default UserView;
