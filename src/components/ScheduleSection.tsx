"use client";

import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";

export function ScheduleSection() {
  return (
    <Section 
      id="schedule"
      kicker="Game Schedule"
      title="Match Schedule"
      description="Complete tournament bracket and match times"
    >
      <Reveal delay={0.2}>
        <div className="max-w-4xl mx-auto">
          {/* Schedule Release Notice */}
          <div className="bg-card border border-primary/20 rounded-xl p-8 text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Schedule Coming Soon
            </h3>
            
            <p className="text-foreground-muted mb-6 max-w-lg mx-auto">
              The complete match schedule will be released 2 weeks prior to the event. 
              Teams and families will be notified via email.
            </p>
            
            <Badge variant="event">
              <Clock className="w-4 h-4 mr-2" />
              Released 2 weeks prior
            </Badge>
          </div>

          {/* Schedule Table Scaffold */}
          <div className="bg-card border border-primary/10 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-primary/10">
              <h3 className="font-display text-xl font-bold text-foreground">
                Tournament Format
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/10 bg-muted/50">
                    <th className="text-left p-4 font-display text-foreground">Time</th>
                    <th className="text-left p-4 font-display text-foreground">Field</th>
                    <th className="text-left p-4 font-display text-foreground">Home Team</th>
                    <th className="text-left p-4 font-display text-foreground">Away Team</th>
                    <th className="text-left p-4 font-display text-foreground">Division</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <tr key={index} className="border-b border-primary/5">
                      <td className="p-4 text-foreground-muted">TBD</td>
                      <td className="p-4 text-foreground-muted">Field {index % 2 + 1}</td>
                      <td className="p-4 text-foreground-muted">TBD</td>
                      <td className="p-4 text-foreground-muted">TBD</td>
                      <td className="p-4">
                        <Badge variant="outline" className="text-xs">
                          {index % 2 === 0 ? "2027" : "2028"}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tournament Info */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-card/50 border border-primary/10 rounded-lg p-6">
              <h4 className="font-display font-bold text-foreground mb-3">Format</h4>
              <p className="text-foreground-muted text-sm">
                Best record is crowned champion.
              </p>
            </div>
            <div className="bg-card/50 border border-primary/10 rounded-lg p-6">
              <h4 className="font-display font-bold text-foreground mb-3">Duration</h4>
              <p className="text-foreground-muted text-sm">
                Games begin at 8:00 AM
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}