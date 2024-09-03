const roundTemperature = (value: number | null | undefined): number | null => {
  if (value === null || value == undefined) {
    return null;
  }
  return Math.round(value);
};

export const getMinMaxTemperatures = (
  temperatures: (number | null | undefined)[]
): { min: number | null; max: number | null } => {
  if (!temperatures || temperatures.length === 0) {
    return { min: null, max: null };
  }
  const validTemperatures = temperatures.filter(
    (temp) => temp !== null && temp !== undefined
  ) as number[];
  if (validTemperatures.length === 0) {
    return { min: null, max: null };
  }

  const minTemp = Math.min(...validTemperatures);
  const maxTemp = Math.max(...validTemperatures);

  return { min: roundTemperature(minTemp), max: roundTemperature(maxTemp) };
};
