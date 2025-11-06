// "use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
// let's import lexend
import { Lexend } from "next/font/google";
import { Sora } from "next/font/google";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOSInitializer from "@/components/common/AOSInitializer";
import LayoutWrapper from "@/components/common/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Find Cura",
  description: "FindCura - Your Trusted Online Pharmacy Solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} ${sora.variable} ${figtree.variable} ${lexend.variable}`}>
        <AOSInitializer />
           <LayoutWrapper>{children}</LayoutWrapper>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
