import clearSkyIcon from "../assets/weather-icons/01_clear_sky.svg";
import mainlyClearIcon from "../assets/weather-icons/02_mainly_clear.svg";
import partlyCloudyIcon from "../assets/weather-icons/03_partly_cloudy.svg";
import mostlyCloudyIcon from "../assets/weather-icons/04_mostly_cloudy.svg";
import overcastIcon from "../assets/weather-icons/05_overcast.svg";
import fogIcon from "../assets/weather-icons/06_fog.svg";
import drizzleIcon from "../assets/weather-icons/07_drizzle.svg";
import freezingDrizzleIcon from "../assets/weather-icons/08_freezing_drizzle.svg";
import showersRainIcon from "../assets/weather-icons/09_showers_rain.svg";
import snowFlurriesIcon from "../assets/weather-icons/10_snow_flurries.svg";
import snowShowersIcon from "../assets/weather-icons/11_snow_showers.svg";
import snowIcon from "../assets/weather-icons/12_snow.svg";
import rainIcon from "../assets/weather-icons/13_rain.svg";
import thunderstormsIcon from "../assets/weather-icons/14_thunderstorms.svg";
import thunderstormsHailIcon from "../assets/weather-icons/15_thunderstorms_hail.svg";
// Map weather codes to their respective icons
const weatherIcons: { [key: number]: string } = {
  0: clearSkyIcon,
  1: mainlyClearIcon,
  2: partlyCloudyIcon,
  3: mostlyCloudyIcon,
  4: overcastIcon,
  5: fogIcon,
  6: drizzleIcon,
  7: freezingDrizzleIcon,
  8: showersRainIcon,
  9: snowFlurriesIcon,
  10: snowShowersIcon,
  11: snowIcon,
  12: rainIcon,
  13: thunderstormsIcon,
  14: thunderstormsHailIcon,
};

export function getWeatherIcon(weatherCode: number): string {
  return weatherIcons[weatherCode] || partlyCloudyIcon;
  // Return rainIcon as the default icon
}
