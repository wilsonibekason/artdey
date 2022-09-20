import React from "react";
import { uuid } from "react-uuid";
import {
  useAddWeatherMutation,
  useDeleteWeatherMutation,
  useGetWeathersQuery,
  useUpdateWeatherMutation,
} from "./WeatherQuerySlice";

const WeatherView = () => {
  const { isError, isFetching, isLoading, isSuccess, data } =
    useGetWeathersQuery();
  const [addWeatherEnvironment] = useAddWeatherMutation();
  const [updateWeatherEnvironment] = useUpdateWeatherMutation();
  const [deleteWeatherEnvironment] = useDeleteWeatherMutation();
  const weatherInfo = {
    id: uuid(),
    countryWeatherCondition: {
      nigeria: {
        latitude: ["300002", "40000"],
      },
      ghana: {
        latitude: ["4004040", "300322"],
      },
    },
    stateWeatherCondition: {
      newYork: {
        latitude: ["50050", "30392"],
      },
      lagos: ["4004040", "10229332"],
    },
  };
  const updatedWeatherInfo = {
    id: uuid(),
    countryWeatherCondition: {
      nigeria: {
        latitude: ["300002", "40000"],
      },
      ghana: {
        latitude: ["4004040", "300322"],
      },
    },
    stateWeatherCondition: {
      newYork: {
        latitude: ["50050", "30392"],
      },
      lagos: ["4004040", "10229332"],
    },
  };

  const addWeatherENV = async () => {
    await addWeatherEnvironment(weatherInfo);
  };

  const updatedWeatherENV = async () => {
    await updateWeatherEnvironment(updatedWeatherInfo);
  };

  const deleteWeatherENV = async () => {
    await deleteWeatherEnvironment(weatherInfo.id);
  };

  console.log(data);
  return (
    <>
      <div>
        <button onClick={addWeatherENV}>add weather </button>
        <button onClick={updatedWeatherENV}>update weather </button>
        <button onClick={deleteWeatherENV}>delete weather </button>
        <div>
          {isLoading && data?.json().length >= 1 ? (
            <p>data has been fetched</p>
          ) : null}
          {JSON.stringify(data)
            .split("")
            .map((item, index) => console.log(item))}
        </div>
      </div>
    </>
  );
};

export default WeatherView;
