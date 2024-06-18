"use client";
import SidePanel from "../_components/DashBoard/SidePanel";
import SearchBar from "../_components/DashBoard/SearchBar";
import { SessionProvider } from "next-auth/react";
import UserCard from "../_components/DashBoard/UserCard";
import SomaNews from "../_components/DashBoard/SomaNews";
import UnicornBreakouts from "../_components/DashBoard/UnicornBreakouts";
import RecentInvest from "../_components/DashBoard/RecentInvestment";
const DashboardPage = () => {
  return (
    <>
      <SessionProvider>
        <div className="h-screen bg-slate-50">
          <div className="flex h-full flex-row justify-start">
            <div>
              <SidePanel />
            </div>
            <div className="flex w-full h-full flex-col">
              <SearchBar />
              <div className="flex flex-row flex-grow overflow-hidden p-7">
                <div className="flex-col flex flex-grow space-y-3">
                  <UserCard />
                  <UnicornBreakouts />
                </div>
                <div className="flex w-full max-w-md flex-col space-y-3 pl-7 2xl:max-w-lg">
                  <SomaNews />
                  <RecentInvest />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SessionProvider>
    </>
  );
};
export default DashboardPage;