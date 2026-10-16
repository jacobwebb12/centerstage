"use client";

import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { MapEmbed } from "@/components/MapEmbed";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { EVENT_DATA } from "@/lib/constants";
import { MapPin, Car } from "lucide-react";

const FIELD_MAP_SRC = "/Centerstage%20Field%20Map.jpg";
const FIELD_MAP_ALT = `Field map of ${EVENT_DATA.location} showing Field 1, Field 2, college coach parking and general parking`;

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

      {/* Field Map */}
      <Reveal delay={0.6}>
        <div id="field-map" className="mt-16 lg:mt-24 scroll-mt-28">
          <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground text-center mb-8">
            Field Map
          </h3>
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="group block mx-auto w-full max-w-xl rounded-xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <img
                  src={FIELD_MAP_SRC}
                  alt={FIELD_MAP_ALT}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>
            </DialogTrigger>
            <DialogContent className="w-[96vw] max-w-[640px] p-2 sm:p-3">
              <DialogTitle className="sr-only">Field Map</DialogTitle>
              <img
                src={FIELD_MAP_SRC}
                alt={FIELD_MAP_ALT}
                className="mx-auto w-auto max-w-full max-h-[85vh] object-contain rounded-md"
              />
            </DialogContent>
          </Dialog>
          <p className="text-center text-sm text-foreground-muted mt-4">
            Click the map to enlarge
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
