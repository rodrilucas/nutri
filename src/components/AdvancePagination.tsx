import useFoodsContext from "../hooks/useFoodsContext";
import useFatSecret from "../hooks/api/useFatSecret";
import useVisiblePages from "../hooks/useVisiblePages";
import type { PaginationProps } from "../schemas/types";

const AdvancedPagination = ({
  totalPages,
  totalItems,
  pageSize,
}: PaginationProps) => {
  const { currentPage, paginationTerm, setCurrentPage, setFoodsResults } =
    useFoodsContext();
  const { searchFood } = useFatSecret();

  const handlePageChange = async (page: number) => {
    if (!paginationTerm || page === currentPage) return;
    setCurrentPage(page);
    const { foods } = await searchFood(paginationTerm, page);
    setFoodsResults({
      data: {
        food: foods.food,
        max_results: Number(foods.max_results),
        total_results: Number(foods.total_results),
        page_number: currentPage,
      },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderedVisiblePages = useVisiblePages(currentPage, totalPages).map(
    (item, index) =>
      item === "..." ? (
        <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
          ...
        </span>
      ) : (
        <button
          key={item}
          className={`px-3 py-1 rounded text-sm font-medium ${
            currentPage === item
              ? "bg-blue-600 text-white cursor-not-allowed"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer"
          }`}
          onClick={() => handlePageChange(item)}
          disabled={currentPage === item}
        >
          {item}
        </button>
      )
  );

  return (
    <div className="flex flex-col items-center w-full mb-8 gap-4 mt-4 border-t border-[#ebecf0] dark:border-[#1e2939] p-6">
      <div className="text-sm text-gray-700 dark:text-gray-400">
        <span className="font-semibold text-gray-900 dark:text-white">
          Mostrando{" "}
        </span>
        <span className="font-semibold text-gray-900 dark:text-white ml-1">
          {(currentPage - 1) * pageSize + 1}
        </span>
        <span className="text-gray-700 dark:text-gray-400"> a </span>
        <span className="font-semibold text-gray-900 dark:text-white">
          {Math.min(currentPage * pageSize, totalItems)}
        </span>
        <span className="text-gray-700 dark:text-gray-400"> de </span>
        <span className="font-semibold text-gray-900 dark:text-white">
          {totalItems}
        </span>
        <span className="text-gray-700 dark:text-gray-400"> itens</span>
      </div>

      <div className="inline-flex flex-wrap gap-1 justify-center items-center">
        {renderedVisiblePages}
      </div>
      <a className="mt-2" href="https://www.fatsecret.com">
        <img
          src="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.svg"
          className="border-0"
        />
      </a>
    </div>
  );
};

export default AdvancedPagination;
