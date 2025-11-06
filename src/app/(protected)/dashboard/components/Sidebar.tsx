"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ShoppingBag, User } from "lucide-react"
import clsx from "clsx"

const navItems = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  { name: "My Orders", icon: ShoppingBag, href: "/dashboard/orders" },
  { name: "My Account", icon: User, href: "/dashboard/account" },
]

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <motion.aside
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-60 bg-white shadow-sm p-4 flex flex-col gap-2"
    >
     <Link href="/" className="mb-8">
      <div className="text-2xl font-bold mb-6 text-[#0B3C75]">FndCura</div>
     </Link>
      <nav className="flex flex-col gap-1">
        {navItems.map(({ name, icon: Icon, href }) => (
          <Link
            key={name}
            href={href}
            className={clsx(
              "flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-[#E6ECFE]",
              pathname === href && "bg-[#E6ECFE] text-[#0B3C75] font-medium"
            )}
          >
            <Icon size={18} /> {name}
          </Link>
        ))}
      </nav>
    </motion.aside>
  )
}
