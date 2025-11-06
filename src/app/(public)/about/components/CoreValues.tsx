"use client";

import { motion } from "framer-motion";
import React from "react";
import { Shield, Lock, Users, Lightbulb, Search, Smartphone, Wallet, CheckCircle } from "lucide-react";

const CoreValues: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-6 h-6 text-[#00B4E5]" />,
      title: "Trust & Authenticity",
      text: "Every medication is NAFDAC-verified. Your health is non-negotiable, and so is our commitment to it.",
    },
    {
      icon: <Lock className="w-6 h-6 text-[#00B4E5]" />,
      title: "Privacy & Discretion",
      text: "We understand Nigerian health taboos. Your sensitive orders are handled with utmost respect and privacy, always.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#00B4E5]" />,
      title: "Accessibility & Inclusion",
      text: "We are building for all Nigerians, not just the tech-savvy.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#00B4E5]" />,
      title: "Innovation & Simplicity",
      text: "We believe in making things easy for you. Our innovation tackles complexity for a smooth, hassle-free experience.",
    },
  ];

  const reasons = [
    {
      icon: <Search className="w-5 h-5 text-[#00B4E5]" />,
      title: "Real-time search",
      text: "Know who has your drugs before you step outside.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-[#00B4E5]" />,
      title: "Multi-Channel Access",
      text: "Use our app or website—whichever works best for you.",
    },
    {
      icon: <Wallet className="w-5 h-5 text-[#00B4E5]" />,
      title: "Price Transparency",
      text: "See all your options and never overpay again.",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-[#00B4E5]" />,
      title: "NAFDAC Verified Network",
      text: "We partner only with licensed, NAFDAC-verified pharmacies.",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="bg-[#E6ECFE] py-16 px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-[#0B0D26] mb-12"
        >
          Our Core Values
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-sm text-left"
            >
              <div className="mb-3">{val.icon}</div>
              <h4 className="text-[#00B4E5] font-semibold mb-2 text-base md:text-lg">
                {val.title}
              </h4>
              <p className="text-sm text-[#000052] font-medium leading-relaxed">
                {val.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="py-16 px-6 md:px-12 bg-white text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-[#0B0D26] mb-12"
        >
          Why Choose Us?
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#E6ECFE] rounded-xl p-6 shadow-sm text-left"
            >
              <div className="mb-2">{reason.icon}</div>
              <h4 className="text-[#00B4E5] font-semibold mb-2 text-sm md:text-base">
                {reason.title}
              </h4>
              <p className="text-sm text-[#000052] font-medium leading-relaxed">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
