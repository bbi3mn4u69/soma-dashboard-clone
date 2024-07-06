import SidePanel from "~/app/_components/shared/SidePanel";
import SearchBar from "~/app/_components/shared/SearchBar";
import Greeting from "~/app/_components/Admin/Greeting";
import AdminHero from "~/app/_components/Admin/Hero";
import UserTable from "~/app/_components/Admin/UserTable";

const AdminPage = () => {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden overflow-x-hidden overflow-y-hidden bg-slate-50 sm:overflow-visible">
        <div className="flex h-full w-full flex-row justify-center">
          <SidePanel />
          <div className="flex h-full w-full flex-col">
            <SearchBar />
            <div className="flex flex-col justify-start w-full">
                <Greeting/>
                <AdminHero/>
                <UserTable/>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
