"use client";
import HomePage from "./_components/Homepage/HomePage";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import AppContextProvider from "./_components/context";

export default function Home() {
  return (
    <>
      <SessionProvider>
        <AppContextProvider>
          <NextUIProvider>
            <HomePage />
          </NextUIProvider>
        </AppContextProvider>
      </SessionProvider>
    </>
  );
}
