"use client";
import { Input } from "@nextui-org/react";
import { QuestionMark } from "../Icon";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Profile from "../../image/profile.webp"
const SearchBar = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="border border-b border-gray-200 bg-white">
        <div className="flex flex-row items-center justify-between mx-4 my-2 ">
          {/* input */}
          <div className="w-full mr-4">
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
            <Image
              src={Profile}
              alt="user image"
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
