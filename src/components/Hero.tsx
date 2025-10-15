"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCountdown } from "@/hooks/useCountdown";
import { EVENT_DATA } from "@/lib/constants";
import { Calendar, MapPin, Clock } from "lucide-react";

export function Hero() {
  const countdown = useCountdown(EVENT_DATA.date);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/cstage1.png')",
            backgroundPosition: "center 40%"
          }}
        />
        {/* Grain Overlay */}
        <div className="absolute inset-0 grain" />
        {/* Vignette */}
        <div className="absolute inset-0 vignette" />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Kicker */}
          <Badge variant="event" className="mb-6 animate-glow-pulse">
            <Calendar className="w-4 h-4 mr-2" />
            {EVENT_DATA.subtitle}
          </Badge>

          {/* Main Title */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-normal">
            <span className="text-foreground">CENTER</span>
            <span className="text-primary">STAGE</span>
          </h1>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="date">
              <Calendar className="w-4 h-4 mr-2" />
              Sunday, November 9, 2025
            </Badge>
            <Badge variant="date">
              <MapPin className="w-4 h-4 mr-2" />
              Westminster School
            </Badge>
          </div>

          {/* Countdown */}
          {!countdown.isExpired && (
            <motion.div 
              className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { value: countdown.days, label: "Days" },
                { value: countdown.hours, label: "Hours" },
                { value: countdown.minutes, label: "Min" },
                { value: countdown.seconds, label: "Sec" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-3">
                    <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-foreground-muted font-display uppercase tracking-wide">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              variant="hero" 
              size="hero"
              onClick={() => window.open('https://4qkyqsn19w9.typeform.com/to/lRj9KeEv', '_blank')}
            >
              College Coaches Form
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700"
              onClick={() => window.open('https://starlighttv.net/events/5', '_blank')}
            >
              ORDER GAME FILM
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}