import { Skeleton } from "@nextui-org/react";

export const SingleCompanySkeleton = () => {
  return (
    <>
      <div className=" mx-auto max-w-screen-lg border-b border-gray-200 px-6 py-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center  gap-3">
            <Skeleton className="hidden size-6 rounded sm:flex" />

            <div className=" text-wrap text-sm font-semibold text-purple-900 underline ">
              <Skeleton className="h-4 w-20 rounded sm:w-32 lg:w-48" />
            </div>

            <div className="text-sm font-light  text-gray-400">
              <Skeleton className="h-4 w-64 rounded  sm:w-96" />
            </div>
          </div>
          <div className=" sm:fkex hidden flex-row justify-start space-x-11 text-nowrap text-sm font-light text-gray-400">
            <div>
              <Skeleton className="h-4 w-12 rounded" />
            </div>
            <div>
              <Skeleton className="h-4 w-12 rounded" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
