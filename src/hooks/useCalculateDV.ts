import { dailyValues } from "../utils/initialNutritionData";

const useCalculateDV = (nutrient: keyof typeof dailyValues, value: number) => {
  const daily = dailyValues[nutrient];
  if (!daily) return null;
  return Math.round((value / daily) * 100);
};

export default useCalculateDV;
