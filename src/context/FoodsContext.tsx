import { createContext } from "react";
import { Context } from "../schemas/types";

const FoodsContext = createContext<Context>({
  data: {
    food: [],
    max_results: 0,
    total_results: 0,
  },
  foodServings: {
    food: {
      food_id: "",
      food_name: "",
      brand_name: "",
      food_type: "",
      food_url: "",
      servings: {
        serving: [],
      },
    },
  },
  currentPage: 1,
  paginationTerm: "",
  isLoading: false,
  isDark: false,
  isOpen: false,
  isLoadingInfo: false,
  selectedServing: {
    calcium: "",
    calories: "",
    carbohydrate: "",
    cholesterol: "",
    fat: "",
    fiber: "",
    iron: "",
    measurement_description: "",
    metric_serving_amount: "",
    metric_serving_unit: "",
    monounsaturated_fat: "",
    number_of_units: "",
    polyunsaturated_fat: "",
    potassium: "",
    protein: "",
    saturated_fat: "",
    serving_description: "",
    serving_id: "",
    serving_url: "",
    sodium: "",
    sugar: "",
    trans_fat: "",
    vitamin_a: "",
    vitamin_c: "",
  },
  setIsDark: () => {},
  setCurrentPage: () => {},
  setIsLoading: () => {},
  setFoodsResults: () => {},
  setPaginationTerm: () => {},
  setFoodServings: () => {},
  setIsOpen: () => [],
  setIsLoadingInfo: () => {},
  setSelectedServing: () => {},
});

export { FoodsContext };
