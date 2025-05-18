import useFoodsContext from "../hooks/useFoodsContext";
import Graphic from "./Graphic";
import NutritionFacts from "./NutritionFacts";
import SkeletonFoodInfo from "./SkeletonInfo";

function FoodInfo() {
  const {
    isLoadingInfo
  } = useFoodsContext();

  if (isLoadingInfo) {
    return <SkeletonFoodInfo />;
  }

  return (
    <div className="flex flex-col md:flex-row p-4 w-full max-w-[950px] mt-2 md:mt-12 my-0 mx-auto justify-between gap-12">
      <Graphic />
      <NutritionFacts />
    </div>
  );
}

export default FoodInfo;
