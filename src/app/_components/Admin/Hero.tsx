import { Card, CardBody } from "@nextui-org/react";
import { api } from "~/trpc/react";
import { Skeleton } from "@nextui-org/react";
const AdminHero = () => {
  const { data: portfolioCount, isLoading: portfolioLoading } = api.admin.getPortfolio.useQuery();
  const { data: newsCount, isLoading: newsLoading } = api.admin.getNews.useQuery();
  const { data: usersCount, isLoading: usersLoading } = api.admin.getUsers.useQuery();
  return (
    <>
      <div className="w-full px-7 pb-7">
        <div className="flex w-full flex-col sm:flex-row gap-4">
          <Card className="w-full">
            <CardBody>
              <div className="flex flex-col">
                <div className="text-sm text-gray-500">Companies Portforlio</div>
                <div className="font-medium">{portfolioLoading ? (<Skeleton className="w-10 h-5 rounded-md" />) : portfolioCount}</div>
              </div>
            </CardBody>
          </Card>
          <Card className="w-full">
            <CardBody>
            <div className="flex flex-col">
                <div className="text-sm text-gray-500"> News</div>
                <div className="font-medium">{newsLoading ? (<Skeleton className="w-10 h-5 rounded-md" />) : newsCount}</div>
              </div>
            </CardBody>
          </Card>
          <Card className="w-full">
            <CardBody>
            <div className="flex flex-col">
                <div className="text-sm text-gray-500"> Users</div>
                <div className="font-medium">{usersLoading ? (<Skeleton className="w-10 h-5 rounded-md" />) : usersCount}</div>
              </div>
            </CardBody>
          </Card>
          <Card className="w-full">
            <CardBody>
            <div className="flex flex-col">
                <div className="text-sm text-gray-500"> Revenue</div>
                <div className="font-medium">$6000000000</div>
              </div>
            </CardBody>
          </Card>
          
        </div>
      </div>
    </>
  );
};

export default AdminHero;
