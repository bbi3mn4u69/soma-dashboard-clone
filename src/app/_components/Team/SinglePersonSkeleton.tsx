import { Skeleton } from "@nextui-org/react";

const SinglePersonSkeleton = () => {
  return (
    <div className="flex flex-col justify-start gap-1">
      <Skeleton className="h-48 w-full rounded-2xl bg-gray-200"></Skeleton>
      <div className="flex flex-col gap-1">
        <Skeleton className="h-4 w-28 rounded-md"></Skeleton>
        <Skeleton className="h-4 w-28 rounded-md"></Skeleton>
      </div>
    </div>
  );
};

export default SinglePersonSkeleton;
