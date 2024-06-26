import { api } from "~/trpc/react";
import { CompanyLogo } from "./CompanyLogo";

const FetchCompanyLogo = ({ companyId }: { companyId: string }) => {
  const { data: company } = api.companySlug.getSpecificCompany.useQuery({
    companyId: companyId,
  });
  if (company) {
    if (company.logoUrl){
        return (
            <>
              <CompanyLogo
                companyLogo={company.logoUrl!}
                companyName={company.name}
              />
            </>
          );
    }
    else {
        return (
            <>
              <CompanyLogo
                companyLogo={"TODO URL"}
                companyName={company.name}
              />
            </>
          );
    }
  }
};

export default FetchCompanyLogo;