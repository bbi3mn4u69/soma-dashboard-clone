import Image from "next/image";
import PlaceHolder from "../../../image/profile.webp";

export const SingleCompany = ({companyLogo, companyName, oneLiner, industry, region }: { companyLogo: string, companyName: string, oneLiner: string, industry: string, region: string }) => {
  return (
    <>
      <div className=" mx-auto max-w-screen-lg px-6 py-2  border-b border-gray-200">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-3">
            <Image
              src={companyLogo}
              alt="Company Logo"
              width={50}
              height={50}
              className="size-6 rounded min-w-6 min-h-6"
            />
            <div className="w-32 lg:w-48 font-semibold text-sm text-purple-900 underline text-wrap">{companyName}</div>

            <div className="lg:w-[550px] font-light text-gray-400 text-sm">{oneLiner}</div>
          </div>
          <div className="flex flex-row justify-between items-center text-sm text-center w-36 font-light text-gray-400 text-nowrap">
            <div>{industry}</div>
            <div>{region}</div>
          </div>
        </div>
      </div>
    </>
  );
};


