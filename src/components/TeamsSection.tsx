"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { EVENT_DATA, type Team } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TeamsSection() {
  const [activeTab, setActiveTab] = useState(EVENT_DATA.divisions[0]);

  const teamsByDivision = EVENT_DATA.teams.reduce((acc, team) => {
    if (!acc[team.division]) {
      acc[team.division] = [];
    }
    acc[team.division].push(team);
    return acc;
  }, {} as Record<string, Team[]>);

  return (
    <Section
      id="teams"
      kicker="Elite Competition"
      title="Divisions & Teams"
      description="Elite programs competing across three divisions"
    >
      {/* Division Tabs */}
      <Reveal delay={0.2}>
        <div
          role="tablist"
          aria-label="Divisions"
          className="grid border border-border mb-8 lg:mb-12"
          style={{ gridTemplateColumns: `repeat(${EVENT_DATA.divisions.length}, minmax(0, 1fr))` }}
        >
          {EVENT_DATA.divisions.map((division) => {
            const isActive = activeTab === division;
            const teamCount = teamsByDivision[division]?.length ?? 0;

            return (
              <button
                key={division}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(division)}
                className={cn(
                  "relative text-left px-4 py-4 sm:px-6 sm:py-5 border-r border-border last:border-r-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
                  isActive ? "bg-background" : "bg-card hover:bg-secondary"
                )}
              >
                <span
                  className={cn(
                    "block font-display text-4xl sm:text-5xl lg:text-6xl leading-none",
                    isActive ? "text-primary" : "text-foreground"
                  )}
                >
                  {division}
                </span>
                <span className="block mt-2 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-foreground-muted">
                  {teamCount} Teams
                </span>
                {isActive && <span className="absolute inset-x-0 bottom-0 h-1 bg-primary" />}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Teams Grid */}
      <Reveal delay={0.4}>
        <div role="tabpanel" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {teamsByDivision[activeTab]?.map((team) => (
            <div
              key={team.name}
              className="flex flex-col bg-card border border-border overflow-hidden"
            >
              {/* Team Logo */}
              <div className="relative aspect-[4/3] bg-white">
                {team.logo ? (
                  <img
                    src={team.logo}
                    alt={`${team.name} logo`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain p-2"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center font-display text-5xl text-neutral-300">
                    TBD
                  </span>
                )}
              </div>

              {/* Team Name */}
              <div className="flex-1 border-t border-border px-4 py-3 sm:px-5 sm:py-4">
                <h3 className="font-display text-lg sm:text-xl uppercase tracking-wide leading-tight text-foreground">
                  {team.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
