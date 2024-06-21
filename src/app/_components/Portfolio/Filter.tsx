import { RadioGroup, Radio } from "@nextui-org/react";

const Filter = () => {
  return (
    <div className="flex flex-grow flex-col flex-nowrap space-y-3 text-nowrap px-7">

      <RadioGroup
        label="Valuations"
        defaultValue="All"
        color="primary"
        size="sm"
        classNames={{
          label: "text-black",
        }}
      >
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
      
      <RadioGroup
        label="Industry"
        defaultValue="All"
        color="primary"
        size="sm"
        classNames={{
          label: "text-black",
        }}
      >
        <Radio value="All" className="text-sm">
          All
        </Radio>
        <Radio value="B2B/SaaS">B2B/SaaS</Radio>
        <Radio value="AI">AI</Radio>
        <Radio value="FinTech">FinTech</Radio>
      </RadioGroup>
    </div>
  );
};

export default Filter;
