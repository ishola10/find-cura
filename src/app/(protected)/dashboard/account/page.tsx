"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useDashboard } from "../DashboardContext";
import DisplayState from "@/components/common/DisplayStates";
import { logoutUser } from "@/services/apiService";

export default function MyAccount() {
  const { user, userData, isLoading } = useDashboard();

  const handleLogout = () => {
    logoutUser();
  };

  if (!user?.id) {
    return (
      <DisplayState
        type="error"
        title="No User found"
        message="Failed to load user data"
        containerStyle="h-[300px]"
      />
    );
  }

  if (isLoading) {
    return (
      <DisplayState
        type="loading"
        title="Getting user data..."
        message="Please wait while we fetch your user data"
        containerStyle="h-[300px]"
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-6"
    >
      <Card>
        <CardHeader>
          <CardTitle>My Account</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div>
            <Label>First Name</Label>
            <Input placeholder={userData?.firstName} />
          </div>
          <div>
            <Label>Last Name</Label>
            <Input placeholder={userData?.lastName} />
          </div>
          <div>
            <Label>Date of Birth</Label>
            <Input type="date" />
          </div>
          <div>
            <Label>Gender</Label>
            <Input placeholder="Male" />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input placeholder="09100000000" />
          </div>
          <div>
            <Label>Email</Label>
            <Input placeholder={userData?.email} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Address</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Label>Address</Label>
            <Input placeholder="Divine Queens Court, Lekki Lagos" />
          </div>
          <div>
            <Label>State</Label>
            <Input placeholder="Lagos State" />
          </div>
          <div>
            <Label>City</Label>
            <Input placeholder="Enter city" />
          </div>
        </CardContent>
      </Card>

      <Button variant="destructive" className="w-fit" onClick={handleLogout}>
        Logout
      </Button>
    </motion.div>
  );
}
