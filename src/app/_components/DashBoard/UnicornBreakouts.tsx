import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import PlaceHolder from "../../image/profile.webp";
const Unicorns = ({
  location,
  industry,
  value,
}: {
  location: string;
  industry: string;
  value: string;
}) => {
  return (
    <div className="border-b-1 border-gray-200">
      <div className="mx-5 my-3 flex flex-row items-center justify-between space-x-2 ">
        <div className="flex flex-row items-center space-x-2">
          <Image
            src={PlaceHolder}
            alt="unicorn"
            width={100}
            height={100}
            className="size-12 rounded-md"
          />
          <div className="flex flex-col">
            <div className="text-sm font-bold">Cruse</div>
            <div className="text-xs text-gray-500">description</div>
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

const UnicornBreakouts = () => {
  return (
    <Card className="flex w-full flex-col bg-white p-5">
      <CardHeader>
        <div className="pb-3 text-base font-medium">
          Soma Top Unicorn Breakouts
        </div>
      </CardHeader>
      <CardBody className="flex-grow overflow-y-auto" >
        <div className="flex flex-col justify-center">
          <Unicorns location="Uadawda" industry="frontend" value="$1000000" />
          <Unicorns location="US" industry="frontend" value="$1000000" />
          <Unicorns location="US" industry="frontend" value="$1000000" />
          <Unicorns location="US" industry="frontend" value="$1000000" />
        </div>
      </CardBody>
    </Card>
  );
};

export default UnicornBreakouts;
