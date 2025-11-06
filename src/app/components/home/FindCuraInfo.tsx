"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const FindCuraInfo: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="bg-[#E6ECFE] py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-48 md:w-96 md:h-72 overflow-hidden">
            <Image
              src="/images/findcura-user.png"
              alt="User with phone"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#0B0D26] mb-3 leading-loose">
            We provide efficient ways to find and purchase drugs
          </h2>
          <p className="text-sm md:text-base text-[#000052] leading-relaxed font-semibold">
            Our platform simplifies the process of sourcing drugs, connecting
            patients directly with nearby pharmacies in real time.
          </p>
        </motion.div>
      </div>

      <div className="py-16 px-6 md:px-12 bg-white">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-[#0B0D26] mb-10"
        >
          Why FindCura?
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#E6ECFE] rounded-xl p-6 shadow-sm"
          >
            <h4 className="text-[#00B4E5] font-semibold mb-2 text-sm md:text-base">
              Real time request and response
            </h4>
            <p className="text-sm text-[#000052] font-medium leading-relaxed">
              Request any drug and get real-time responses from nearby
              pharmacies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#E6ECFE] rounded-xl p-6 shadow-sm"
          >
            <h4 className="text-[#00B4E5] font-semibold mb-2 text-sm md:text-base">
              Transparent Price Comparison
            </h4>
            <p className="text-sm text-[#000052] font-medium leading-relaxed">
              See live prices from all nearby pharmacies instantly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#E6ECFE] rounded-xl p-6 shadow-sm"
          >
            <h4 className="text-[#00B4E5] font-semibold mb-2 text-sm md:text-base">
              Stress-free & discreet packaging
            </h4>
            <p className="text-sm text-[#000052] font-medium leading-relaxed">
              Save trips across town and enjoy discreet packaging for sensitive
              health needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FindCuraInfo;
