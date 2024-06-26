import { Chip } from "@nextui-org/react";
import { useAppContext } from "../context";

const Chip1 = ({content}:{content:string}) => {
  return (
    <>
      <div>
        <Chip
          size="sm"
          classNames={{
            base: "bg-purple-200",
            content: "font-semibold text-purple-600",
          }}
        >
          {content}
        </Chip>
      </div>
    </>
  );
};
const Chip2 = ({content}:{content:string}) => {
  return (
    <>
      <div>
        <Chip
          size="sm"
          classNames={{
            base: "bg-green-200",
            content: "font-semibold text-green-600",
          }}
        >
          {content}
        </Chip>
      </div>
    </>
  );
};
const Chip3 = ({content}:{content:string}) => {
  return (
    <>
      <div>
        <Chip
          size="sm"
          classNames={{
            base: "bg-indigo-200",
            content: "font-semibold text-indigo-600",
          }}
        >
          {content}
        </Chip>
      </div>
    </>
  );
};
const TopChips = () => {
  const { portforlioIndustrySelected, portforlioValuationSelected, portforlioRegionSelected } = useAppContext();
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <Chip1 content={portforlioValuationSelected}/>
        <Chip2 content={portforlioIndustrySelected}/>
        <Chip3 content={portforlioRegionSelected}/>
      </div>
    </>
  );
};

export default TopChips;
