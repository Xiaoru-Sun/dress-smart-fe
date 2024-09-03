type DailyWeatherProp = {
  time: string;
  weathercode: number;
  temperature_2m_max: number;
  temperature_2m_min: number;
  windspeed_10m_max: number;
};

type WeatherCardProps = {
  obj: DailyWeatherProp;
  setSelectedWeatherCard?: React.Dispatch<
    React.SetStateAction<DailyWeatherProp | null>
  >;
};

const WeatherCard = ({ obj, setSelectedWeatherCard }: WeatherCardProps) => {
  return (
    <li
      className="rounded-xl list-none p-[5px] border-2 border-primary border-solid tex-[14px]"
      onClick={() => {
        setSelectedWeatherCard?.(obj);
      }}
    >
      <p>{obj.time}</p>
      <p>{obj.weathercode}</p>
      <p>Windspeed : {obj.windspeed_10m_max}</p>
      <p>
        {obj.temperature_2m_max} C / {obj.temperature_2m_min} C
      </p>
      <p></p>
    </li>
  );
};

export default WeatherCard;
