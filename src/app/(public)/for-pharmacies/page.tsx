import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FaqSection from "@/app/components/home/FAQ";
import Footer from "@/components/common/Footer";

const page = () => {
  return (
    <div className="w-full">
      <div className="bg-white px-6 md:px-12 py-12 md:py-16 mt-16">
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
      <FaqSection />
      <Footer />
    </div>
  );
};

export default page;
