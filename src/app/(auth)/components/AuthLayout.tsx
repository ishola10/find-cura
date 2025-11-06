"use client";

import React, { ReactNode } from "react";
import Illustration from "./Illustration";

type Props = {
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  showSteps?: boolean;
  stepIndicator?: string;
};

export default function AuthLayout({
  title,
  subtitle,
  children,
  showSteps = false,
  stepIndicator,
}: Props) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 md:p-12">
      <div className=" w-full  overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-center">
        <div>
          <Illustration />
        </div>
 
        <div className="p-8 md:p-12 text-center">
          <div className="flex items-center justify-between mb-6">
            {/* <div className="text-sm font-medium text-slate-700 text-center">FindCura</div> */}
            {showSteps && (
              <div className="text-sm text-slate-400 font-medium">
                {stepIndicator}
              </div>
            )}
          </div>

          <div className="mb-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-[#000052]">
              {title}
            </h1>
            {subtitle && (
              <p className="text-bold text-[#666697] mt-3 max-w-lg mx-auto">{subtitle}</p>
            )}
          </div>

          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
