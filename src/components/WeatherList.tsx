import WeatherCard from "./WeatherCard";

type DailyWeatherProp = {
  time: string;
  weathercode: number;
  temperature_2m_max: number;
  temperature_2m_min: number;
  windspeed_10m_max: number;
};

type WeatherListProp = {
  weatherForecast: DailyWeatherProp[];
  setSelectedWeatherCard?: React.Dispatch<
    React.SetStateAction<DailyWeatherProp | null>
  >;
};

const WeatherList = ({
  weatherForecast,
  setSelectedWeatherCard,
}: WeatherListProp) => {
  return (
    <div className="w-full h-[60%] gap-1 flex flex-wrap items-center justify-around mt-2">
      {weatherForecast.map((obj, index) => {
        return (
          <WeatherCard
            key={index}
            obj={obj}
            setSelectedWeatherCard={setSelectedWeatherCard}
            tempBgColour="bg-primary"
          />
        );
      })}
    </div>
  );
};

export default WeatherList;
