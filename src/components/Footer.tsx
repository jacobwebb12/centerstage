"use client";

import { Reveal } from "@/components/Reveal";
import { EVENT_DATA } from "@/lib/constants";
import { Mail, Calendar, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  


  return (
    <footer className="bg-background-lighter border-t border-primary/10">


      {/* Main Footer */}
      <div className="border-t border-primary/10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Event Info */}
            <div>
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                {EVENT_DATA.name}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-foreground-muted">
                  <Calendar className="w-4 h-4" />
                  <span>November 9, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-foreground-muted">
                  <MapPin className="w-4 h-4" />
                  <span>{EVENT_DATA.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
                              <h4 className="font-display text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#overview" className="text-foreground-muted hover:text-primary transition-colors">
                    Event Overview
                  </a>
                </li>
                <li>
                  <a href="#teams" className="text-foreground-muted hover:text-primary transition-colors">
                    Teams & Divisions
                  </a>
                </li>
                <li>
                  <a href="#schedule" className="text-foreground-muted hover:text-primary transition-colors">
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#venue" className="text-foreground-muted hover:text-primary transition-colors">
                    Venue & Travel
                  </a>
                </li>
                <li>
                  <a href="#film" className="text-foreground-muted hover:text-primary transition-colors">
                    Game Film
                  </a>
                </li>
              </ul>
            </div>

            {/* Divisions */}
            <div>
                              <h4 className="font-display text-foreground mb-4">Divisions</h4>
              <ul className="space-y-2 text-sm">
                {EVENT_DATA.divisions.map((division) => (
                  <li key={division} className="text-foreground-muted">
                    Division {division}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
                              <h4 className="font-display text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <a 
                  href="mailto:info@centerstage.com"
                  className="flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@centerstage.com</span>
                </a>
                <a 
                  href="mailto:film@centerstage.com"
                  className="text-foreground-muted hover:text-primary transition-colors block"
                >
                  Game Film Inquiries
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-foreground-muted">
              © {currentYear} Centerstage Lacrosse Showcase. All rights reserved.
            </div>
            <div className="text-sm text-foreground-muted">
              Built for elite youth lacrosse
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}