"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "teams", label: "Teams" },
  { id: "film", label: "Game Film" },
  { id: "venue", label: "Venue" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // No auth controls; site is public

  return (
    <AnimatePresence>
      <motion.nav
        key="navbar"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          isScrolled
            ? "top-4 px-4"
            : "top-0"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={cn(
            "mx-auto max-w-6xl transition-all duration-300 ease-out",
            isScrolled
              ? "bg-card/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg shadow-black/20"
              : "bg-transparent"
          )}
          layout
        >
          <div className={cn(
            "w-full flex items-center justify-between transition-all duration-300 ease-out",
            isScrolled ? "px-6 py-3" : "px-8 py-6"
          )}>
            {/* Logo/Brand - Left */}
            <motion.div
              className="flex items-center"
              layout
            >
              <motion.img
                src="/CS_LOGO_COND.png"
                alt="Centerstage Logo"
                className={cn(
                  "transition-all duration-300",
                  isScrolled ? "h-8" : "h-10"
                )}
                layout
              />
            </motion.div>

            {/* Navigation Links - Center */}
            <motion.div
              className="hidden md:flex items-center space-x-2"
              layout
            >
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size={isScrolled ? "sm" : "default"}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "transition-all duration-200 hover:bg-white/10 hover:text-foreground",
                    isScrolled ? "h-8 px-3 text-sm" : "h-10 px-4"
                  )}
                >
                  {item.label}
                </Button>
              ))}
            </motion.div>

            {/* Right-side controls intentionally empty */}
            <div className="hidden md:flex items-center" />

            {/* Mobile Menu Button */}
            <motion.div
              className="md:hidden flex items-center"
              layout
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-white/10 hover:text-foreground"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence key="mobile-menu">
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed top-20 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-b border-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="justify-start text-left h-12 hover:bg-white/10 hover:text-foreground"
                  >
                    {item.label}
                  </Button>
                ))}
                {/* No mobile logout; site is public */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}
