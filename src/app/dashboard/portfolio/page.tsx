"use client";
import SidePanel from "../../_components/shared/SidePanel";
import SearchBar from "../../_components/shared/SearchBar";
import { SessionProvider } from "next-auth/react";
import HeroTabs from "~/app/_components/Portfolio/Tabs";
import Filter from "~/app/_components/Portfolio/Filter";
import Company from "~/app/_components/Portfolio/Company";
import TopChips from "~/app/_components/Portfolio/Chips";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import MobileFilterModal from "~/app/_components/Portfolio/MobileFilterModal";

const PortfolioPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.push("/login");
  }
  return (
    <SessionProvider>
      <MobileFilterModal />
      <div className="h-screen w-screen overflow-hidden overflow-x-hidden bg-slate-50">
        <div className="flex h-full w-full flex-row justify-start">
          <div>
            <SidePanel />
          </div>
          <div className="flex h-full w-full flex-col ">
            <SearchBar />
            <div className="flex flex-col space-y-4 p-3 sm:p-7">
              <HeroTabs />
              <TopChips />
            </div>
            <div className="flex h-dvh w-full flex-grow flex-row space-x-3 overflow-y-scroll pt-1 sm:space-x-9  ">
              <div className="sticky top-0 hidden w-fit sm:block">
                <Filter />
              </div>

              <Company />
            </div>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
};
export default PortfolioPage;
