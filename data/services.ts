import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Ban,
  Brain,
  Briefcase,
  Building2,
  ClipboardList,
  GraduationCap,
  Hand,
  Heart,
  HeartHandshake,
  HeartPulse,
  House,
  Leaf,
  LifeBuoy,
  MessageCircle,
  Presentation,
  Puzzle,
  Route,
  School,
  Stethoscope,
  UserRound,
  Users,
  Wind,
} from "lucide-react";

export type Service = { title: string; icon: LucideIcon };

/** BRD §5 — Child Services */
export const childServices: Service[] = [
  { title: "Developmental Assessments", icon: ClipboardList },
  { title: "Psychological Assessments", icon: Brain },
  { title: "Speech Therapy", icon: MessageCircle },
  { title: "Occupational Therapy (OT)", icon: Hand },
  { title: "Behavior Therapy", icon: Puzzle },
  { title: "Special Education", icon: GraduationCap },
  { title: "School Readiness Support", icon: School },
  { title: "Parent Guidance & Parent Training", icon: Users },
  { title: "Individualized Developmental Intervention Programs", icon: Route },
  { title: "Pediatric Consultations", icon: Stethoscope },
  { title: "Psychiatric Consultations", icon: HeartPulse },
];

/** BRD §5 — Adult, Adolescent, Couple & Family Services */
export const adultServices: Service[] = [
  { title: "Psychological Assessments", icon: Brain },
  { title: "Individual Therapy/Counselling", icon: UserRound },
  { title: "Couple Therapy", icon: HeartHandshake },
  { title: "Family Therapy", icon: House },
  { title: "Adolescent Counselling", icon: GraduationCap },
  { title: "De-addiction Interventions", icon: Ban },
  { title: "Improving Sexual Well-being", icon: Heart },
  { title: "Stress Management", icon: Wind },
  { title: "Emotional Support & Counselling", icon: LifeBuoy },
  { title: "Behavioural Support", icon: Activity },
  { title: "Mental Health Care & Psychotherapy", icon: Leaf },
  { title: "Psychiatric Consultations", icon: HeartPulse },
];

/** BRD §5 — General Services */
export const generalServices: Service[] = [
  { title: "School Mental Health Programs", icon: School },
  { title: "Awareness Sessions & Workshops", icon: Presentation },
  { title: "Parenting Workshops", icon: Users },
];

/** BRD §5 — Corporate & Organizational Services */
export const corporateServices: Service[] = [
  { title: "Employee Mental Health Support", icon: Heart },
  { title: "Employee Assistance Programs (EAP)", icon: Briefcase },
  { title: "Corporate Wellness Programs", icon: Building2 },
  { title: "Stress Management Workshops", icon: Wind },
  { title: "Workplace Mental Health Training", icon: Leaf },
];

/** Shown on the home page cards; full lists live on /services */
export const childHighlights = [
  "Developmental Assessments",
  "Speech Therapy",
  "Behavior Therapy",
];

export const adultHighlights = [
  "Individual Therapy/Counselling",
  "Couple & Family Therapy",
  "Stress Management",
];
