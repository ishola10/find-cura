"use client";

import Image from "next/image";

export default function Illustration() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-[#000052]">Find Cura</h1>
      </div>
      <div className="bg-[#06103a] rounded-xl p-6 flex items-center justify-center">
        <div className="relative w-[360px] h-[360px] md:w-[620px] md:h-[580px]">
          <Image
            src="/images/magnifier-illustration.png"
            alt="illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
