import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./fetchUserSlice";
const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>list of users</h2>
      {user.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
      {user.loading && <div>loading ... </div>}
      {user.error && <div>error: {user.error}</div>}
      {user.loading && user.error ? <p>user: {user.error}</p> : null}
      {user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
