"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <Card className="col-span-2 flex flex-col items-center justify-center p-8 text-center">
        <CardHeader>
          <CardTitle>Latest Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src="/images/OBJECTS.png"
            alt="No Orders"
            width={200}
            height={200}
            className="mx-auto"
          />
          <p className="text-gray-500 mt-3">No Orders Found</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Notification</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-full text-gray-500">
          No New Messages
        </CardContent>
      </Card>
    </motion.div>
  )
}
