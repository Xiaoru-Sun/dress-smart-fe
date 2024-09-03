import WeatherCard from "./WeatherCard";

type Prop = {
  selectedWeatherCard: {
    time: string;
    weathercode: number;
    temperature_2m_max: number;
    temperature_2m_min: number;
    windspeed_10m_max: number;
  };
};

const MainWeatherCard = ({ selectedWeatherCard }: Prop) => {
  return (
    <>
      <div>
        <WeatherCard obj={selectedWeatherCard} />
        <p>Weymouth, Dorset</p>
        <p>Today {selectedWeatherCard.time}</p>
        <button>Select</button>
      </div>
    </>
  );
};

export default MainWeatherCard;
