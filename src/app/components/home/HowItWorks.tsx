"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Step = {
  title: string;
  description: string;
  image: string;
};

const steps: Step[] = [
  {
    title: "Request a Drug",
    description:
      "Type the name of your medication or upload your prescription. Our smart search instantly finds nearby pharmacies with it in stock.",
    image: "/images/drug-cart.jpg",
  },
  {
    title: "Compare Prices",
    description:
      "View live prices from multiple pharmacies near you to find the best deal quickly and easily.",
    image: "/images/drug-cart.jpg",
  },
  {
    title: "Place Your Order",
    description:
      "Choose your preferred pharmacy and complete your order seamlessly through our secure system.",
    image: "/images/drug-cart.jpg",
  },
  {
    title: "Get Real-Time Updates",
    description:
      "Receive instant alerts on order status, pickup readiness, or delivery progress — all in one place.",
    image: "/images/drug-cart.jpg",
  },
  {
    title: "Pick Up or Get Delivered",
    description:
      "Collect your medications at the pharmacy or get them delivered discreetly to your doorstep.",
    image: "/images/drug-cart.jpg",
  },
];

const HowItWorks: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="w-full">
      <div className="bg-[#E6ECFE] px-6 md:px-12 py-12 md:py-16">
        <div className="mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-left">
            <p className="text-2xl text-[#000052] font-medium mb-1">How it works</p>

            <div className="max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-2xl md:text-4xl font-bold text-[#000052] mb-3">
                    {steps[activeIndex].title}
                  </h3>
                  <p className="text-sm md:text-base text-[#000052] leading-relaxed">
                    {steps[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-start md:items-center md:flex-col gap-4">
            {steps.map((_, idx) => (
              <button
                key={idx}
                aria-pressed={activeIndex === idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative group focus:outline-none`}
                title={`Step ${idx + 1}: ${steps[idx].title}`}
              >
                <span
                  className={`block w-2 md:w-[6px] h-8 md:h-12 rounded-full transition-all duration-200 ${
                    activeIndex === idx
                      ? "bg-[#00A3E0] scale-105"
                      : "bg-[#D1D8E8] group-hover:bg-[#B7C9E7]"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex-1 md:flex-1 flex justify-center md:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={steps[activeIndex].image}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45 }}
                className="w-full md:w-[525px] h-[140px] md:h-[200px] lg:h-[200px] rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <Image
                  src={steps[activeIndex].image}
                  alt={steps[activeIndex].title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="bg-white px-6 md:px-12 py-12 md:py-16">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <div className="relative w-full h-64 md:h-96 bg-gray-50">
              <Image
                src="/images/pharmacist.jpg"
                alt="Pharmacist in pharmacy"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-2xl md:text-4xl font-bold text-[#000052] mb-4 leading-snug">
              Sell more medications <br /> without marketing costs
            </h3>
            <p className="text-sm md:text-base text-[#000052] mb-6 max-w-xl leading-relaxed">
              Join FindCura to access thousands of customers searching for drugs
              daily. Receive real-time drug request alerts and earn more with
              zero marketing costs.
            </p>

            <Button className="bg-[#000052] hover:bg-[#121433] text-white px-5 py-2 rounded-md">
              <Link href="/register-pharmacy">Register as a pharmacy</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
