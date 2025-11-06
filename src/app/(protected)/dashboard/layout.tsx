// app/(protected)/dashboard/layout.tsx
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import { DashboardProvider } from "./DashboardContext"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DashboardProvider>
      <div className="flex min-h-screen bg-[#F5F9FA]">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
    </DashboardProvider>
  )
}
