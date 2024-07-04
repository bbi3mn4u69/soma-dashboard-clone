'use client'
import "~/styles/globals.css";


import { GeistSans } from "geist/font/sans";
import AppContextProvider from "./_components/context";
import { TRPCReactProvider } from "~/trpc/react";
import { SessionProvider } from "next-auth/react";
import { Metadata } from "./_components/shared/Metadata";
import Transition from "./template";

// export const metadata = {
//   title: "Create T3 App",
//   description: "Generated by create-t3-app",
//   icons: [{ rel: "icon", url: "/favicon.ico" }],
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <Metadata title="Home" description="Unicorn" href="/favicon.ico" />
      <body >
        <SessionProvider>
          <AppContextProvider>
            <TRPCReactProvider>
              <Transition>
                {children}
              </Transition>
              </TRPCReactProvider>
          </AppContextProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
