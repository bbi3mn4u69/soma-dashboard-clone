import PlaceHolder from "../../image/profile.webp";
import Image from "next/image";
import { getRandomDateAsString } from "../shared/RandomDate";


export const CompanyLogo = ({companyLogo, companyName } : {companyLogo: string, companyName: string}) => {
  return (
    <>
      <div className="p-7">
        <div className="flex flex-row gap-5 items-center">
          <Image
            src={companyLogo}
            width={100}
            height={100}
            alt="company Logo"
            className="rounded-md "
          ></Image>
          <div className="text-sm text-gray-500 flex flex-col gap-0">
            <div className="text-xl text-black font-bold">{companyName}</div>
            <div>Portforlio</div>
            <div>Recent Investment: { getRandomDateAsString(2023, 2025, "MM/DD/YYYY")}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};


