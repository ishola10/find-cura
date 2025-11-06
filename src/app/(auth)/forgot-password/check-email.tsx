"use client";

import { Button } from "@/components/ui/button";
import AuthLayout from "../components/AuthLayout";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function CheckEmailPage() {
  const router = useRouter();

  const handleOpenEmail = () => {
    console.log("Opening email client...");
    router.push("/reset-password");
  };

  return (
    <AuthLayout title="Check your email" subtitle="Please check your email for further instructions to reset your password.">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <Image src="/icons/mail.png" alt="Mail" width={60} height={60} />

        <Button
          onClick={handleOpenEmail}
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
    </AuthLayout>
  );
}
