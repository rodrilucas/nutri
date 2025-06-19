import useFoodsContext from "../hooks/useFoodsContext";

function SkeletonFoodInfo() {
  const { isDark } = useFoodsContext();
  const renderedSkeletons = new Array(9).fill(0).map((_, i) => {
    return (
      <div key={i} className="flex items-center justify-between pt-4">
        <div className="flex-1">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12 ml-8"></div>
      </div>
    );
  });
  return (
    <div className="flex flex-col md:flex-row p-4 w-full max-w-[950px] mt-16 my-0 mx-auto justify-between gap-24">
      <div className="flex flex-col items-center justify-center px-4 md:w-full md:items-center">
        <div className="w-full flex gap-2 items-center justify-center mb-12">
          <div className="w-12 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="w-full h-10 bg-gray-200 rounded-lg dark:bg-[#1e2939]"></div>
        </div>
        <svg className="animate-pulse" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 
           a 15.9155 15.9155 0 0 1 0 -31.831"
            stroke={isDark ? "#1e2939" : "#e7e9ec"}
            strokeWidth="4"
            fill="none"
          />
        </svg>
        <div
          role="status"
          className="w-full p-4 flex flex-col border-gray-200 animate-pulse md:p-6 dark:border-gray-700 mb-6"
        >
          <div className="h-2.5 flex self-start bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
        </div>
      </div>
      <div
        role="status"
        className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700 md:p-6 md:w-2xl  dark:border-gray-700"
      >
        <div className="flex items-center justify-between pt-4 pr-2">
          <div className="flex-1">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
        </div>
        {renderedSkeletons}
      </div>
    </div>
  );
}

export default SkeletonFoodInfo;
