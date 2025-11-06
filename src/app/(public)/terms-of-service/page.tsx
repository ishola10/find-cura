"use client";
import React from "react";
import Footer from "@/components/common/Footer";

const Page = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-[#D0D5DD]">
      <div className="bg-gradient-to-l from-black via-lime-400/5 to-[#52690780]">
        <div className="flex flex-col items-center justify-center py-20 px-4 md:px-10 lg:px-20">
          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold text-center">
            Terms of Service for Agtrade
          </h1>
          <p className="text-[#D0D5DD] text-base md:text-lg font-semibold text-center mt-6">
            Acceptance of Terms By using Agtrade, you agree to these legally 
            binding Terms. <br /> If you disagree, discontinue use immediately.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 py-16 px-4 md:px-10 lg:px-16">
          <div className="lg:w-1/3">
            <ul className="text-[#D0D5DD] text-base md:text-lg font-semibold space-y-2">
              {[
                "User Responsibilities",
                "Intellectual Property",
                "Disclaimers",
                "Limitation of Liability",
                "Termination",
                "Governing Law",
              ].map((item) => (
                <li
                  key={item}
                  onClick={() => scrollToSection(item.replace(/\s+/g, "-"))}
                  className="cursor-pointer py-3 border-b border-[#9DC02B] hover:text-white transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-2/3 max-w-4xl space-y-12 border border-[#9DC02B] bg-black/50 p-6 md:p-8 rounded-lg">
            <section id="User-Responsibilities" className="space-y-4">
              <h2 className="text-2xl font-semibold font-sora">
                User Responsibilities
              </h2>
              <p className="text-base font-figtree">
                By using Agtrade, you agree to:
              </p>
              <ul className="list-none  space-y-2">
                <li>
                  Provide accurate information (e.g., location for price
                  insights).
                </li>
                <li>
                  Not misuse market data for illegal or exploitative purposes.
                </li>
              </ul>
            </section>

            <section id="Intellectual-Property" className="space-y-4">
              <h2 className="text-2xl font-semibold font-sora">
                Intellectual Property
              </h2>
              <ul>
                <li>
                  All market reports, price data, and Agtrade logos are owned by
                  us
                </li>
                <li>
                  Users may download/share data for personal use but not for
                  commercial resale without permission.
                </li>
              </ul>
            </section>
            <section id="Disclaimers" className="space-y-4">
              <h2 className="text-2xl font-semibold font-sora">Disclaimers</h2>
              <ul className="list-none space-y-2">
                <li>
                  <span className="font-bold">Accuracy</span>: While we strive
                  for real-time accuracy, commodity prices may fluctuate. Verify
                  critical data independently.
                </li>
                <li>
                  <span className="font-bold">Availability</span>: We are not
                  liable for service interruptions due to maintenance or
                  outages.
                </li>
              </ul>
            </section>
            <section id="Limitation-of-Liability" className="space-y-4">
              <h2 className="text-2xl font-semibold font-sora">
                Limitation of Liability
              </h2>
              <p className="text-base font-figtree">
                Agtrade is not responsible for: Financial losses from decisions
                made using our data.
              </p>
            </section>
            <section id="Termination" className="space-y-4">
              <h2 className="text-2xl font-semibold font-sora">Termination</h2>
              <p className="text-base font-figtree">
                We may suspend accounts for violations (e.g., fraud, spam).
              </p>
            </section>
            <section id="Governing-Law" className="space-y-4">
              <h2 className="text-2xl font-semibold font-sora">
                Governing Law
              </h2>
              <p className="text-base font-figtree">
                These Terms are governed by Nigerian law. Disputes will be
                resolved in Nigerian courts.
              </p>
            </section>

            <p className="text-sm text-[#98A2B3]">
              For questions, contact:{" "}
              <span className="text-white">support@agtrade.com</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
