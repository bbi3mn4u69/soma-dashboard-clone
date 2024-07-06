"use client";
import SidePanel from "../../_components/shared/SidePanel";
import SearchBar from "../../_components/shared/SearchBar";
import { SessionProvider } from "next-auth/react";
import UserCard from "../../_components/DashBoard/UserCard";
import SomaNews from "../../_components/DashBoard/SomaNews";
import UnicornBreakouts from "../../_components/DashBoard/UnicornBreakouts";
import RecentInvest from "../../_components/DashBoard/RecentInvestment";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const DashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.push("/login");
    return <></>;
  }
  return (
    <div className="h-screen w-screen overflow-hidden overflow-x-hidden bg-slate-50 sm:overflow-visible">
      <div className="flex h-full w-full flex-row justify-center">
        <div>
          <SidePanel />
        </div>
        <div className="flex h-full w-full flex-col">
          <SearchBar />
          <div className="flex flex-grow flex-col space-y-3 overflow-y-scroll p-3 sm:flex-row sm:space-y-0 sm:overflow-hidden sm:p-7">
            <div className="flex flex-grow flex-col space-y-3">
              <UserCard />
              <UnicornBreakouts />
            </div>
            <div className="flex w-full max-w-md flex-col space-y-3  sm:pl-7 2xl:max-w-lg">
              <SomaNews />
              <RecentInvest />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
