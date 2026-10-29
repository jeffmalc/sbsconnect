export interface LocationInfo {
  slug: string;
  name: string;
  region: string;
  regionSlug: string;
  countyOrDistrict: string;
  approxDistanceKm: number;
  postalPrefixes: string[];
  populationEstimate: string;
  description: string;
  nearbyAreas: string[];
  localKeywords: string[];
  localContext?: {
    schoolBoards: string[];
    neighbourhoods: string[];
    localChallengeHighlight: string;
    travelFocus: string;
    communityResources: string;
  };
}

export const ontarioLocations: LocationInfo[] = [
  // --- 1. Toronto (Core & Boroughs) ---
  {
    slug: 'toronto',
    name: 'Toronto',
    region: 'City of Toronto',
    regionSlug: 'toronto',
    countyOrDistrict: 'Toronto',
    approxDistanceKm: 0,
    postalPrefixes: ['M4B', 'M4C', 'M4E', 'M4K', 'M4L', 'M5A', 'M5B', 'M5V'],
    populationEstimate: '2,930,000',
    description: 'In-home Applied Behaviour Analysis (ABA) therapy and RBA clinical supervision across Downtown, Midtown, East York, and surrounding Toronto neighbourhoods.',
    nearbyAreas: ['North York', 'Scarborough', 'Etobicoke', 'East York', 'York'],
    localKeywords: ['Toronto in-home ABA therapy', 'Toronto RBA supervision', 'OAP autism provider Toronto', 'Toronto autism therapist'],
      localContext: {
      schoolBoards: ['Toronto District School Board (TDSB)', 'Toronto Catholic District School Board (TCDSB)'],
      neighbourhoods: ['North York', 'Scarborough', 'Etobicoke', 'East York'],
      localChallengeHighlight: 'Navigating congested urban transit and busy condo or multi-story home routines makes clinic visits exhausting. Our therapists bring calming, assent-based sessions directly into your residence.',
      travelFocus: 'Zero TTC commutes, Don Valley Parkway or Gardiner Expressway delays—therapists come to you.',
      communityResources: 'Collaborating with local pediatricians, Holland Bloorview Kids Rehabilitation Hospital, and community speech teams across Toronto.'
    }
  },
  {
    slug: 'north-york',
    name: 'North York',
    region: 'City of Toronto',
    regionSlug: 'toronto',
    countyOrDistrict: 'Toronto',
    approxDistanceKm: 14,
    postalPrefixes: ['M2H', 'M2J', 'M2K', 'M2M', 'M2N', 'M2R', 'M3A', 'M3B'],
    populationEstimate: '672,000',
    description: 'Personalized in-home Instructor Therapist matching and Registered Behaviour Analyst oversight for families in North York.',
    nearbyAreas: ['Toronto', 'Vaughan', 'Markham', 'Scarborough', 'Etobicoke'],
    localKeywords: ['North York ABA therapy', 'North York autism services', 'North York in-home therapist'],
      localContext: {
      schoolBoards: ['Toronto District School Board (TDSB)', 'Toronto Catholic District School Board (TCDSB)'],
      neighbourhoods: ['Toronto', 'Vaughan', 'Markham', 'Scarborough'],
      localChallengeHighlight: 'Navigating congested urban transit and busy condo or multi-story home routines makes clinic visits exhausting. Our therapists bring calming, assent-based sessions directly into your residence.',
      travelFocus: 'Zero TTC commutes, Don Valley Parkway or Gardiner Expressway delays—therapists come to you.',
      communityResources: 'Collaborating with local pediatricians, Holland Bloorview Kids Rehabilitation Hospital, and community speech teams across Toronto.'
    }
  },
  {
    slug: 'scarborough',
    name: 'Scarborough',
    region: 'City of Toronto',
    regionSlug: 'toronto',
    countyOrDistrict: 'Toronto',
    approxDistanceKm: 20,
    postalPrefixes: ['M1B', 'M1C', 'M1E', 'M1G', 'M1H', 'M1J', 'M1K', 'M1L'],
    populationEstimate: '632,000',
    description: 'Direct in-home autism therapy and assent-based behavioural programs serving Scarborough families from the Bluffs to Rouge Park.',
    nearbyAreas: ['Toronto', 'North York', 'Pickering', 'Markham'],
    localKeywords: ['Scarborough ABA therapy', 'Scarborough autism therapist', 'Scarborough OAP provider'],
      localContext: {
      schoolBoards: ['Toronto District School Board (TDSB)', 'Toronto Catholic District School Board (TCDSB)'],
      neighbourhoods: ['Toronto', 'North York', 'Pickering', 'Markham'],
      localChallengeHighlight: 'Navigating congested urban transit and busy condo or multi-story home routines makes clinic visits exhausting. Our therapists bring calming, assent-based sessions directly into your residence.',
      travelFocus: 'Zero TTC commutes, Don Valley Parkway or Gardiner Expressway delays—therapists come to you.',
      communityResources: 'Collaborating with local pediatricians, Holland Bloorview Kids Rehabilitation Hospital, and community speech teams across Toronto.'
    }
  },
  {
    slug: 'etobicoke',
    name: 'Etobicoke',
    region: 'City of Toronto',
    regionSlug: 'toronto',
    countyOrDistrict: 'Toronto',
    approxDistanceKm: 16,
    postalPrefixes: ['M8V', 'M8W', 'M8X', 'M8Y', 'M8Z', 'M9A', 'M9B', 'M9C'],
    populationEstimate: '365,000',
    description: 'Compassionate, family-centered in-home ABA therapy teams across South and North Etobicoke, with direct RBA supervision.',
    nearbyAreas: ['Toronto', 'Mississauga', 'North York', 'Brampton'],
    localKeywords: ['Etobicoke ABA therapy', 'Etobicoke autism services', 'Etobicoke in-home RBA'],
      localContext: {
      schoolBoards: ['Toronto District School Board (TDSB)', 'Toronto Catholic District School Board (TCDSB)'],
      neighbourhoods: ['Toronto', 'Mississauga', 'North York', 'Brampton'],
      localChallengeHighlight: 'Navigating congested urban transit and busy condo or multi-story home routines makes clinic visits exhausting. Our therapists bring calming, assent-based sessions directly into your residence.',
      travelFocus: 'Zero TTC commutes, Don Valley Parkway or Gardiner Expressway delays—therapists come to you.',
      communityResources: 'Collaborating with local pediatricians, Holland Bloorview Kids Rehabilitation Hospital, and community speech teams across Toronto.'
    }
  },
  {
    slug: 'east-york',
    name: 'East York',
    region: 'City of Toronto',
    regionSlug: 'toronto',
    countyOrDistrict: 'Toronto',
    approxDistanceKm: 8,
    postalPrefixes: ['M4B', 'M4C', 'M4G', 'M4H', 'M4J'],
    populationEstimate: '118,000',
    description: 'Community-oriented in-home therapy duos serving East York families, supporting communication, play, and toilet routines.',
    nearbyAreas: ['Toronto', 'Scarborough', 'North York'],
    localKeywords: ['East York ABA therapy', 'East York autism therapy', 'East York RBA supervision'],
      localContext: {
      schoolBoards: ['Toronto District School Board (TDSB)', 'Toronto Catholic District School Board (TCDSB)'],
      neighbourhoods: ['Toronto', 'Scarborough', 'North York'],
      localChallengeHighlight: 'Navigating congested urban transit and busy condo or multi-story home routines makes clinic visits exhausting. Our therapists bring calming, assent-based sessions directly into your residence.',
      travelFocus: 'Zero TTC commutes, Don Valley Parkway or Gardiner Expressway delays—therapists come to you.',
      communityResources: 'Collaborating with local pediatricians, Holland Bloorview Kids Rehabilitation Hospital, and community speech teams across Toronto.'
    }
  },

  // --- 2. Peel Region ---
  {
    slug: 'mississauga',
    name: 'Mississauga',
    region: 'Peel Region',
    regionSlug: 'peel',
    countyOrDistrict: 'Peel',
    approxDistanceKm: 28,
    postalPrefixes: ['L4T', 'L4W', 'L4Z', 'L5A', 'L5B', 'L5C', 'L5K', 'L5L', 'L5M', 'L5N'],
    populationEstimate: '718,000',
    description: 'Leading in-home ABA clinical duos serving Mississauga from Port Credit and Lorne Park to Meadowvale and Churchill Meadows.',
    nearbyAreas: ['Brampton', 'Oakville', 'Etobicoke', 'Milton'],
    localKeywords: ['Mississauga in-home ABA', 'Mississauga autism services', 'Mississauga OAP clinical provider', 'RBA Mississauga'],
      localContext: {
      schoolBoards: ['Peel District School Board (PDSB)', 'Dufferin-Peel Catholic District School Board (DPCDSB)'],
      neighbourhoods: ['Brampton', 'Oakville', 'Etobicoke', 'Milton'],
      localChallengeHighlight: 'With rapidly growing communities and high demand at regional treatment centres like ErinoakKids, long waitlists leave children without vital early intervention. We provide immediate in-home team matching.',
      travelFocus: 'Avoid Highway 403, 410, and QEW rush-hour commutes; sessions take place in your living room and local parks.',
      communityResources: 'Close coordination with ErinoakKids Centre for Treatment and Development and local Peel early years programs.'
    }
  },
  {
    slug: 'brampton',
    name: 'Brampton',
    region: 'Peel Region',
    regionSlug: 'peel',
    countyOrDistrict: 'Peel',
    approxDistanceKm: 38,
    postalPrefixes: ['L6P', 'L6R', 'L6S', 'L6T', 'L6V', 'L6W', 'L6X', 'L6Y', 'L6Z', 'L7A'],
    populationEstimate: '656,000',
    description: 'Multilingual and culturally responsive in-home autism therapy teams with dedicated Supervising RBAs throughout Brampton.',
    nearbyAreas: ['Mississauga', 'Caledon', 'Vaughan', 'Georgetown'],
    localKeywords: ['Brampton ABA therapy', 'Brampton in-home autism', 'Brampton OAP autism', 'Brampton RBA'],
      localContext: {
      schoolBoards: ['Peel District School Board (PDSB)', 'Dufferin-Peel Catholic District School Board (DPCDSB)'],
      neighbourhoods: ['Mississauga', 'Caledon', 'Vaughan', 'Georgetown'],
      localChallengeHighlight: 'With rapidly growing communities and high demand at regional treatment centres like ErinoakKids, long waitlists leave children without vital early intervention. We provide immediate in-home team matching.',
      travelFocus: 'Avoid Highway 403, 410, and QEW rush-hour commutes; sessions take place in your living room and local parks.',
      communityResources: 'Close coordination with ErinoakKids Centre for Treatment and Development and local Peel early years programs.'
    }
  },
  {
    slug: 'caledon',
    name: 'Caledon',
    region: 'Peel Region',
    regionSlug: 'peel',
    countyOrDistrict: 'Peel',
    approxDistanceKm: 55,
    postalPrefixes: ['L7C', 'L7K', 'L7E'],
    populationEstimate: '76,000',
    description: 'Reliable in-home ABA therapy delivered directly to your doorstep across Bolton, Caledon East, and rural Caledon.',
    nearbyAreas: ['Brampton', 'Orangeville', 'Vaughan', 'King City'],
    localKeywords: ['Caledon ABA therapy', 'Bolton autism therapist', 'Caledon in-home ABA'],
      localContext: {
      schoolBoards: ['Peel District School Board (PDSB)', 'Dufferin-Peel Catholic District School Board (DPCDSB)'],
      neighbourhoods: ['Brampton', 'Orangeville', 'Vaughan', 'King City'],
      localChallengeHighlight: 'With rapidly growing communities and high demand at regional treatment centres like ErinoakKids, long waitlists leave children without vital early intervention. We provide immediate in-home team matching.',
      travelFocus: 'Avoid Highway 403, 410, and QEW rush-hour commutes; sessions take place in your living room and local parks.',
      communityResources: 'Close coordination with ErinoakKids Centre for Treatment and Development and local Peel early years programs.'
    }
  },

  // --- 3. York Region ---
  {
    slug: 'vaughan',
    name: 'Vaughan',
    region: 'York Region',
    regionSlug: 'york',
    countyOrDistrict: 'York',
    approxDistanceKm: 30,
    postalPrefixes: ['L4H', 'L4J', 'L4K', 'L4L', 'L6A'],
    populationEstimate: '323,000',
    description: 'Comprehensive in-home ABA therapy teams across Woodbridge, Maple, Thornhill, and Kleinburg under direct RBA supervision.',
    nearbyAreas: ['Richmond Hill', 'Markham', 'Brampton', 'Toronto', 'King City'],
    localKeywords: ['Vaughan ABA therapy', 'Woodbridge autism services', 'Maple ABA therapy', 'Vaughan OAP provider'],
      localContext: {
      schoolBoards: ['York Region District School Board (YRDSB)', 'York Catholic District School Board (YCDSB)'],
      neighbourhoods: ['Richmond Hill', 'Markham', 'Brampton', 'Toronto'],
      localChallengeHighlight: 'Suburban sprawl along the Highway 7 and 404 corridors often means lengthy commutes for center-based therapy. We eliminate travel fatigue so your child’s energy is reserved for learning.',
      travelFocus: 'No driving along Highway 400, 404, or 407; our clinicians travel to family homes throughout York Region.',
      communityResources: 'Partnering with Grandview Kids referrals, Mackenzie Health, and local Markham Stouffville pediatric networks.'
    }
  },
  {
    slug: 'markham',
    name: 'Markham',
    region: 'York Region',
    regionSlug: 'york',
    countyOrDistrict: 'York',
    approxDistanceKm: 30,
    postalPrefixes: ['L3P', 'L3R', 'L3S', 'L3T', 'L6B', 'L6C', 'L6E'],
    populationEstimate: '338,000',
    description: 'High-quality in-home autism therapy teams in Markham and Unionville focusing on functional AAC communication and natural play.',
    nearbyAreas: ['Richmond Hill', 'Vaughan', 'Scarborough', 'Stouffville', 'Pickering'],
    localKeywords: ['Markham ABA therapy', 'Markham autism services', 'Unionville ABA', 'Markham in-home therapist'],
      localContext: {
      schoolBoards: ['York Region District School Board (YRDSB)', 'York Catholic District School Board (YCDSB)'],
      neighbourhoods: ['Richmond Hill', 'Vaughan', 'Scarborough', 'Stouffville'],
      localChallengeHighlight: 'Suburban sprawl along the Highway 7 and 404 corridors often means lengthy commutes for center-based therapy. We eliminate travel fatigue so your child’s energy is reserved for learning.',
      travelFocus: 'No driving along Highway 400, 404, or 407; our clinicians travel to family homes throughout York Region.',
      communityResources: 'Partnering with Grandview Kids referrals, Mackenzie Health, and local Markham Stouffville pediatric networks.'
    }
  },
  {
    slug: 'richmond-hill',
    name: 'Richmond Hill',
    region: 'York Region',
    regionSlug: 'york',
    countyOrDistrict: 'York',
    approxDistanceKm: 35,
    postalPrefixes: ['L4B', 'L4C', 'L4E', 'L4S'],
    populationEstimate: '202,000',
    description: 'Experienced Instructor Therapists and Supervising RBAs serving Richmond Hill families in home and community settings.',
    nearbyAreas: ['Vaughan', 'Markham', 'Aurora', 'North York'],
    localKeywords: ['Richmond Hill ABA therapy', 'Richmond Hill autism therapy', 'Richmond Hill RBA'],
      localContext: {
      schoolBoards: ['York Region District School Board (YRDSB)', 'York Catholic District School Board (YCDSB)'],
      neighbourhoods: ['Vaughan', 'Markham', 'Aurora', 'North York'],
      localChallengeHighlight: 'Suburban sprawl along the Highway 7 and 404 corridors often means lengthy commutes for center-based therapy. We eliminate travel fatigue so your child’s energy is reserved for learning.',
      travelFocus: 'No driving along Highway 400, 404, or 407; our clinicians travel to family homes throughout York Region.',
      communityResources: 'Partnering with Grandview Kids referrals, Mackenzie Health, and local Markham Stouffville pediatric networks.'
    }
  },
  {
    slug: 'newmarket',
    name: 'Newmarket',
    region: 'York Region',
    regionSlug: 'york',
    countyOrDistrict: 'York',
    approxDistanceKm: 50,
    postalPrefixes: ['L3X', 'L3Y'],
    populationEstimate: '88,000',
    description: 'In-home autism therapy supporting daily routines, emotional regulation, and kindergarten transitions across Newmarket.',
    nearbyAreas: ['Aurora', 'East Gwillimbury', 'Bradford', 'King City'],
    localKeywords: ['Newmarket ABA therapy', 'Newmarket autism services', 'Newmarket in-home ABA'],
      localContext: {
      schoolBoards: ['York Region District School Board (YRDSB)', 'York Catholic District School Board (YCDSB)'],
      neighbourhoods: ['Aurora', 'East Gwillimbury', 'Bradford', 'King City'],
      localChallengeHighlight: 'Suburban sprawl along the Highway 7 and 404 corridors often means lengthy commutes for center-based therapy. We eliminate travel fatigue so your child’s energy is reserved for learning.',
      travelFocus: 'No driving along Highway 400, 404, or 407; our clinicians travel to family homes throughout York Region.',
      communityResources: 'Partnering with Grandview Kids referrals, Mackenzie Health, and local Markham Stouffville pediatric networks.'
    }
  },
  {
    slug: 'aurora',
    name: 'Aurora',
    region: 'York Region',
    regionSlug: 'york',
    countyOrDistrict: 'York',
    approxDistanceKm: 45,
    postalPrefixes: ['L4G'],
    populationEstimate: '62,000',
    description: 'Dedicated in-home ABA therapy pairs delivering gentle, assent-based intervention in Aurora.',
    nearbyAreas: ['Newmarket', 'Richmond Hill', 'King City', 'Whitchurch-Stouffville'],
    localKeywords: ['Aurora ABA therapy', 'Aurora autism provider', 'Aurora in-home therapy'],
      localContext: {
      schoolBoards: ['York Region District School Board (YRDSB)', 'York Catholic District School Board (YCDSB)'],
      neighbourhoods: ['Newmarket', 'Richmond Hill', 'King City', 'Whitchurch-Stouffville'],
      localChallengeHighlight: 'Suburban sprawl along the Highway 7 and 404 corridors often means lengthy commutes for center-based therapy. We eliminate travel fatigue so your child’s energy is reserved for learning.',
      travelFocus: 'No driving along Highway 400, 404, or 407; our clinicians travel to family homes throughout York Region.',
      communityResources: 'Partnering with Grandview Kids referrals, Mackenzie Health, and local Markham Stouffville pediatric networks.'
    }
  },
  {
    slug: 'king-city',
    name: 'King City',
    region: 'York Region',
    regionSlug: 'york',
    countyOrDistrict: 'York',
    approxDistanceKm: 42,
    postalPrefixes: ['L7B'],
    populationEstimate: '27,000',
    description: 'In-home clinical autism intervention across King Township, including King City, Nobleton, and Schomberg.',
    nearbyAreas: ['Vaughan', 'Aurora', 'Caledon', 'Newmarket'],
    localKeywords: ['King City ABA therapy', 'King Township autism', 'Nobleton ABA therapist'],
      localContext: {
      schoolBoards: ['York Region District School Board (YRDSB)', 'York Catholic District School Board (YCDSB)'],
      neighbourhoods: ['Vaughan', 'Aurora', 'Caledon', 'Newmarket'],
      localChallengeHighlight: 'Suburban sprawl along the Highway 7 and 404 corridors often means lengthy commutes for center-based therapy. We eliminate travel fatigue so your child’s energy is reserved for learning.',
      travelFocus: 'No driving along Highway 400, 404, or 407; our clinicians travel to family homes throughout York Region.',
      communityResources: 'Partnering with Grandview Kids referrals, Mackenzie Health, and local Markham Stouffville pediatric networks.'
    }
  },
  {
    slug: 'whitchurch-stouffville',
    name: 'Whitchurch-Stouffville',
    region: 'York Region',
    regionSlug: 'york',
    countyOrDistrict: 'York',
    approxDistanceKm: 48,
    postalPrefixes: ['L4A'],
    populationEstimate: '50,000',
    description: 'Family-centered in-home behavioural therapy teams serving Stouffville and surrounding hamlets.',
    nearbyAreas: ['Markham', 'Uxbridge', 'Aurora', 'Pickering'],
    localKeywords: ['Stouffville ABA therapy', 'Stouffville autism services', 'Whitchurch-Stouffville in-home ABA'],
      localContext: {
      schoolBoards: ['York Region District School Board (YRDSB)', 'York Catholic District School Board (YCDSB)'],
      neighbourhoods: ['Markham', 'Uxbridge', 'Aurora', 'Pickering'],
      localChallengeHighlight: 'Suburban sprawl along the Highway 7 and 404 corridors often means lengthy commutes for center-based therapy. We eliminate travel fatigue so your child’s energy is reserved for learning.',
      travelFocus: 'No driving along Highway 400, 404, or 407; our clinicians travel to family homes throughout York Region.',
      communityResources: 'Partnering with Grandview Kids referrals, Mackenzie Health, and local Markham Stouffville pediatric networks.'
    }
  },
  {
    slug: 'georgina',
    name: 'Georgina',
    region: 'York Region',
    regionSlug: 'york',
    countyOrDistrict: 'York',
    approxDistanceKm: 75,
    postalPrefixes: ['L4P', 'L0E'],
    populationEstimate: '47,000',
    description: 'Bringing licensed RBA supervision and qualified Instructor Therapists directly into homes in Keswick, Sutton, and Georgina.',
    nearbyAreas: ['East Gwillimbury', 'Newmarket', 'Bradford', 'Innisfil'],
    localKeywords: ['Georgina ABA therapy', 'Keswick autism therapy', 'Georgina in-home ABA'],
      localContext: {
      schoolBoards: ['York Region District School Board (YRDSB)', 'York Catholic District School Board (YCDSB)'],
      neighbourhoods: ['East Gwillimbury', 'Newmarket', 'Bradford', 'Innisfil'],
      localChallengeHighlight: 'Suburban sprawl along the Highway 7 and 404 corridors often means lengthy commutes for center-based therapy. We eliminate travel fatigue so your child’s energy is reserved for learning.',
      travelFocus: 'No driving along Highway 400, 404, or 407; our clinicians travel to family homes throughout York Region.',
      communityResources: 'Partnering with Grandview Kids referrals, Mackenzie Health, and local Markham Stouffville pediatric networks.'
    }
  },
  {
    slug: 'east-gwillimbury',
    name: 'East Gwillimbury',
    region: 'York Region',
    regionSlug: 'york',
    countyOrDistrict: 'York',
    approxDistanceKm: 60,
    postalPrefixes: ['L9N'],
    populationEstimate: '35,000',
    description: 'Expanding in-home ABA therapy access across Sharon, Queensville, Mount Albert, and Holland Landing.',
    nearbyAreas: ['Newmarket', 'Bradford', 'Georgina', 'Uxbridge'],
    localKeywords: ['East Gwillimbury ABA', 'Holland Landing autism therapy', 'Sharon ABA therapist'],
      localContext: {
      schoolBoards: ['York Region District School Board (YRDSB)', 'York Catholic District School Board (YCDSB)'],
      neighbourhoods: ['Newmarket', 'Bradford', 'Georgina', 'Uxbridge'],
      localChallengeHighlight: 'Suburban sprawl along the Highway 7 and 404 corridors often means lengthy commutes for center-based therapy. We eliminate travel fatigue so your child’s energy is reserved for learning.',
      travelFocus: 'No driving along Highway 400, 404, or 407; our clinicians travel to family homes throughout York Region.',
      communityResources: 'Partnering with Grandview Kids referrals, Mackenzie Health, and local Markham Stouffville pediatric networks.'
    }
  },

  // --- 4. Halton Region ---
  {
    slug: 'oakville',
    name: 'Oakville',
    region: 'Halton Region',
    regionSlug: 'hamilton',
    countyOrDistrict: 'Halton',
    approxDistanceKm: 38,
    postalPrefixes: ['L6H', 'L6J', 'L6K', 'L6L', 'L6M'],
    populationEstimate: '213,000',
    description: 'High-touch in-home autism therapy teams throughout Oakville, collaborating closely with local SLPs, OTs, and schools.',
    nearbyAreas: ['Burlington', 'Mississauga', 'Milton'],
    localKeywords: ['Oakville ABA therapy', 'Oakville autism therapist', 'Oakville in-home ABA', 'Oakville RBA'],
      localContext: {
      schoolBoards: ['Hamilton-Wentworth District School Board (HWDSB)', 'Hamilton-Wentworth Catholic District School Board (HWCDSB)', 'Halton District School Board (HDSB)'],
      neighbourhoods: ['Burlington', 'Mississauga', 'Milton'],
      localChallengeHighlight: 'Escarpment travel and busy arterial corridors can disrupt daily schedules. In-home therapy ensures functional skill trials (toileting, feeding, sibling play) happen right in the home setting.',
      travelFocus: 'No commuting up and down the Mountain accesses, QEW, or Red Hill Valley Parkway.',
      communityResources: 'Integration with McMaster Children’s Hospital (Ron Joyce Children’s Health Centre) and local Halton/Hamilton allied health providers.'
    }
  },
  {
    slug: 'burlington',
    name: 'Burlington',
    region: 'Halton Region',
    regionSlug: 'hamilton',
    countyOrDistrict: 'Halton',
    approxDistanceKm: 55,
    postalPrefixes: ['L7L', 'L7M', 'L7N', 'L7P', 'L7R', 'L7S', 'L7T'],
    populationEstimate: '183,000',
    description: 'Dedicated clinical duos delivering assent-based, play-informed ABA therapy inside Burlington family homes.',
    nearbyAreas: ['Oakville', 'Hamilton', 'Waterdown', 'Milton'],
    localKeywords: ['Burlington ABA therapy', 'Burlington autism services', 'Burlington in-home ABA'],
      localContext: {
      schoolBoards: ['Hamilton-Wentworth District School Board (HWDSB)', 'Hamilton-Wentworth Catholic District School Board (HWCDSB)', 'Halton District School Board (HDSB)'],
      neighbourhoods: ['Oakville', 'Hamilton', 'Waterdown', 'Milton'],
      localChallengeHighlight: 'Escarpment travel and busy arterial corridors can disrupt daily schedules. In-home therapy ensures functional skill trials (toileting, feeding, sibling play) happen right in the home setting.',
      travelFocus: 'No commuting up and down the Mountain accesses, QEW, or Red Hill Valley Parkway.',
      communityResources: 'Integration with McMaster Children’s Hospital (Ron Joyce Children’s Health Centre) and local Halton/Hamilton allied health providers.'
    }
  },
  {
    slug: 'milton',
    name: 'Milton',
    region: 'Halton Region',
    regionSlug: 'hamilton',
    countyOrDistrict: 'Halton',
    approxDistanceKm: 50,
    postalPrefixes: ['L9T', 'L9E'],
    populationEstimate: '133,000',
    description: 'Supporting growing families in Milton with in-home behavioural intervention, toilet training, and emotion regulation.',
    nearbyAreas: ['Mississauga', 'Oakville', 'Burlington', 'Halton Hills'],
    localKeywords: ['Milton ABA therapy', 'Milton autism services', 'Milton in-home therapy', 'Milton OAP'],
      localContext: {
      schoolBoards: ['Hamilton-Wentworth District School Board (HWDSB)', 'Hamilton-Wentworth Catholic District School Board (HWCDSB)', 'Halton District School Board (HDSB)'],
      neighbourhoods: ['Mississauga', 'Oakville', 'Burlington', 'Halton Hills'],
      localChallengeHighlight: 'Escarpment travel and busy arterial corridors can disrupt daily schedules. In-home therapy ensures functional skill trials (toileting, feeding, sibling play) happen right in the home setting.',
      travelFocus: 'No commuting up and down the Mountain accesses, QEW, or Red Hill Valley Parkway.',
      communityResources: 'Integration with McMaster Children’s Hospital (Ron Joyce Children’s Health Centre) and local Halton/Hamilton allied health providers.'
    }
  },
  {
    slug: 'halton-hills',
    name: 'Halton Hills (Georgetown & Acton)',
    region: 'Halton Region',
    regionSlug: 'hamilton',
    countyOrDistrict: 'Halton',
    approxDistanceKm: 60,
    postalPrefixes: ['L7G', 'L7J'],
    populationEstimate: '63,000',
    description: 'Accessible in-home autism care across Georgetown, Acton, and rural Halton Hills under direct RBA governance.',
    nearbyAreas: ['Milton', 'Brampton', 'Guelph', 'Erin'],
    localKeywords: ['Georgetown ABA therapy', 'Acton autism services', 'Halton Hills in-home ABA'],
      localContext: {
      schoolBoards: ['Hamilton-Wentworth District School Board (HWDSB)', 'Hamilton-Wentworth Catholic District School Board (HWCDSB)', 'Halton District School Board (HDSB)'],
      neighbourhoods: ['Milton', 'Brampton', 'Guelph', 'Erin'],
      localChallengeHighlight: 'Escarpment travel and busy arterial corridors can disrupt daily schedules. In-home therapy ensures functional skill trials (toileting, feeding, sibling play) happen right in the home setting.',
      travelFocus: 'No commuting up and down the Mountain accesses, QEW, or Red Hill Valley Parkway.',
      communityResources: 'Integration with McMaster Children’s Hospital (Ron Joyce Children’s Health Centre) and local Halton/Hamilton allied health providers.'
    }
  },

  // --- 5. Durham Region ---
  {
    slug: 'pickering',
    name: 'Pickering',
    region: 'Durham Region',
    regionSlug: 'durham',
    countyOrDistrict: 'Durham',
    approxDistanceKm: 35,
    postalPrefixes: ['L1V', 'L1W', 'L1X', 'L1Y'],
    populationEstimate: '99,000',
    description: 'Connecting Pickering families with vetted Instructor Therapists and supervising RBAs for in-home behavioural therapy.',
    nearbyAreas: ['Ajax', 'Scarborough', 'Markham', 'Whitby'],
    localKeywords: ['Pickering ABA therapy', 'Pickering autism services', 'Pickering in-home ABA'],
      localContext: {
      schoolBoards: ['Durham District School Board (DDSB)', 'Durham Catholic District School Board (DCDSB)'],
      neighbourhoods: ['Ajax', 'Scarborough', 'Markham', 'Whitby'],
      localChallengeHighlight: 'Families along Highway 401 and the Kingston Road corridor often find clinic slots conflict with commuter parent schedules. We offer flexible in-home morning, after-school, and weekend blocks.',
      travelFocus: 'Zero Highway 401 or 407 rush hour trips; consistent therapist visits in your neighbourhood.',
      communityResources: 'Alignment with Grandview Kids Children’s Treatment Centre and Durham Region early years hubs.'
    }
  },
  {
    slug: 'ajax',
    name: 'Ajax',
    region: 'Durham Region',
    regionSlug: 'durham',
    countyOrDistrict: 'Durham',
    approxDistanceKm: 42,
    postalPrefixes: ['L1S', 'L1T', 'L1Z'],
    populationEstimate: '126,000',
    description: 'Comprehensive, assent-based ABA programs delivered right to your home in Ajax, fully OAP-invoicing ready.',
    nearbyAreas: ['Pickering', 'Whitby', 'Oshawa'],
    localKeywords: ['Ajax ABA therapy', 'Ajax autism therapist', 'Ajax in-home ABA therapy'],
      localContext: {
      schoolBoards: ['Durham District School Board (DDSB)', 'Durham Catholic District School Board (DCDSB)'],
      neighbourhoods: ['Pickering', 'Whitby', 'Oshawa'],
      localChallengeHighlight: 'Families along Highway 401 and the Kingston Road corridor often find clinic slots conflict with commuter parent schedules. We offer flexible in-home morning, after-school, and weekend blocks.',
      travelFocus: 'Zero Highway 401 or 407 rush hour trips; consistent therapist visits in your neighbourhood.',
      communityResources: 'Alignment with Grandview Kids Children’s Treatment Centre and Durham Region early years hubs.'
    }
  },
  {
    slug: 'whitby',
    name: 'Whitby',
    region: 'Durham Region',
    regionSlug: 'durham',
    countyOrDistrict: 'Durham',
    approxDistanceKm: 50,
    postalPrefixes: ['L1N', 'L1P', 'L1R'],
    populationEstimate: '138,000',
    description: 'In-home autism therapy teams serving Whitby and Brooklin, targeting functional communication and daily living skills.',
    nearbyAreas: ['Ajax', 'Oshawa', 'Brooklin', 'Pickering'],
    localKeywords: ['Whitby ABA therapy', 'Whitby autism services', 'Brooklin ABA therapist'],
      localContext: {
      schoolBoards: ['Durham District School Board (DDSB)', 'Durham Catholic District School Board (DCDSB)'],
      neighbourhoods: ['Ajax', 'Oshawa', 'Brooklin', 'Pickering'],
      localChallengeHighlight: 'Families along Highway 401 and the Kingston Road corridor often find clinic slots conflict with commuter parent schedules. We offer flexible in-home morning, after-school, and weekend blocks.',
      travelFocus: 'Zero Highway 401 or 407 rush hour trips; consistent therapist visits in your neighbourhood.',
      communityResources: 'Alignment with Grandview Kids Children’s Treatment Centre and Durham Region early years hubs.'
    }
  },
  {
    slug: 'oshawa',
    name: 'Oshawa',
    region: 'Durham Region',
    regionSlug: 'durham',
    countyOrDistrict: 'Durham',
    approxDistanceKm: 60,
    postalPrefixes: ['L1G', 'L1H', 'L1J', 'L1K', 'L1L'],
    populationEstimate: '175,000',
    description: 'Individualized in-home ABA therapy and parent coaching for families in Oshawa with direct CPBAO RBA oversight.',
    nearbyAreas: ['Whitby', 'Courtice', 'Clarington', 'Bowmanville'],
    localKeywords: ['Oshawa ABA therapy', 'Oshawa autism services', 'Oshawa OAP provider'],
      localContext: {
      schoolBoards: ['Durham District School Board (DDSB)', 'Durham Catholic District School Board (DCDSB)'],
      neighbourhoods: ['Whitby', 'Courtice', 'Clarington', 'Bowmanville'],
      localChallengeHighlight: 'Families along Highway 401 and the Kingston Road corridor often find clinic slots conflict with commuter parent schedules. We offer flexible in-home morning, after-school, and weekend blocks.',
      travelFocus: 'Zero Highway 401 or 407 rush hour trips; consistent therapist visits in your neighbourhood.',
      communityResources: 'Alignment with Grandview Kids Children’s Treatment Centre and Durham Region early years hubs.'
    }
  },
  {
    slug: 'clarington',
    name: 'Clarington (Bowmanville & Courtice)',
    region: 'Durham Region',
    regionSlug: 'durham',
    countyOrDistrict: 'Durham',
    approxDistanceKm: 75,
    postalPrefixes: ['L1B', 'L1C', 'L1E'],
    populationEstimate: '101,000',
    description: 'Extending in-home ABA therapy into Bowmanville, Courtice, Newcastle, and rural Clarington.',
    nearbyAreas: ['Oshawa', 'Port Hope', 'Cobourg', 'Scugog'],
    localKeywords: ['Bowmanville ABA therapy', 'Courtice autism services', 'Clarington in-home ABA'],
      localContext: {
      schoolBoards: ['Durham District School Board (DDSB)', 'Durham Catholic District School Board (DCDSB)'],
      neighbourhoods: ['Oshawa', 'Port Hope', 'Cobourg', 'Scugog'],
      localChallengeHighlight: 'Families along Highway 401 and the Kingston Road corridor often find clinic slots conflict with commuter parent schedules. We offer flexible in-home morning, after-school, and weekend blocks.',
      travelFocus: 'Zero Highway 401 or 407 rush hour trips; consistent therapist visits in your neighbourhood.',
      communityResources: 'Alignment with Grandview Kids Children’s Treatment Centre and Durham Region early years hubs.'
    }
  },
  {
    slug: 'uxbridge',
    name: 'Uxbridge',
    region: 'Durham Region',
    regionSlug: 'durham',
    countyOrDistrict: 'Durham',
    approxDistanceKm: 65,
    postalPrefixes: ['L9P'],
    populationEstimate: '21,000',
    description: 'In-home therapy teams traveling to families throughout Uxbridge township, providing consistent naturalistic ABA.',
    nearbyAreas: ['Stouffville', 'Port Perry', 'Newmarket', 'East Gwillimbury'],
    localKeywords: ['Uxbridge ABA therapy', 'Uxbridge autism services', 'Uxbridge in-home therapist'],
      localContext: {
      schoolBoards: ['Durham District School Board (DDSB)', 'Durham Catholic District School Board (DCDSB)'],
      neighbourhoods: ['Stouffville', 'Port Perry', 'Newmarket', 'East Gwillimbury'],
      localChallengeHighlight: 'Families along Highway 401 and the Kingston Road corridor often find clinic slots conflict with commuter parent schedules. We offer flexible in-home morning, after-school, and weekend blocks.',
      travelFocus: 'Zero Highway 401 or 407 rush hour trips; consistent therapist visits in your neighbourhood.',
      communityResources: 'Alignment with Grandview Kids Children’s Treatment Centre and Durham Region early years hubs.'
    }
  },
  {
    slug: 'scugog',
    name: 'Scugog (Port Perry)',
    region: 'Durham Region',
    regionSlug: 'durham',
    countyOrDistrict: 'Durham',
    approxDistanceKm: 80,
    postalPrefixes: ['L9L'],
    populationEstimate: '22,000',
    description: 'In-home clinical autism intervention across Port Perry and township of Scugog.',
    nearbyAreas: ['Uxbridge', 'Oshawa', 'Whitby', 'Lindsay'],
    localKeywords: ['Port Perry ABA therapy', 'Scugog autism therapy', 'Port Perry in-home ABA'],
      localContext: {
      schoolBoards: ['Durham District School Board (DDSB)', 'Durham Catholic District School Board (DCDSB)'],
      neighbourhoods: ['Uxbridge', 'Oshawa', 'Whitby', 'Lindsay'],
      localChallengeHighlight: 'Families along Highway 401 and the Kingston Road corridor often find clinic slots conflict with commuter parent schedules. We offer flexible in-home morning, after-school, and weekend blocks.',
      travelFocus: 'Zero Highway 401 or 407 rush hour trips; consistent therapist visits in your neighbourhood.',
      communityResources: 'Alignment with Grandview Kids Children’s Treatment Centre and Durham Region early years hubs.'
    }
  },

  // --- 6. Hamilton & Niagara ---
  {
    slug: 'hamilton',
    name: 'Hamilton',
    region: 'Hamilton & Niagara',
    regionSlug: 'hamilton',
    countyOrDistrict: 'Hamilton',
    approxDistanceKm: 68,
    postalPrefixes: ['L8E', 'L8G', 'L8H', 'L8K', 'L8L', 'L8M', 'L8P', 'L8S', 'L9A', 'L9B', 'L9C'],
    populationEstimate: '569,000',
    description: 'Vetted in-home Instructor Therapist and RBA duos serving Hamilton, Dundas, Ancaster, Stoney Creek, and the Mountain.',
    nearbyAreas: ['Burlington', 'Stoney Creek', 'Ancaster', 'Dundas', 'Grimsby'],
    localKeywords: ['Hamilton ABA therapy', 'Hamilton autism provider', 'Hamilton in-home therapist', 'RBA Hamilton'],
      localContext: {
      schoolBoards: ['Hamilton-Wentworth District School Board (HWDSB)', 'Hamilton-Wentworth Catholic District School Board (HWCDSB)', 'Halton District School Board (HDSB)'],
      neighbourhoods: ['Burlington', 'Stoney Creek', 'Ancaster', 'Dundas'],
      localChallengeHighlight: 'Escarpment travel and busy arterial corridors can disrupt daily schedules. In-home therapy ensures functional skill trials (toileting, feeding, sibling play) happen right in the home setting.',
      travelFocus: 'No commuting up and down the Mountain accesses, QEW, or Red Hill Valley Parkway.',
      communityResources: 'Integration with McMaster Children’s Hospital (Ron Joyce Children’s Health Centre) and local Halton/Hamilton allied health providers.'
    }
  },
  {
    slug: 'ancaster',
    name: 'Ancaster',
    region: 'Hamilton & Niagara',
    regionSlug: 'hamilton',
    countyOrDistrict: 'Hamilton',
    approxDistanceKm: 75,
    postalPrefixes: ['L9G', 'L9K'],
    populationEstimate: '40,000',
    description: 'Personalized in-home ABA therapy duos serving Ancaster families, targeting social skills and developmental independence.',
    nearbyAreas: ['Hamilton', 'Dundas', 'Brantford', 'Caledonia'],
    localKeywords: ['Ancaster ABA therapy', 'Ancaster autism services', 'Ancaster in-home ABA'],
      localContext: {
      schoolBoards: ['Hamilton-Wentworth District School Board (HWDSB)', 'Hamilton-Wentworth Catholic District School Board (HWCDSB)', 'Halton District School Board (HDSB)'],
      neighbourhoods: ['Hamilton', 'Dundas', 'Brantford', 'Caledonia'],
      localChallengeHighlight: 'Escarpment travel and busy arterial corridors can disrupt daily schedules. In-home therapy ensures functional skill trials (toileting, feeding, sibling play) happen right in the home setting.',
      travelFocus: 'No commuting up and down the Mountain accesses, QEW, or Red Hill Valley Parkway.',
      communityResources: 'Integration with McMaster Children’s Hospital (Ron Joyce Children’s Health Centre) and local Halton/Hamilton allied health providers.'
    }
  },
  {
    slug: 'dundas',
    name: 'Dundas',
    region: 'Hamilton & Niagara',
    regionSlug: 'hamilton',
    countyOrDistrict: 'Hamilton',
    approxDistanceKm: 72,
    postalPrefixes: ['L9H'],
    populationEstimate: '25,000',
    description: 'Warm, assent-based in-home ABA therapy delivered directly inside Dundas family residences.',
    nearbyAreas: ['Hamilton', 'Ancaster', 'Waterdown', 'Flamborough'],
    localKeywords: ['Dundas ABA therapy', 'Dundas autism therapy', 'Dundas in-home therapist'],
      localContext: {
      schoolBoards: ['Hamilton-Wentworth District School Board (HWDSB)', 'Hamilton-Wentworth Catholic District School Board (HWCDSB)', 'Halton District School Board (HDSB)'],
      neighbourhoods: ['Hamilton', 'Ancaster', 'Waterdown', 'Flamborough'],
      localChallengeHighlight: 'Escarpment travel and busy arterial corridors can disrupt daily schedules. In-home therapy ensures functional skill trials (toileting, feeding, sibling play) happen right in the home setting.',
      travelFocus: 'No commuting up and down the Mountain accesses, QEW, or Red Hill Valley Parkway.',
      communityResources: 'Integration with McMaster Children’s Hospital (Ron Joyce Children’s Health Centre) and local Halton/Hamilton allied health providers.'
    }
  },
  {
    slug: 'stoney-creek',
    name: 'Stoney Creek',
    region: 'Hamilton & Niagara',
    regionSlug: 'hamilton',
    countyOrDistrict: 'Hamilton',
    approxDistanceKm: 70,
    postalPrefixes: ['L8E', 'L8G', 'L8J'],
    populationEstimate: '70,000',
    description: 'In-home clinical autism intervention for families across Stoney Creek and Winona.',
    nearbyAreas: ['Hamilton', 'Grimsby', 'Burlington'],
    localKeywords: ['Stoney Creek ABA therapy', 'Stoney Creek autism', 'Stoney Creek in-home ABA'],
      localContext: {
      schoolBoards: ['Hamilton-Wentworth District School Board (HWDSB)', 'Hamilton-Wentworth Catholic District School Board (HWCDSB)', 'Halton District School Board (HDSB)'],
      neighbourhoods: ['Hamilton', 'Grimsby', 'Burlington'],
      localChallengeHighlight: 'Escarpment travel and busy arterial corridors can disrupt daily schedules. In-home therapy ensures functional skill trials (toileting, feeding, sibling play) happen right in the home setting.',
      travelFocus: 'No commuting up and down the Mountain accesses, QEW, or Red Hill Valley Parkway.',
      communityResources: 'Integration with McMaster Children’s Hospital (Ron Joyce Children’s Health Centre) and local Halton/Hamilton allied health providers.'
    }
  },
  {
    slug: 'grimsby',
    name: 'Grimsby',
    region: 'Hamilton & Niagara',
    regionSlug: 'niagara',
    countyOrDistrict: 'Niagara',
    approxDistanceKm: 85,
    postalPrefixes: ['L3M'],
    populationEstimate: '29,000',
    description: 'Direct in-home ABA therapy for families nestled along the Niagara Escarpment in Grimsby.',
    nearbyAreas: ['Stoney Creek', 'Lincoln', 'Beamsville', 'Hamilton'],
    localKeywords: ['Grimsby ABA therapy', 'Grimsby autism therapist', 'Grimsby in-home ABA'],
      localContext: {
      schoolBoards: ['District School Board of Niagara (DSBN)', 'Niagara Catholic District School Board (NCDSB)'],
      neighbourhoods: ['Stoney Creek', 'Lincoln', 'Beamsville', 'Hamilton'],
      localChallengeHighlight: 'Families across the Niagara Peninsula frequently report shortages of specialized clinical ABA teams, often having to travel toward Hamilton. We match you with vetted clinicians in your local community.',
      travelFocus: 'No traveling up the QEW toward Hamilton or Toronto; your clinical team arrives at your doorstep.',
      communityResources: 'Working in harmony with Niagara Children’s Centre and local pediatric medical clinics.'
    }
  },
  {
    slug: 'lincoln',
    name: 'Lincoln (Beamsville)',
    region: 'Hamilton & Niagara',
    regionSlug: 'niagara',
    countyOrDistrict: 'Niagara',
    approxDistanceKm: 95,
    postalPrefixes: ['L0R'],
    populationEstimate: '24,000',
    description: 'In-home ABA and RBA supervision across Beamsville, Vineland, and the town of Lincoln.',
    nearbyAreas: ['Grimsby', 'St. Catharines', 'Smithville', 'Jordan'],
    localKeywords: ['Beamsville ABA therapy', 'Lincoln Ontario autism', 'Vineland ABA therapist'],
      localContext: {
      schoolBoards: ['District School Board of Niagara (DSBN)', 'Niagara Catholic District School Board (NCDSB)'],
      neighbourhoods: ['Grimsby', 'St. Catharines', 'Smithville', 'Jordan'],
      localChallengeHighlight: 'Families across the Niagara Peninsula frequently report shortages of specialized clinical ABA teams, often having to travel toward Hamilton. We match you with vetted clinicians in your local community.',
      travelFocus: 'No traveling up the QEW toward Hamilton or Toronto; your clinical team arrives at your doorstep.',
      communityResources: 'Working in harmony with Niagara Children’s Centre and local pediatric medical clinics.'
    }
  },
  {
    slug: 'st-catharines',
    name: 'St. Catharines',
    region: 'Hamilton & Niagara',
    regionSlug: 'niagara',
    countyOrDistrict: 'Niagara',
    approxDistanceKm: 110,
    postalPrefixes: ['L2M', 'L2N', 'L2P', 'L2R', 'L2S', 'L2T', 'L2W'],
    populationEstimate: '136,000',
    description: 'Providing St. Catharines families with experienced in-home autism therapy teams under direct RBA oversight.',
    nearbyAreas: ['Niagara Falls', 'Thorold', 'Welland', 'Grimsby', 'Niagara-on-the-Lake'],
    localKeywords: ['St. Catharines ABA therapy', 'St. Catharines autism services', 'St. Catharines in-home ABA'],
      localContext: {
      schoolBoards: ['District School Board of Niagara (DSBN)', 'Niagara Catholic District School Board (NCDSB)'],
      neighbourhoods: ['Niagara Falls', 'Thorold', 'Welland', 'Grimsby'],
      localChallengeHighlight: 'Families across the Niagara Peninsula frequently report shortages of specialized clinical ABA teams, often having to travel toward Hamilton. We match you with vetted clinicians in your local community.',
      travelFocus: 'No traveling up the QEW toward Hamilton or Toronto; your clinical team arrives at your doorstep.',
      communityResources: 'Working in harmony with Niagara Children’s Centre and local pediatric medical clinics.'
    }
  },
  {
    slug: 'niagara-falls',
    name: 'Niagara Falls',
    region: 'Hamilton & Niagara',
    regionSlug: 'niagara',
    countyOrDistrict: 'Niagara',
    approxDistanceKm: 130,
    postalPrefixes: ['L2E', 'L2G', 'L2H', 'L2J'],
    populationEstimate: '94,000',
    description: 'In-home behavioural intervention and early childhood therapy teams serving Niagara Falls families.',
    nearbyAreas: ['St. Catharines', 'Welland', 'Fort Erie', 'Thorold'],
    localKeywords: ['Niagara Falls ABA therapy', 'Niagara Falls autism therapy', 'Niagara in-home ABA'],
      localContext: {
      schoolBoards: ['District School Board of Niagara (DSBN)', 'Niagara Catholic District School Board (NCDSB)'],
      neighbourhoods: ['St. Catharines', 'Welland', 'Fort Erie', 'Thorold'],
      localChallengeHighlight: 'Families across the Niagara Peninsula frequently report shortages of specialized clinical ABA teams, often having to travel toward Hamilton. We match you with vetted clinicians in your local community.',
      travelFocus: 'No traveling up the QEW toward Hamilton or Toronto; your clinical team arrives at your doorstep.',
      communityResources: 'Working in harmony with Niagara Children’s Centre and local pediatric medical clinics.'
    }
  },
  {
    slug: 'welland',
    name: 'Welland',
    region: 'Hamilton & Niagara',
    regionSlug: 'niagara',
    countyOrDistrict: 'Niagara',
    approxDistanceKm: 130,
    postalPrefixes: ['L3B', 'L3C'],
    populationEstimate: '55,000',
    description: 'Compassionate in-home autism therapy pairs serving Welland and surrounding South Niagara communities.',
    nearbyAreas: ['St. Catharines', 'Niagara Falls', 'Port Colborne', 'Pelham'],
    localKeywords: ['Welland ABA therapy', 'Welland autism services', 'Welland in-home therapy'],
      localContext: {
      schoolBoards: ['District School Board of Niagara (DSBN)', 'Niagara Catholic District School Board (NCDSB)'],
      neighbourhoods: ['St. Catharines', 'Niagara Falls', 'Port Colborne', 'Pelham'],
      localChallengeHighlight: 'Families across the Niagara Peninsula frequently report shortages of specialized clinical ABA teams, often having to travel toward Hamilton. We match you with vetted clinicians in your local community.',
      travelFocus: 'No traveling up the QEW toward Hamilton or Toronto; your clinical team arrives at your doorstep.',
      communityResources: 'Working in harmony with Niagara Children’s Centre and local pediatric medical clinics.'
    }
  },
  {
    slug: 'niagara-on-the-lake',
    name: 'Niagara-on-the-Lake',
    region: 'Hamilton & Niagara',
    regionSlug: 'niagara',
    countyOrDistrict: 'Niagara',
    approxDistanceKm: 125,
    postalPrefixes: ['L0S'],
    populationEstimate: '19,000',
    description: 'Bespoke in-home ABA therapy programs tailored for children in Niagara-on-the-Lake.',
    nearbyAreas: ['St. Catharines', 'Niagara Falls', 'Queenston', 'Virgil'],
    localKeywords: ['Niagara-on-the-Lake ABA therapy', 'NOTL autism services'],
      localContext: {
      schoolBoards: ['District School Board of Niagara (DSBN)', 'Niagara Catholic District School Board (NCDSB)'],
      neighbourhoods: ['St. Catharines', 'Niagara Falls', 'Queenston', 'Virgil'],
      localChallengeHighlight: 'Families across the Niagara Peninsula frequently report shortages of specialized clinical ABA teams, often having to travel toward Hamilton. We match you with vetted clinicians in your local community.',
      travelFocus: 'No traveling up the QEW toward Hamilton or Toronto; your clinical team arrives at your doorstep.',
      communityResources: 'Working in harmony with Niagara Children’s Centre and local pediatric medical clinics.'
    }
  },
  {
    slug: 'fort-erie',
    name: 'Fort Erie',
    region: 'Hamilton & Niagara',
    regionSlug: 'niagara',
    countyOrDistrict: 'Niagara',
    approxDistanceKm: 155,
    postalPrefixes: ['L2A'],
    populationEstimate: '32,000',
    description: 'Connecting Fort Erie and Crystal Beach families with dedicated in-home autism therapists.',
    nearbyAreas: ['Niagara Falls', 'Port Colborne', 'Welland'],
    localKeywords: ['Fort Erie ABA therapy', 'Fort Erie autism therapy'],
      localContext: {
      schoolBoards: ['District School Board of Niagara (DSBN)', 'Niagara Catholic District School Board (NCDSB)'],
      neighbourhoods: ['Niagara Falls', 'Port Colborne', 'Welland'],
      localChallengeHighlight: 'Families across the Niagara Peninsula frequently report shortages of specialized clinical ABA teams, often having to travel toward Hamilton. We match you with vetted clinicians in your local community.',
      travelFocus: 'No traveling up the QEW toward Hamilton or Toronto; your clinical team arrives at your doorstep.',
      communityResources: 'Working in harmony with Niagara Children’s Centre and local pediatric medical clinics.'
    }
  },

  // --- 7. Waterloo Region & Guelph (Southwestern Ontario) ---
  {
    slug: 'kitchener',
    name: 'Kitchener',
    region: 'Waterloo Region',
    regionSlug: 'waterloo',
    countyOrDistrict: 'Waterloo',
    approxDistanceKm: 105,
    postalPrefixes: ['N2A', 'N2B', 'N2C', 'N2E', 'N2G', 'N2H', 'N2M', 'N2N', 'N2P', 'N2R'],
    populationEstimate: '256,000',
    description: 'Expert in-home ABA therapy duos throughout Kitchener, prioritizing communication, play, and emotional regulation.',
    nearbyAreas: ['Waterloo', 'Cambridge', 'Guelph', 'Breslau'],
    localKeywords: ['Kitchener ABA therapy', 'Kitchener in-home autism', 'Kitchener RBA supervision', 'Kitchener OAP'],
      localContext: {
      schoolBoards: ['Waterloo Region District School Board (WRDSB)', 'Waterloo Catholic District School Board (WCDSB)', 'Upper Grand District School Board (UGDSB)'],
      neighbourhoods: ['Waterloo', 'Cambridge', 'Guelph', 'Breslau'],
      localChallengeHighlight: 'Long regional developmental service waitlists mean precious developmental windows are lost. Our autonomous in-home duos provide fast onboarding and CPBAO Standard 4 direct RBA oversight.',
      travelFocus: 'Skip Highway 7/8 or Highway 401 travel; sessions take place right in your family home or local daycare.',
      communityResources: 'Collaborating with KidsAbility Centre for Child Development and local Tri-City allied health specialists.'
    }
  },
  {
    slug: 'waterloo',
    name: 'Waterloo',
    region: 'Waterloo Region',
    regionSlug: 'waterloo',
    countyOrDistrict: 'Waterloo',
    approxDistanceKm: 110,
    postalPrefixes: ['N2J', 'N2K', 'N2L', 'N2T', 'N2V'],
    populationEstimate: '121,000',
    description: 'Evidence-based in-home autism therapy with direct RBA oversight for families across Waterloo.',
    nearbyAreas: ['Kitchener', 'Cambridge', 'Elmira', 'St. Jacobs'],
    localKeywords: ['Waterloo ABA therapy', 'Waterloo autism services', 'Waterloo in-home therapist'],
      localContext: {
      schoolBoards: ['Waterloo Region District School Board (WRDSB)', 'Waterloo Catholic District School Board (WCDSB)', 'Upper Grand District School Board (UGDSB)'],
      neighbourhoods: ['Kitchener', 'Cambridge', 'Elmira', 'St. Jacobs'],
      localChallengeHighlight: 'Long regional developmental service waitlists mean precious developmental windows are lost. Our autonomous in-home duos provide fast onboarding and CPBAO Standard 4 direct RBA oversight.',
      travelFocus: 'Skip Highway 7/8 or Highway 401 travel; sessions take place right in your family home or local daycare.',
      communityResources: 'Collaborating with KidsAbility Centre for Child Development and local Tri-City allied health specialists.'
    }
  },
  {
    slug: 'cambridge',
    name: 'Cambridge',
    region: 'Waterloo Region',
    regionSlug: 'waterloo',
    countyOrDistrict: 'Waterloo',
    approxDistanceKm: 95,
    postalPrefixes: ['N1R', 'N1S', 'N1T', 'N3C', 'N3E', 'N3H'],
    populationEstimate: '138,000',
    description: 'In-home behavioural therapists serving Galt, Preston, and Hespeler in Cambridge, backed by licensed RBAs.',
    nearbyAreas: ['Kitchener', 'Waterloo', 'Guelph', 'Paris', 'Brantford'],
    localKeywords: ['Cambridge ABA therapy', 'Cambridge autism therapy', 'Cambridge in-home ABA'],
      localContext: {
      schoolBoards: ['Waterloo Region District School Board (WRDSB)', 'Waterloo Catholic District School Board (WCDSB)', 'Upper Grand District School Board (UGDSB)'],
      neighbourhoods: ['Kitchener', 'Waterloo', 'Guelph', 'Paris'],
      localChallengeHighlight: 'Long regional developmental service waitlists mean precious developmental windows are lost. Our autonomous in-home duos provide fast onboarding and CPBAO Standard 4 direct RBA oversight.',
      travelFocus: 'Skip Highway 7/8 or Highway 401 travel; sessions take place right in your family home or local daycare.',
      communityResources: 'Collaborating with KidsAbility Centre for Child Development and local Tri-City allied health specialists.'
    }
  },
  {
    slug: 'guelph',
    name: 'Guelph',
    region: 'Wellington County',
    regionSlug: 'waterloo',
    countyOrDistrict: 'Wellington',
    approxDistanceKm: 90,
    postalPrefixes: ['N1C', 'N1E', 'N1G', 'N1H', 'N1K', 'N1L'],
    populationEstimate: '143,000',
    description: 'Compassionate, assent-based in-home ABA therapy teams across the Royal City of Guelph.',
    nearbyAreas: ['Kitchener', 'Cambridge', 'Milton', 'Fergus', 'Elora', 'Rockwood'],
    localKeywords: ['Guelph ABA therapy', 'Guelph autism services', 'Guelph in-home therapist', 'Guelph RBA'],
      localContext: {
      schoolBoards: ['Waterloo Region District School Board (WRDSB)', 'Waterloo Catholic District School Board (WCDSB)', 'Upper Grand District School Board (UGDSB)'],
      neighbourhoods: ['Kitchener', 'Cambridge', 'Milton', 'Fergus'],
      localChallengeHighlight: 'Long regional developmental service waitlists mean precious developmental windows are lost. Our autonomous in-home duos provide fast onboarding and CPBAO Standard 4 direct RBA oversight.',
      travelFocus: 'Skip Highway 7/8 or Highway 401 travel; sessions take place right in your family home or local daycare.',
      communityResources: 'Collaborating with KidsAbility Centre for Child Development and local Tri-City allied health specialists.'
    }
  },
  {
    slug: 'fergus',
    name: 'Fergus & Elora (Centre Wellington)',
    region: 'Wellington County',
    regionSlug: 'waterloo',
    countyOrDistrict: 'Wellington',
    approxDistanceKm: 110,
    postalPrefixes: ['N1M', 'N0B'],
    populationEstimate: '31,000',
    description: 'Bringing qualified in-home ABA therapy to families throughout Fergus, Elora, and Centre Wellington.',
    nearbyAreas: ['Guelph', 'Orangeville', 'Kitchener', 'Arthur'],
    localKeywords: ['Fergus ABA therapy', 'Elora autism therapy', 'Centre Wellington ABA'],
      localContext: {
      schoolBoards: ['Waterloo Region District School Board (WRDSB)', 'Waterloo Catholic District School Board (WCDSB)', 'Upper Grand District School Board (UGDSB)'],
      neighbourhoods: ['Guelph', 'Orangeville', 'Kitchener', 'Arthur'],
      localChallengeHighlight: 'Long regional developmental service waitlists mean precious developmental windows are lost. Our autonomous in-home duos provide fast onboarding and CPBAO Standard 4 direct RBA oversight.',
      travelFocus: 'Skip Highway 7/8 or Highway 401 travel; sessions take place right in your family home or local daycare.',
      communityResources: 'Collaborating with KidsAbility Centre for Child Development and local Tri-City allied health specialists.'
    }
  },
  {
    slug: 'brantford',
    name: 'Brantford',
    region: 'Brant County',
    regionSlug: 'waterloo',
    countyOrDistrict: 'Brant',
    approxDistanceKm: 105,
    postalPrefixes: ['N3P', 'N3R', 'N3S', 'N3T', 'N3V'],
    populationEstimate: '104,000',
    description: 'Family-centered in-home ABA therapy and clinical supervision serving Brantford and Paris.',
    nearbyAreas: ['Hamilton', 'Cambridge', 'Ancaster', 'Simcoe', 'Paris'],
    localKeywords: ['Brantford ABA therapy', 'Brantford autism services', 'Brantford in-home ABA'],
      localContext: {
      schoolBoards: ['Waterloo Region District School Board (WRDSB)', 'Waterloo Catholic District School Board (WCDSB)', 'Upper Grand District School Board (UGDSB)'],
      neighbourhoods: ['Hamilton', 'Cambridge', 'Ancaster', 'Simcoe'],
      localChallengeHighlight: 'Long regional developmental service waitlists mean precious developmental windows are lost. Our autonomous in-home duos provide fast onboarding and CPBAO Standard 4 direct RBA oversight.',
      travelFocus: 'Skip Highway 7/8 or Highway 401 travel; sessions take place right in your family home or local daycare.',
      communityResources: 'Collaborating with KidsAbility Centre for Child Development and local Tri-City allied health specialists.'
    }
  },
  {
    slug: 'woodstock',
    name: 'Woodstock',
    region: 'Oxford County',
    regionSlug: 'waterloo',
    countyOrDistrict: 'Oxford',
    approxDistanceKm: 140,
    postalPrefixes: ['N4S', 'N4T', 'N4V'],
    populationEstimate: '46,000',
    description: 'In-home autism therapy and developmental support for children in Woodstock and Oxford County.',
    nearbyAreas: ['Kitchener', 'London', 'Brantford', 'Ingersoll', 'Stratford'],
    localKeywords: ['Woodstock ABA therapy', 'Woodstock autism therapy', 'Oxford County ABA'],
      localContext: {
      schoolBoards: ['Waterloo Region District School Board (WRDSB)', 'Waterloo Catholic District School Board (WCDSB)', 'Upper Grand District School Board (UGDSB)'],
      neighbourhoods: ['Kitchener', 'London', 'Brantford', 'Ingersoll'],
      localChallengeHighlight: 'Long regional developmental service waitlists mean precious developmental windows are lost. Our autonomous in-home duos provide fast onboarding and CPBAO Standard 4 direct RBA oversight.',
      travelFocus: 'Skip Highway 7/8 or Highway 401 travel; sessions take place right in your family home or local daycare.',
      communityResources: 'Collaborating with KidsAbility Centre for Child Development and local Tri-City allied health specialists.'
    }
  },
  {
    slug: 'stratford',
    name: 'Stratford',
    region: 'Perth County',
    regionSlug: 'waterloo',
    countyOrDistrict: 'Perth',
    approxDistanceKm: 150,
    postalPrefixes: ['N5A'],
    populationEstimate: '33,000',
    description: 'Gentle, play-based in-home ABA therapy serving families throughout Stratford and Perth County.',
    nearbyAreas: ['Kitchener', 'Waterloo', 'Woodstock', 'St. Marys'],
    localKeywords: ['Stratford ABA therapy', 'Stratford autism services', 'Stratford in-home ABA'],
      localContext: {
      schoolBoards: ['Waterloo Region District School Board (WRDSB)', 'Waterloo Catholic District School Board (WCDSB)', 'Upper Grand District School Board (UGDSB)'],
      neighbourhoods: ['Kitchener', 'Waterloo', 'Woodstock', 'St. Marys'],
      localChallengeHighlight: 'Long regional developmental service waitlists mean precious developmental windows are lost. Our autonomous in-home duos provide fast onboarding and CPBAO Standard 4 direct RBA oversight.',
      travelFocus: 'Skip Highway 7/8 or Highway 401 travel; sessions take place right in your family home or local daycare.',
      communityResources: 'Collaborating with KidsAbility Centre for Child Development and local Tri-City allied health specialists.'
    }
  },
  {
    slug: 'london',
    name: 'London',
    region: 'Middlesex County',
    regionSlug: 'waterloo',
    countyOrDistrict: 'Middlesex',
    approxDistanceKm: 195,
    postalPrefixes: ['N5V', 'N5W', 'N5X', 'N5Y', 'N6A', 'N6B', 'N6C', 'N6E', 'N6G', 'N6H', 'N6J', 'N6K'],
    populationEstimate: '422,000',
    description: 'High-caliber in-home Instructor Therapist matching and supervising RBA clinical guidance throughout London, Ontario.',
    nearbyAreas: ['St. Thomas', 'Woodstock', 'Strathroy', 'Ingersoll'],
    localKeywords: ['London Ontario ABA therapy', 'London autism services', 'London in-home therapist', 'London RBA'],
      localContext: {
      schoolBoards: ['Waterloo Region District School Board (WRDSB)', 'Waterloo Catholic District School Board (WCDSB)', 'Upper Grand District School Board (UGDSB)'],
      neighbourhoods: ['St. Thomas', 'Woodstock', 'Strathroy', 'Ingersoll'],
      localChallengeHighlight: 'Long regional developmental service waitlists mean precious developmental windows are lost. Our autonomous in-home duos provide fast onboarding and CPBAO Standard 4 direct RBA oversight.',
      travelFocus: 'Skip Highway 7/8 or Highway 401 travel; sessions take place right in your family home or local daycare.',
      communityResources: 'Collaborating with KidsAbility Centre for Child Development and local Tri-City allied health specialists.'
    }
  },
  {
    slug: 'st-thomas',
    name: 'St. Thomas',
    region: 'Elgin County',
    regionSlug: 'waterloo',
    countyOrDistrict: 'Elgin',
    approxDistanceKm: 215,
    postalPrefixes: ['N5P', 'N5R'],
    populationEstimate: '43,000',
    description: 'In-home autism therapy serving St. Thomas and Elgin County, fully compliant with CPBAO Standard 4.',
    nearbyAreas: ['London', 'Aylmer', 'Port Stanley', 'Ingersoll'],
    localKeywords: ['St. Thomas ABA therapy', 'St. Thomas autism services', 'Elgin County ABA'],
      localContext: {
      schoolBoards: ['Waterloo Region District School Board (WRDSB)', 'Waterloo Catholic District School Board (WCDSB)', 'Upper Grand District School Board (UGDSB)'],
      neighbourhoods: ['London', 'Aylmer', 'Port Stanley', 'Ingersoll'],
      localChallengeHighlight: 'Long regional developmental service waitlists mean precious developmental windows are lost. Our autonomous in-home duos provide fast onboarding and CPBAO Standard 4 direct RBA oversight.',
      travelFocus: 'Skip Highway 7/8 or Highway 401 travel; sessions take place right in your family home or local daycare.',
      communityResources: 'Collaborating with KidsAbility Centre for Child Development and local Tri-City allied health specialists.'
    }
  },

  // --- 8. Simcoe County & Georgian Bay ---
  {
    slug: 'barrie',
    name: 'Barrie',
    region: 'Simcoe County',
    regionSlug: 'barrie',
    countyOrDistrict: 'Simcoe',
    approxDistanceKm: 90,
    postalPrefixes: ['L4M', 'L4N', 'L9J'],
    populationEstimate: '153,000',
    description: 'Premier in-home ABA therapy teams across Barrie, Innisfil, and Kempenfelt Bay, directly supervised by licensed RBAs.',
    nearbyAreas: ['Innisfil', 'Orillia', 'Bradford', 'Collingwood', 'Alliston'],
    localKeywords: ['Barrie ABA therapy', 'Barrie autism services', 'Barrie in-home ABA', 'Barrie RBA'],
      localContext: {
      schoolBoards: ['Simcoe County District School Board (SCDSB)', 'Simcoe Muskoka Catholic District School Board (SMCDSB)'],
      neighbourhoods: ['Innisfil', 'Orillia', 'Bradford', 'Collingwood'],
      localChallengeHighlight: 'Vast geographical travel across Simcoe County makes frequent clinic visits impractical for many families. Our in-home model delivers high-fidelity clinical intervention across Simcoe communities.',
      travelFocus: 'No battling Highway 400 winter weather or seasonal cottage traffic to access top-tier ABA therapy.',
      communityResources: 'Coordinating with local providers, pediatric clinics, and regional specialized school teams in Simcoe County.'
    }
  },
  {
    slug: 'innisfil',
    name: 'Innisfil',
    region: 'Simcoe County',
    regionSlug: 'barrie',
    countyOrDistrict: 'Simcoe',
    approxDistanceKm: 75,
    postalPrefixes: ['L9S'],
    populationEstimate: '43,000',
    description: 'In-home autism therapy duos serving Alcona, Lefroy, and families across Innisfil.',
    nearbyAreas: ['Barrie', 'Bradford', 'Newmarket'],
    localKeywords: ['Innisfil ABA therapy', 'Innisfil autism therapy', 'Alcona ABA therapist'],
      localContext: {
      schoolBoards: ['Simcoe County District School Board (SCDSB)', 'Simcoe Muskoka Catholic District School Board (SMCDSB)'],
      neighbourhoods: ['Barrie', 'Bradford', 'Newmarket'],
      localChallengeHighlight: 'Vast geographical travel across Simcoe County makes frequent clinic visits impractical for many families. Our in-home model delivers high-fidelity clinical intervention across Simcoe communities.',
      travelFocus: 'No battling Highway 400 winter weather or seasonal cottage traffic to access top-tier ABA therapy.',
      communityResources: 'Coordinating with local providers, pediatric clinics, and regional specialized school teams in Simcoe County.'
    }
  },
  {
    slug: 'bradford-west-gwillimbury',
    name: 'Bradford West Gwillimbury',
    region: 'Simcoe County',
    regionSlug: 'barrie',
    countyOrDistrict: 'Simcoe',
    approxDistanceKm: 60,
    postalPrefixes: ['L3Z'],
    populationEstimate: '42,000',
    description: 'Connecting Bradford families with dedicated in-home Instructor Therapists under direct RBA supervision.',
    nearbyAreas: ['Newmarket', 'Innisfil', 'East Gwillimbury', 'Bond Head'],
    localKeywords: ['Bradford ABA therapy', 'Bradford autism services', 'Bradford in-home ABA'],
      localContext: {
      schoolBoards: ['Simcoe County District School Board (SCDSB)', 'Simcoe Muskoka Catholic District School Board (SMCDSB)'],
      neighbourhoods: ['Newmarket', 'Innisfil', 'East Gwillimbury', 'Bond Head'],
      localChallengeHighlight: 'Vast geographical travel across Simcoe County makes frequent clinic visits impractical for many families. Our in-home model delivers high-fidelity clinical intervention across Simcoe communities.',
      travelFocus: 'No battling Highway 400 winter weather or seasonal cottage traffic to access top-tier ABA therapy.',
      communityResources: 'Coordinating with local providers, pediatric clinics, and regional specialized school teams in Simcoe County.'
    }
  },
  {
    slug: 'orillia',
    name: 'Orillia',
    region: 'Simcoe County',
    regionSlug: 'barrie',
    countyOrDistrict: 'Simcoe',
    approxDistanceKm: 130,
    postalPrefixes: ['L3V'],
    populationEstimate: '33,000',
    description: 'Comprehensive in-home behavioural therapy for children with autism across Orillia and Lake Simcoe.',
    nearbyAreas: ['Barrie', 'Gravenhurst', 'Midland', 'Washago'],
    localKeywords: ['Orillia ABA therapy', 'Orillia autism therapy', 'Orillia in-home ABA'],
      localContext: {
      schoolBoards: ['Simcoe County District School Board (SCDSB)', 'Simcoe Muskoka Catholic District School Board (SMCDSB)'],
      neighbourhoods: ['Barrie', 'Gravenhurst', 'Midland', 'Washago'],
      localChallengeHighlight: 'Vast geographical travel across Simcoe County makes frequent clinic visits impractical for many families. Our in-home model delivers high-fidelity clinical intervention across Simcoe communities.',
      travelFocus: 'No battling Highway 400 winter weather or seasonal cottage traffic to access top-tier ABA therapy.',
      communityResources: 'Coordinating with local providers, pediatric clinics, and regional specialized school teams in Simcoe County.'
    }
  },
  {
    slug: 'collingwood',
    name: 'Collingwood & Blue Mountains',
    region: 'Simcoe County',
    regionSlug: 'barrie',
    countyOrDistrict: 'Simcoe',
    approxDistanceKm: 155,
    postalPrefixes: ['L9Y', 'L9Z'],
    populationEstimate: '35,000',
    description: 'Bespoke in-home ABA therapy delivered directly inside residences throughout Collingwood, Wasaga Beach, and Blue Mountain.',
    nearbyAreas: ['Wasaga Beach', 'Stayner', 'Thornbury', 'Barrie', 'Meaford'],
    localKeywords: ['Collingwood ABA therapy', 'Blue Mountains autism', 'Collingwood in-home ABA'],
      localContext: {
      schoolBoards: ['Simcoe County District School Board (SCDSB)', 'Simcoe Muskoka Catholic District School Board (SMCDSB)'],
      neighbourhoods: ['Wasaga Beach', 'Stayner', 'Thornbury', 'Barrie'],
      localChallengeHighlight: 'Vast geographical travel across Simcoe County makes frequent clinic visits impractical for many families. Our in-home model delivers high-fidelity clinical intervention across Simcoe communities.',
      travelFocus: 'No battling Highway 400 winter weather or seasonal cottage traffic to access top-tier ABA therapy.',
      communityResources: 'Coordinating with local providers, pediatric clinics, and regional specialized school teams in Simcoe County.'
    }
  },
  {
    slug: 'wasaga-beach',
    name: 'Wasaga Beach',
    region: 'Simcoe County',
    regionSlug: 'barrie',
    countyOrDistrict: 'Simcoe',
    approxDistanceKm: 145,
    postalPrefixes: ['L9Z'],
    populationEstimate: '24,000',
    description: 'Naturalistic, in-home autism therapy supporting daily routines and communication for children in Wasaga Beach.',
    nearbyAreas: ['Collingwood', 'Stayner', 'Elmvale', 'Barrie'],
    localKeywords: ['Wasaga Beach ABA therapy', 'Wasaga Beach autism services'],
      localContext: {
      schoolBoards: ['Simcoe County District School Board (SCDSB)', 'Simcoe Muskoka Catholic District School Board (SMCDSB)'],
      neighbourhoods: ['Collingwood', 'Stayner', 'Elmvale', 'Barrie'],
      localChallengeHighlight: 'Vast geographical travel across Simcoe County makes frequent clinic visits impractical for many families. Our in-home model delivers high-fidelity clinical intervention across Simcoe communities.',
      travelFocus: 'No battling Highway 400 winter weather or seasonal cottage traffic to access top-tier ABA therapy.',
      communityResources: 'Coordinating with local providers, pediatric clinics, and regional specialized school teams in Simcoe County.'
    }
  },
  {
    slug: 'new-tecumseth',
    name: 'New Tecumseth (Alliston)',
    region: 'Simcoe County',
    regionSlug: 'barrie',
    countyOrDistrict: 'Simcoe',
    approxDistanceKm: 80,
    postalPrefixes: ['L9R'],
    populationEstimate: '43,000',
    description: 'In-home clinical autism therapy serving Alliston, Tottenham, and Beeton.',
    nearbyAreas: ['Bradford', 'Barrie', 'Orangeville', 'Caledon'],
    localKeywords: ['Alliston ABA therapy', 'Tottenham autism therapy', 'New Tecumseth in-home ABA'],
      localContext: {
      schoolBoards: ['Simcoe County District School Board (SCDSB)', 'Simcoe Muskoka Catholic District School Board (SMCDSB)'],
      neighbourhoods: ['Bradford', 'Barrie', 'Orangeville', 'Caledon'],
      localChallengeHighlight: 'Vast geographical travel across Simcoe County makes frequent clinic visits impractical for many families. Our in-home model delivers high-fidelity clinical intervention across Simcoe communities.',
      travelFocus: 'No battling Highway 400 winter weather or seasonal cottage traffic to access top-tier ABA therapy.',
      communityResources: 'Coordinating with local providers, pediatric clinics, and regional specialized school teams in Simcoe County.'
    }
  },
  {
    slug: 'midland',
    name: 'Midland & Penetanguishene',
    region: 'Simcoe County',
    regionSlug: 'barrie',
    countyOrDistrict: 'Simcoe',
    approxDistanceKm: 150,
    postalPrefixes: ['L4R', 'L9M'],
    populationEstimate: '27,000',
    description: 'Bringing specialized in-home ABA therapy into homes across Midland, Penetanguishene, and Tiny Township.',
    nearbyAreas: ['Orillia', 'Barrie', 'Elmvale'],
    localKeywords: ['Midland ABA therapy', 'Penetanguishene autism therapy'],
      localContext: {
      schoolBoards: ['Simcoe County District School Board (SCDSB)', 'Simcoe Muskoka Catholic District School Board (SMCDSB)'],
      neighbourhoods: ['Orillia', 'Barrie', 'Elmvale'],
      localChallengeHighlight: 'Vast geographical travel across Simcoe County makes frequent clinic visits impractical for many families. Our in-home model delivers high-fidelity clinical intervention across Simcoe communities.',
      travelFocus: 'No battling Highway 400 winter weather or seasonal cottage traffic to access top-tier ABA therapy.',
      communityResources: 'Coordinating with local providers, pediatric clinics, and regional specialized school teams in Simcoe County.'
    }
  },

  // --- 9. Dufferin & Orangeville ---
  {
    slug: 'orangeville',
    name: 'Orangeville',
    region: 'Dufferin County',
    regionSlug: 'barrie',
    countyOrDistrict: 'Dufferin',
    approxDistanceKm: 80,
    postalPrefixes: ['L9V', 'L9W'],
    populationEstimate: '31,000',
    description: 'Dedicated in-home ABA therapy duos serving Orangeville and Dufferin County with direct RBA guidance.',
    nearbyAreas: ['Caledon', 'Shelburne', 'Grand Valley', 'Erin'],
    localKeywords: ['Orangeville ABA therapy', 'Orangeville autism services', 'Orangeville in-home ABA'],
      localContext: {
      schoolBoards: ['Simcoe County District School Board (SCDSB)', 'Simcoe Muskoka Catholic District School Board (SMCDSB)'],
      neighbourhoods: ['Caledon', 'Shelburne', 'Grand Valley', 'Erin'],
      localChallengeHighlight: 'Vast geographical travel across Simcoe County makes frequent clinic visits impractical for many families. Our in-home model delivers high-fidelity clinical intervention across Simcoe communities.',
      travelFocus: 'No battling Highway 400 winter weather or seasonal cottage traffic to access top-tier ABA therapy.',
      communityResources: 'Coordinating with local providers, pediatric clinics, and regional specialized school teams in Simcoe County.'
    }
  },
  {
    slug: 'shelburne',
    name: 'Shelburne',
    region: 'Dufferin County',
    regionSlug: 'barrie',
    countyOrDistrict: 'Dufferin',
    approxDistanceKm: 105,
    postalPrefixes: ['L9V', 'L0N'],
    populationEstimate: '9,000',
    description: 'In-home autism therapy reaching families across Shelburne and northern Dufferin County.',
    nearbyAreas: ['Orangeville', 'Alliston', 'Dundalk'],
    localKeywords: ['Shelburne ABA therapy', 'Shelburne autism services'],
      localContext: {
      schoolBoards: ['Simcoe County District School Board (SCDSB)', 'Simcoe Muskoka Catholic District School Board (SMCDSB)'],
      neighbourhoods: ['Orangeville', 'Alliston', 'Dundalk'],
      localChallengeHighlight: 'Vast geographical travel across Simcoe County makes frequent clinic visits impractical for many families. Our in-home model delivers high-fidelity clinical intervention across Simcoe communities.',
      travelFocus: 'No battling Highway 400 winter weather or seasonal cottage traffic to access top-tier ABA therapy.',
      communityResources: 'Coordinating with local providers, pediatric clinics, and regional specialized school teams in Simcoe County.'
    }
  },

  // --- 10. Peterborough & Kawartha Lakes (Eastern Gateway) ---
  {
    slug: 'peterborough',
    name: 'Peterborough',
    region: 'Peterborough County',
    regionSlug: 'peterborough',
    countyOrDistrict: 'Peterborough',
    approxDistanceKm: 135,
    postalPrefixes: ['K9H', 'K9J', 'K9K', 'K9L'],
    populationEstimate: '84,000',
    description: 'Premier in-home ABA therapy teams serving Peterborough, Lakefield, and Kawartha families under direct RBA oversight.',
    nearbyAreas: ['Lakefield', 'Lindsay', 'Port Hope', 'Cobourg', 'Millbrook'],
    localKeywords: ['Peterborough ABA therapy', 'Peterborough autism services', 'Peterborough in-home therapist', 'Peterborough RBA'],
      localContext: {
      schoolBoards: ['Kawartha Pine Ridge District School Board (KPRDSB)', 'Peterborough Victoria Northumberland and Clarington Catholic District School Board (PVNCCDSB)'],
      neighbourhoods: ['Lakefield', 'Lindsay', 'Port Hope', 'Cobourg'],
      localChallengeHighlight: 'Accessing licensed Registered Behaviour Analysts (R.B.A. Ont.) outside the major metropolitan core can be difficult. We bring licensed RBA clinical oversight directly to Kawartha and Northumberland homes.',
      travelFocus: 'Direct home visits throughout rural and urban Kawarthas without requiring trips to the GTA.',
      communityResources: 'Close communication with Five Counties Children’s Centre and Peterborough regional healthcare teams.'
    }
  },
  {
    slug: 'kawartha-lakes',
    name: 'Kawartha Lakes (Lindsay)',
    region: 'Kawartha Lakes',
    regionSlug: 'peterborough',
    countyOrDistrict: 'Kawartha Lakes',
    approxDistanceKm: 130,
    postalPrefixes: ['K9V'],
    populationEstimate: '79,000',
    description: 'In-home clinical autism intervention across Lindsay, Bobcaygeon, Fenelon Falls, and the City of Kawartha Lakes.',
    nearbyAreas: ['Peterborough', 'Uxbridge', 'Port Perry', 'Orillia'],
    localKeywords: ['Lindsay ABA therapy', 'Kawartha Lakes autism therapy', 'Lindsay in-home ABA'],
      localContext: {
      schoolBoards: ['Kawartha Pine Ridge District School Board (KPRDSB)', 'Peterborough Victoria Northumberland and Clarington Catholic District School Board (PVNCCDSB)'],
      neighbourhoods: ['Peterborough', 'Uxbridge', 'Port Perry', 'Orillia'],
      localChallengeHighlight: 'Accessing licensed Registered Behaviour Analysts (R.B.A. Ont.) outside the major metropolitan core can be difficult. We bring licensed RBA clinical oversight directly to Kawartha and Northumberland homes.',
      travelFocus: 'Direct home visits throughout rural and urban Kawarthas without requiring trips to the GTA.',
      communityResources: 'Close communication with Five Counties Children’s Centre and Peterborough regional healthcare teams.'
    }
  },
  {
    slug: 'cobourg',
    name: 'Cobourg',
    region: 'Northumberland County',
    regionSlug: 'durham',
    countyOrDistrict: 'Northumberland',
    approxDistanceKm: 115,
    postalPrefixes: ['K9A'],
    populationEstimate: '20,000',
    description: 'In-home ABA therapy and clinical supervision serving Cobourg families along the Lake Ontario shoreline.',
    nearbyAreas: ['Port Hope', 'Bowmanville', 'Peterborough', 'Colborne'],
    localKeywords: ['Cobourg ABA therapy', 'Cobourg autism services', 'Northumberland ABA'],
      localContext: {
      schoolBoards: ['Durham District School Board (DDSB)', 'Durham Catholic District School Board (DCDSB)'],
      neighbourhoods: ['Port Hope', 'Bowmanville', 'Peterborough', 'Colborne'],
      localChallengeHighlight: 'Families along Highway 401 and the Kingston Road corridor often find clinic slots conflict with commuter parent schedules. We offer flexible in-home morning, after-school, and weekend blocks.',
      travelFocus: 'Zero Highway 401 or 407 rush hour trips; consistent therapist visits in your neighbourhood.',
      communityResources: 'Alignment with Grandview Kids Children’s Treatment Centre and Durham Region early years hubs.'
    }
  },
  {
    slug: 'port-hope',
    name: 'Port Hope',
    region: 'Northumberland County',
    regionSlug: 'durham',
    countyOrDistrict: 'Northumberland',
    approxDistanceKm: 105,
    postalPrefixes: ['L1A'],
    populationEstimate: '17,000',
    description: 'Providing Port Hope families with consistent, high-fidelity in-home ABA therapy under direct CPBAO RBA supervision.',
    nearbyAreas: ['Cobourg', 'Bowmanville', 'Peterborough', 'Oshawa'],
    localKeywords: ['Port Hope ABA therapy', 'Port Hope autism therapy'],
      localContext: {
      schoolBoards: ['Durham District School Board (DDSB)', 'Durham Catholic District School Board (DCDSB)'],
      neighbourhoods: ['Cobourg', 'Bowmanville', 'Peterborough', 'Oshawa'],
      localChallengeHighlight: 'Families along Highway 401 and the Kingston Road corridor often find clinic slots conflict with commuter parent schedules. We offer flexible in-home morning, after-school, and weekend blocks.',
      travelFocus: 'Zero Highway 401 or 407 rush hour trips; consistent therapist visits in your neighbourhood.',
      communityResources: 'Alignment with Grandview Kids Children’s Treatment Centre and Durham Region early years hubs.'
    }
  },

  // --- 11. Eastern Ontario & Belleville / Kingston Corridor ---
  {
    slug: 'belleville',
    name: 'Belleville & Quinte',
    region: 'Hastings County',
    regionSlug: 'ottawa',
    countyOrDistrict: 'Hastings',
    approxDistanceKm: 185,
    postalPrefixes: ['K8N', 'K8P', 'K8R'],
    populationEstimate: '55,000',
    description: 'In-home autism therapy duos serving Belleville, Trenton, and Quinte West, delivering assent-based clinical intervention.',
    nearbyAreas: ['Trenton', 'Prince Edward County', 'Cobourg', 'Kingston'],
    localKeywords: ['Belleville ABA therapy', 'Belleville autism services', 'Quinte in-home ABA'],
      localContext: {
      schoolBoards: ['Ottawa-Carleton District School Board (OCDSB)', 'Ottawa Catholic School Board (OCSB)', 'Conseil des écoles publiques de l’Est de l’Ontario (CEPEO)', 'Conseil des écoles catholiques du Centre-Est (CECCE)'],
      neighbourhoods: ['Trenton', 'Prince Edward County', 'Cobourg', 'Kingston'],
      localChallengeHighlight: 'Navigating bilingual education requirements and finding assent-based ABA teams fluent in English or French can be challenging. We pair families with culturally affirming, bilingual-ready clinicians.',
      travelFocus: 'Eliminate Queensway (Highway 417) congestion; sessions are conducted in your living room and natural community.',
      communityResources: 'Coordinated with CHEO (Children’s Hospital of Eastern Ontario) autism programming and local allied health clinics.'
    }
  },
  {
    slug: 'kingston',
    name: 'Kingston',
    region: 'Frontenac County',
    regionSlug: 'ottawa',
    countyOrDistrict: 'Frontenac',
    approxDistanceKm: 260,
    postalPrefixes: ['K7K', 'K7L', 'K7M', 'K7P'],
    populationEstimate: '132,000',
    description: 'Compassionate, evidence-based in-home ABA therapy teams across Kingston and the Frontenac region with registered RBA oversight.',
    nearbyAreas: ['Gananoque', 'Napanee', 'Belleville', 'Brockville'],
    localKeywords: ['Kingston ABA therapy', 'Kingston autism services', 'Kingston in-home therapist', 'Kingston RBA'],
      localContext: {
      schoolBoards: ['Ottawa-Carleton District School Board (OCDSB)', 'Ottawa Catholic School Board (OCSB)', 'Conseil des écoles publiques de l’Est de l’Ontario (CEPEO)', 'Conseil des écoles catholiques du Centre-Est (CECCE)'],
      neighbourhoods: ['Gananoque', 'Napanee', 'Belleville', 'Brockville'],
      localChallengeHighlight: 'Navigating bilingual education requirements and finding assent-based ABA teams fluent in English or French can be challenging. We pair families with culturally affirming, bilingual-ready clinicians.',
      travelFocus: 'Eliminate Queensway (Highway 417) congestion; sessions are conducted in your living room and natural community.',
      communityResources: 'Coordinated with CHEO (Children’s Hospital of Eastern Ontario) autism programming and local allied health clinics.'
    }
  },

  // --- 12. Ottawa & National Capital Region ---
  {
    slug: 'ottawa',
    name: 'Ottawa',
    region: 'National Capital Region',
    regionSlug: 'ottawa',
    countyOrDistrict: 'Ottawa',
    approxDistanceKm: 400,
    postalPrefixes: ['K1P', 'K1R', 'K1S', 'K1Y', 'K1Z', 'K2A', 'K2B', 'K2C', 'K2G', 'K2J', 'K2K', 'K2L', 'K2M', 'K2S', 'K2T', 'K4A', 'K4B'],
    populationEstimate: '1,017,000',
    description: 'Bilingual (English/French) in-home ABA therapy teams and registered RBA clinical supervision across Ottawa, Nepean, Kanata, and Orleans.',
    nearbyAreas: ['Kanata', 'Nepean', 'Orleans', 'Barrhaven', 'Gatineau'],
    localKeywords: ['Ottawa ABA therapy', 'Ottawa autism services', 'Ottawa bilingual ABA', 'Ottawa RBA supervisor', 'OAP Ottawa provider'],
      localContext: {
      schoolBoards: ['Ottawa-Carleton District School Board (OCDSB)', 'Ottawa Catholic School Board (OCSB)', 'Conseil des écoles publiques de l’Est de l’Ontario (CEPEO)', 'Conseil des écoles catholiques du Centre-Est (CECCE)'],
      neighbourhoods: ['Kanata', 'Nepean', 'Orleans', 'Barrhaven'],
      localChallengeHighlight: 'Navigating bilingual education requirements and finding assent-based ABA teams fluent in English or French can be challenging. We pair families with culturally affirming, bilingual-ready clinicians.',
      travelFocus: 'Eliminate Queensway (Highway 417) congestion; sessions are conducted in your living room and natural community.',
      communityResources: 'Coordinated with CHEO (Children’s Hospital of Eastern Ontario) autism programming and local allied health clinics.'
    }
  },
  {
    slug: 'kanata',
    name: 'Kanata',
    region: 'National Capital Region',
    regionSlug: 'ottawa',
    countyOrDistrict: 'Ottawa',
    approxDistanceKm: 390,
    postalPrefixes: ['K2K', 'K2L', 'K2M', 'K2T', 'K2W'],
    populationEstimate: '137,000',
    description: 'In-home autism therapy teams serving Kanata and Stittsville, focusing on AAC devices, school transition, and social play.',
    nearbyAreas: ['Ottawa', 'Stittsville', 'Nepean', 'Carp'],
    localKeywords: ['Kanata ABA therapy', 'Kanata autism therapist', 'Kanata in-home ABA'],
      localContext: {
      schoolBoards: ['Ottawa-Carleton District School Board (OCDSB)', 'Ottawa Catholic School Board (OCSB)', 'Conseil des écoles publiques de l’Est de l’Ontario (CEPEO)', 'Conseil des écoles catholiques du Centre-Est (CECCE)'],
      neighbourhoods: ['Ottawa', 'Stittsville', 'Nepean', 'Carp'],
      localChallengeHighlight: 'Navigating bilingual education requirements and finding assent-based ABA teams fluent in English or French can be challenging. We pair families with culturally affirming, bilingual-ready clinicians.',
      travelFocus: 'Eliminate Queensway (Highway 417) congestion; sessions are conducted in your living room and natural community.',
      communityResources: 'Coordinated with CHEO (Children’s Hospital of Eastern Ontario) autism programming and local allied health clinics.'
    }
  },
  {
    slug: 'nepean',
    name: 'Nepean & Barrhaven',
    region: 'National Capital Region',
    regionSlug: 'ottawa',
    countyOrDistrict: 'Ottawa',
    approxDistanceKm: 395,
    postalPrefixes: ['K2G', 'K2H', 'K2J'],
    populationEstimate: '180,000',
    description: 'Direct in-home ABA therapy duos across Nepean and Barrhaven under licensed Supervising RBAs.',
    nearbyAreas: ['Ottawa', 'Kanata', 'Manotick', 'Riverside South'],
    localKeywords: ['Nepean ABA therapy', 'Barrhaven autism services', 'Barrhaven in-home ABA'],
      localContext: {
      schoolBoards: ['Ottawa-Carleton District School Board (OCDSB)', 'Ottawa Catholic School Board (OCSB)', 'Conseil des écoles publiques de l’Est de l’Ontario (CEPEO)', 'Conseil des écoles catholiques du Centre-Est (CECCE)'],
      neighbourhoods: ['Ottawa', 'Kanata', 'Manotick', 'Riverside South'],
      localChallengeHighlight: 'Navigating bilingual education requirements and finding assent-based ABA teams fluent in English or French can be challenging. We pair families with culturally affirming, bilingual-ready clinicians.',
      travelFocus: 'Eliminate Queensway (Highway 417) congestion; sessions are conducted in your living room and natural community.',
      communityResources: 'Coordinated with CHEO (Children’s Hospital of Eastern Ontario) autism programming and local allied health clinics.'
    }
  },
  {
    slug: 'orleans',
    name: 'Orleans',
    region: 'National Capital Region',
    regionSlug: 'ottawa',
    countyOrDistrict: 'Ottawa',
    approxDistanceKm: 415,
    postalPrefixes: ['K1C', 'K1E', 'K1W', 'K4A'],
    populationEstimate: '125,000',
    description: 'Bilingual in-home behavioural therapy for children with autism across Orleans, Cumberland, and Gloucester.',
    nearbyAreas: ['Ottawa', 'Gloucester', 'Cumberland', 'Navan'],
    localKeywords: ['Orleans ABA therapy', 'Orleans bilingual autism therapy', 'Orleans in-home ABA'],
      localContext: {
      schoolBoards: ['Ottawa-Carleton District School Board (OCDSB)', 'Ottawa Catholic School Board (OCSB)', 'Conseil des écoles publiques de l’Est de l’Ontario (CEPEO)', 'Conseil des écoles catholiques du Centre-Est (CECCE)'],
      neighbourhoods: ['Ottawa', 'Gloucester', 'Cumberland', 'Navan'],
      localChallengeHighlight: 'Navigating bilingual education requirements and finding assent-based ABA teams fluent in English or French can be challenging. We pair families with culturally affirming, bilingual-ready clinicians.',
      travelFocus: 'Eliminate Queensway (Highway 417) congestion; sessions are conducted in your living room and natural community.',
      communityResources: 'Coordinated with CHEO (Children’s Hospital of Eastern Ontario) autism programming and local allied health clinics.'
    },
}
];

export function getLocationBySlug(slug: string): LocationInfo | undefined {
  return ontarioLocations.find((loc) => loc.slug === slug);
}
