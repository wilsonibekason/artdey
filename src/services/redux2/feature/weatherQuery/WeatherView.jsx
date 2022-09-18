import React from "react";
import { useGetWeathersQuery } from "./WeatherQuerySlice";

const WeatherView = () => {
  const { isError, isFetching, isLoading, isSuccess } = useGetWeathersQuery();
  return (
    <>
      <div></div>
    </>
  );
};

export default WeatherView;
