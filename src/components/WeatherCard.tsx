import { getWeatherIcon } from "../utils/weatherIcons";
import { FaLongArrowAltRight } from "react-icons/fa";
import { formatDate } from "../utils/date";
import { getMinMaxTemperatures } from "../utils/temperature";
import { convertWindSpeedToMph } from "../utils/windspeed";

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
  tempBgColour: string;
};

const WeatherCard = ({
  obj,
  setSelectedWeatherCard,
  tempBgColour,
}: WeatherCardProps) => {
  const {
    weathercode,
    time,
    temperature_2m_max,
    temperature_2m_min,
    windspeed_10m_max,
  } = obj;
  const weatherIcon = getWeatherIcon(weathercode);
  const CELSIUS_SYMBOL = "°C";
  const { day, formattedDate } = formatDate(time);
  const { min, max } = getMinMaxTemperatures([
    temperature_2m_min,
    temperature_2m_max,
  ]);
  const windspeedPerHour = convertWindSpeedToMph(windspeed_10m_max);
  return (
    <div
      className="flex flex-col w-[85px] h-[190px] items-center rounded-lg cursor-pointer "
      onClick={() => {
        setSelectedWeatherCard?.(obj);
      }}
    >
      <div className="w-full h-[88%] flex flex-col items-center bg-white rounded-tl-lg rounded-tr-lg border-2 border-secondary">
        <h3 className="text-[10px] font-bold mt-1">{day}</h3>
        <p className="text-[10px] font-bold text-gray-400 mt-1">
          {formattedDate}
        </p>
        <img src={weatherIcon} className="w-[60px] mt-2" />
        <p className="text-[13px] font-extrabold text-secondary mt-1">
          {max} {CELSIUS_SYMBOL}
        </p>
        <div className="flex w-full items-center justify-center">
          <FaLongArrowAltRight className="text-[18px] text-secondary" />
          <p className="text-[8px] ml-2 ">{windspeedPerHour} mph</p>
        </div>
      </div>
      <div
        className={`${tempBgColour} w-full h-[14%] flex flex-row items-center justify-center text-white text-[10px] rounded-bl-lg rounded-br-lg border-2 border-t-0 border-secondary`}
      >
        {max} {CELSIUS_SYMBOL} / {min}
        {CELSIUS_SYMBOL}
      </div>
    </div>
  );
};

export default WeatherCard;
