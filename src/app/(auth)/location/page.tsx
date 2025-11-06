"use client";

import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LocationPage() {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("location", { address, state });
    router.push("/confirm");
  };

  return (
    <AuthLayout title="What's your location?" subtitle="Provide address so patients can find you" showSteps stepIndicator="3/4">
      <form onSubmit={handleNext} className="space-y-4 max-w-md">
        <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <select className="w-full border rounded-md px-3 py-2" value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select state</option>
          <option value="lagos">Lagos</option>
          <option value="ogun">Ogun</option>
          <option value="abuja">Abuja</option>
        </select>

        <div className="flex items-center gap-3">
          <Button type="submit" className="bg-[#0B0D26] px-6 py-2 text-white">Next</Button>
        </div>
      </form>
    </AuthLayout>
  );
}
