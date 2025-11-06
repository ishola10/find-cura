"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#020C39] text-white py-14 px-6 md:px-16">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/icons/logo.png"
            alt="FindCura Logo"
            width={150}
            height={50}
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/pharmacies" className="hover:text-white transition">
                For Pharmacies
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/help" className="hover:text-white transition">
                Help & FAQs
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4"
        >
          <div>
            <p className="text-sm text-gray-400">
              090-FindCura, 08029232323
              <br />
              support@findcura.com
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://facebook.com"
              className="p-2 rounded-md bg-[#05255E] hover:bg-[#003299] transition"
            >
              <Facebook size={16} />
            </Link>
            <Link
              href="https://instagram.com"
              className="p-2 rounded-md bg-[#05255E] hover:bg-[#003299] transition"
            >
              <Instagram size={16} />
            </Link>
            <Link
              href="https://linkedin.com"
              className="p-2 rounded-md bg-[#05255E] hover:bg-[#003299] transition"
            >
              <Linkedin size={16} />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-[#0E1A56] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© All Rights Reserved.</p>
        <p>Powered by</p>
      </div>
    </footer>
  );
};

export default Footer;
