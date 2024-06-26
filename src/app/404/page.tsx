"use client"
import { GrayLogo } from "../image/gray-logo";
import { Arrow } from "../_components/Icon";
import { useRouter } from "next/navigation";
const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center justify-center text-center">
          <GrayLogo />
          <div className="p-3 text-lg  text-indigo-600">404</div>
          <div className=" text-4xl font-bold tracking-tight text-gray-900">
            Page Not Found.
          </div>
          <div className="py-3 text-base text-gray-500">
            Sorry, we couldn’t find the page you’re looking for.
          </div>
          <div
            className="flex cursor-pointer flex-row items-center justify-center gap-2"
            onClick={() => {
              router.push("/");
            }}
          >
            <div className="text-indigo-600">Go back home</div>
            <Arrow />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
