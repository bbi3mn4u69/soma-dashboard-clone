import { Unicorns } from "./Unicorn";

import { api } from "~/trpc/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import UnicornSkeleton from "./UnicornSkeleton";
import { useAppContext } from "../context";
import { useRouter } from "next/navigation";
const UnicornBreakouts = () => {
  const { data, isLoading } = api.dashboardHome.getDashboardHome.useQuery();
  const router = useRouter();
  const onClick = (companyId: string) => {
    router.push(`/dashboard/company/${companyId}`);
  };
  return (
    <Card className="flex w-full flex-col bg-white p-5">
      <CardHeader>
        <div className="pb-3 text-base font-medium">
          Soma Top Unicorn Breakouts
        </div>
      </CardHeader>
      <CardBody className="flex-grow overflow-y-auto">
        <div className="flex flex-col justify-center">
          {isLoading && <UnicornSkeleton></UnicornSkeleton>}

          {data?.map((company) => (
            <Unicorns
              onClick={() => onClick(company.id)}
              key={company.id}
              companyName={company.name}
              description={company.oneLiner}
              companyLogo={company.logoUrl ?? ""}
              location={company.region}
              industry={company.sectors[0]?.name ?? ""}
              value={company.valuation}
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default UnicornBreakouts;
