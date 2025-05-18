import type { SkeletonProps } from "../schemas/types";

const Skeleton = ({ total }: SkeletonProps) => {
  return new Array(total).fill(0).map((_, i) => (
    <div
      key={i}
      role="status"
      className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700 mb-6 mt-6"
    >
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-2xl mb-2.5"></div>
    </div>
  ));
};

export default Skeleton;
