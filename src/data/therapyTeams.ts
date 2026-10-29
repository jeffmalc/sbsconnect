export interface TherapyTeam {
  id: string;
  region: string;
  regionName: string;
  available: boolean;
  tags: string[];
  therapist: {
    name: string;
    title: string;
    credentials: string;
    experience: string;
    bio: string;
    avatar: string;
  };
  supervisor: {
    name: string;
    title: string;
    credentials: string;
    cpbaoReg: string;
    specialty: string;
  };
  disciplines: string[];
  rating: number;
  activeHours: string;
}

export const therapyTeamsData: TherapyTeam[] = [
  {
    id: 'team-toronto-sarah-rebecca',
    region: 'toronto',
    regionName: 'Toronto Central',
    available: true,
    tags: ['aac', 'assent'],
    therapist: {
      name: 'Sarah Lin',
      title: 'Instructor Therapist',
      credentials: 'M.ADS, Registered Behaviour Technician',
      experience: '5 years in-home ABA',
      bio: 'Passionate about assent-based play and AAC tablet integration. Loves turning everyday kitchen activities into joyful communication opportunities.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    supervisor: {
      name: 'Dr. Rebecca Vance',
      title: 'Supervising Registered Behaviour Analyst',
      credentials: 'Ph.D., BCBA-D, R.B.A. (Ont.)',
      cpbaoReg: 'CPBAO #0842',
      specialty: 'Assent-Based Programming & Functional Communication',
    },
    disciplines: ['In-Home ABA', 'TouchChat AAC', 'PECS'],
    rating: 4.9,
    activeHours: '15-20 hrs/week available',
  },
  {
    id: 'team-peel-marcus-elena',
    region: 'peel',
    regionName: 'Peel (Mississauga & Brampton)',
    available: true,
    tags: ['toilet', 'school'],
    therapist: {
      name: 'Marcus Campbell',
      title: 'Senior Instructor Therapist',
      credentials: 'B.A. Behavioural Psychology',
      experience: '6 years in-home care',
      bio: 'Specializes in toilet training protocols, morning school transitions, and cooperative motor routines in family homes.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    supervisor: {
      name: 'Elena Rostova',
      title: 'Supervising Registered Behaviour Analyst',
      credentials: 'M.Sc., BCBA, R.B.A. (Ont.)',
      cpbaoReg: 'CPBAO #1129',
      specialty: 'Daily Living Independence & Parent Coaching',
    },
    disciplines: ['Daily Living ABA', 'Toilet Training', 'Kindergarten Prep'],
    rating: 5.0,
    activeHours: '10-18 hrs/week available',
  },
  {
    id: 'team-york-amira-daniel',
    region: 'york',
    regionName: 'York Region (Vaughan & Markham)',
    available: true,
    tags: ['assent', 'aac'],
    therapist: {
      name: 'Amira Patel',
      title: 'Instructor Therapist',
      credentials: 'B.Sc., Post-Grad ABA',
      experience: '4 years community therapy',
      bio: 'Bilingual (English/Hindi). Dedicated to gentle, trauma-informed assent protocols that respect autistic sensory regulation.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    },
    supervisor: {
      name: 'Daniel Tremblay',
      title: 'Supervising Registered Behaviour Analyst',
      credentials: 'M.Ed., BCBA, R.B.A. (Ont.)',
      cpbaoReg: 'CPBAO #0954',
      specialty: 'Trauma-Informed ABA & Sensory Collaboration',
    },
    disciplines: ['Assent-Based ABA', 'Multilingual Support', 'Sensory Play'],
    rating: 4.8,
    activeHours: '12-25 hrs/week available',
  },
  {
    id: 'team-ottawa-chloe-julie',
    region: 'ottawa',
    regionName: 'Ottawa & Eastern Ontario',
    available: true,
    tags: ['school', 'toilet'],
    therapist: {
      name: 'Chloe Tremblay',
      title: 'Instructor Therapist',
      credentials: 'B.A. Child Studies, ABA Cert.',
      experience: '4 years in-home experience',
      bio: 'Bilingual French/English clinician with a deep love for cooperative outdoor play and naturalistic daily routines.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    },
    supervisor: {
      name: 'Julie Desjardins',
      title: 'Supervising Registered Behaviour Analyst',
      credentials: 'M.ADS, BCBA, R.B.A. (Ont.)',
      cpbaoReg: 'CPBAO #1430',
      specialty: 'Bilingual Clinical Programming & School Transitions',
    },
    disciplines: ['Bilingual ABA (FR/EN)', 'Social Peer Play', 'Self-Care'],
    rating: 4.9,
    activeHours: '10-20 hrs/week available',
  },
  {
    id: 'team-waterloo-david-priya',
    region: 'waterloo',
    regionName: 'Waterloo, Kitchener & Guelph',
    available: true,
    tags: ['aac', 'assent'],
    therapist: {
      name: 'David Park',
      title: 'Instructor Therapist',
      credentials: 'B.Sc. Cognitive Science',
      experience: '3 years clinical practice',
      bio: 'Passionate about augmentative communication devices and helping non-speaking children express their authentic needs.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    supervisor: {
      name: 'Priya Sundaram',
      title: 'Supervising Registered Behaviour Analyst',
      credentials: 'M.A., BCBA, R.B.A. (Ont.)',
      cpbaoReg: 'CPBAO #0762',
      specialty: 'Augmentative Communication & Non-Vocal Behavior',
    },
    disciplines: ['Proloquo2Go / iPad AAC', 'In-Home ABA', 'Sensory Regulation'],
    rating: 4.9,
    activeHours: '8-15 hrs/week available',
  },
  {
    id: 'team-hamilton-jessica-marcus',
    region: 'hamilton',
    regionName: 'Hamilton, Burlington & Halton',
    available: true,
    tags: ['toilet', 'school', 'assent'],
    therapist: {
      name: 'Jessica Walsh',
      title: 'Instructor Therapist',
      credentials: 'M.ADS, Certified RBT',
      experience: '5 years community & home',
      bio: 'Focuses on building trusting bonds with caregivers, integrating sensory breaks, and gentle toilet independence.',
      avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    },
    supervisor: {
      name: 'Marcus Sterling',
      title: 'Supervising Registered Behaviour Analyst',
      credentials: 'M.Ed., BCBA, R.B.A. (Ont.)',
      cpbaoReg: 'CPBAO #1045',
      specialty: 'Early Intensive Intervention & Caregiver Training',
    },
    disciplines: ['Assent ABA', 'Parent Coaching', 'Toileting'],
    rating: 5.0,
    activeHours: '12-20 hrs/week available',
  },
];

export const faqsData = [
  {
    id: 1,
    question: 'What is the difference between an Instructor Therapist and a Supervising RBA?',
    answer:
      'The <strong>Instructor Therapist (IT)</strong> is the front-line clinician who comes to your home multiple times per week to run 1-on-1 teaching trials, functional play, and self-care routines directly with your child. The <strong>Registered Behaviour Analyst (R.B.A. Ont.)</strong> is the licensed college registrant who designs your child\'s Behaviour Service Plan (BSP), directly observes sessions in real-time, trains the therapist, and holds statutory responsibility under the College of Psychologists and Behaviour Analysts of Ontario (CPBAO).',
  },
  {
    id: 2,
    question: 'How does Side by Side Therapy Connect comply with CPBAO Standard 4.9?',
    answer:
      'Since July 1, 2024, Ontario law prohibits "tiered" supervision where unregulated managers supervise therapists. On our connection platform, every Instructor Therapist is formally bound to a licensed Supervising RBA via an executed <strong>CPBAO Standard 4.4 Supervision Agreement</strong>. The supervising RBA directly monitors sessions, co-signs all progress reports, and is fully accessible to the family.',
  },
  {
    id: 3,
    question: 'Can I use my Ontario Autism Program (OAP) funding for connected in-home therapy?',
    answer:
      'Yes, 100%. All invoices generated through our platform contain the exact required billing line items: the dates, hours, Instructor Therapist name, and the Supervising RBA\'s signature and CPBAO registration number. This satisfies both OAP Core Clinical Services reconciliation and private extended health benefit plans.',
  },
  {
    id: 4,
    question: 'What happens if my child refuses or becomes overwhelmed during a session?',
    answer:
      'All clinicians on our platform practice <strong>assent-based ABA</strong>. If a child communicates distress or non-assent—verbally or through body language—we immediately pause, honor their need for space, and modify the environmental demand. We never use physical prompting or forced compliance.',
  },
];
