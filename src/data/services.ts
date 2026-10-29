export interface ServiceItem {
  id: string;
  name: string;
  shortTag: string;
  category: 'core' | 'allied' | 'assessment' | 'support';
  icon: string; // SVG icon path or emoji identifier
  tagline: string;
  description: string;
  keyOutcomes: string[];
  fundingEligibility: string[];
  intakeGoalTag: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'aba-therapy',
    name: 'Applied Behaviour Analysis (ABA) Therapy',
    shortTag: 'ABA Therapy',
    category: 'core',
    icon: 'brain',
    tagline: 'Assent-based, 1-on-1 natural environment teaching overseen by licensed RBAs.',
    description: 'Our core in-home ABA programs are tailored to your child’s unique developmental profile. Instructor Therapists work directly in your home, daycare, or school to increase functional communication, foster self-advocacy, reduce challenging barriers, and develop essential life routines without forced compliance.',
    keyOutcomes: [
      'Comprehensive ABA (intensive multi-domain learning)',
      'Focused ABA (targeted skill mastery: communication, toilet training, safety)',
      'Direct CPBAO Standard 4 Registered Behaviour Analyst (R.B.A. Ont.) supervision',
      'Assent-based learning honoring sensory and emotional autonomy'
    ],
    fundingEligibility: ['OAP Core Clinical Services', 'OAP Childhood Budgets', 'Extended Health (Psychology / RBA)'],
    intakeGoalTag: 'In-Home ABA Therapy'
  },
  {
    id: 'speech-language-pathology',
    name: 'Speech-Language Pathology (SLP)',
    shortTag: 'Speech Therapy',
    category: 'allied',
    icon: 'speech',
    tagline: 'Bridging vocal speech, motor planning, and Augmentative & Alternative Communication (AAC).',
    description: 'Speech-Language Pathologists provide assessment and intervention for articulation, expressive and receptive language delays, social pragmatic communication, and motor speech. Our teams seamlessly integrate AAC setups (TouchChat, Proloquo2Go, LAMP, PECS) into daily in-home ABA sessions so your child has consistent communication across all environments.',
    keyOutcomes: [
      'Functional AAC device assessment, customization, and implementation',
      'Expressive & receptive language development',
      'Social pragmatic interaction and peer dialogue',
      'Unified speech protocols implemented during weekly ABA trials'
    ],
    fundingEligibility: ['OAP Core Clinical Services', 'Private Extended Health (Speech Therapy)'],
    intakeGoalTag: 'Speech-Language Pathology (SLP)'
  },
  {
    id: 'occupational-therapy',
    name: 'Occupational Therapy (OT)',
    shortTag: 'Occupational Therapy',
    category: 'allied',
    icon: 'puzzle',
    tagline: 'Sensory integration, motor coordination, feeding therapy, and daily living autonomy.',
    description: 'Occupational Therapists help children develop the foundational motor, sensory processing, and self-care skills needed for daily life. We assess sensory thresholds and design customized sensory diets, handwriting supports, shoe-tying/dressing strategies, and gentle feeding protocols that in-home therapists execute consistently.',
    keyOutcomes: [
      'Sensory processing assessment & custom home sensory diet design',
      'Fine and gross motor skills (scissor use, pencil grip, coordination)',
      'Self-care independence (dressing, utensil feeding, hygiene routines)',
      'Emotional and physiological co-regulation strategies'
    ],
    fundingEligibility: ['OAP Core Clinical Services', 'Private Extended Health (Occupational Therapy)'],
    intakeGoalTag: 'Occupational Therapy (OT)'
  },
  {
    id: 'psycho-educational-assessments',
    name: 'Psycho-Educational & Diagnostic Assessments',
    shortTag: 'Assessments',
    category: 'assessment',
    icon: 'clipboard',
    tagline: 'Comprehensive psychological and developmental evaluations to identify learning and cognitive profiles.',
    description: 'Conducted under registered Psychologists and Psychometrists, these evaluations assess cognitive ability, memory, executive functioning, attention (ADHD), and formal autism spectrum diagnostics. Results generate an actionable clinical roadmap for Individual Education Plans (IEPs) and OAP Determination of Needs.',
    keyOutcomes: [
      'Standardized cognitive, academic, and executive functioning testing',
      'Formal Autism Spectrum Disorder (ASD) diagnostic clarity',
      'Direct school recommendations for IEP accommodations and modifications',
      'Baseline documentation required for OAP Core Clinical funding entry'
    ],
    fundingEligibility: ['Private Extended Health (Psychological Services)', 'Out-of-Pocket / Health Spending'],
    intakeGoalTag: 'Psycho-Educational Assessment'
  },
  {
    id: 'behaviour-consultation-parent-coaching',
    name: 'Behaviour Consultation & Parent Coaching',
    shortTag: 'Parent Coaching',
    category: 'core',
    icon: 'users',
    tagline: 'Empowering parents and caregivers with practical, trauma-informed behavioral strategies.',
    description: 'You are the true expert on your child. In our parent coaching sessions, a Supervising RBA works side-by-side with you to navigate mealtime challenges, sleep regressions, public outings, sibling dynamics, and distress de-escalation with practical, trauma-informed guidance you can sustain at home.',
    keyOutcomes: [
      'Empowering caregiver confidence with evidence-based behavioral tools',
      'Bedtime, morning routine, and community outing strategies',
      'Non-coercive distress de-escalation and positive reinforcement systems',
      'Virtual and hands-on in-home coaching sessions'
    ],
    fundingEligibility: ['OAP Core Clinical Services', 'OAP Foundational Family Services', 'Extended Health'],
    intakeGoalTag: 'Behaviour Consultation & Parent Coaching'
  },
  {
    id: 'social-skills-groups',
    name: 'Social Skills & Peer Dyads',
    shortTag: 'Social Skills',
    category: 'support',
    icon: 'chat',
    tagline: 'Naturalistic peer interactions, collaborative play, and cooperative perspective taking.',
    description: 'Children practice authentic peer interaction, turn-taking, shared attention, and group cooperative games in paired dyads or micro-groups. Sessions emphasize authentic self-expression and friendship-building rather than masking or forced neurotypical social conformity.',
    keyOutcomes: [
      'Peer pairing (dyads) based on shared interests and developmental stage',
      'Cooperative game play, conversation initiation, and joint attention',
      'Perspective-taking, self-advocacy, and recognizing peer boundaries',
      'Supported community and park outings'
    ],
    fundingEligibility: ['OAP Core Clinical Services', 'OAP Childhood Budgets'],
    intakeGoalTag: 'Social Skills & Peer Play'
  },
  {
    id: 'therapeutic-recreation',
    name: 'Therapeutic Recreation & Play',
    shortTag: 'Recreation',
    category: 'support',
    icon: 'heart',
    tagline: 'Joyful community and recreational activities adapted to your child’s developmental interests.',
    description: 'Therapeutic recreation specialists design structured leisure and physical activities that foster motor coordination, leisure repertoire, social connection, and emotional well-being. Activities are modified so every child experiences authentic success and confidence.',
    keyOutcomes: [
      'Adaptive sports, swimming readiness, and motor play',
      'Expanding leisure interests and self-directed hobby engagement',
      'Community recreation inclusion (parks, recreation centers, library programs)',
      'Stress reduction and physical wellness'
    ],
    fundingEligibility: ['OAP Core Clinical Services (Recreational)', 'OAP Childhood Budgets'],
    intakeGoalTag: 'Therapeutic Recreation'
  },
  {
    id: 'respite-services',
    name: 'Respite & Relief Care',
    shortTag: 'Respite Care',
    category: 'support',
    icon: 'shield',
    tagline: 'Compassionate, trained support giving caregivers a well-deserved break with peace of mind.',
    description: 'Caring for a child with complex neurodevelopmental needs requires immense dedication. Our vetted respite providers are trained in autism, safety protocols, and positive behavioural supports, offering reliable care in your home or community so caregivers can rest, work, or recharge.',
    keyOutcomes: [
      'Experienced autism-trained caregivers with current vulnerable sector screening',
      'Consistent in-home safety, meal support, and engagement in preferred activities',
      'Flexible scheduling: weekday evenings, weekends, and school holidays',
      'Reduced caregiver burnout and family wellness support'
    ],
    fundingEligibility: ['Special Services at Home (SSAH)', 'Assistance for Children with Severe Disabilities (ACSD)', 'OAP Respite'],
    intakeGoalTag: 'Respite Services'
  },
  {
    id: 'bcba-mentorship-supervision',
    name: 'BCBA / RBA Mentorship & Clinical Supervision',
    shortTag: 'Supervision',
    category: 'core',
    icon: 'academic',
    tagline: 'CPBAO Standard 4.4 compliant clinical supervision and VCS fieldwork mentorship.',
    description: 'For practicing Instructor Therapists, BACB candidates, and new College registrants, we provide rigorous, high-touch clinical supervision adhering strictly to CPBAO Standard 4 and BACB Experience Standards. Learn assent-based programming, advanced functional assessment, and ethical transdisciplinary care.',
    keyOutcomes: [
      'CPBAO Standard 4.4 compliant written supervision contracts',
      'BACB Verified Course Sequence (VCS) concentrated fieldwork hours',
      'Direct observation, performance feedback, and treatment fidelity auditing',
      'Ethics, cultural humility, and neurodiversity-affirming casework'
    ],
    fundingEligibility: ['Professional Development / Contractor Package'],
    intakeGoalTag: 'BCBA / RBA Mentorship'
  }
];
