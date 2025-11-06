"use client"

import { Button } from "@/components/ui/button"
import { Bell, UserCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between bg-white p-4 shadow-sm"
    >
      <input
        type="text"
        placeholder="Search"
        className="border rounded-md px-3 py-2 w-1/3 text-sm"
      />
      <div className="flex items-center gap-4">
        <Button variant="outline" className="gap-2">
          <Bell size={18} /> Notifications
        </Button>
        <UserCircle className="text-[#0B3C75]" size={28} />
        <Button className="bg-[#0B3C75] hover:bg-[#0b3c75e1]">Request a Drug</Button>
      </div>
    </motion.header>
  )
}
