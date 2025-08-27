"use client";

import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { EVENT_DATA } from "@/lib/constants";
import { Calendar, Users, MapPin, Trophy } from "lucide-react";

const stats = [
  { icon: Trophy, value: "2", label: "Divisions", description: "2027 & 2028" },
  { icon: Users, value: "4", label: "Elite Teams", description: "Championship Level" },
  { icon: Calendar, value: "1", label: "Day Event", description: "Fast-Paced Action" },
];

export function EventOverview() {
  return (
    <Section 
      id="overview"
      className="bg-background-lighter relative"
      kicker="Event Overview"
      title="Elite Competition"
      description={EVENT_DATA.description}
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Event Details */}
        <Reveal delay={0.2}>
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Calendar className="w-7 h-7 text-primary" />
                <div>
                  <span className="font-display text-foreground text-lg block">Date:</span>
                  <span className="text-foreground-muted text-lg">Sunday, Nov 9, 2025</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Trophy className="w-7 h-7 text-primary" />
                <div>
                  <span className="font-display text-foreground text-lg block">Divisions:</span>
                  <div className="flex gap-3 mt-2">
                    {EVENT_DATA.divisions.map((division) => (
                      <Badge key={division} variant="accent" className="text-sm px-4 py-2">
                        {division}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="w-7 h-7 text-primary" />
                <div>
                  <span className="font-display text-foreground text-lg block">Venue:</span>
                  <span className="text-foreground-muted text-lg">{EVENT_DATA.location}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stats Cards */}
        <Reveal delay={0.4}>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-card border border-primary/10 rounded-xl p-6 text-center hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="font-display text-foreground text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-foreground-muted">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}