import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Chip,
} from "@nextui-org/react";
import Image from "next/image";

import { getRandomDateAsString } from "../shared/RandomDate";
import { api } from "~/trpc/react";
import { useAppContext } from "~/app/_components/context";
import { Skeleton } from "@nextui-org/react";
import { useRouter } from "next/navigation";
const Company = () => {
  const router = useRouter();
  const {
    portforlioIndustrySelected,
    portforlioValuationSelected,
    portforlioRegionSelected,
    setPortforlioRegionSelected,
  } = useAppContext();
  switch (portforlioRegionSelected) {
    case "SF":
      setPortforlioRegionSelected("US");
      break;
    case "NYC":
      setPortforlioRegionSelected("US");
      break;
    case "LA":
      setPortforlioRegionSelected("US");
      break;
    case "Miami":
      setPortforlioRegionSelected("US");
      break;
    case "Boston":
      setPortforlioRegionSelected("US");
      break;
    case "Austin":
      setPortforlioRegionSelected("US");
      break;
  }
  const { data, isLoading } = api.dashboardPortfolio.portfolioFilter.useQuery({
    value: portforlioValuationSelected,
    industry: portforlioIndustrySelected,
    region: portforlioRegionSelected,
  });
  const onClick = (companyId: string) => {
    router.push(`/dashboard/company/${companyId}`);
  };

  return (
    <>
      <div className="h-full w-full max-w-[300px] pb-3 pr-3 sm:max-w-[400px] sm:pb-7 sm:pr-7 lg:max-w-none">
        <Table
          aria-label=" table with dynamic content"
          className="overflow-x-auto"
        >
          <TableHeader>
            <TableColumn>
              <div className="flex flex-row items-center gap-1">
                <div>Company</div>
                {isLoading ? (
                  <Skeleton className="h-6 w-10 rounded-full " />
                ) : (
                  <div className="rounded-full bg-gray-300 px-2 py-1 text-xs text-gray-800">
                    {data?.length}
                  </div>
                )}
              </div>
            </TableColumn>
            <TableColumn>Region</TableColumn>
            <TableColumn>Industry</TableColumn>
            <TableColumn>Investment Date</TableColumn>
            <TableColumn>Valuation</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No rows to display."}>
            {isLoading
              ? [...Array<number>(10)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="flex flex-row items-center gap-2">
                        <Skeleton className="h-[45px] w-[45px] rounded-md " />
                        <div className="flex flex-col gap-1">
                          <Skeleton className="h-4 w-10 rounded " />
                          <Skeleton className="h-4 w-96 rounded " />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-5 w-10 rounded " />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-5 w-10 rounded-full bg-green-300  " />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-5 w-24 rounded " />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-5 w-10 rounded-full bg-green-300 " />
                    </TableCell>
                  </TableRow>
                ))
              : (data ?? []).map((company) => (
                  <TableRow key={company.id}>
                    <TableCell>
                      <div
                        className="flex cursor-pointer flex-row items-center gap-2"
                        onClick={() => onClick(company.id)}
                      >
                        <Image
                          src={
                            company.logoUrl ??
                            "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
                          }
                          alt="Company Logo"
                          width={45}
                          height={45}
                          className="hidden rounded-md sm:block"
                        />
                        <div className="flex flex-col gap-0">
                          <div className="text-sm font-medium">
                            {company.name}
                          </div>
                          <div className="hidden text-xs font-medium text-gray-400 sm:block">
                            {company.oneLiner}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {company.region}
                    </TableCell>
                    <TableCell>
                      <Chip
                        classNames={{
                          base: " bg-green-200 p-0 rounded-full",
                          content: " text-green-800 text-xs font-semibold",
                        }}
                        radius="sm"
                      >
                        {company.sectors[0]?.name ?? ""}
                      </Chip>
                    </TableCell>
                    <TableCell className="font-medium text-gray-400">
                      {getRandomDateAsString(2010, 2024, "MM/DD/YYYY")}
                    </TableCell>
                    <TableCell>
                      <Chip
                        classNames={{
                          base: " bg-green-200 p-0 rounded-full",
                          content: " text-green-800 text-xs font-semibold",
                        }}
                        radius="sm"
                      >
                        {company.valuation}
                      </Chip>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Company;
