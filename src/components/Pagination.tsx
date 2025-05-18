import useFoodsContext from "../hooks/useFoodsContext";
import PrevIcon from "../icons/PrevIcon";
import NextIcon from "../icons/NextIcon";
import useFatSecret from "../hooks/api/useFatSecret";

type PaginationProps = {
  totalPages: number;
  totalItems: number;
  pageSize: number;
};

const Pagination = ({ totalPages, totalItems, pageSize }: PaginationProps) => {
  const { currentPage, paginationTerm, setCurrentPage, setFoodsResults } =
    useFoodsContext();
  const { searchFood } = useFatSecret();

  const handlePageChange = async (page: number) => {
    if (!paginationTerm) return;
    setCurrentPage(page);
    const { foods } = await searchFood(paginationTerm, page);
    setFoodsResults({
      data: {
        food: foods.food,
        max_results: Number(foods.max_results),
        total_results: Number(foods.total_results),
        page_number: page,
      },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center w-full mb-8 gap-4 mt-4 border-t border-[#ebecf0] dark:border-[#1e2939] p-6">
      <div className="text-sm text-gray-700 dark:text-gray-400">
        <span className="font-semibold text-gray-900 dark:text-white">
          Mostrando
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

      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="flex items-center cursor-pointer justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={currentPage === 1}
          onClick={(e) => {
            e.stopPropagation();
            handlePageChange(currentPage - 1);
          }}
        >
          <PrevIcon />
        </button>
        <button
          className="flex items-center cursor-pointer justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={currentPage === totalPages}
          onClick={(e) => {
            e.stopPropagation();
            handlePageChange(currentPage + 1);
          }}
        >
          <NextIcon />
        </button>
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

export default Pagination;
