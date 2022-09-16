import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Component router={{ location, navigate, params }} {...props} />;
  };
  return Wrapper;
};
