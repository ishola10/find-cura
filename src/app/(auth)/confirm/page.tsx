"use client";

import React from "react";
import AuthLayout from "../components/AuthLayout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ConfirmPage() {
  const router = useRouter();
  return (
    <AuthLayout title="Completed" subtitle="You're all set — your account setup is complete." showSteps stepIndicator="4/4">
      <div className="max-w-md">
        <div className="bg-white border rounded-md p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#071739] mb-2">Completed</h3>
          <p className="text-sm text-slate-600 mb-4">Thank you! Your account has been created and will be reviewed. You can now sign in and start using FindCura.</p>
          <div className="flex gap-3">
            <Button onClick={() => router.push("/login")} className="bg-[#0B0D26] px-6 py-2 text-white">Go to Login</Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
