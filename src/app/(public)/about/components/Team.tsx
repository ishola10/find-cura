"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const MeetTheTeam: React.FC = () => {
  return (
    <section className="w-full bg-[#E6ECFE] py-16 px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 grid grid-cols-2 gap-4 justify-center"
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/avatar.jpg"
              alt="Team member 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/avatar.jpg"
              alt="Team member 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/avatar.jpg"
              alt="Team member 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/avatar.jpg"
              alt="Team member 4"
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
          <h2 className="text-2xl md:text-4xl font-bold text-[#0B0D26] mb-4">
            Meet the Team
          </h2>
          <p className="text-sm md:text-base text-[#565656] leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-sm md:text-base text-[#565656] leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
