"use client";

import { createContext, useContext, useMemo } from "react";
import { getCurrentUser } from "@/services/apiService";
import { useGetUserQuery } from "@/app/api/public/authApi";

type DashboardContextType = {
  user: any;
  userData: any;
  isLoading: boolean;
};

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const user = getCurrentUser();
  const { data: userData, isLoading } = useGetUserQuery(user?.id, {
    skip: !user?.id,
  });

  const value = useMemo(
    () => ({
      user,
      userData,
      isLoading,
    }),
    [user, userData, isLoading]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
