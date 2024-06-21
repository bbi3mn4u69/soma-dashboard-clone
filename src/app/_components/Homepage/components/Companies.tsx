import { SingleCompanySkeleton } from "./SignleCompanySkeleton";
import { api } from "~/trpc/react";
import { SingleCompany } from "./SingleCompany";
import { useEffect } from "react";
interface CompaniesProps {
  valuation: string;
  region: string;
  sectorName: string;
}

export const Companies = ({
  valuation,
  region,
  sectorName,
}: CompaniesProps) => {
  const { data, isLoading } = api.company.getCompaniesByFilter.useQuery({
    valuation,
    region,
    sectorName,
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  if (data?.length === 0) {
    return (
      <>
        <div className="mx-auto mt-6 max-w-screen-lg px-6 font-medium underline">
          {valuation}
        </div>
        <div className="mx-auto mt-6 max-w-screen-lg px-6 text-sm text-gray-400 font-light">
          No companies found
        </div>
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        <div className="mx-auto mt-6 max-w-screen-lg px-6 font-medium underline">
          {valuation}
        </div>
        <SingleCompanySkeleton />
        <SingleCompanySkeleton />
        <SingleCompanySkeleton />
        <SingleCompanySkeleton />
        <SingleCompanySkeleton />
      </>
    );
  }
  return (
    <>
      <div className="mx-auto mt-6 max-w-screen-lg px-6 font-medium underline">
        {valuation}
      </div>
      {data?.map((company) => (
        <div key={company.id}>
          <SingleCompany
            companyUrl={company.websiteUrl as string}
            companyLogo={company.logoUrl ? company.logoUrl : ""}
            companyName={company.name}
            oneLiner={company.oneLiner}
            industry={company.sectors[0]?.name as string}
            region={company.region}
          />
        </div>
      ))}
    </>
  );
};
