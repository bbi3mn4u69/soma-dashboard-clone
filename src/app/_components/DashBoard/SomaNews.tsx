import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { News } from "../Icon";
const DynamicNews = ({ name, year }: { name: string, year: number }) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center px-6">
        <div className="flex flex-row items-center justify-start space-x-3">
          <div className="rounded-lg bg-slate-100 p-1">
            <News />
          </div>
          <div className="text-base font-medium text-purple-700">{name}</div>
        </div>
        <div className="text-sm text-gray-500 px-6">{year}</div>
      </div>
    </>
  );
};

const SomaNews = () => {
  return (
    <Card className="w-full h-1/2 bg-white p-5">
      <CardHeader>
        <div className="text-base font-medium pb-6">Soma in the news</div>
      </CardHeader>
      <CardBody className="p-0 flex flex-col space-y-5">
        <DynamicNews name="Soma in the news" year={2024} />
        <DynamicNews name="Soma in the news" year={2024} />
        <DynamicNews name="Soma in the news" year={2024} />
        <DynamicNews name="Soma in the news" year={2024} />
        <DynamicNews name="Soma in the news" year={2024} />
        <DynamicNews name="Soma in the news" year={2024} />
      </CardBody>
    </Card>
  );
};

export default SomaNews;
