"use client";

import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/app/api/public/authApi";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();

  const handleSignIn = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await login({ email, password }).unwrap();

    // Assuming backend returns { accessToken, refreshToken, user }
    localStorage.setItem("accessToken", res.accessToken);
    localStorage.setItem("refreshToken", res.refreshToken);
    localStorage.setItem("user", JSON.stringify(res.user));

    router.push("/dashboard");
  } catch (err: any) {
    console.error("Login failed:", err);
    alert("Invalid credentials");
  }
};


  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    >
      <form
        onSubmit={handleSignIn}
        className="space-y-8 max-w-md text-center mx-auto"
      >
        <div className="text-left">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-slate-700 text-left"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 py-4 bg-[#FAFBFF] text-[#9999BA]"
          />
        </div>
        <div className="text-left">
          <Label
            htmlFor="password"
            className="text-sm font-medium text-slate-700 text-left"
          >
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 py-4 bg-[#FAFBFF] text-[#9999BA]"
          />
        </div>

        <div className="flex flex-col">
          <Button variant="ghost" type="submit" className="text-[#00B4E5]">
            <Link href="/forgot-password">
              Forgot Password?
            </Link>
          </Button>
          <Button
            type="submit"
            className="bg-[#0B0D26] px-6 py-2 text-white inline-flex items-center"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </div>

        <div className="text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-[#00B4E5]">
            Sign Up
          </Link>
        </div>
        <div className="text-sm text-slate-500">
          Back to home?{" "}
          <Link href="/" className="text-[#00B4E5]">
            Home
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
