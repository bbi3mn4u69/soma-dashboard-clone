import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";

import { Rocket, Add } from "../Icon";

const GridItem = ({ value, title }: { value: string; title: string }) => {
  return (
    <div className="text-sm w-full flex flex-row items-center justify-center py-5 border">
      <span>{value}</span> {title}
    </div>
  );
};

const UserCard = () => {
  return (
    <div>
      <Card radius="sm" shadow="sm">
        <CardHeader className="flex flex-row items-center justify-between">
          {/* user */}
          <div className="m-2 flex flex-row items-center gap-5">
            <Image
              alt="nextui logo"
              className="rounded-full "
              height={80}
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={80}
            />
            <div className="flex flex-col justify-start space-y-0">
              <div className="text-sm text-default-600">Welcome back,</div>
              <div className="text-xl font-bold">Quang Huy</div>
              <div className="text-sm text-default-600">
                To the Soma Capital Platform
              </div>
            </div>
          </div>
          {/* button */}
          <div className="m-2 flex flex-col gap-1">
            <Button
              size="sm"
              variant="bordered"
              className="border-1 font-medium"
              startContent={<Rocket />}
            >
              Discorver a top company
            </Button>
            <Button
              size="sm"
              variant="bordered"
              className="border-1 font-medium"
              startContent={<Add />}
            >
              Recommened a company
            </Button>
          </div>
        </CardHeader>
        <CardFooter className="bg-slate-100 p-0">
          <div className="grid w-full grid-cols-3 items-center">
            <GridItem value="880+" title="Porfolior companies" />
            <GridItem value="880+" title="Porfolior companies" />
            <GridItem value="880+" title="Porfolior companies" />
            <GridItem value="880+" title="Porfolior companies" />
            <GridItem value="880+" title="Porfolior companies" />
            <GridItem value="880+" title="Porfolior companies" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default UserCard;
