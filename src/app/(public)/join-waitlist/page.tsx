"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Footer from "@/components/common/Footer";

export default function JoinWaitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return  (
    <main className="flex flex-col min-h-screen bg-[#f9fafc]">
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Image
            src="/icons/logo.png"
            alt="FindCura Logo"
            width={150}
            height={50}
            priority
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-[#000052] mb-3"
        >
          Get the Medications You Need Faster.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[#000052] max-w-lg mb-8 text-sm md:text-base leading-relaxed"
        >
          Join FindCura; the smart and easy way to find, compare prices, and get medications from trusted pharmacies near you.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-3 w-full max-w-xl"
        >
          <Input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#F5F7FA] border border-gray-200 h-11 text-sm"
          />
          <Button
            type="submit"
            className="bg-[#000052] hover:bg-[#1a1c39] text-white h-11 px-6 rounded-md font-lexend "
          >
            Join our Waitlist
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center gap-3 mt-6"
        >
          <div className="flex -space-x-2">
            <Image
              src="/images/avatar.jpg"
              alt="User avatar"
              width={32}
              height={32}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="/images/avatar.jpg"
              alt="User avatar"
              width={32}
              height={32}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="/images/avatar.jpg"
              alt="User avatar"
              width={32}
              height={32}
              className="rounded-full border-2 border-white"
            />
          </div>
          <p className="text-sm text-gray-600 font-medium">
            Join <span className="font-semibold text-[#0B0D26]">+2000</span>{" "}
            others on the waitlist
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
