import { convertWindSpeedToMph } from "./windspeed";

const weatherDescriptions: { [key: number]: string } = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Mostly cloudy",
  4: "Overcast",
  5: "Fog",
  6: "Drizzle",
  7: "Freezing drizzle",
  8: "Showers of rain",
  9: "Snow flurries",
  10: "Snow showers",
  11: "Snow",
  12: "Rain",
  13: "Thunderstorms",
  14: "Thunderstorms with hail",
};
export const generateWeatherSummary = (
  weathercode: number,
  minTemperature: number,
  maxTemperature: number,
  windspeed: number
): string => {
  const description = weatherDescriptions[weathercode];
  const windSpeedMph = convertWindSpeedToMph(windspeed);

  return `The weather today is ${description} with a daily high temperature of ${Math.round(
    maxTemperature
  )}°C and a low of ${Math.round(
    minTemperature
  )}°C, today will have a wind speed of ${windSpeedMph} mph.`;
};
