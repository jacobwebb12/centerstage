export interface Team {
  name: string;
  division: string;
  logo?: string;
}

export const EVENT_DATA = {
  name: "Centerstage",
  subtitle: "Team Showcase",
  date: "2026-11-01T09:00:00-05:00",
  endDate: "2026-11-01T20:00:00-05:00",
  displayDate: "Sunday, November 1, 2026",
  location: "Oakwood Soccer Park",
  address: "521 Glastonbury Turnpike, Portland, CT 06480",
  divisions: ["2028", "2029", "2030"],
  teams: [
    { name: "2Way", division: "2028", logo: "/team_logos/2way.svg" },
    { name: "Laxachusetts Black", division: "2028", logo: "/team_logos/laxachussets.svg" },
    { name: "Eclipse", division: "2028", logo: "/team_logos/eclipse.png" },
    { name: "Red Hots", division: "2028", logo: "/team_logos/redhots.svg" },
    { name: "Sweetlax Upstate", division: "2028", logo: "/team_logos/sweetlaxup.svg" },

    { name: "2Way", division: "2029", logo: "/team_logos/2way.svg" },
    { name: "Laxachusetts Black", division: "2029", logo: "/team_logos/laxachussets.svg" },
    { name: "Red Hots", division: "2029", logo: "/team_logos/redhots.svg" },
    { name: "Sweetlax Upstate", division: "2029", logo: "/team_logos/sweetlaxup.svg" },
    { name: "Beast Canada", division: "2029", logo: "/team_logos/beast%20canada.svg" },
    { name: "TBD", division: "2029" },

    { name: "2Way", division: "2030", logo: "/team_logos/2way.svg" },
    { name: "Sweetlax Upstate", division: "2030", logo: "/team_logos/sweetlaxup.svg" },
    { name: "Red Hots", division: "2030", logo: "/team_logos/redhots.svg" },
    { name: "TBD", division: "2030" }
  ] as Team[],
  description: "Three divisions. Six elite programs. One stage. Centerstage brings the 2028, 2029 and 2030 divisions together for a fast-paced, single-day showcase at Oakwood Soccer Park."
};

export const FAQ_DATA = [
  {
    question: "What divisions are competing?",
    answer: "The showcase features teams from both the 2027 and 2028 divisions, representing some of the most elite programs in youth lacrosse. Each program is sending both a 2027 and 2028 team."
  },
  {
    question: "When will the match schedule be released?",
    answer: "The complete match schedule will be released 2 weeks prior to the event date. Teams and families will be notified via email."
  },
  {
    question: "Where can I park at Westminster School?",
    answer: "Parking is available in the main visitor lots adjacent to the athletic facilities. Arrive early as parking fills up quickly during events."
  },
  {
    question: "Will game film be available?",
    answer: "Yes! Professional game film will be captured for all matches and made available for purchase after the event."
  },
  {
    question: "Are spectators allowed?",
    answer: "Absolutely! Spectators are encouraged to attend and support their teams. Concessions will be available throughout the day."
  },
  {
    question: "What should players bring?",
    answer: "Players should bring full gear, water bottles, and be prepared for all weather conditions. Each team will receive a detailed preparation packet."
  }
];
