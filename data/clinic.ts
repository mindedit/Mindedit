/** Clinic content sourced from MINDEDIT_BRD.md — single source of truth for the
 *  About section on the home page and the dedicated About page. */

export const tagline = "Rewriting Every Mind, Every Age";

export const shortDescription =
  "MINDEDIT is a centre for mental health and child development, dedicated to supporting individuals across all stages of life. It promotes growth, resilience, and well-being through compassionate, evidence-based care, for every mind, every age.";

export const detailedDescription =
  "MINDEDIT is a Mental Health and Child Development Centre providing comprehensive psychological and developmental services for both children and adults. It is committed to promoting emotional well-being, developmental growth, and improved quality of life through personalized, evidence-based care.";

export const mission =
  "To provide inclusive, compassionate, and evidence-based care that supports growth, resilience, and well-being across every age and stage of life.";

export const vision =
  "A world where every mind is valued, empowered, and given the opportunity to thrive.";

export const coreValues = [
  { name: "Inclusion", line: "Everyone belongs." },
  { name: "Empathy", line: "Every story matters." },
  { name: "Growth", line: "Change is possible." },
  { name: "Integrity", line: "Care with trust and ethics." },
  { name: "Impact", line: "Creating lasting positive change." },
];

export const whyChooseUs =
  "At MINDEDIT, every individual deserves to be understood, supported, and empowered. Our multidisciplinary team provides personalized, evidence-based care for children, adolescents, adults, couples, and families — combining professional expertise with compassion in a safe, inclusive space.";

export const whoWeServe = [
  {
    title: "For Children",
    body: "Developmental and psychological assessments, speech therapy, occupational therapy, behavior therapy, special education, school readiness support, parent guidance, individualized developmental intervention programs, and pediatric or psychiatric consultations.",
    href: "/services#child-development",
  },
  {
    title: "For Adults, Adolescents, Couples & Families",
    body: "Psychological assessments, individual, couple and family therapy, de-addiction interventions, stress management, emotional and behavioural support, and psychiatric consultations.",
    href: "/services#mental-health",
  },
];

export type FounderProfile = {
  name: string;
  title: string;
  photoSrc: string;
  qualifications?: string[];
};

export const founders: FounderProfile[] = [
  {
    name: "Fia F. Shaji",
    title: "Consultant Psychologist | Founder, MINDEDIT",
    photoSrc: "/Fia.png",
    qualifications: [
      "MSc Clinical Psychology, St. Teresa's College, Ernakulam",
      "BSc Psychology, Kristu Jyothi College, Changanassery",
      "1.5+ years professional experience across children, adolescents, adults, couples, and families",
      "Trained at Pushpagiri Medical College — clinical, educational, and community settings",
      'Associated with Keeku Mental Health Campaign (Hibi Eden MP) and "Mayangilla Keralam" drug awareness initiative (Excise Minister M. Liju)',
      "Conducts workshops and awareness programs in schools, colleges, and the community",
    ],
  },
  {
    name: "Sherook Shemsu",
    title: "Founder | Entrepreneur | MBA",
    photoSrc: "/sherrok.jpeg",
  },
  {
    name: "Abiyas Aksha",
    title: "Founder | Entrepreneur | Engineer",
    photoSrc: "/abhiyas.png",
  },
];

export const founder = founders[0];
export const otherFounders = founders.slice(1);

export const outreach = [
  {
    title: "Keeku Mental Health Campaign",
    body: "Associated with the campaign led by Hibi Eden MP, bringing mental health awareness to a wider public.",
  },
  {
    title: "“Mayangilla Keralam,” Drug Awareness",
    body: "Part of the drug awareness initiative with Excise Minister M. Liju, supporting prevention and early help.",
  },
  {
    title: "Schools, Colleges & Community",
    body: "Regular workshops and awareness programs, including school mental health programs and parenting workshops.",
  },
];

export const clinicFacts = [
  {
    label: "Established",
    value: "Centre established 2026 · consultations since June 2025",
  },
  {
    label: "Location",
    value:
      "MINDEDIT LLP, SNG Nagar, Mulluvila, Vadakkevila P.O, Kollam, Kerala – 691010",
  },
  {
    label: "Clinic Hours",
    value:
      "Adult Services 9:00 AM – 6:00 PM · Child Development Services 9:00 AM – 5:30 PM (by prior booking)",
  },
  {
    label: "Session Length",
    value: "Adults 60 minutes · Children 45 minutes",
  },
  {
    label: "Who We Work With",
    value: "Children, adolescents, adults, couples, and families",
  },
  {
    label: "Consultations",
    value: "Available both online and in-person — no referral needed",
  },
  {
    label: "Booking",
    value:
      "Phone, WhatsApp, email, or online form. Book in advance; payment confirms the slot.",
  },
  {
    label: "Confidentiality",
    value:
      "Strict confidentiality in line with ethical standards, except where disclosure is legally required",
  },
];
