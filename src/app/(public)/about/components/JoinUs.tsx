"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const JoinUs: React.FC = () => {
  return (
    <section className="relative w-full h-[380px] md:h-[420px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/joinus-bg.jpg"
          alt="Healthcare background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0B0D26]/70"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-4xl font-bold text-white mb-4"
        >
          Join Us on this journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm md:text-base text-gray-200 max-w-2xl leading-relaxed mb-8"
        >
          Whether you’re a patient tired of the search or a pharmacy looking to
          reach more customers, we’re building this future together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-white text-[#0B0D26] font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition">
            Sign Up
          </button>
          <button className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-[#0B0D26] transition">
            Partner with us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;
