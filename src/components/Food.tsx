import { Food as FoodProps } from "../schemas/types";
import useFoodsContext from "../hooks/useFoodsContext";
import useFatSecret from "../hooks/api/useFatSecret";

function Food({ food_name, food_id, food_description }: FoodProps) {
  const { setFoodServings, setIsOpen } = useFoodsContext();
  const { searchFoodById } = useFatSecret();

  const handleClick = async () => {
    setIsOpen(false);
    const data = await searchFoodById(food_id);
    setFoodServings({ ...data });
  };

  return (
    <div
      className="cursor-pointer relative flex flex-col m-1 shadow-sm rounded-lg w-full hover:bg-[#f1f1f1] dark:text-white dark:hover:bg-[#1e2939]"
      onClick={handleClick}
    >
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold">{food_name}</h2>
        <p className="leading-normal font-light">{food_description}</p>
      </div>
    </div>
  );
}

export default Food;
