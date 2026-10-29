export interface ServiceRate {
  id: string;
  name: string;
  serviceCategory: string;
  professionalRole: string;
  hourlyRate: number; // CAD
  rateUnit: string; // e.g. "/ hr", "/ assessment"
  billingFormat: string;
  oapEligible: boolean;
  insuranceReimbursable: boolean;
  minHoursRecommended: number;
  maxHoursRecommended: number;
  defaultWeeklyHours: number;
  description: string;
  supervisionRatioPercent: number; // e.g. 12% supervision by RBA
}

export const servicesPricelist: ServiceRate[] = [
  {
    id: 'aba-direct',
    name: 'In-Home Applied Behaviour Analysis (ABA)',
    serviceCategory: 'Behavioural Core',
    professionalRole: 'Instructor Therapist (Direct 1-on-1)',
    hourlyRate: 70,
    rateUnit: '/ hr',
    billingFormat: 'Hourly Direct',
    oapEligible: true,
    insuranceReimbursable: true,
    minHoursRecommended: 4,
    maxHoursRecommended: 25,
    defaultWeeklyHours: 8,
    description: '1-on-1 naturalistic teaching trials, assent-based emotional regulation, self-care routines, and communication.',
    supervisionRatioPercent: 12
  },
  {
    id: 'rba-supervision',
    name: 'Supervising Registered Behaviour Analyst (R.B.A. Ont.)',
    serviceCategory: 'Clinical Governance',
    professionalRole: 'Registered Behaviour Analyst / BCBA',
    hourlyRate: 170,
    rateUnit: '/ hr',
    billingFormat: 'Hourly Consultation',
    oapEligible: true,
    insuranceReimbursable: true,
    minHoursRecommended: 1,
    maxHoursRecommended: 5,
    defaultWeeklyHours: 1,
    description: 'Direct clinical supervision under CPBAO Standard 4, treatment plan design (BSP), assessment, and live fidelity monitoring.',
    supervisionRatioPercent: 0
  },
  {
    id: 'speech-pathology',
    name: 'Speech-Language Pathology (SLP)',
    serviceCategory: 'Allied Clinical',
    professionalRole: 'Registered Speech-Language Pathologist (SLP)',
    hourlyRate: 165,
    rateUnit: '/ hr',
    billingFormat: 'Hourly Clinical',
    oapEligible: true,
    insuranceReimbursable: true,
    minHoursRecommended: 1,
    maxHoursRecommended: 4,
    defaultWeeklyHours: 1,
    description: 'AAC setup & programming, articulation, motor speech planning, and receptive/expressive language intervention.',
    supervisionRatioPercent: 0
  },
  {
    id: 'occupational-therapy',
    name: 'Occupational Therapy (OT)',
    serviceCategory: 'Allied Clinical',
    professionalRole: 'Registered Occupational Therapist (OT Reg. Ont.)',
    hourlyRate: 160,
    rateUnit: '/ hr',
    billingFormat: 'Hourly Clinical',
    oapEligible: true,
    insuranceReimbursable: true,
    minHoursRecommended: 1,
    maxHoursRecommended: 3,
    defaultWeeklyHours: 1,
    description: 'Sensory diet development, fine/gross motor skills, feeding therapy, shoe-tying, and daily self-care autonomy.',
    supervisionRatioPercent: 0
  },
  {
    id: 'parent-coaching',
    name: 'Behaviour Consultation & Parent Coaching',
    serviceCategory: 'Caregiver Support',
    professionalRole: 'Supervising RBA / Clinical Consultant',
    hourlyRate: 160,
    rateUnit: '/ hr',
    billingFormat: 'Hourly Consultation',
    oapEligible: true,
    insuranceReimbursable: true,
    minHoursRecommended: 1,
    maxHoursRecommended: 4,
    defaultWeeklyHours: 1,
    description: 'Practical, trauma-informed guidance for bedtime routines, mealtime struggles, distress de-escalation, and community outings.',
    supervisionRatioPercent: 0
  },
  {
    id: 'social-skills',
    name: 'Social Skills & Peer Dyads',
    serviceCategory: 'Social & Peer',
    professionalRole: 'Instructor Therapist / Group Facilitator',
    hourlyRate: 65,
    rateUnit: '/ hr',
    billingFormat: 'Hourly Session',
    oapEligible: true,
    insuranceReimbursable: true,
    minHoursRecommended: 2,
    maxHoursRecommended: 6,
    defaultWeeklyHours: 2,
    description: 'Authentic peer interactions, cooperative play, and perspective-taking without masking or forced eye contact.',
    supervisionRatioPercent: 10
  },
  {
    id: 'therapeutic-recreation',
    name: 'Therapeutic Recreation & Adaptive Play',
    serviceCategory: 'Recreational Support',
    professionalRole: 'Therapeutic Recreation Specialist',
    hourlyRate: 55,
    rateUnit: '/ hr',
    billingFormat: 'Hourly Session',
    oapEligible: true,
    insuranceReimbursable: false,
    minHoursRecommended: 2,
    maxHoursRecommended: 8,
    defaultWeeklyHours: 2,
    description: 'Adapted community sports, swimming readiness, sensory-friendly hobbies, and confidence-building play.',
    supervisionRatioPercent: 0
  },
  {
    id: 'respite-care',
    name: 'Pediatric Respite & Relief Care',
    serviceCategory: 'Family Relief',
    professionalRole: 'Specialized Respite Worker (Autism Trained)',
    hourlyRate: 38,
    rateUnit: '/ hr',
    billingFormat: 'Hourly Support',
    oapEligible: true,
    insuranceReimbursable: false,
    minHoursRecommended: 4,
    maxHoursRecommended: 20,
    defaultWeeklyHours: 4,
    description: 'Vetted, safety-certified respite giving caregivers a well-deserved break while engaging children in safe preferred routines.',
    supervisionRatioPercent: 0
  },
  {
    id: 'psycho-educational-eval',
    name: 'Psycho-Educational & Diagnostic Assessment',
    serviceCategory: 'Formal Assessment',
    professionalRole: 'Registered Psychologist / Psychometrist',
    hourlyRate: 220,
    rateUnit: '/ hr (Comprehensive Block)',
    billingFormat: 'Flat Assessment Block ($2,800 - $3,500 total)',
    oapEligible: false,
    insuranceReimbursable: true,
    minHoursRecommended: 1,
    maxHoursRecommended: 16,
    defaultWeeklyHours: 2,
    description: 'Cognitive testing, ADHD/ASD formal diagnostic assessment, memory baselines, and school IEP recommendations.',
    supervisionRatioPercent: 0
  }
];
