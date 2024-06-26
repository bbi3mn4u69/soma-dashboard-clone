  import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

const InforSegment = ({ infor, segment }: { infor: string, segment: string }) => {
  return (
    <div className="flex flex-col justify-start gap-1">
      <div>{segment}</div>
      <div className="font-normal text-black">
      {Array.isArray(infor) ? infor.map((item, index) => <div key={index}>{item}</div>) : <div>{infor}</div>}
      </div>
    </div>
  );
};

export const CompanyInformation = ({
  valuation,
  region,
  primarySector,
  oneLiner,
  fund,
  website,
  cityCountry,
  otherSector,
  otherInvestor,
  headCount,
  about,
  founderLinkedin,
}: {
  valuation: string;
  region: string;
  primarySector: string;
  oneLiner: string;
  fund: string;
  website: string;
  cityCountry: string;
  otherSector: string;
  otherInvestor: string;
  headCount: string;
  about: string;
  founderLinkedin: string;
}) => {
  return (
    <>
      <div className="px-7">
        <Card className="rounded-md shadow-small">
          <CardHeader className="text-sm font-bold text-black">
            Company Information
          </CardHeader>
          <Divider />
          <CardBody className="flex flex-col gap-5 justify-start text-sm font-medium tracking-tight text-gray-500 flex-grow overflow-y-auto">
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-5">
                {/* valuation */}
                <InforSegment segment="valuation" infor={valuation}></InforSegment>

                {/* region */}
                <InforSegment segment="region" infor={region}></InforSegment>
                {/* Primary Sector */}
                <InforSegment segment="Primary Sector" infor={primarySector}></InforSegment>
                {/* One Liner  */}
                <InforSegment segment="One Liner" infor={oneLiner}></InforSegment>
                {/* Fund */}
                <InforSegment segment="Fund" infor={fund}></InforSegment>
              </div>
              <div  className="flex flex-col gap-5">
                {/* website */}
                <InforSegment segment="Website" infor={website}></InforSegment>
                {/* City/county */}
                <InforSegment segment="City/county" infor={cityCountry}></InforSegment>
                {/* Other Sector */}
                <InforSegment segment="Other Sector" infor={otherSector}></InforSegment>
                {/* Other Investor */}
                <InforSegment segment="Other Investor" infor={otherInvestor}></InforSegment>
              </div>
            </div>

            <div  className="flex flex-col gap-5">
              {/* Head Count */}
              <InforSegment segment=" Head Count" infor={headCount}></InforSegment>
              {/* About */}
              <InforSegment segment="About" infor={about}></InforSegment>
              {/* Founder LinkedIn */}
              <InforSegment segment="Founder LinkedIn" infor={founderLinkedin}></InforSegment>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};


