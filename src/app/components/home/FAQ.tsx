"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is FindCura?",
    answer:
      "FindCura is an online platform that connects you to nearby pharmacies, helping you find and order medications easily and securely.",
  },
  {
    question: "How does FindCura work?",
    answer:
      "Simply search for a medication or upload your prescription. FindCura matches you with pharmacies that have it in stock and allows you to compare prices and order online.",
  },
  {
    question: "Is FindCura a pharmacy?",
    answer:
      "No, FindCura is not a pharmacy. We partner with licensed pharmacies to help you access medications more conveniently.",
  },
  {
    question: "Do I need a prescription?",
    answer:
      "Yes, for prescription drugs you’ll need a valid prescription. You can upload it securely during checkout.",
  },
  {
    question: "How do I receive my medication?",
    answer:
      "You can choose to pick up your medication at a nearby pharmacy or have it delivered directly to your address, depending on availability.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#00113A]">
      <div className="absolute inset-0">
        <Image
          src="/images/faq-bg.jpg" 
          alt="Pharmacy background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#00113A]/60" /> 
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            FAQs
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto">
            Got questions? We’ve got answers. Find quick solutions to common
            queries about finding, ordering, and getting your drugs.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md shadow-sm text-left overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-[#071739] font-medium text-sm md:text-base focus:outline-none"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-gray-600" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-4 pb-4 text-sm text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
