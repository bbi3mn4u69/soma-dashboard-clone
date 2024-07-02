import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import PlaceHolder from "../../image/profile.webp";

import { Rocket, Add } from "../Icon";
import { useSession } from "next-auth/react";

const GridItem = ({ value, title }: { value: string; title: string }) => {
  return (
    <div className="flex w-full flex-row items-center justify-center border py-5 text-sm">
      <span>{value}</span> {title}
    </div>
  );
};

const UserCard = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Card radius="sm" shadow="sm">
        <CardHeader className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center justify-start ">
          {/* user */}
          <div className="m-2 flex flex-row items-center gap-5">
            <Image
              alt="nextui logo"
              className="rounded-full "
              height={80}
              src={session?.user?.image ?? ""}
              width={80}
            />

            <div className="flex flex-col justify-start space-y-0">
              <div className="text-default-6000 text-sm">Welcome back,</div>
              <div className="text-xl font-bold">
                {session?.user?.name ?? ""}
              </div>
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
              Discover a top company
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
          <div className="lg:grid w-full grid-cols-3 items-center hidden ">
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
