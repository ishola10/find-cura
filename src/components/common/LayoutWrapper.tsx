"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/common/Header";
import { AuthProvider } from "@/context/AuthContext";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  const hideHeaderRoutes = ["/join-waitlist", "/login", "/sign-up", "/dashboard", "_not-found", "/forgot-password"];

  const shouldHideHeader = hideHeaderRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      {!shouldHideHeader && <Header />}
      <AuthProvider>{children}</AuthProvider>
    </>
  );
}
