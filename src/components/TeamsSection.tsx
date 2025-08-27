"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EVENT_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TeamsSection() {
  const [activeTab, setActiveTab] = useState("2027");
  
  const teamsByDivision = EVENT_DATA.teams.reduce((acc, team) => {
    if (!acc[team.division]) {
      acc[team.division] = [];
    }
    acc[team.division].push(team);
    return acc;
  }, {} as Record<string, typeof EVENT_DATA.teams>);

  // Team logo mapping
  const teamLogos: Record<string, string> = {
    "2Way Black": "/2w.jpg",
    "Laxachusetts Black": "/lax.jpg", 
    "Shore 2 Shore": "/s2s.jpg",
    "Colorado Kings": "/kings.jpg"
  };

  return (
    <Section 
      id="teams"
      kicker="Elite Competition"
      title="Divisions & Teams"
      description="Four championship-caliber programs competing across two divisions"
    >
      {/* Division Tabs */}
      <Reveal delay={0.2}>
        <div className="flex justify-center mb-12">
          <div className="bg-card border border-primary/20 rounded-xl p-1 inline-flex">
            {EVENT_DATA.divisions.map((division) => (
              <Button
                key={division}
                variant={activeTab === division ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(division)}
                className={cn(
                  "px-6 py-2 font-display font-bold text-lg transition-all duration-200",
                  activeTab === division && "shadow-glow"
                )}
              >
                {division}
              </Button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Teams Grid */}
      <Reveal delay={0.4}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamsByDivision[activeTab]?.map((team, index) => (
            <div
              key={team.name}
              className="group bg-card border border-primary/10 rounded-xl p-8 text-center hover:border-primary/30 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              {/* Team Logo */}
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={teamLogos[team.name]}
                  alt={`${team.name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Team Name */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                {team.name}
              </h3>
              
              {/* Division Badge */}
              <Badge variant="accent" className="mb-4">
                Division {team.division}
              </Badge>
              
              {/* Placeholder for team stats or description */}
              <p className="text-sm text-foreground-muted">
                Elite program competing at the highest level
              </p>
            </div>
          ))}
        </div>
      </Reveal>


    </Section>
  );
}