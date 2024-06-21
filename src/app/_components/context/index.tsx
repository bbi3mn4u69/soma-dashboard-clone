import React, { createContext, useState, ReactNode, useContext } from "react";

interface AppContextProps {
  industriesSelected: string;
  setIndustriesSelected: React.Dispatch<React.SetStateAction<string>>;
  regionsSelected: string;
  setRegionsSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);
const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [industriesSelected, setIndustriesSelected] = useState<string>("All");
  const [regionsSelected, setRegionsSelected] = useState<string>("All");
  const value = {
    industriesSelected,
    setIndustriesSelected,
    regionsSelected,
    setRegionsSelected,
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
