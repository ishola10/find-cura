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
            Privacy Policy for Agtrade
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 py-16 px-4 md:px-10 lg:px-16">
          <div className="lg:w-1/3">
            <ul className="text-[#D0D5DD] text-base md:text-lg font-semibold space-y-2">
              {[
                "Introduction",
                "Information We Collect",
                "How We Use Your Information",
                "Data Security",
                "Your Rights",
                "Changes to This Policy",
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
            <section id="Introduction" className="space-y-4">
              <h2 className="text-2xl font-semibold font-sora">Introduction</h2>
              <p className="text-base font-figtree">
                Agtrade (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) located at Suite 17, 433 Herbert Macaulay Way Yaba, Lagos, Nigeria. operates https://www.agtrade.ng/, a platform providing real-time agricultural commodity prices, market trends, and food security insights in Nigeria. This Privacy Policy explains how we collect, use, and protect your personal data when you use our services.
              </p>
              <p className="text-base font-figtree">
                By accessing Agtrade, you agree to the terms outlined in this
                policy.
              </p>
            </section>

            <section id="Information-We-Collect" className="space-y-4">
              <h2 className="text-xl font-semibold">Information We Collect</h2>
              <p>
                We may collect information about you in various ways. The information we may collect include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Personal Data: Name, email, phone number, location (for market
                  insights).
                </li>
                <li>
                  Usage Data: IP address, browser type, pages viewed, and
                  interactions with price updates.
                </li>
                <li>
                  Cookies: To enhance your experience (e.g., session cookies for
                  login).
                </li>
              </ul>
            </section>

            <section id="How-We-Use-Your-Information" className="space-y-4">
              <h2 className="text-xl font-semibold">
                How We Use Your Information
              </h2>
              <p>
                We may use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deliver daily commodity prices and market reports.</li>
                <li>Improve platform functionality and user experience.</li>
                <li>
                  Communicate updates (e.g., password resets, verification
                  emails).
                </li>
                <li>Comply with legal obligations (e.g., fraud prevention).</li>
              </ul>
            </section>

            <section id="Data-Security" className="space-y-4">
              <h2 className="text-xl font-semibold">Data Security</h2>
              <ul className="list-none space-y-2">
                <li><span className="font-bold">Third Parties</span>: We may share anonymized market data with reasonable third parties or partners  for the purpose of food market analysis and related projects (e.g., Nigeria Food Security Project) but never sell personal data. </li>
                <li><span className="font-bold">Data Storage</span>: We shall store your data only for the period within which it is reasonably needed.</li>
                <li><span className="font-bold">Security Measures</span>: Encryption, secure servers, and access controls protect your data.</li>
              </ul>
            </section>

            <section id="Your-Rights" className="space-y-4">
              <h2 className="text-xl font-semibold">Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to or deletion of your data.</li>
                <li>Opt-out of non-essential communications.</li>
                <li>Disable cookies via browser settings.</li>
              </ul>
              <p>
                Where you feel aggrieved by any of our decision, action or inaction which you consider a violation of any provisions of this policy or the NDPA or NDPR or any other subsidiary legislation, you may direct your complaint to the Nigeria Data Protection Commission.
              </p>
            </section>

            <section id="Changes-to-This-Policy" className="space-y-4">
              <h2 className="text-xl font-semibold">Changes to This Policy</h2>
              <p>
                Updates will be posted on this page. Continued use of Agtrade
                constitutes acceptance.
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
