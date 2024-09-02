// import { fetchWeatherApi } from "openmeteo";
import axios from "axios";
import { useEffect, useState } from "react";
import MainWeatherCard from "../components/MainWeatherCard";
import PlaceSearch from "../components/PlaceSearch";
import WeatherCard from "../components/WeatherCard";
type WeatherProp = {
  searchOpen: boolean;
};

type DailyWeatherProp = {
  time: string;
  weathercode: number;
  temperature_2m_max: number;
  temperature_2m_min: number;
  windspeed_10m_max: number;
};

const Weather = ({ searchOpen }: WeatherProp) => {
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [selectedWeatherCard, setSelectedWeatherCard] =
    useState<null | DailyWeatherProp>(null);

  const params = {
    latitude: 52.52,
    longitude: 13.41,
    hourly: "temperature_2m",
  };

  const dailyParameters =
    "weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max";
  const timezone = "America/New_York";
  const days = 8;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&daily=${dailyParameters}&timezone=${timezone}&forecast_days=${days}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const fetchedData = response.data.daily;
        console.log("fetchedData", fetchedData);
        const weatherForecast = fetchedData.time.map((_, index: number) => ({
          time: fetchedData.time[index],
          weathercode: fetchedData.weathercode[index],
          temperature_2m_max: fetchedData.temperature_2m_max[index],
          temperature_2m_min: fetchedData.temperature_2m_min[index],
          windspeed_10m_max: fetchedData.windspeed_10m_max[index],
        }));

        setWeatherForecast(weatherForecast);
        setSelectedWeatherCard(weatherForecast[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {searchOpen && <PlaceSearch />}
      {weatherForecast && (
        <div
          className={` relative selection:w-full h-screen flex flex-col items-center justify-start p-4`}
        >
          {searchOpen && (
            <div className="fixed top-[44px] inset-0 bg-black bg-opacity-60 z-2" />
          )}
          {selectedWeatherCard && (
            <MainWeatherCard selectedWeatherCard={selectedWeatherCard} />
          )}
          {/* <MainWeatherCard selectedWeatherCard={selectedWeatherCard} /> */}
          <ol className="gap-[10px] flex flex-wrap justify-evenly ">
            {weatherForecast.map((obj, index) => {
              return (
                <WeatherCard
                  key={index}
                  obj={obj}
                  setSelectedWeatherCard={setSelectedWeatherCard}
                />
              );
            })}
          </ol>
        </div>
      )}
    </>
  );
};
[];

export default Weather;
