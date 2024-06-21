
import Image from "next/image";

export const Unicorns = ({
    location,
    industry,
    value,
    companyLogo,
    companyName,
    description
  }: {
    location: string;
    industry: string;
    value: string;
    companyLogo: string;
    companyName: string;
    description: string;
  }) => {
    return (
      <div className="border-b-1 border-gray-200">
        <div className="mx-5 my-3 flex flex-row items-center justify-between space-x-2 ">
          <div className="flex flex-row items-center space-x-2">
            <Image
              src={companyLogo}
              alt="unicorn"
              width={100}
              height={100}
              className="size-12 rounded-md"
            />
            <div className="flex flex-col">
              <div className="text-sm font-bold">{companyName}</div>
              <div className="text-xs text-gray-500">{description}</div>
            </div>
          </div>
  
          <div className="flex flex-row items-center space-x-9">
            <div className="text-base font-medium">{location}</div>
            <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
              {industry}
            </div>
            <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
              {value}
            </div>
          </div>
        </div>
      </div>
    );
  };
  