import { Chip } from "@nextui-org/react";
import { useAppContext } from "../context";
import { Button } from "@nextui-org/react";
import { FilterIcon } from "../Icon";
const Chip1 = ({ content }: { content: string }) => {
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
const Chip2 = ({ content }: { content: string }) => {
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
const Chip3 = ({ content }: { content: string }) => {
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
  const {
    portforlioIndustrySelected,
    portforlioValuationSelected,
    portforlioRegionSelected,
    isMobileFilterPortforlioOpen,
    setIsMobileFilterPortforlioOpen,
  } = useAppContext();
  return (
    <>
      <div className="flex flex-col items-start ">
        <div className="flex flex-row items-center gap-2">
          <Chip1 content={portforlioValuationSelected} />
          <Chip2 content={portforlioIndustrySelected} />
          <Chip3 content={portforlioRegionSelected} />
        </div>
      </div>

      <div className="sm:hidden">
        <Button
          variant="bordered"
          size="md"
          startContent={<FilterIcon />}
          onPress={() => {setIsMobileFilterPortforlioOpen(!isMobileFilterPortforlioOpen)}}
        >
          Filter
        </Button>
      </div>
    </>
  );
};

export default TopChips;
