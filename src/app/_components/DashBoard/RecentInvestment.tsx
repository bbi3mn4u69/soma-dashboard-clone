import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

import PlaceHolder from "../../image/profile.webp";
import Image from "next/image";
const DynamicNews = ({ name, year }: { name: string; year: number }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between px-3 sm:px-6">
        <div className="flex flex-row items-center justify-start space-x-3">
          <div className="rounded-lg bg-slate-100 p-1">
            <Image src={PlaceHolder} alt="profile" width={20} height={20} />
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

const RecentInvest = () => {
  return (
    <Card className="h-1/2 w-full bg-white p-5" radius="sm">
      <CardHeader>
        <div className="pb-6 text-base font-medium">Recent Investment</div>
      </CardHeader>
      <CardBody className="flex flex-col space-y-5 p-0">
        <DynamicNews name="Recent Investment" year={2024} />
        <DynamicNews name="Recent Investment" year={2024} />
        <DynamicNews name="Recent Investment" year={2024} />
        <DynamicNews name="Recent Investment" year={2024} />
        <DynamicNews name="Recent Investment" year={2024} />
        <DynamicNews name="Recent Investment" year={2024} />
      </CardBody>
    </Card>
  );
};

export default RecentInvest;
