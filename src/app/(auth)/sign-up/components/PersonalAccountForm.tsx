"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useSignUpMutation } from "@/app/api/public/authApi";

export default function PersonalAccountForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
  });
  const [signup, { isLoading }] = useSignUpMutation();

  const onChange = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

    const handleSignUp = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await signup(form).unwrap();
        console.log("Sign up successful:", response);
        // Redirect or show success message
      } catch (error) {
        console.error("Sign up failed:", error);
      }
    };

  return (

      <form
        onSubmit={handleSignUp}
        className="space-y-5 w-full max-w-md mx-auto text-left"
      >
        {/* First and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Label className="text-sm font-medium text-[#0B0D26]">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="Enter first name"
              value={form.firstName}
              onChange={(e) => onChange("firstName", e.target.value)}
              required
              className="mt-1 py-4 bg-[#FAFBFF] text-[#9999BA]"
            />
          </div>

          <div>
            <Label className="text-sm font-medium text-[#0B0D26]">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="Enter last name"
              value={form.lastName}
              onChange={(e) => onChange("lastName", e.target.value)}
              required
              className="mt-1 py-4 bg-[#FAFBFF] text-[#9999BA]"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <Label className="text-sm font-medium text-[#0B0D26]">Email</Label>
          <Input
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) => onChange("email", e.target.value)}
            required
            className="mt-1 py-4 bg-[#FAFBFF] text-[#9999BA]"
          />
        </div>

        {/* Gender */}
        <div>
          <Label className="text-sm font-medium text-[#0B0D26]">Gender</Label>
          <Select
            onValueChange={(value) => onChange("gender", value)}
            value={form.gender}
          >
            <SelectTrigger className="w-full mt-1 py-4 bg-[#FAFBFF] text-[#9999BA]">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Password */}
        <div>
          <Label className="text-sm font-medium text-[#0B0D26]">Password</Label>
          <Input
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={(e) => onChange("password", e.target.value)}
            required
            className="mt-1 py-4 bg-[#FAFBFF] text-[#9999BA]"
          />
        </div>

        {/* Sign Up Button */}
        <Button
          type="submit"
          className="w-full mt-2 bg-[#0B0D26] text-white hover:bg-[#0B0D26]/90 py-5 rounded-md text-base font-semibold"
        >
          Sign Up
        </Button>

        {/* Google Sign Up */}
        <div className="text-center mt-2">
          <p className="text-sm text-[#9999BA] mb-3">Or</p>
          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-[#E5E5E5] py-5"
          >
            <motion.img
              src="/icons/google.svg"
              alt="Google"
              className="w-5 h-5"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            />
            Sign up with Google
          </Button>
        </div>

        {/* Footer Links */}
        <div className="text-center text-sm text-[#6B7280] mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-[#00B4E5] font-medium">
            Sign In
          </Link>
          <p className="mt-4 text-xs text-[#6B7280] leading-relaxed">
            By signing in you agree to FindCura{" "}
            <Link href="#" className="text-[#00B4E5]">
              Terms of service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#00B4E5]">
              Policy
            </Link>
            . All data will be used accordingly.
          </p>
        </div>
      </form>
    
  );
}
