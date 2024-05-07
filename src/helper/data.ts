export const cards = [
  {
    id: 1,
    title: { text: 'Activities', color: 'text-white' },
    description: {
      text: 'Build, personalize, and optimize your itineraries with our trip planner.',
      color: 'text-white',
    },
    bgColor: 'bg-[#000031]',
    button: { text: 'Add Acvities', style: 'text-white bg-[#0D6EFD]' },
  },

  {
    id: 2,
    title: { text: 'Hotels', color: 'text-black' },
    description: {
      text: 'Build, personalize, and optimize your itineraries with our trip planner.',
      color: 'text-[#1D2433]',
    },
    bgColor: 'bg-[#E7F0FF]',
    button: { text: 'Add Hotels', style: 'text-white bg-[#0D6EFD]' },
  },

  {
    id: 3,
    title: { text: 'Flights', color: 'text-white' },
    description: {
      text: 'Build, personalize, and optimize your itineraries with our trip planner.',
      color: 'text-white',
    },
    bgColor: 'bg-[#0D6EFD]',
    button: { text: 'Add Flights', style: 'text-[#0D6EFD] bg-white' },
  },
];

export const activities = [
  {
    id: 1,
    place: 'The Museum of Modern Art',
    description:
      ' Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant',
    amount: 123450,
    schedule: '10:30AM on Mar 19',
    extras: 'Admission to the Empire State Building',
  },
  {
    id: 2,
    place: 'The Pyramids of Giza',
    description: 'Walk through the great pyramids',
    amount: 324750,
    schedule: '9:30AM on Mar 21',
    extras: 'Get to see inside one of the pyramids',
  },
];

export const hotels = [
  {
    id: 1,
    place: 'Riviera Resort, Lekki',
    address:
      '18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1',
    amount: 123450,
    total: 560000,
    checkin: '20-04-2024',
    checkout: '29-04-2024',
  },
  {
    id: 2,
    place: 'Eko Hotels & Suites',
    address: 'Plot 1415 Adetokunbo Ademola Street, Victoria Island',
    amount: 150000,
    total: 600000,
    checkin: '01-05-2024',
    checkout: '05-05-2024',
  },
];

export const flights = [
  {
    id: 1,
    name: 'American Airlines',
    logoUrl: '/images/american_airlines.svg',
    airplaceNo: 'AA-B29',
    amount: 123450,
    date: 'Sun, 20 Aug',
    takeoffTime: '08:35',
    touchDownTime: '09:55',
  },
  {
    id: 2,
    name: 'KLM Royal Dutch Airlines',
    logoUrl: '/images/KLM_logo.svg',
    airplaceNo: 'KL-D12',
    amount: 140000,
    date: 'Mon, 21 Aug',
    takeoffTime: '09:30',
    touchDownTime: '11:15',
  },
];
