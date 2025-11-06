"use client";

import { useState, useEffect } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

const sectors = [
  {
    id: 1,
    title: "Daily Food Price Dashboard",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZmM0MDRkMTUtY2I4Mi00YTQzLWI4MTEtYjNiYWZlMzhiOGMzIiwidCI6ImY2NWE0MjA5LWE0YWEtNGQ2MC04ODc5LTc3OWJiYzAzNzgzYiJ9",
  },
  {
    id: 2,
    title: "Forecast Dashboard",
    link: "/",
  },
];

export default function SectorDropdown() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleMouseEnter = () => {
    if (isDesktop) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setOpen(false);
    }
  };

  const handleButtonClick = () => {
    if (!isDesktop) {
      setOpen((prev) => !prev);
    }
  };

  return (
    <div
      className="relative bg-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="bg-none p-0">
          <Button
            onClick={handleButtonClick}
            className="text-sm hover:text-[#9DC02B] bg-black p-0"
          >
            SECTORS <ArrowDown className="" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="border-none shadow-md p-4 bg-black text-white mt-2">
          <div className="flex flex-col gap-2 md:hidden">
            {sectors.map((sector) => (
              <Link
                key={sector.id}
                href={`${sector.link}`}
                target="_blank"
                className="block text-left text-sm text-white hover:text-[#9DC02B] transition-colors"
                onClick={handleLinkClick}
              >
                {sector.title}
              </Link>
            ))}
          </div>
          <section className="hidden md:inline-block w-full bg-black text-white p-4">
            <div className="flex flex-col gap-2">
              {sectors.map((sector) => (
                <Card
                  key={sector.id}
                  className="bg-transparent border-none shadow-none"
                >
                  <CardContent className="flex items-start gap-4 p-0">
                    <div className="flex flex-col">
                      <Link
                        key={sector.id}
                        href={`${sector.link}`}
                        target="_blank"
                        className=" text-white text-sm hover:text-[#9DC02B] transition-colors"
                      >
                        {sector.title}
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </PopoverContent>
      </Popover>
    </div>
  );
}
