"use client";

import { useState, useEffect } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SCRIH",
    description:
      "We are committed to advancing research-driven solutions to enhance Africa’s supply chain systems while contributing to global best practices.",
    image: "/images/scrih.jpg",
    sectionId: "scrih",
  },
  // {
  //   id: 2,
  //   title: "Nigerian Food Security Project",
  //   description:
  //     "The Nigerian Food Security Project is dedicated to addressing every facet of food insecurity by .....",
  //   image: "/images/food-security.png",
  //   sectionId: "food-security",
  // },
  // {
  //   id: 3,
  //   title: "National Agricultural Reference Laboratory",
  //   description:
  //     "NARL is a state-of-the-art reference laboratory dedicated to ensuring food safety, quality control, and global market competitiveness. .....",
  //   image: "/images/narl.png",
  //   sectionId: "narl",
  // },
  // {
  //   id: 4,
  //   title: "Routewatche",
  //   description:
  //     "RouteWatche is an innovative safety app developed by Watche Technologies Limited, a leading Nigerian tech company .....",
  //   image: "/images/routewatche.jpg",
  //   sectionId: "routewatche",
  // },
  // {
  //   id: 5,
  //   title: "Beyond Agriculture",
  //   description:
  //     "Beyond Agriculture engages university students to explore diverse roles in the food security value chain, fostering innovation and ........",
  //   image: "/images/beyond-agriculture.png",
  //   sectionId: "beyond-agriculture",
  // },
];

export default function ProjectDropdown({ closeMenu }: { closeMenu?: () => void }) {
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
    if (closeMenu) closeMenu();
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
            OUR PROJECT <ArrowDown className="" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="border-none shadow-md p-4 bg-black left-0 text-white mt-2">
          <div className="flex flex-col gap-2 md:hidden">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/project#${project.sectionId}`}
                className="block text-left text-sm text-white hover:text-[#9DC02B] transition-colors"
                onClick={handleLinkClick}
              >
                {project.title}
              </Link>
            ))}
          </div>

          <section className="hidden md:block w-full bg-black text-white py-8 px-6 lg:px-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0 md:w-1/6">
                <h2 className="text-sm font-semibold uppercase">
                  Explore Our Product
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="bg-transparent border-none shadow-none"
                  >
                    <CardContent className="flex items-start gap-4 p-0">
                      <div className="flex-shrink-0 w-24 h-20 relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-base text-white font-semibold">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                          {project.description}
                        </p>
                        <Link
                          href={`/project#${project.sectionId}`}
                          className="text-white text-sm underline hover:text-[#9DC02B] transition-colors mt-1"
                          onClick={handleLinkClick}
                        >
                          Read more
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </PopoverContent>
      </Popover>
    </div>
  );
}
