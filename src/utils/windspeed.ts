export const convertWindSpeedToMph = (kmph: number): number => {
  const mph = kmph * 0.621371;
  return Math.round(mph);
};
