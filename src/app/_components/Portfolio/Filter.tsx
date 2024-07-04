import { RadioGroup, Radio } from "@nextui-org/react";
import { useAppContext } from "../context";
import { useEffect } from "react";
const Valuation = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-1">
        <div>Valuation</div>
        <div className="h-3 w-3 rounded-sm bg-purple-300"></div>
      </div>
    </>
  );
};
const Industry = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-1">
        <div>Industry</div>
        <div className="h-3 w-3 rounded-sm bg-green-300"></div>
      </div>
    </>
  );
};
const Region = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-1">
        <div>Region</div>
        <div className="h-3 w-3 rounded-sm bg-indigo-300"></div>
      </div>
    </>
  );
};
const Filter = () => {
  const {
    setPortforlioValuationSelected,
    setPortforlioIndustrySelected,
    setPortforlioRegionSelected,
  } = useAppContext();

  return (
    <div className="flex h-full w-fit flex-grow flex-col flex-nowrap space-y-3 overflow-y-scroll text-nowrap px-7 pb-7">
      <div className="flex flex-row justify-start gap-2 sm:flex-col">
        <div className="text-start">
          <RadioGroup
            defaultValue="All"
            color="primary"
            size="sm"
            classNames={{
              label: "text-black",
            }}
            onValueChange={setPortforlioValuationSelected}
          >
            <Valuation></Valuation>
            <Radio value="All" className="text-sm">
              All
            </Radio>
            <Radio value="+5b">+5b</Radio>
            <Radio value="1-5b">1-5b</Radio>
            <Radio value="500m-1b">500m-1b</Radio>
            <Radio value="100-500m">100-500m</Radio>
            <Radio value="50-100m">50-100m</Radio>
            <Radio value="<50m">{"<50m"}</Radio>
            <Radio value="N/A">N/A</Radio>
          </RadioGroup>
        </div>

        <div className="text-start">
          <RadioGroup
            defaultValue="All"
            color="primary"
            size="sm"
            classNames={{
              label: "text-black",
            }}
            onValueChange={setPortforlioIndustrySelected}
          >
            <Industry></Industry>
            <Radio value="All" className="text-sm">
              All
            </Radio>
            <Radio value="B2B / SaaS">B2B/SaaS</Radio>
            <Radio value="AI">AI</Radio>
            <Radio value="FinTech">FinTech</Radio>
            <Radio value="Logistics">Logistics</Radio>
            <Radio value="CleanTech">CleanTech</Radio>
            <Radio value="FrontierTech">FrontierTech</Radio>
            <Radio value="PropTech">PropTech</Radio>
            <Radio value="HealthTech">HealthTech</Radio>
            <Radio value="Crypto">Crypto</Radio>
            <Radio value="Consumer">Consumer</Radio>
          </RadioGroup>
        </div>
        <div className="text-start">
          <RadioGroup
            defaultValue="All"
            color="primary"
            size="sm"
            classNames={{
              label: "text-black",
            }}
            className="text-start"
            onValueChange={setPortforlioRegionSelected}
          >
            <Region></Region>
            <Radio value="All" className="text-sm">
              All
            </Radio>
            <Radio value="US">US</Radio>
            <Radio value="SF">SF</Radio>
            <Radio value="NYC">NYC</Radio>
            <Radio value="LA">LA</Radio>
            <Radio value="Miami">Miami</Radio>
            <Radio value="Boston">Boston</Radio>
            <Radio value="Austin">Austin</Radio>
            <Radio value="Europe">Europe</Radio>
            <Radio value="MENA">MENA</Radio>
            <Radio value="SEA">SEA</Radio>
            <Radio value="India">India</Radio>
            <Radio value="UK">UK</Radio>
            <Radio value="Brazil">Brazil</Radio>
            <Radio value="Mexico">Mexico</Radio>
            <Radio value="LatAm">LatAm</Radio>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default Filter;
