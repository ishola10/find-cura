"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AuthLayout from "../components/AuthLayout";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset:", { password, confirm });
    router.push("/login");
  };

  return (
    <AuthLayout title="Reset password" subtitle="Lorem ipsum dolor sit amet">
      <form
        onSubmit={handleSubmit}
        className="space-y-8 max-w-md text-center mx-auto"
      >
        <div className="text-left">
          <Label htmlFor="password" className="text-sm font-medium text-slate-700">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 py-4 bg-[#FAFBFF] text-[#9999BA]"
          />
        </div>

        <div className="text-left">
          <Label htmlFor="confirm" className="text-sm font-medium text-slate-700">
            Re-enter password
          </Label>
          <Input
            id="confirm"
            type="password"
            placeholder="Enter password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            className="mt-1 py-4 bg-[#FAFBFF] text-[#9999BA]"
          />
        </div>

        <Button
          type="submit"
          className="bg-[#0B0D26] px-6 py-2 text-white inline-flex items-center"
        >
          Next
        </Button>
      </form>
    </AuthLayout>
  );
}
