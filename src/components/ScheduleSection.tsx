"use client";

import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";

export function ScheduleSection() {
  // Game schedule data
  const gameSchedule = [
    { time: "9:00AM", home: "2Way Black", away: "LXC Black", division: "28" },
    { time: "10:00AM", home: "2Way Black", away: "S2S Grizzlies", division: "27" },
    { time: "11:00AM", home: "LXC Black", away: "Red Hots", division: "28" },
    { time: "12:00PM", home: "2Way Black", away: "LXC Black", division: "27" },
    { time: "1:00PM", home: "2Way Black", away: "LXC Black", division: "28" },
    { time: "2:00PM", home: "LXC Black", away: "S2S Grizzlies", division: "27" }
  ];

  return (
    <Section 
      id="schedule"
      kicker="Game Schedule"
      title="Game Schedule"
      description="Complete tournament bracket and match times"
    >
      <Reveal delay={0.2}>
        <div className="max-w-6xl mx-auto">
          {/* Schedule Table */}
          <div className="bg-card border border-primary/10 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-primary/10">
              <h3 className="font-display text-xl font-bold text-foreground">
                Tournament Schedule
              </h3>
              <p className="text-foreground-muted text-sm mt-2">
                Games start at 9:00 AM with 55-minute intervals
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/10 bg-muted/50">
                    <th className="text-left p-4 font-display text-foreground">Time</th>
                    <th className="text-left p-4 font-display text-foreground">Home Team</th>
                    <th className="text-left p-4 font-display text-foreground">Away Team</th>
                    <th className="text-left p-4 font-display text-foreground">Division</th>
                  </tr>
                </thead>
                <tbody>
                  {gameSchedule.map((game, index) => (
                    <tr key={index} className="border-b border-primary/5 hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-display font-bold text-foreground">{game.time}</td>
                      <td className="p-4 text-foreground">{game.home}</td>
                      <td className="p-4 text-foreground">{game.away}</td>
                      <td className="p-4">
                        <Badge variant="accent" className="text-xs">
                          {game.division}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tournament Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-card/50 border border-primary/10 rounded-lg p-6">
              <h4 className="font-display font-bold text-foreground mb-3">Format</h4>
              <p className="text-foreground-muted text-sm">
                Round-robin tournament. Best record is crowned champion.
              </p>
            </div>
            <div className="bg-card/50 border border-primary/10 rounded-lg p-6">
              <h4 className="font-display font-bold text-foreground mb-3">Start Time</h4>
              <p className="text-foreground-muted text-sm">
                Games begin at 9:00 AM 
              </p>
            </div>
            <div className="bg-card/50 border border-primary/10 rounded-lg p-6">
              <h4 className="font-display font-bold text-foreground mb-3">Game Duration</h4>
              <p className="text-foreground-muted text-sm">
                55-minute intervals between games
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}