"use client";

import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { EventOverview } from "@/components/EventOverview";
import { TeamsSection } from "@/components/TeamsSection";
import { VenueSection } from "@/components/VenueSection";
import { FilmSection } from "@/components/FilmSection";
import { EVENT_DATA } from "@/lib/constants";

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
            "startDate": EVENT_DATA.date,
            "endDate": EVENT_DATA.endDate,
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "Place",
              "name": EVENT_DATA.location,
              "address": EVENT_DATA.address
            },
            "description": "Elite programs from the 2028, 2029 & 2030 divisions compete in a one-day showcase.",
            "performer": [...new Set(EVENT_DATA.teams.filter((team) => team.logo).map((team) => team.name))]
          })
        }}
      />

      <Hero />
      <EventOverview />
      <TeamsSection />
      <FilmSection />
      <VenueSection />
      <Footer />
    </div>
  );
};

export default Index;
