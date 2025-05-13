import { ReactNode } from "react";

type NutritionData = {
  serving_id: string;
  serving_description: string;
  serving_url: string;
  metric_serving_amount: string;
  metric_serving_unit: string;
  number_of_units: string;
  measurement_description: string;
  calories: string;
  carbohydrate: string;
  protein: string;
  fat: string;
  saturated_fat: string;
  polyunsaturated_fat: string;
  monounsaturated_fat: string;
  cholesterol: string;
  sodium: string;
  potassium: string;
  fiber: string;
  sugar: string;
  vitamin_a: string;
  vitamin_c: string;
  calcium: string;
  iron: string;
  trans_fat: string;
};

type FoodNutritionData = {
  food: {
    food_id: string;
    food_name: string;
    food_type: string;
    brand_name: string;
    food_url: string;
    servings: {
      serving: NutritionData[];
    };
  };
};

type Food = {
  food_description: string;
  food_id: string;
  food_name: string;
  food_type: string;
  food_url: string;
};

type FoodsResults = {
  data: {
    food: Food[];
    max_results: number;
    page_number: number;
    total_results: number;
  };
};

type Context = {
  data: {
    food: Food[];
    max_results: number;
    total_results: number;
  };
  foodServings: FoodNutritionData;
  currentPage: number;
  paginationTerm: string;
  isLoading: boolean;
  isLoadingInfo: boolean;
  isDark: boolean;
  isOpen: boolean;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setFoodsResults: React.Dispatch<React.SetStateAction<FoodsResults>>;
  setPaginationTerm: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setFoodServings: React.Dispatch<React.SetStateAction<FoodNutritionData>>;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoadingInfo: React.Dispatch<React.SetStateAction<boolean>>;
};

type SkeletonProps = {
  total: number;
};

type CircleDonutChartProps = {
  carbs: number;
  protein: number;
  fat: number;
  cal: number;
};

type NotificationProps = {
  message: string;
  type?: "success" | "error" | "info";
  delay: number;
};


type PaginationProps = {
  totalPages: number;
  totalItems: number;
  pageSize: number;
};

type ModalProps = {
  onClose?: () => void;
  children: ReactNode;
};

export type {
  Context,
  FoodsResults,
  NutritionData,
  FoodNutritionData,
  Food,
  SkeletonProps,
  CircleDonutChartProps,
  NotificationProps,
  PaginationProps,
  ModalProps
};
