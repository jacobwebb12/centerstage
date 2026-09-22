"use client";

import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { MapEmbed } from "@/components/MapEmbed";
import { EVENT_DATA } from "@/lib/constants";
import { MapPin, Car } from "lucide-react";

const venueInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: EVENT_DATA.address
  },
  {
    icon: Car,
    title: "Parking",
    details: "Arrive early to allow time for parking and check-in"
  }
];

export function VenueSection() {
  return (
    <Section
      id="venue"
      kicker="Event Location"
      title={EVENT_DATA.location}
      description="Portland, Connecticut"
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

            {/* Directions Button */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(`${EVENT_DATA.location}, ${EVENT_DATA.address}`)}`}
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
