import { Tabs, Tab } from "@nextui-org/react";



const CustomChips = ({number}: {number: number}) => {
    return (
        <div className="text-xs px-1 text-gray-400 bg-gray-300">
            {number}
        </div>
    )
}


const SignleCompanyTabs = () => {
  return (
    <>
      <div className="px-7 pb-7">
        <div className="w-full border-b">
          <Tabs
            size="md"
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-5 w-full relative rounded-none p-0 ",
              cursor: "w-full bg-transparent border-b border-purple-500",
              tab: "max-w-fit px-0 h-12 ",
              tabContent:
                "group-data-[selected=true]:text-purple-500 font-medium  rounded-md px-3 py-2 text-sm",
            }}
          >
            <Tab title="About"  />
            <Tab title="Company News" />
            <Tab title="Activities" />
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default SignleCompanyTabs;
