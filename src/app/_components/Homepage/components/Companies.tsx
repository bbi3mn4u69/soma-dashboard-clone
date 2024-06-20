
import { SingleCompanySkeleton } from "./SignleCompanySkeleton";
import { api } from "~/trpc/react";
import { SingleCompany } from "./SingleCompany";
interface CompaniesProps {
    valuation: string
}

export const Companies = ({valuation}: CompaniesProps) => {
    const { data, isLoading } = api.company.getCompaniesByValuation.useQuery(valuation);
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

