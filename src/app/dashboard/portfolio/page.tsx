"use client";
import SidePanel from "../../_components/shared/SidePanel";
import SearchBar from "../../_components/shared/SearchBar";
import { SessionProvider } from "next-auth/react";
import HeroTabs from "~/app/_components/Portfolio/Tabs";
import Filter from "~/app/_components/Portfolio/Filter";
import Company from "~/app/_components/Portfolio/Company";
import TopChips from "~/app/_components/Portfolio/Chips";

import DashboardLayout from "../layout"; // Adjust the import path as necessary

const PortfolioPage = () => {
  return (
    <DashboardLayout>
      <div className="h-screen bg-slate-50">
        <div className="flex h-full flex-row justify-start">
          <div>
            <SidePanel />
          </div>
          <div className="flex h-full w-full flex-col">
            <SearchBar />
            <div className="flex flex-col space-y-4 p-7">
              <HeroTabs />
              <TopChips />
            </div>
            <div className="flex h-dvh flex-grow flex-row space-x-9 overflow-y-scroll pt-1">
              <div className="sticky top-0">
                <Filter />
              </div>
              <Company />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default PortfolioPage;
