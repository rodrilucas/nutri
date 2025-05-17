import useFoodsContext from "../hooks/useFoodsContext";
import Skeleton from "./Skeleton";
import Food from "./Food";
import AdvancedPagination from "./AdvancePagination";

function FoodsList() {
  const { data, isLoading } = useFoodsContext();

  if (isLoading) {
    return <Skeleton total={10} />;
  }

  return (
    <div className="grid grid-cols-1 place-content-between sm:mt-4 h-[calc(100%-72px)]">
      <div></div>
      {Array.isArray(data.food) &&
        data.food.map((f) => <Food key={f.food_id} {...f} />)}

      <AdvancedPagination
        pageSize={data.max_results}
        totalItems={data.total_results}
        totalPages={Math.ceil(data.total_results / data.max_results)}
      />
    </div>
  );
}

export default FoodsList;
