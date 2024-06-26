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

  const value = {
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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppContextProvider;

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("error in general result page context");
  }
  return context;
};
