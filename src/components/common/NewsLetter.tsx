"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="relative w-full h-[400px] overflow-hidden bg-black px-4 md:px-10 lg:px-20">
      <div className="absolute inset-0">
        <Image
          src="/images/newsletter-bg.jpg"
          alt="Newsletter Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="backdrop-blur-md bg-white/5 border border-[#9DC02B] rounded-lg p-8 w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join our newsletter
          </h2>
          <p className="text-white mb-6 text-base md:text-lg max-w-xl mx-auto font-figtree">
            Stay ahead with the latest agricultural market trends, industry insights, and analysis delivered straight to your inbox!
          </p>

          <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent rounded-full border-white/20 text-white placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0 md:w-96"
            />
            <Button
              type="submit"
              className="bg-[#9DC02B] hover:bg-[#85c57a] text-black font-semibold px-6"
            >
              SIGN IN
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
