"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <AnimatePresence>
      <motion.nav
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
              ? "bg-card/80 backdrop-blur-md border border-primary/20 rounded-full shadow-lg shadow-primary/10"
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
              <motion.div
                className={cn(
                  "font-display font-bold transition-all duration-300",
                  isScrolled ? "text-xl" : "text-2xl"
                )}
                layout
              >
                <span className="text-foreground">CENTER</span>
                <span className="text-primary">STAGE</span>
              </motion.div>
            </motion.div>

            {/* Navigation Links - Right */}
            <motion.div
              className="flex items-center space-x-2"
              layout
            >
              <Button
                variant="ghost"
                size={isScrolled ? "sm" : "default"}
                onClick={() => scrollToSection("overview")}
                className={cn(
                  "transition-all duration-200 hover:text-primary",
                  isScrolled ? "h-8 px-3 text-sm" : "h-10 px-4"
                )}
              >
                Overview
              </Button>
              <Button
                variant="ghost"
                size={isScrolled ? "sm" : "default"}
                onClick={() => scrollToSection("schedule")}
                className={cn(
                  "transition-all duration-200 hover:text-primary",
                  isScrolled ? "h-8 px-3 text-sm" : "h-10 px-4"
                )}
              >
                Schedule
              </Button>
              <Button
                variant="ghost"
                size={isScrolled ? "sm" : "default"}
                onClick={() => scrollToSection("teams")}
                className={cn(
                  "transition-all duration-200 hover:text-primary",
                  isScrolled ? "h-8 px-3 text-sm" : "h-10 px-4"
                )}
              >
                Teams
              </Button>
              <Button
                variant="ghost"
                size={isScrolled ? "sm" : "default"}
                onClick={() => scrollToSection("film")}
                className={cn(
                  "transition-all duration-200 hover:text-primary",
                  isScrolled ? "h-8 px-3 text-sm" : "h-10 px-4"
                )}
              >
                Game Film
              </Button>
              <Button
                variant="ghost"
                size={isScrolled ? "sm" : "default"}
                onClick={() => scrollToSection("venue")}
                className={cn(
                  "transition-all duration-200 hover:text-primary",
                  isScrolled ? "h-8 px-3 text-sm" : "h-10 px-4"
                )}
              >
                Venue
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>
    </AnimatePresence>
  );
}
