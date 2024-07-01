"use client";
import SomaLogo from "../../image/soma.png";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();
  const [activeItem, setActiveItem] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("activeItem") ?? "Portfolio";
    }
    return "Portfolio";
  });
  const router = useRouter();

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };
  useEffect(() => {
    localStorage.setItem("activeItem", activeItem);
  }, [activeItem]);
  useEffect(() => {
    if (activeItem === "Portfolio") {
      router.push("/");
    }
    if (activeItem === "Sign In") {
      router.push("/login");
    }
    if (activeItem === "Team") {
      router.push("/team");
    }
    if (activeItem === "Dashboard") {
      router.push("/dashboard/home");
      localStorage.removeItem("activeItem");
    }
  }, [activeItem]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // TODO: fix the navbar, need dropdown items for phone
  return (
    <div>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="border border-b-1 border-gray-200"
      >
        {/* navbar brand */}
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Image src={SomaLogo} alt="logo" width={50} height={18} />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden gap-x-5 text-sm font-semibold leading-6 sm:flex"
          justify="end"
        >
          <NavbarMenu>
            {[
              "Portfolio",
              "About Us",
              "Team",
              "News",
              "Jobs",
              "Fellowship",
              session ? "Dashboard" : "Sign In",
            ].map((item) => (
              <NavbarMenuItem
                key={item}
                className={`p-1 ${activeItem === item ? "border-b-2 border-purple-600" : ""}`}
              >
                <Link
                  color="foreground"
                  onPress={() => {
                    handleItemClick(item);
                  }}
                  className="cursor-pointer"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </NavbarContent>
        <NavbarContent
          className="hidden gap-x-5 text-sm font-semibold leading-6 sm:flex"
          justify="end"
        >
          {[
            "Portfolio",
            "About Us",
            "Team",
            "News",
            "Jobs",
            "Fellowship",
            session ? "Dashboard" : "Sign In",
          ].map((item) => (
            <NavbarItem
              key={item}
              className={`p-1 ${activeItem === item ? "border-b-2 border-purple-600" : ""}`}
            >
              <Link
                color="foreground"
                onPress={() => {
                  handleItemClick(item);
                }}
                className="cursor-pointer"
              >
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavBar;
