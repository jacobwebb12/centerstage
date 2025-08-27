"use client";

import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { MapEmbed } from "@/components/MapEmbed";
import { EVENT_DATA } from "@/lib/constants";
import { MapPin, Car, Clock, Info } from "lucide-react";

const venueInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: EVENT_DATA.address
  },
  {
    icon: Car,
    title: "Parking",
    details: "Visitor lots adjacent to athletic facilities"
  },
  
  {
    icon: Info,
    title: "Facilities",
    details: "Concessions, restrooms, and seating available"
  }
];

export function VenueSection() {
  return (
    <Section 
      id="venue"
      kicker="Event Location"
      title="Westminster School"
      description="Premier athletic facilities in Simsbury, Connecticut"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Map */}
        <Reveal delay={0.2}>
          <div className="order-2 lg:order-1">
            <MapEmbed />
          </div>
        </Reveal>

        {/* Venue Information */}
        <Reveal delay={0.4}>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              {venueInfo.map((info, index) => (
                <div key={info.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">
                      {info.title}
                    </h3>
                    <p className="text-foreground-muted">
                      {info.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Travel Notes */}
            <div className="bg-card border border-primary/10 rounded-xl p-6">
              <h3 className="font-display font-bold text-foreground mb-4">
                Travel & Parking Notes
              </h3>
              <ul className="space-y-2 text-foreground-muted text-sm">
                <li>• Parking fills up quickly - arrive early</li>
                <li>• Main entrance located on Hopmeadow Street</li>
                <li>• Additional overflow parking available on campus</li>
                <li>• Drop-off zone available for players near athletic center</li>
                <li>• Campus is easily accessible from I-84 and Route 185</li>
              </ul>
            </div>

            {/* Directions Button */}
            <a
              href="https://maps.google.com/?q=Westminster+School+Simsbury+CT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display hover:bg-primary/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}