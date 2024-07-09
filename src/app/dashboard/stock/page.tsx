"use client"
import SidePanel from "../../_components/shared/SidePanel";
import SearchBar from "../../_components/shared/SearchBar";
import { Chart } from "../../_components/Stock/Chart";

const StockPage = () => {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden overflow-x-hidden overflow-y-hidden bg-slate-50 sm:overflow-visible">
        <div className="flex h-full w-full flex-row justify-center">
          <SidePanel />
          <div className="flex h-full w-full flex-col">
            <SearchBar />
            <div className="flex flex-col justify-between">
                <Chart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockPage;
