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
  setIsDark: () => {},
  setCurrentPage: () => {},
  setIsLoading: () => {},
  setFoodsResults: () => {},
  setPaginationTerm: () => {},
  setFoodServings: () => {},
  setIsOpen: () => [],
  setIsLoadingInfo: () => [],
});

export { FoodsContext };
