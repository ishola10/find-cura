"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, UserCircle } from "lucide-react";
import { getCurrentUser } from "@/services/apiService";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // 🔹 Load user info from localStorage on mount
  useEffect(() => {
    const current = getCurrentUser();
    setUser(current);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/for-pharmacies", label: "For Pharmacies" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-white z-50 shadow-sm">
      <div className="max-w-full mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/logo.png"
            alt="FindCura Logo"
            width={110}
            height={50}
            className="w-24 md:w-32 h-auto"
          />
        </Link>

        {/* Nav links (desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-[#1C1B18] text-base font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative transition ${
                pathname === href
                  ? "text-[#00B4E5]"
                  : "text-[#000031] hover:text-[#00B4E5]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <button
              onClick={() => router.push("/dashboard")}
              className="p-2 rounded-full text-[#000031] hover:text-[#00B4E5] transition"
              aria-label="Go to Dashboard"
            >
              <UserCircle size={28} />
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="text-base font-medium px-4 py-2 rounded-md text-[#000031] hover:text-[#00B4E5] transition"
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className="text-base font-medium px-4 py-2 rounded-md transition bg-[#011549] text-white hover:bg-[#011549]/90"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#1C1B18]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-full bg-[#FDFCF9] z-40 shadow-lg flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <Image
                className="w-12 md:w-16 h-auto"
                src="/icons/logo.png"
                alt="Logo"
                width={100}
                height={40}
              />
              <button onClick={toggleMenu}>
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-[#1C1B18]">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={toggleMenu}
                  className={`text-base font-medium ${
                    pathname === href
                      ? "text-[#00B4E5]"
                      : "hover:text-[#00B4E5]"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 border-t border-[#E0DDD4] pt-4 flex flex-col gap-3">
              {user ? (
                <button
                  onClick={() => {
                    toggleMenu();
                    router.push("/dashboard");
                  }}
                  className="flex items-center gap-2 text-base font-medium text-[#000031] hover:text-[#00B4E5]"
                >
                  <UserCircle size={24} /> Dashboard
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={toggleMenu}
                    className="text-sm font-medium text-[#1C1B18] hover:text-[#00B4E5]"
                  >
                    Login
                  </Link>
                  <Link
                    href="/sign-up"
                    onClick={toggleMenu}
                    className="text-sm font-medium px-4 py-2 rounded-full bg-[#011549] text-white hover:bg-[#011549]/90 w-fit"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
