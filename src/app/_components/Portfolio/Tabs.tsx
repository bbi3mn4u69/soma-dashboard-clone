import { Tabs, Tab } from "@nextui-org/react";

const HeroTabs = () => {
  return (
    <div className="flex flex-col justify-start">
      <div className="pb-5 text-2xl font-bold">Portfolio</div>

      <div className="w-full border-b">
        <Tabs
          size="md"
          color="primary"
          variant="underlined"
          classNames={{
            tabList: "gap-5 w-full relative rounded-none p-0",
            cursor: "w-full bg-transparent",
            tab: "max-w-fit px-0 h-12 ",
            tabContent:
              "group-data-[selected=true]:text-violet-700 font-medium group-data-[selected=true]:bg-indigo-200 rounded-md px-3 py-2 text-sm",
          }}
          className="hidden sm:block"
        >
          <Tab title="All companies" />
          <Tab title="In the news" />
          <Tab title="Founder emails" />
          <Tab title="Recent Ranking" />
          <Tab title="Reviews written" />
          <Tab title="Introduction" />
          <Tab title="Relationship scores" />
        </Tabs>
      </div>
    </div>
  );
};
 
export default HeroTabs;
