import { FoodNutritionData } from "../schemas/types";

const initialNutritionData: FoodNutritionData = {
  food: {
    food_id: "64351",
    food_name: "Pizza de Pepperoni",
    brand_name: "California Pizza Kitchen",
    food_type: "Brand",
    food_url:
      "https://www.fatsecret.com/calories-nutrition/california-pizza-kitchen/pepperoni-pizza",
    servings: {
      serving: [
        {
          serving_id: "115435",
          serving_description: "1 Porção",
          serving_url:
            "https://www.fatsecret.com/calories-nutrition/california-pizza-kitchen/pepperoni-pizza",
          number_of_units: "1.000",
          measurement_description: "porção",
          calories: "190",
          carbohydrate: "22.00",
          protein: "8.00",
          fat: "7.00",
          saturated_fat: "3.000",
          trans_fat: "0",
          cholesterol: "20",
          sodium: "460",
          fiber: "1.0",
          sugar: "1.00",
          calcium: "0",
          iron: "0",
          metric_serving_amount: "0",
          metric_serving_unit: "0",
          monounsaturated_fat: "0",
          polyunsaturated_fat: "0",
          potassium: "0",
          vitamin_a: "0",
          vitamin_c: "0",
        },
      ],
    },
  },
};

const dailyValues = {
  fat: 70,
  saturated_fat: 20,
  cholesterol: 300,
  sodium: 2400,
  potassium: 3500,
  carbohydrate: 300,
  fiber: 25,
  sugar: 90,
  protein: 50,
  vitamin_a: 5000,
  vitamin_c: 60,
  calcium: 1000,
  iron: 18,
};

export { initialNutritionData, dailyValues }