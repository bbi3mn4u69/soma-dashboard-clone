"use client";
import { GrayLogo } from "../../image/gray-logo";
import NavButton from "./NavButton";
import { Home, Portfolio, Infor, Feed, Saved, Admin, Stock } from "../Icon";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useAppContext } from "../context";
const SidePanel = () => {
  const { isMobileSideBarOpen } = useAppContext();
  const router = useRouter();
  const logoClick = () => {
    router.push("/");
  };
  const [activeButton, setActiveButton] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("activeButton") ?? "Home";
    }
    return "Home";
  });
  const pathname = usePathname();
  // Update local storage when activeButton changes
  useEffect(() => {
    localStorage.setItem("activeButton", activeButton);
  }, [activeButton]);
  return (
    <>
      <div className="min-h-screen bg-purple-900">
        <div
          className="flex cursor-pointer items-center justify-center py-4 "
          onClick={logoClick}
        >
          <GrayLogo />
        </div>
        <div className="mx-1 flex flex-col items-center justify-center">
          <NavButton
            title="Home"
            icon={<Home active={activeButton === "Home"} />}
            onClick={() => {
              setActiveButton("Home"), router.push("/dashboard/home");
            }}
            isActive={activeButton === "Home"}
          />
          <NavButton
            title="Portfolio"
            icon={<Portfolio active={activeButton === "Portfolio"} />}
            onClick={() => {
              setActiveButton("Portfolio");
              router.push("/dashboard/portfolio");
            }}
            isActive={activeButton === "Portfolio"}
          />
          <NavButton
            title="Infor"
            icon={<Infor active={activeButton === "Infor"} />}
            onClick={() => setActiveButton("Infor")}
            isActive={activeButton === "Infor"}
          />
          <NavButton
            title="Feed"
            icon={<Feed active={activeButton === "Feed"} />}
            onClick={() => setActiveButton("Feed")}
            isActive={activeButton === "Feed"}
          />
          <NavButton
            title="Saved"
            icon={<Saved active={activeButton === "Saved"} />}
            onClick={() => setActiveButton("Saved")}
            isActive={activeButton === "Saved"}
          />
          <NavButton
            title="Admin"
            icon={<Admin active={activeButton === "Admin"} />}
            onClick={() => {
              setActiveButton("Admin"), router.push("/dashboard/admin");
            }}
            isActive={activeButton === "Admin"}
          />
          <NavButton
            title="Stock"
            icon={<Stock active={activeButton === "Stock"} />}
            onClick={() => {setActiveButton("Stock"), router.push("/dashboard/stock")}}
            isActive={activeButton === "Stock"}
          />
        </div>
      </div>
    </>
  );
};

export default SidePanel;
