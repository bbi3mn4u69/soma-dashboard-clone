import { Button } from "@nextui-org/react";
const FilterButton = ({
  buttonName,
  key,
}: {
  buttonName: string;
  key: number;
}) => {
  return (
    <div key={key}>
      <Button size="sm" className="bg-gray-100 text-gray-500 text-xs">
        {buttonName}
      </Button>
    </div>
  );
};

const HeroFilter = () => {
  return (
    <div className="py-4">
      <div
        className="item-center grid w-fit grid-cols-2 items-center gap-3"
        style={{ gridTemplateColumns: "auto auto" }}
      >
        <div className="w-fit text-sm font-medium mr-2">Industries</div>
        <div className="flex w-fit flex-row justify-end gap-2">
          {[
            "All",
            "B2B/SaaS",
            "AI",
            "FinTech",
            "Logistics",
            "CleanTech",
            "FrontierTech",
            "PropTech",
            "HealthTech",
            "Crypto",
            "Consumer",
          ].map((item, index) => (
            <FilterButton key={index} buttonName={item} />
          ))}
        </div>
        <div className="w-fit text-sm font-medium mr-2">Areas</div>
        <div className="w-fit">
          <div className="flex w-fit flex-row justify-start gap-2 flex-wrap">
            {[
              "All",
              "SF",
              "NYC",
              "LA",
              "Miami",
              "Boston",
              "Austin",
              "US",
              "Europe",
              "MENA",
              "SEA",
              "India",
              "UK",
              "Brazil",
              "Mexico",
              "LatAm",
            ].map((item, index) => (
              <FilterButton key={index} buttonName={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFilter;
