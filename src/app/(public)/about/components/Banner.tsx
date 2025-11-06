"use client";

import Image from "next/image";

const AboutBanner = () => {
  return (
    <section className="bg-white text-[#000031] pt-20">
      <div className="max-w-4xl mx-auto text-center px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          The End of the Pharmacy Hunt
          <br />
          Starts Here
        </h2>
        <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
          We’re on a mission to ensure every Nigerian has stress-free access to
          authentic and affordable drugs, no matter where they are.
        </p>
      </div>

      <div className="w-full">
        <Image
          src="/images/about-bg.jpg" 
          alt="Happy people celebrating"
          width={1920}
          height={1080}
          className="w-full h-[320px] md:h-[450px] object-cover"
          priority
        />
      </div>

      <div className="mx-auto px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div>
          <h3 className="text-4xl font-bold mb-3 text-[#071739]">Mission</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            To empower every Nigerian with instant, transparent, and dignified
            access to genuine medication, eliminating the fear of the search and
            the risk of fakes.
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold mb-3 text-[#071739]">Vision</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            To become Nigeria’s most trusted health companion, building the
            digital infrastructure that connects patients to a reliable
            healthcare ecosystem, one prescription at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
