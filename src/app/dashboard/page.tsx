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
  <div className="flex flex-row justify-start h-full">
    <div>
      <SidePanel />
    </div>
    <div className="flex flex-col w-full h-full">  
      <SearchBar />
      <div className="flex flex-row p-7 flex-grow">  
        <div className="flex-grow flex-col space-y-3">
          <UserCard />
          <UnicornBreakouts />
        </div>
        <div className="w-full max-w-md pl-7 2xl:max-w-lg space-y-3 flex flex-col">
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
