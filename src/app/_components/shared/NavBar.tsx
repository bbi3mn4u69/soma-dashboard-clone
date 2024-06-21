"use client";
import SomaLogo from "../../image/soma.png";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const NavBar = () => {
  const [activeItem, setActiveItem] = useState<string>("Portfolio");
  const router = useRouter();

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };
  useEffect(() => {
    if (activeItem === "Sign In") {
      router.push("/login");
    }
  }, [activeItem]);
  return (
    <div>
      <Navbar className="border border-b-1 border-gray-200">
        <NavbarBrand>
          <Image src={SomaLogo} alt="logo" width={50} height={18} />
        </NavbarBrand>
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
            "Sign In",
          ].map((item) => (
            <NavbarItem
              key={item}
              className={`p-1 ${activeItem === item ? "border-b-2 border-purple-600" : ""}`}
            >
              <Link
                color="foreground"
                href={"#"}
                onPress={() => {
                  handleItemClick(item);
                }}
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
