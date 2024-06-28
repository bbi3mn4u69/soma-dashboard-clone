import { Tabs, Tab } from "@nextui-org/react";
import { useAppContext } from "../context";
import { useEffect } from "react";

const CustomChips = ({ number }: { number: number }) => {
  return <div className="bg-gray-300 px-1 text-xs text-gray-400">{number}</div>;
};

const SignleCompanyTabs = () => {
  const { tabSelected, setTabSelected } = useAppContext();
  useEffect(() => {
    console.log(tabSelected);
  }, [tabSelected]);
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
            onSelectionChange={(key: React.Key) => setTabSelected(key.toString())}
          >
            <Tab title="About" />
            <Tab title="Company News" />
            <Tab title="Activities" />
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default SignleCompanyTabs;
