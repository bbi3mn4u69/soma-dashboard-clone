import { Card, CardBody } from "@nextui-org/react";

const AdminHero = () => {
  return (
    <>
      <div className="w-full px-7 pb-7">
        <div className="flex w-full flex-row gap-4">
          <Card className="w-full">
            <CardBody>
              <div className="flex flex-col">
                <div className="text-sm text-gray-500"> Portforlio</div>
                <div className="font-medium">880</div>
              </div>
            </CardBody>
          </Card>
          <Card className="w-full">
            <CardBody>
            <div className="flex flex-col">
                <div className="text-sm text-gray-500"> News</div>
                <div className="font-medium">880</div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AdminHero;
