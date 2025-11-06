"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Banner: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-[#FFFFFF] text-center px-6 md:px-12 pt-32 pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=""
      >
        <h1 className="text-3xl md:text-5xl font-bold text-[#0B0D26] mb-4 leading-loose">
          Skip the Pharmacy Hunt, and <br className="hidden md:block" />
          find your <span className="text-[#00B8D9]">Drugs in Seconds</span>
        </h1>

        <p className="text-sm md:text-base text-[#000052] mb-8 max-w-xl mx-auto leading-relaxed">
          Type once and we instantly show you which nearby pharmacies have it in
          stock. No legwork, no frustration
        </p>

        <div className="flex justify-center">
          <Button className="bg-[#0B0D26] hover:bg-[#1a1c39] text-white px-6 py-2 rounded-md text-sm md:text-base">
            <Link href="/join-waitlist">Join our Waitlist</Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full mt-12"
      >
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/banner.png"
            alt="Pharmacy Banner"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
