import { SingleCompany } from "./SingleCompany";
import { api } from "~/trpc/react";
import { SingleCompanySkeleton } from "./SignleCompanySkeleton";

const OneToFiveBCompanies = () => {
  const { data, isLoading } = api.company.getCompanies100_500m.useQuery();
  if (isLoading) {
    return (
      <>
        <div className="mx-auto mt-6 max-w-screen-lg px-6 font-medium underline">
         100-500m
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
      100-500m
      </div>
      {data?.map((company) => (
        <div key={company.id}>
          <SingleCompany
            companyLogo={company.logoUrl as string}
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

export default OneToFiveBCompanies;
