"use client";
import HomePage from "./_components/Homepage/HomePage";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
export default function Home() {
  return (
    <>
      <SessionProvider>
        <NextUIProvider>
          <HomePage />
        </NextUIProvider>
      </SessionProvider>
    </>
  );
}
