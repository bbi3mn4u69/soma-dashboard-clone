import Image from "next/image";

export const Unicorns = ({
  location,
  industry,
  value,
  companyLogo,
  companyName,
  description,
  onClick,
}: {
  location: string;
  industry: string;
  value: string;
  companyLogo: string;
  companyName: string;
  description: string;
  onClick: () => void;
}) => {
  return (
    <div className="w-full border-b-1 border-gray-200">
      <div className="mx-5 my-3 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-0 sm:space-x-2">
        {/*  */}
        <div
          className="flex cursor-pointer flex-row items-center space-x-2"
          onClick={onClick}
        >
          <Image
            src={companyLogo}
            alt="unicorn"
            width={100}
            height={100}
            className="size-12 rounded-md sm:h-[3rem] sm:w-[3rem] h-[48px] w-[48px]"
          />
          <div className="flex flex-col">
            <div className="text-sm font-bold">{companyName}</div>
            <div className="hidden text-xs text-gray-500 sm:block">
              {description}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-row items-start justify-start space-x-2 sm:items-center sm:space-x-9">
          <div className="text-base font-medium">{location}</div>
          <div className="text-nowrap rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
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
