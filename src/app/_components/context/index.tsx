import React, { createContext, useState, ReactNode, useContext } from "react";

interface AppContextProps {
  industriesSelected: string;
  setIndustriesSelected: React.Dispatch<React.SetStateAction<string>>;
  regionsSelected: string;
  setRegionsSelected: React.Dispatch<React.SetStateAction<string>>;
  // portforlio page
  portforlioValuationSelected: string;
  setPortforlioValuationSelected: React.Dispatch<React.SetStateAction<string>>;
  portforlioIndustrySelected: string;
  setPortforlioIndustrySelected: React.Dispatch<React.SetStateAction<string>>;
  portforlioRegionSelected: string;
  setPortforlioRegionSelected: React.Dispatch<React.SetStateAction<string>>;
  isMobileFilterPortforlioOpen: boolean;
  setIsMobileFilterPortforlioOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // Signle Company Page:
  tabSelected: string;
  setTabSelected: React.Dispatch<React.SetStateAction<string>>;
  // Mobile Filter:
  isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileSideBarOpen: boolean;
  setIsMobileSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // Admin Page:
  isUserDetailView: boolean;
  setIsUserDetailView: React.Dispatch<React.SetStateAction<boolean>>;
  isUserDetailEdit: boolean;
  setIsUserDetailEdit: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string | undefined;
  setUserId: React.Dispatch<React.SetStateAction<string | undefined>>;
  userRoleControl: string | undefined;
  setUserRoleControl: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);
const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [industriesSelected, setIndustriesSelected] = useState<string>("All");
  const [regionsSelected, setRegionsSelected] = useState<string>("All");
  const [portforlioValuationSelected, setPortforlioValuationSelected] =
    useState<string>("All");
  const [portforlioIndustrySelected, setPortforlioIndustrySelected] =
    useState<string>("All");
  const [portforlioRegionSelected, setPortforlioRegionSelected] =
    useState<string>("All");
    
  const [tabSelected, setTabSelected] = useState<string>("$.0");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const [isMobileSideBarOpen, setIsMobileSideBarOpen] = useState<boolean>(false);
  const [isMobileFilterPortforlioOpen, setIsMobileFilterPortforlioOpen] = useState<boolean>(false);
  const [isUserDetailView, setIsUserDetailView] = useState<boolean>(false);
  const [isUserDetailEdit, setIsUserDetailEdit] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [userRoleControl, setUserRoleControl] = useState<string | undefined>(undefined);

  const value = {
    isMobileFilterPortforlioOpen,
    setIsMobileFilterPortforlioOpen,
    isMobileSideBarOpen,
    setIsMobileSideBarOpen,
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    industriesSelected,
    setIndustriesSelected,
    regionsSelected,
    setRegionsSelected,
    portforlioValuationSelected,
    setPortforlioValuationSelected,
    portforlioIndustrySelected,
    setPortforlioIndustrySelected,
    portforlioRegionSelected,
    setPortforlioRegionSelected,
    tabSelected,
    setTabSelected,
    isUserDetailView,
    setIsUserDetailView,
    userId,
    setUserId,
    isUserDetailEdit,
    setIsUserDetailEdit,
    userRoleControl,
    setUserRoleControl,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppContextProvider;

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("error in page context");
  }
  return context;
};
