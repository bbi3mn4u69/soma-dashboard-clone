import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context";
const FilterButton = ({
  buttonName,
  key,
  isSelected,
  onClick
}: {
  buttonName: string;
  key: number;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div key={key}>
      <div className={`bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded cursor-pointer ${isSelected ? "bg-purple-200 text-purple-900" : ""}`} onClick={onClick}>
        {buttonName}
      </div>
    </div>
  );
};

const HeroFilter = () => {
  const { industriesSelected, setIndustriesSelected, regionsSelected, setRegionsSelected } = useAppContext();
  useEffect(() => {
    console.log(industriesSelected, regionsSelected)
  }, [industriesSelected, regionsSelected])
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
            "B2B / SaaS",
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
            <FilterButton  key={index} buttonName={item} isSelected={industriesSelected === item} onClick={() => setIndustriesSelected(item)} />
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
              <FilterButton key={index} buttonName={item} isSelected={regionsSelected === item} onClick={() => setRegionsSelected(item)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFilter;
