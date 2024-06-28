
import { Skeleton } from "@nextui-org/react";



const CompanyNewsSkeleton = () => {
  return (
    <>
    <div className="flex flex-col items-start gap-2 py-5">
      <div className="flex flex-row items-center gap-1">
        
        <Skeleton className="w-[20px] h-[20px] rounded"></Skeleton>
        <Skeleton className="w-[50px] h-4 rounded"></Skeleton>
        <div className="bg-gray-5 h-1 w-1 rounded-full bg-gray-500"></div>
        <Skeleton className="w-[70px] h-4 rounded"></Skeleton>
      </div>
      <Skeleton className="w-[500px] h-6 rounded"></Skeleton>
      <Skeleton className="w-[500px] h-[110px] rounded"></Skeleton>
    </div>
    </>
  )
};

export default CompanyNewsSkeleton;