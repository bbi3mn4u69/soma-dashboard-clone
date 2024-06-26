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
  const { data: session, status} = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.push("/login");
    return <></>;
  }
  return (
    <SessionProvider>
      <div className="h-screen bg-slate-50">
        <div className="flex h-full flex-row justify-start">
          <div>
            <SidePanel />
          </div>
          <div className="flex h-full w-full flex-col">
            <SearchBar />
            <div className="flex flex-grow flex-row overflow-hidden p-7">
              <div className="flex flex-grow flex-col space-y-3">
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
  );
};
export default DashboardPage;
