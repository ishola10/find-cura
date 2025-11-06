"use client";

import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PersonalAccountForm from "./components/PersonalAccountForm";
import BusinessAccountForm from "./components/BusinessAccountForm";

export default function SignupPage() {
  const router = useRouter();
  const [accountType, setAccountType] = useState<"personal" | "business">("personal");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
  });

  const onChange = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("signup form", { accountType, ...form });
    if (accountType === "business") router.push("/verify");
    else router.push("/location");
  };

  return (
  <AuthLayout
    title={<span>Sign up for FindCura</span>}
    subtitle="Create your account to start requesting or selling medications"
  >
    <div className="flex gap-3 mb-4 mx-auto items-center justify-center">
      <button
        type="button"
        onClick={() => setAccountType("personal")}
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          accountType === "personal"
            ? "bg-[#0B0D26] text-white"
            : "bg-[#F1F5F9] text-[#0B0D26]"
        }`}
      >
        Personal account
      </button>
      <button
        type="button"
        onClick={() => setAccountType("business")}
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          accountType === "business"
            ? "bg-[#0B0D26] text-white"
            : "bg-[#F1F5F9] text-[#0B0D26]"
        }`}
      >
        Business account
      </button>
    </div>

    {accountType === "personal" ? <PersonalAccountForm /> : <BusinessAccountForm />}
  </AuthLayout>
);
}
