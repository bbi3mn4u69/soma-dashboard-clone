"use client";
import Image from "next/image";
import SomaLogo from "../image/soma.png";
import Google from "../image/google.png";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/dashboard/home");
  }
  
  const onClick = async () => {
    try {
      await signIn("google", {
        redirect: true,
        callbackUrl: "/dashboard/home",
      });
    } catch (e) {
      console.log(e);
    }
  };
  
 

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 ">
        <div className="flex flex-col items-center">
          <Image src={SomaLogo} alt="Soma Logo" width={60} height={60} />
          <div className="my-6 text-3xl font-bold tracking-tight">
            Sign in to your account
          </div>
          <div className="w-full rounded-lg bg-white p-8 shadow-sm">
            <div
              onClick={onClick}
              className="flex w-full cursor-pointer justify-center gap-3 rounded-xl border border-gray-200 px-3 py-2 transition-all hover:bg-gray-100"
            >
              <Image
                src={Google}
                width={23}
                height={23}
                alt="google-logo"
              ></Image>
              <span className="self-center font-light tracking-tight">
                Sign in with Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
