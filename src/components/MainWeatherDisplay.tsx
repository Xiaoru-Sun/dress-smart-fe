import WeatherCard from "./WeatherCard";
import { formatDate } from "../utils/date";
import { generateWeatherSummary } from "../utils/weatherDescription";

type Prop = {
  selectedWeatherCard: {
    time: string;
    weathercode: number;
    temperature_2m_max: number;
    temperature_2m_min: number;
    windspeed_10m_max: number;
  };
};

const MainWeatherDisplay = ({ selectedWeatherCard }: Prop) => {
  const {
    weathercode,
    time,
    temperature_2m_max,
    temperature_2m_min,
    windspeed_10m_max,
  } = selectedWeatherCard;

  const { day, formattedDate } = formatDate(time);
  const summary = generateWeatherSummary(
    weathercode,
    temperature_2m_min,
    temperature_2m_max,
    windspeed_10m_max
  );
  return (
    <>
      <div className="w-full h-[32%] flex bg-primary rounded-lg mt-2 p-2">
        <div className="w-[28%] flex items-center justify-center ">
          <WeatherCard obj={selectedWeatherCard} tempBgColour="bg-secondary" />
        </div>
        <div className="flex flex-col p-4 pb-0 pr-2 pl-6 w-[82%]">
          <h2 className="text-[16px] text-white">London</h2>
          <p className="text-[14px] text-secondary font-semibold mt-1">
            {day} {formattedDate}
          </p>
          <p className="text-[12px] text-white mt-2 w-full">{summary}</p>
          <div className="flex mt-auto">
            <button className="w-[100px] h-[30px] bg-secondary text-[12px] text-white rounded-lg ml-auto mb-2 cursor-pointer">
              Select
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainWeatherDisplay;
