import { useState, ReactNode, useEffect } from "react";
import { FoodNutritionData, FoodsResults } from "../schemas/types";
import { initialNutritionData } from "../utils/initialNutritionData";
import { FoodsContext } from "./FoodsContext";

const Provider = ({ children }: { children: ReactNode }) => {
  const [foodsResults, setFoodsResults] = useState<FoodsResults>({
    data: { food: [], page_number: 0, max_results: 0, total_results: 0 },
  });
  const [foodServings, setFoodServings] =
    useState<FoodNutritionData>(initialNutritionData);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationTerm, setPaginationTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingInfo, setIsLoadingInfo] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkPref =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(isDarkPref);
    document.documentElement.classList.toggle("dark", isDarkPref);
  }, []);

  const valueToShare = {
    data: {
      food: foodsResults.data.food,
      max_results: foodsResults.data.max_results,
      total_results: foodsResults.data.total_results,
    },
    foodServings,
    currentPage,
    paginationTerm,
    isLoading,
    isLoadingInfo,
    isDark,
    isOpen,
    setCurrentPage,
    setPaginationTerm,
    setFoodsResults,
    setFoodServings,
    setIsLoading,
    setIsDark,
    setIsOpen,
    setIsLoadingInfo,
  };

  return (
    <FoodsContext.Provider value={valueToShare}>
      {children}
    </FoodsContext.Provider>
  );
};

export { Provider };
export default FoodsContext;
