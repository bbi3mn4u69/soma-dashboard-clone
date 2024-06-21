'use client'
import { ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

export default DashboardLayout;