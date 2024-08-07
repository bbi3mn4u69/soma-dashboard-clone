"use client";

import SidePanel from "../../../_components/shared/SidePanel";
import SearchBar from "../../../_components/shared/SearchBar";
import SignleCompanyTabs from "~/app/_components/SingleCompany/Tabs";
import FetchCompanyInformation from "~/app/_components/SingleCompany/FetchCompanyInformation";
import FetchCompanyLogo from "~/app/_components/SingleCompany/FetchCompanyLogo";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CompanyNews from "~/app/_components/SingleCompany/CompanyNews";
import { useAppContext } from "~/app/_components/context";

const SingleCompany = ({ params }: { params: { slug: string } }) => {
  const { tabSelected } = useAppContext();
  const { slug } = params;
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/login");
  }

  return (
    <>
      <div className="h-screen bg-slate-50">
        <div className="flex h-full flex-row justify-start">
          <div>
            <SidePanel></SidePanel>
          </div>
          <div className="flex h-full w-full flex-col">
            <SearchBar></SearchBar>
            <div className="flex h-full flex-grow flex-col overflow-y-scroll">
              <FetchCompanyLogo companyId={slug}></FetchCompanyLogo>
              <SignleCompanyTabs></SignleCompanyTabs>
              <div>
                {tabSelected === "$.0" ? (
                  <FetchCompanyInformation
                    companyId={slug}
                  ></FetchCompanyInformation>
                ) : tabSelected === "$.1" ? (
                  <CompanyNews companyId={slug}></CompanyNews>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCompany;
