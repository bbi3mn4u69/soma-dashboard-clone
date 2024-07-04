import { useEffect, useState } from "react";
import { useAppContext } from "../../context";

const FilterButton = ({
  buttonName,
  key,
  isSelected,
  onClick,
}: {
  buttonName: string;
  key: number;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div key={key}>
      <div
        className={`cursor-pointer rounded bg-gray-100 px-2 py-1 text-xs text-gray-500 ${isSelected ? "bg-purple-200 text-purple-900" : ""}`}
        onClick={onClick}
      >
        {buttonName}
      </div>
    </div>
  );
};

const HeroFilter = () => {
  const {
    industriesSelected,
    setIndustriesSelected,
    regionsSelected,
    setRegionsSelected,
  } = useAppContext();
  return (
    <div className="py-4">
      <div
        className="item-center grid w-full grid-cols-2 items-center gap-3"
        style={{ gridTemplateColumns: "auto auto" }}
      >
        <div className="mr-2 w-fit text-sm font-medium">Industries</div>
        <div className="flex flex-row justify-start gap-2 flex-wrap">
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
            <FilterButton
              key={index}
              buttonName={item}
              isSelected={industriesSelected === item}
              onClick={() => setIndustriesSelected(item)}
            />
          ))}
        </div>
        <div className="mr-2 w-fit text-sm font-medium">Areas</div>
        <div className="w-fit">
          <div className="flex w-fit flex-row flex-wrap justify-start gap-2">
            {[
              "All",
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
              <FilterButton
                key={index}
                buttonName={item}
                isSelected={regionsSelected === item}
                onClick={() => setRegionsSelected(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFilter;
