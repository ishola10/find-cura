"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Orders() {
  return (
    <Card className="col-span-2 flex flex-col items-center justify-center p-8 text-center">
      <CardHeader>
        <CardTitle>Latest Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 mt-3">No Orders Found</p>
      </CardContent>
    </Card>
  )
}