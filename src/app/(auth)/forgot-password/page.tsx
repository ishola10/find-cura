"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "../components/AuthLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1 = forgot, 2 = check email, 3 = reset
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forgot password for:", email);
    setStep(2);
  };

  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password:", { password, confirm });
    router.push("/login");
  };

  return (
    <AuthLayout
      title={
        step === 1
          ? "Forgot password?"
          : step === 2
          ? "Check your email"
          : "Reset password"
      }
      subtitle={
        step === 1
          ? "Lorem ipsum dolor sit amet"
          : step === 2
          ? "Please check your email for further instructions to reset your password."
          : "Lorem ipsum dolor sit amet"
      }
    >
      {step === 1 && (
        <form
          onSubmit={handleForgotSubmit}
          className="space-y-8 max-w-md text-center mx-auto"
        >
          <div className="text-left">
            <Label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 py-4 bg-[#FAFBFF] text-[#9999BA]"
            />
          </div>

          <Button
            type="submit"
            className="bg-[#0B0D26] px-6 py-2 text-white inline-flex items-center"
          >
            Submit
          </Button>
        </form>
      )}

      {step === 2 && (
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <Image src="/icons/mail.png" alt="Mail" width={60} height={60} />
          <Button
            onClick={() => setStep(3)}
            className="bg-[#0B0D26] px-6 py-2 text-white"
          >
            Open Email
          </Button>

          <p className="text-sm text-slate-500">
            Didn’t receive the email?{" "}
            <Link href="#" className="text-[#00B4E5]">
              Resend
            </Link>
          </p>
        </div>
      )}

      {step === 3 && (
        <form
          onSubmit={handleResetSubmit}
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
            <Label
              htmlFor="confirm"
              className="text-sm font-medium text-slate-700"
            >
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
      )}
    </AuthLayout>
  );
}
