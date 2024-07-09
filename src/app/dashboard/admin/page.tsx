"use client"
import SidePanel from "~/app/_components/shared/SidePanel";
import SearchBar from "~/app/_components/shared/SearchBar";
import Greeting from "~/app/_components/Admin/Greeting";
import AdminHero from "~/app/_components/Admin/Hero";
import UserTable from "~/app/_components/Admin/UserTable";
import UserDetailModal from "~/app/_components/Admin/UserDetailModal";
import EditUserDetailModal from "~/app/_components/Admin/EditUserDetailModal";

const AdminPage = () => {
  return (
    <>
    <EditUserDetailModal></EditUserDetailModal>
    <UserDetailModal></UserDetailModal>
      <div className="h-screen w-screen overflow-hidden overflow-x-hidden overflow-y-hidden  bg-slate-50 sm:overflow-visible ">
        <div className="flex h-full w-full flex-row justify-center">
          <SidePanel />
          <div className="flex h-full w-full flex-grow flex-col overflow-y-scroll">
            <SearchBar />
            <div className="flex flex-col   justify-between ">
              <div className="flex w-full flex-col justify-start">
                <Greeting />
                <AdminHero />
              </div>
              <div className="flex flex-row w-full  h-dvh">
                <UserTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
