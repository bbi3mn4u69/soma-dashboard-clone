import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

import PlaceHolder from "../../image/profile.webp";
import Image from "next/image";
import { api } from "~/trpc/react";
import { Skeleton } from "@nextui-org/react";
const DynamicNews = ({
  logo,
  name,
  year,
}: {
  logo: string;
  name: string;
  year: number;
}) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between px-3 sm:px-6">
        <div className="flex flex-row items-center justify-start space-x-3">
          <div>
            <Image
              src={logo}
              alt="profile"
              width={30}
              height={30}
              className="rounded-md "
            />
          </div>
          <div className="text-nowrap text-base font-medium text-purple-700">
            {name}
          </div>
        </div>
        <div className="px-3 text-sm text-gray-500 sm:px-6">{year}</div>
      </div>
    </>
  );
};
const DynamicNewsSkeleton = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between px-3 sm:px-6">
        <div className="flex flex-row items-center justify-start space-x-3">
          <div>
            <Skeleton className="h-[30px] w-[30px] rounded-lg" />
          </div>
          <div className="text-nowrap text-base font-medium text-purple-700">
            <Skeleton className="h-[20px] w-[100px] rounded-md" />
          </div>
        </div>
        <div className="px-3 text-sm text-gray-500 sm:px-6">
          <Skeleton className="h-[20px] w-[50px] rounded-md" />
        </div>
      </div>
    </>
  );
};

const RecentInvest = () => {
  const { data: recentInvestedCompany, isLoading } =
    api.dashboardHome.getRecentInvestment.useQuery();
  return (
    <Card className="h-1/2 w-full bg-white p-5" radius="sm">
      <CardHeader>
        <div className="pb-6 text-base font-medium">Recent Investment</div>
      </CardHeader>
      <CardBody className="flex flex-col space-y-5 p-0">
        {isLoading ? (
          [...Array<number>(6)].map((_, index) => (
            <DynamicNewsSkeleton key={index} />
          ))
        ) : (
          recentInvestedCompany?.map((company) => (
            <DynamicNews
            logo={
              company.logoUrl ??
              "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
            }
            name={company.name}
            year={2024}
            />
          ))
        )}
      </CardBody>
    </Card>
  );
};

export default RecentInvest;
