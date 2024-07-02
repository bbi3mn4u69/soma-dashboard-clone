import { Skeleton } from "@nextui-org/react";

const UnicornSkeleton = () => {
  return (
    <>
      <div className="border-b-1 border-gray-200">
        <div className="mx-5 my-3 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-0 sm:space-x-2">
          <div className="flex flex-row items-center space-x-2">
            <Skeleton className="size-12 rounded-md sm:h-[100px] sm:w-[100px] h-[48px] w-[48px]" />
            <div className="flex flex-col gap-2">
              <div className="text-sm font-bold">
                <Skeleton className="h-3 w-32 rounded" />
              </div>
              <div className="text-xs text-gray-500">
                <Skeleton className="h-3 w-32 rounded" />
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start justify-start space-x-2 sm:items-center sm:space-x-9">
            <div className="text-base font-medium">
              <Skeleton className="h-4 sm:w-32 w-12 rounded" />
            </div>
            <Skeleton className="h-4 w-12 rounded-full bg-green-100 px-2 py-1"></Skeleton>
            <Skeleton className="h-4 w-12 rounded-full bg-green-100 px-2 py-1"></Skeleton>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnicornSkeleton;
