import Search from "./Search";
import FoodsList from "./FoodsList";

const ModalItem = () => {
  return (
    <div className="bg-white dark:bg-[#101828] p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-full overflow-auto scrollbar-thin dark:scrollbar-thumb-[#1e2939] dark:scrollbar-track-[#101828]">
      <Search />
      <FoodsList />
    </div>
  );
};

export default ModalItem;
