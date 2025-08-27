"use client";

import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { EventOverview } from "@/components/EventOverview";
import { TeamsSection } from "@/components/TeamsSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { VenueSection } from "@/components/VenueSection";
import { FilmSection } from "@/components/FilmSection";

import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            "name": "Centerstage — Team Showcase",
            "startDate": "2025-11-09T09:00:00-05:00",
            "endDate": "2025-11-09T20:00:00-05:00",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "Place",
              "name": "Westminster School",
              "address": "995 Hopmeadow St, Simsbury, CT 06070"
            },
            "description": "Four elite teams from the 2027 & 2028 divisions compete in a one-day championship showcase.",
            "performer": ["2Way Black","Laxachusetts Black","Shore 2 Shore","Colorado Kings"]
          })
        }}
      />
      
      <Hero />
      <EventOverview />
      <TeamsSection />
      <FilmSection />
      <ScheduleSection />
      <VenueSection />
      <Footer />
    </div>
  );
};

export default Index;
