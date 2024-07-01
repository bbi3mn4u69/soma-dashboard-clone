import Image from "next/image";
import PlaceHolder from "../../../image/profile.webp";
import Link from "next/link";

export const SingleCompany = ({
  companyUrl,
  companyLogo,
  companyName,
  oneLiner,
  industry,
  region,
}: {
  companyUrl: string;
  companyLogo: string;
  companyName: string;
  oneLiner: string;
  industry: string;
  region: string;
}) => {
  return (
    <>
      <div className=" mx-auto max-w-screen-lg border-b border-gray-200  px-6 py-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-3 overflow-hidden whitespace-nowrap text-ellipsis" >
            <Image
              src={companyLogo}
              alt="Company Logo"
              width={50}
              height={50}
              className="size-6 min-h-6 min-w-6 rounded hidden sm:flex"
            />
            <Link href={companyUrl} passHref legacyBehavior>
              <a
                target="_blank"
                className="w-32 text-wrap text-sm font-semibold text-purple-900 underline lg:w-48"
              >
                {companyName}
              </a>
            </Link>

            <div className="text-sm font-light text-gray-400 lg:w-[550px] md:w-[350px] w-full overflow-hidden whitespace-nowrap text-ellipsis ">
              {oneLiner}
            </div>
          </div>
          <div className="sm:flex w-36 flex-row items-center justify-between text-nowrap text-center text-sm font-light text-gray-400 hidden ">
            <div>{industry}</div>
            <div>{region}</div>
          </div>
        </div>
      </div>
    </>
  );
};
