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

const Company = () => {
  const {
    portforlioIndustrySelected,
    portforlioValuationSelected,
    portforlioRegionSelected,
  } = useAppContext();
  const { data, isLoading } = api.dashboardPortfolio.portfolioFilter.useQuery({
    value: portforlioValuationSelected,
    industry: portforlioIndustrySelected,
    region: portforlioRegionSelected,
  });
  

  return (
    <>
      <div className="h-full w-full pb-7 pr-7">
        <Table aria-label="Example table with dynamic content">
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
            <TableColumn>
              <div>Region</div>
            </TableColumn>
            <TableColumn>Industry</TableColumn>
            <TableColumn>Investment Date</TableColumn>
            <TableColumn>Valuation</TableColumn>
          </TableHeader>
          <TableBody>
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
                      <div className="flex flex-row items-center gap-2">
                        <Image
                          src={company.logoUrl ?? ""}
                          alt="Company Logo"
                          width={45}
                          height={45}
                          className="rounded-md"
                        />
                        <div className="flex flex-col gap-0">
                          <div className="text-sm font-medium">
                            {company.name}
                          </div>
                          <div className="text-xs font-medium text-gray-400">
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
