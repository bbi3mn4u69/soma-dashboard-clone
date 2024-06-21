"use client";
import { Input } from "@nextui-org/react";
import { QuestionMark } from "../Icon";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Profile from "../../image/profile.webp";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
const SearchBar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const onClick = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };
  return (
    <>
      <div className="border border-b border-gray-200 bg-white">
        <div className="mx-4 my-2 flex flex-row items-center justify-between ">
          {/* input */}
          <div className="mr-4 w-full">
            <Input
              fullWidth={true}
              type="email"
              variant="bordered"
              radius="sm"
              placeholder="Search for people and companies accross the entire Soma network"
            />
          </div>
          {/* infor hub */}
          <div className="mx-2">
            <QuestionMark />
          </div>
          {/* TODO: logic to check for the user image. */}
          {/* user image */}
          <div className="mx-2">
            <Dropdown>
              <DropdownTrigger>
                <Image
                  src={session?.user?.image ?? Profile}
                  alt="user image"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>
                  <Button
                    className="w-full"
                    variant="bordered"
                    color="danger"
                    onPress={() => onClick()}
                  >
                    Logout
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
