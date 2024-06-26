import { CompanyInformation } from "./CompanyInformation";
import { api } from "~/trpc/react";
import { useAppContext } from "../context";
const FetchCompanyInfor = ({companyId}: {companyId: string}) => {
  if (companyId) {
    const { data: company } = api.companySlug.getSpecificCompany.useQuery({
      companyId: companyId,
    });
    const {data: primarySector} = api.companySlug.getCompanyPrimarySector.useQuery({
      companyId: companyId
    })
    const {data: otherSectors} = api.companySlug.getCompanyOtherSector.useQuery({
      companyId: companyId
    })

    if (company && primarySector && otherSectors) {
      return (
        <>
          <div className="h-full pb-7">
            <CompanyInformation
              valuation={company.valuation}
              region={company.region}
              primarySector={primarySector.name}
              oneLiner={company.oneLiner}
              fund={"TODO"}
              website={company.websiteUrl}
              cityCountry={"N/A"}
              otherSector={otherSectors.sectors.map((sector) => sector.name).join(", ")}
              otherInvestor={"Soma Capital"}
              headCount={"N/A"}
              about={"TODO"}
              founderLinkedin={"TODO"}
            />
          </div>
        </>
      );
    }
  }
};

export default FetchCompanyInfor;
