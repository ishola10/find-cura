"use client";

import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function VerifyPage() {
  const router = useRouter();
  const [pharmacyName, setPharmacyName] = useState("");
  const [pharmacyType, setPharmacyType] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: upload file to server
    console.log("verify", { pharmacyName, pharmacyType, file });
    router.push("/location");
  };

  return (
    <AuthLayout title="Sign up your pharmacy" subtitle="Please upload verification documents" showSteps stepIndicator="2/4">
      <form onSubmit={handleNext} className="space-y-4 max-w-md">
        <Input placeholder="Pharmacy Name" value={pharmacyName} onChange={(e) => setPharmacyName(e.target.value)} />
        <select className="w-full border rounded-md px-3 py-2" value={pharmacyType} onChange={(e) => setPharmacyType(e.target.value)}>
          <option value="">Type of pharmacy</option>
          <option value="retail">Retail</option>
          <option value="hospital">Hospital</option>
          <option value="online">Online</option>
        </select>

        <label className="block border-dashed border-2 border-slate-200 rounded-md p-4 text-sm cursor-pointer">
          <input
            type="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
          {file ? <div className="text-sm text-slate-700">{file.name}</div> : <div className="text-slate-400">Click to upload or drag and drop verification file (NIN/License)</div>}
        </label>

        <div className="flex items-center gap-3">
          <Button type="submit" className="bg-[#0B0D26] px-6 py-2 text-white">Next</Button>
        </div>
      </form>
    </AuthLayout>
  );
}
