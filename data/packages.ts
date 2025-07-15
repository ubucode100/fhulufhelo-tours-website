// Fhulufhelo Tours - Unified Data Source
// This file is the single source of truth for all company, tour, and service data.
// It consolidates and reconciles information from legacy data.json and previous package files.
// All exports are plain objects/arrays for easy import and modularity across the codebase.

/**
 * Multi-day tour packages (2+ nights).
 * Each package includes itinerary, inclusions, and highlights.
 */
export const tourPackages = [
  {
    id: "pilanesberg-wildlife",
    name: "Pilanesberg Game Park Wildlife Experience",
    description:
      "Experience the Big 5 wildlife at Pilanesberg Game Park with luxury accommodation and guided game drives. This exclusive safari package offers the perfect blend of adventure and comfort in one of South Africa's premier game reserves, located in a malaria-free area.",
    duration: "2 Nights / 3 Days",
    groupSize: "2-8 people",
    price: 4500,
    originalPrice: 5200,
    location: "Pilanesberg Game Reserve",
    accommodation: "4★ Safari Lodge",
    meals: "Lunch, Dinners, B&B included",
    transport: "Private vehicle",
    rating: 4.9,
    reviewCount: 456,
    difficulty: "Easy",
    bestTime: "Apr - Oct",
    highlights: [
      "Big 5 game viewing",
      "2x afternoon game drives",
      "1x morning game drive",
      "Malaria-free area",
      "Luxury safari lodge",
      "Professional guide",
    ],
    inclusions: [
      "2 nights accommodation",
      "All meals (Lunch, Dinners, B&B)",
      "2x afternoon game drives",
      "1x morning game drive",
      "Professional safari guide",
      "Park entrance fees",
      "Transportation",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome Safari",
        description:
          "Arrive at Pilanesberg, check into safari lodge, welcome lunch, afternoon game drive with sundowner drinks",
      },
      {
        day: 2,
        title: "Full Safari Experience",
        description:
          "Early morning game drive, breakfast at lodge, leisure time, afternoon game drive, dinner at lodge",
      },
      {
        day: 3,
        title: "Final Safari & Departure",
        description: "Final morning at leisure, breakfast, check out and departure",
      },
    ],
    images: [
      "/images/packages/pilanesberg_game_park_wildlife_experiance_2.jpg",
      "/images/packages/pilanesberg_game_park_wildlife_experiance_3.jpg",
      "/images/packages/pilanesberg_game_park_wildlife_experiance_4.jpg",
      "/images/packages/pilanesberg_game_park_wildlife_experiance_4.webp",
      "/images/packages/pilanesberg_game_park_wildlife_experiance_5.jpg",
      "/images/packages/pilanesberg_game_park_wildlife_experiance_6.jpg",
      "/images/packages/Pilanesberg_National_Park_package_1.jpg",
    ],
  },
  {
    id: "madikwe-wildlife",
    name: "Madikwe Game Park Wildlife Experience",
    description:
      "Experience the exclusive Madikwe Game Park with its diverse wildlife and luxury safari lodges. This malaria-free reserve offers exceptional game viewing opportunities with personalized service and world-class accommodation in one of South Africa's premier private reserves.",
    duration: "2 Nights / 3 Days",
    groupSize: "2-8 people",
    price: 5200,
    location: "Madikwe Game Reserve",
    accommodation: "5★ Luxury Lodge",
    meals: "Lunch, Dinners, B&B included",
    transport: "Private luxury transfers",
    rating: 4.8,
    reviewCount: 234,
    difficulty: "Easy",
    bestTime: "Year round",
    highlights: [
      "Exclusive private reserve",
      "2x afternoon game drives",
      "1x morning game drive",
      "Luxury accommodation",
      "Malaria-free area",
      "Private guide",
    ],
    inclusions: [
      "2 nights luxury lodge accommodation",
      "All meals (Lunch, Dinners, B&B)",
      "2x afternoon game drives",
      "1x morning game drive",
      "Private professional guide",
      "Park entrance fees",
      "Luxury transfers",
    ],
    itinerary: [
      {
        day: 1,
        title: "Luxury Arrival",
        description:
          "Private luxury transfer, check-in at 5-star lodge, gourmet lunch, sunset game drive with champagne",
      },
      {
        day: 2,
        title: "Premium Safari Day",
        description: "Dawn game drive, gourmet breakfast, leisure time, afternoon game drive, fine dining dinner",
      },
      {
        day: 3,
        title: "Final Luxury Experience",
        description: "Morning at leisure, champagne breakfast, luxury transfer to departure point",
      },
    ],
    images: [
      "/images/packages/madikwe_game_park_experiance_1.jpeg",
      "/images/packages/madikwe_game_park_experiance_2.jpg",
      "/images/packages/madikwe_game_park_experiance_3.jpeg",
      "/images/packages/madikwe_game_park_experiance_4.jpeg",
      "/images/packages/madikwe_game_park_experiance_5.jpg",
      "/images/packages/madikwe_game_park_experiance_6.jpg",
      "/images/packages/madikwe_game_park_experiance_7.jpg",
      "/images/packages/madikwe_game_park_experiance_8.jpg",
      "/images/packages/madikwe_game_park_experiance_9.jpg",
      "/images/packages/madikwe_game_park_package_1.jpg",
    ],
  },
  {
    id: "kruger-panorama",
    name: "Kruger National Park & Panorama Route Experience",
    description:
      "Combine the iconic Kruger National Park with the scenic Panorama Route for an unforgettable South African experience. This comprehensive package showcases the best of wildlife and landscapes, including the famous Blyde River Canyon and God's Window.",
    duration: "3 Nights / 4 Days",
    groupSize: "2-12 people",
    price: 6800,
    originalPrice: 7500,
    location: "Kruger National Park & Panorama Route",
    accommodation: "4★ Safari Lodge",
    meals: "Lunch, Dinners, B&B included",
    transport: "Air-conditioned vehicle",
    rating: 4.9,
    reviewCount: 678,
    difficulty: "Moderate",
    bestTime: "May - Sep",
    highlights: [
      "Kruger National Park",
      "Panorama Route tour",
      "Blyde River Canyon",
      "God's Window",
      "Graskop Gorge Lift",
      "Three Rondavels",
    ],
    inclusions: [
      "3 nights accommodation",
      "All meals (Lunch, Dinners, B&B)",
      "1x afternoon Kruger game drive",
      "1x full day Kruger game drive",
      "Full day Panorama Route tour",
      "Professional guide",
      "All entrance fees",
    ],
    itinerary: [
      {
        day: 1,
        title: "Journey to Kruger",
        description: "Scenic drive to Kruger National Park, check-in at safari lodge, afternoon game drive",
      },
      {
        day: 2,
        title: "Full Kruger Safari",
        description: "Full day game drives in Kruger National Park with packed lunch, evening at leisure",
      },
      {
        day: 3,
        title: "Panorama Route Adventure",
        description:
          "Full day tour: Graskop Gorge Lift, God's Window, Lisbon Falls, Burke's Luck Potholes, Three Rondavels",
      },
      {
        day: 4,
        title: "Final Morning & Return",
        description: "Morning at leisure, breakfast, return journey to Johannesburg",
      },
    ],
    images: [
      "/images/packages/kruger_and_Panorama _route_expreiance_1.jpg",
      "/images/packages/kruger_and_Panorama _route_expreiance_2.webp",
      "/images/packages/kruger_and_Panorama _route_expreiance_3.jpg",
      "/images/packages/kruger_and_Panorama _route_expreiance_4.webp",
      "/images/packages/kruger_and_Panorama _route_expreiance_5.jpg",
      "/images/packages/kruger_and_Panorama _route_expreiance_6.jpg",
      "/images/packages/kruger_and_Panorama _route_expreiance_8.avif",
      "/images/packages/panorama_route_package_1.jpeg",
    ],
  },
  {
    id: "triland-route",
    name: "Triland Route Experience",
    description:
      "Experience the ultimate Southern African adventure covering three countries: Mpumalanga (South Africa), eSwatini, and Mozambique. This comprehensive 7-day journey combines nature, wildlife, culture, and leisure in an unforgettable multi-country experience.",
    duration: "7 Days / 6 Nights",
    groupSize: "2-8 people",
    price: 15000,
    originalPrice: 17500,
    location: "Mpumalanga, eSwatini & Mozambique",
    accommodation: "4-5★ Hotels & Lodges",
    meals: "All meals included (Lunch, Dinners, B&B)",
    transport: "Private vehicle & transfers",
    rating: 4.9,
    reviewCount: 123,
    difficulty: "Easy",
    bestTime: "Mar - Nov",
    highlights: [
      "Three countries experience",
      "Panorama Route & Blyde River Canyon",
      "Kruger National Park",
      "eSwatini cultural village",
      "Mozambique beach leisure",
      "Traditional dance & activities",
    ],
    inclusions: [
      "6 nights premium accommodation",
      "All meals (Lunch, Dinners, B&B)",
      "All transfers and transportation",
      "Kruger game drive",
      "Panorama Route tour",
      "Cultural village visit",
      "Beach activities in Mozambique",
      "Professional guide",
      "All entrance fees",
    ],
    itinerary: [
      {
        day: 1,
        title: "Mpumalanga: Panorama Route",
        description:
          "Panorama Route/Blyde River Canyon tour (Graskop Gorge Lift, God's Window, Lisbon Falls, Burke's Luck Potholes, Three Rondavels), overnight at Forever Resort",
      },
      {
        day: 2,
        title: "Kruger National Park",
        description:
          "Full day game drive in Kruger National Park, overnight at Southern Sun Riverside or Capital Hotel in Nelspruit",
      },
      {
        day: 3,
        title: "Journey to eSwatini",
        description: "Depart to eSwatini, visit Matenga Cultural Village, overnight at Botanic Garden",
      },
      {
        day: 4,
        title: "eSwatini Cultural Experience",
        description: "Visit candle making factory, Manzini City Tour, proceed to Hlane Game Reserve, overnight",
      },
      {
        day: 5,
        title: "Journey to Mozambique",
        description:
          "Depart to Mozambique via Namaacha Border, visit Exotic Nature Conservation Park, proceed to Matola Museum",
      },
      {
        day: 6,
        title: "Mozambique Beach Leisure",
        description:
          "Boat trip to Machangulo for beach leisure, traditional dance, surfing, boat trips, beach volleyball, water safari",
      },
      {
        day: 7,
        title: "Departure",
        description: "After breakfast, transfer to airport for departure",
      },
    ],
    images: [
      "/images/packages/triland_route_experience_1.webp",
      "/images/packages/triland_route_experience_2.webp",
      "/images/packages/triland_route_experience_3.webp",
      "/images/packages/triland_route_experience_4.webp",
      "/images/packages/triland_route_experience_5.jpeg",
      "/images/packages/triland_route_package_1.jpg",
    ],
  },
]

/**
 * Single-day tours offered by Fhulufhelo Tours.
 * Each tour includes highlights, inclusions, exclusions, and pricing.
 */
export const dayTours = [
  {
    id: "soweto-tour",
    name: "Soweto Tour",
    duration: "Full Day",
    pickupTime: "08:00",
    returnTime: "17:00",
    price: { adult: 850, child: 650, currency: "ZAR" },
    description: "Experience the vibrant culture and rich history of Soweto, including visits to Vilakazi Street, Mandela House, and the Hector Pieterson Memorial.",
    highlights: [
      "Vilakazi Street",
      "Mandela House Museum",
      "Hector Pieterson Memorial",
      "Regina Mundi Church",
      "Local township experience"
    ],
    inclusions: [
      "Professional guide",
      "Transportation",
      "Entrance fees",
      "Lunch at local restaurant"
    ],
    exclusions: [
      "Personal expenses",
      "Gratuities"
    ],
    location: "Johannesburg",
    category: "Cultural",
    difficulty: "Easy",
    minAge: 5,
    maxGroupSize: 15,
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    itinerary: [
      {
        time: "08:00",
        title: "Hotel Pickup",
        description: "Meet your professional guide and depart from your hotel in Johannesburg"
      },
      {
        time: "09:00",
        title: "Vilakazi Street",
        description: "Visit the famous Vilakazi Street, home to two Nobel Peace Prize winners - Nelson Mandela and Desmond Tutu"
      },
      {
        time: "10:30",
        title: "Mandela House Museum",
        description: "Explore the Mandela House Museum, where Nelson Mandela lived from 1946 to 1962"
      },
      {
        time: "12:00",
        title: "Hector Pieterson Memorial",
        description: "Visit the Hector Pieterson Memorial and Museum, commemorating the 1976 Soweto Uprising"
      },
      {
        time: "13:00",
        title: "Local Lunch",
        description: "Enjoy lunch at a local restaurant in Soweto, experiencing authentic township cuisine"
      },
      {
        time: "14:30",
        title: "Regina Mundi Church",
        description: "Visit Regina Mundi Church, the largest Catholic church in Soweto and a symbol of resistance during apartheid"
      },
      {
        time: "16:00",
        title: "Local Community Visit",
        description: "Interact with local residents and learn about daily life in Soweto"
      },
      {
        time: "17:00",
        title: "Return to Hotel",
        description: "Return to your hotel in Johannesburg with unforgettable memories of Soweto"
      }
    ],
    images: [
      "/images/daytours/sowetotour_towers.jpeg",
      "/images/daytours/sowetotour_local_community_visit.webp",
      "/images/daytours/sowetotour_Hector_P_Memorial.jpg",
      "/images/daytours/sowetotour_mandela_house.jpg",
      "/images/daytours/sowetotour_vilakazi_stret.jpg"
    ]
  },
  {
    id: "johannesburg-inner-city-tour",
    name: "Johannesburg Inner City Tour",
    duration: "Full Day",
    pickupTime: "09:00",
    returnTime: "16:00",
    price: { adult: 1100, child: 800, currency: "ZAR" },
    description: "Explore the vibrant city of Johannesburg, including visits to the Apartheid Museum, Gold Reef City, and the Nelson Mandela Bridge.",
    highlights: [
      "Apartheid Museum",
      "Gold Reef City",
      "Nelson Mandela Bridge",
      "City Centre Shopping"
    ],
    inclusions: [
      "Professional guide",
      "Transportation",
      "Entrance fees",
      "Lunch at local restaurant"
    ],
    exclusions: [
      "Personal expenses",
      "Gratuities"
    ],
    location: "Johannesburg",
    category: "Cultural",
    difficulty: "Easy",
    minAge: 5,
    maxGroupSize: 10,
    availableDays: ["Monday", "Wednesday", "Friday"],
    itinerary: [
      {
        time: "09:00",
        title: "Hotel Pickup",
        description: "Meet your guide and depart from your hotel in Johannesburg"
      },
      {
        time: "09:30",
        title: "Apartheid Museum",
        description: "Visit the Apartheid Museum to learn about South Africa's journey from apartheid to democracy"
      },
      {
        time: "12:00",
        title: "Gold Reef City",
        description: "Explore Gold Reef City theme park and learn about Johannesburg's gold mining history"
      },
      {
        time: "13:00",
        title: "Lunch Break",
        description: "Enjoy lunch at a local restaurant in the city center"
      },
      {
        time: "14:30",
        title: "Nelson Mandela Bridge",
        description: "Visit the iconic Nelson Mandela Bridge and take photos of the city skyline"
      },
      {
        time: "15:00",
        title: "City Centre Shopping",
        description: "Explore the vibrant city center with shopping opportunities and cultural experiences"
      },
      {
        time: "16:00",
        title: "Return to Hotel",
        description: "Return to your hotel with a deeper understanding of Johannesburg's history and culture"
      }
    ],
    images: [
      "/images/daytours/hillbrow_tower.jpg",
      "/images/daytours/jhb_innter_city_2.jpg",
      "/images/daytours/jhb_innter_city_3.jpg",
      "/images/daytours/jhb_innter_city_4.jpg",
      "/images/daytours/jhb_innter_city_5.jpg",
      "/images/daytours/jhb_innter_city_6.jpg",
      "/images/daytours/jhb_innter_city_7.jpg"
    ]
  },
  {
    id: "gold-reef-city-theme-park",
    name: "Gold Reef City AND Theme Park",
    duration: "Full Day",
    pickupTime: "09:00",
    returnTime: "17:00",
    price: { adult: 1200, child: 900, currency: "ZAR" },
    description: "Experience the thrill of Gold Reef City Theme Park with exciting rides, entertainment, and a glimpse into Johannesburg's gold mining history.",
    highlights: [
      "Theme park rides",
      "Gold mining history",
      "Entertainment shows",
      "Family activities"
    ],
    inclusions: [
      "Professional guide",
      "Transportation",
      "Entrance fees",
      "Lunch at local restaurant"
    ],
    exclusions: [
      "Personal expenses",
      "Gratuities",
      "Optional rides"
    ],
    location: "Johannesburg",
    category: "Entertainment",
    difficulty: "Easy",
    minAge: 3,
    maxGroupSize: 15,
    availableDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
    itinerary: [
      {
        time: "09:00",
        title: "Hotel Pickup",
        description: "Meet your guide and depart for Gold Reef City Theme Park"
      },
      {
        time: "09:30",
        title: "Gold Mining History Tour",
        description: "Learn about Johannesburg's gold mining history with an underground mine tour"
      },
      {
        time: "11:00",
        title: "Theme Park Rides",
        description: "Enjoy exciting rides and attractions suitable for all ages"
      },
      {
        time: "13:00",
        title: "Lunch Break",
        description: "Enjoy lunch at one of the park's restaurants"
      },
      {
        time: "14:00",
        title: "Entertainment Shows",
        description: "Watch live entertainment shows and performances"
      },
      {
        time: "15:30",
        title: "Family Activities",
        description: "Participate in family-friendly activities and games"
      },
      {
        time: "17:00",
        title: "Return to Hotel",
        description: "Return to your hotel with wonderful memories of the theme park experience"
      }
    ],
    images: [
      "/images/daytours/Gold-Reef-2.jpg",
      "/images/daytours/grc_2.png",
      "/images/daytours/grc_3.webp",
      "/images/daytours/grc_4.jpg",
      "/images/daytours/grc_5.jpg",
      "/images/daytours/grc_6.jpg",
    ]
  },
  {
    id: "apartheid-museum",
    name: "Apartheid Museum",
    duration: "Half Day",
    pickupTime: "09:00",
    returnTime: "13:00",
    price: { adult: 600, child: 400, currency: "ZAR" },
    description: "Visit the Apartheid Museum to learn about South Africa's journey from apartheid to democracy through powerful exhibits and multimedia displays.",
    highlights: [
      "Apartheid history exhibits",
      "Multimedia displays",
      "Historical artifacts",
      "Educational experience"
    ],
    inclusions: [
      "Professional guide",
      "Transportation",
      "Entrance fees"
    ],
    exclusions: [
      "Personal expenses",
      "Gratuities",
      "Lunch"
    ],
    location: "Johannesburg",
    category: "Cultural",
    difficulty: "Easy",
    minAge: 10,
    maxGroupSize: 12,
    availableDays: ["Monday", "Wednesday", "Friday"],
    itinerary: [
      {
        time: "09:00",
        title: "Hotel Pickup",
        description: "Meet your guide and depart for the Apartheid Museum"
      },
      {
        time: "09:30",
        title: "Museum Introduction",
        description: "Receive an introduction to the museum and its significance in South African history"
      },
      {
        time: "10:00",
        title: "Apartheid History Exhibits",
        description: "Explore powerful exhibits documenting South Africa's apartheid era"
      },
      {
        time: "11:00",
        title: "Multimedia Displays",
        description: "View multimedia displays and historical artifacts from the apartheid period"
      },
      {
        time: "12:00",
        title: "Educational Experience",
        description: "Learn about South Africa's journey to democracy and reconciliation"
      },
      {
        time: "13:00",
        title: "Return to Hotel",
        description: "Return to your hotel with a deeper understanding of South Africa's history"
      }
    ],
    images: [
      "/images/daytours/brick-wall-black-white-sign-apartheid-museum-pillars-other-conceptual-words-johannesburg-south-africa-august-252665388.webp",
      "/images/daytours/apartheid_museum_1.webp",
      "/images/daytours/apartheid_museum_2.webp",
      "/images/daytours/apartheid_museum_3.webp",
      "/images/daytours/apartheid_museum_4.webp",
      "/images/daytours/apartheid_museum_5.webp",
      "/images/daytours/apartheid_museum_6.webp"
    ]
  },
  {
    id: "pretoria-city-tour",
    name: "Pretoria City Tour",
    duration: "Full Day",
    pickupTime: "08:00",
    returnTime: "17:00",
    price: { adult: 1000, child: 750, currency: "ZAR" },
    description: "Explore the administrative capital of South Africa, including the Union Buildings, Voortrekker Monument, and other historical landmarks.",
    highlights: [
      "Union Buildings",
      "Voortrekker Monument",
      "Freedom Park",
      "Church Square",
      "Pretoria Botanical Gardens"
    ],
    inclusions: [
      "Professional guide",
      "Transportation",
      "Entrance fees",
      "Lunch at local restaurant"
    ],
    exclusions: [
      "Personal expenses",
      "Gratuities"
    ],
    location: "Pretoria",
    category: "Cultural",
    difficulty: "Easy",
    minAge: 5,
    maxGroupSize: 12,
    availableDays: ["Monday", "Wednesday", "Friday"],
    itinerary: [
      {
        time: "08:00",
        title: "Hotel Pickup",
        description: "Meet your guide and depart for Pretoria, the administrative capital"
      },
      {
        time: "09:00",
        title: "Union Buildings",
        description: "Visit the Union Buildings, the official seat of the South African government"
      },
      {
        time: "10:30",
        title: "Voortrekker Monument",
        description: "Explore the Voortrekker Monument, a historical landmark commemorating the Great Trek"
      },
      {
        time: "12:00",
        title: "Lunch Break",
        description: "Enjoy lunch at a local restaurant in Pretoria"
      },
      {
        time: "13:30",
        title: "Freedom Park",
        description: "Visit Freedom Park, a memorial to South Africa's liberation struggle"
      },
      {
        time: "15:00",
        title: "Church Square",
        description: "Explore Church Square, the historic center of Pretoria"
      },
      {
        time: "16:00",
        title: "Pretoria Botanical Gardens",
        description: "Stroll through the beautiful Pretoria Botanical Gardens"
      },
      {
        time: "17:00",
        title: "Return to Hotel",
        description: "Return to your hotel with insights into South Africa's administrative capital"
      }
    ],
    images: [
      "/images/daytours/pretoria_city_tour_1.jpg",
      "/images/daytours/pretoria_city_tour_2.jpg",
      "/images/daytours/pretoria_city_tour_3.jpg",
      "/images/daytours/pretoria_city_tour_4.jpg",
      "/images/daytours/pretoria_city_tour_5.jpg",
    ]
  },
  {
    id: "cullinan-diamond-mine",
    name: "Cullinan Diamond Mine",
    duration: "Full Day",
    pickupTime: "08:00",
    returnTime: "17:00",
    price: { adult: 1300, child: 1000, currency: "ZAR" },
    description: "Visit the famous Cullinan Diamond Mine where the world's largest diamond was discovered, and learn about diamond mining and processing.",
    highlights: [
      "Diamond mine tour",
      "Underground experience",
      "Diamond cutting demonstration",
      "Historical exhibits",
      "Surface mine viewing"
    ],
    inclusions: [
      "Professional guide",
      "Transportation",
      "Entrance fees",
      "Lunch at local restaurant"
    ],
    exclusions: [
      "Personal expenses",
      "Gratuities"
    ],
    location: "Cullinan",
    category: "Educational",
    difficulty: "Moderate",
    minAge: 8,
    maxGroupSize: 10,
    availableDays: ["Tuesday", "Thursday"],
    itinerary: [
      {
        time: "08:00",
        title: "Hotel Pickup",
        description: "Meet your guide and depart for Cullinan Diamond Mine"
      },
      {
        time: "09:30",
        title: "Mine Introduction",
        description: "Receive safety briefing and introduction to diamond mining history"
      },
      {
        time: "10:00",
        title: "Underground Experience",
        description: "Descend into the mine to experience the underground mining environment"
      },
      {
        time: "11:30",
        title: "Diamond Cutting Demonstration",
        description: "Watch expert diamond cutters demonstrate the art of diamond cutting"
      },
      {
        time: "13:00",
        title: "Lunch Break",
        description: "Enjoy lunch at the mine's restaurant"
      },
      {
        time: "14:00",
        title: "Historical Exhibits",
        description: "Explore historical exhibits about the discovery of the Cullinan Diamond"
      },
      {
        time: "15:30",
        title: "Surface Mine Viewing",
        description: "View the surface mining operations and learn about modern mining techniques"
      },
      {
        time: "17:00",
        title: "Return to Hotel",
        description: "Return to your hotel with fascinating insights into diamond mining"
      }
    ],
    images: [
      "/images/daytours/cullinan_diamond_mine.jpg",
      "/images/daytours/cullinan_diamond_mine_1.jpg",
      "/images/daytours/cullinan_diamond_mine_2.jpg",
      "/images/daytours/cullinan_diamond_mine_3.jpg",
      "/images/daytours/cullinan_diamond_mine_4.jpg",
      "/images/daytours/cullinan_diamond_mine_5jpg.jpg",
      "/images/daytours/cullinan_diamond_mine_6.jpg",
    ]
  },
  {
    id: "lion-cheetah-sanctuary",
    name: "Lion and Cheetah Sanctuary",
    duration: "Full Day",
    pickupTime: "08:00",
    returnTime: "17:00",
    price: { adult: 1200, child: 900, currency: "ZAR" },
    description: "Experience close encounters with lions and cheetahs in a safe, educational environment focused on conservation and wildlife protection.",
    highlights: [
      "Lion encounters",
      "Cheetah interactions",
      "Conservation education",
      "Wildlife photography",
      "Guided tours"
    ],
    inclusions: [
      "Professional guide",
      "Transportation",
      "Entrance fees",
      "Lunch at local restaurant"
    ],
    exclusions: [
      "Personal expenses",
      "Gratuities"
    ],
    location: "Hartbeespoort",
    category: "Wildlife",
    difficulty: "Easy",
    minAge: 5,
    maxGroupSize: 12,
    availableDays: ["Monday", "Wednesday", "Friday"],
    itinerary: [
      {
        time: "08:00",
        title: "Hotel Pickup",
        description: "Meet your guide and depart for the Lion and Cheetah Sanctuary"
      },
      {
        time: "09:30",
        title: "Sanctuary Introduction",
        description: "Receive safety briefing and learn about the sanctuary's conservation mission"
      },
      {
        time: "10:00",
        title: "Lion Encounters",
        description: "Experience close encounters with lions in a safe, controlled environment"
      },
      {
        time: "11:30",
        title: "Cheetah Interactions",
        description: "Interact with cheetahs and learn about their behavior and conservation"
      },
      {
        time: "13:00",
        title: "Lunch Break",
        description: "Enjoy lunch at the sanctuary's restaurant"
      },
      {
        time: "14:00",
        title: "Conservation Education",
        description: "Learn about wildlife conservation and the sanctuary's breeding programs"
      },
      {
        time: "15:30",
        title: "Wildlife Photography",
        description: "Capture amazing photos of lions and cheetahs in their natural habitat"
      },
      {
        time: "17:00",
        title: "Return to Hotel",
        description: "Return to your hotel with unforgettable wildlife memories"
      }
    ],
    images: [
      "/images/daytours/lion_cheetah_senctuary_1.jpg",
      "/images/daytours/lion_cheetah_senctuary_2.jpg",
      "/images/daytours/lion_cheetah_senctuary_3.jpg",
      "/images/daytours/lion_cheetah_senctuary_4.jpg",
      "/images/daytours/lion_cheetah_senctuary_5.jpg",
      "/images/daytours/lion_cheetah_senctuary_6.jpg",
    ]
  },
  {
    id: "elephant-sanctuary",
    name: "Elephant Sanctuary",
    duration: "Full Day",
    pickupTime: "08:00",
    returnTime: "17:00",
    price: { adult: 1400, child: 1100, currency: "ZAR" },
    description: "Interact with rescued elephants in their natural habitat, learn about elephant behavior, and contribute to conservation efforts.",
    highlights: [
      "Elephant interactions",
      "Educational programs",
      "Conservation awareness",
      "Walking with elephants",
      "Feeding experiences"
    ],
    inclusions: [
      "Professional guide",
      "Transportation",
      "Entrance fees",
      "Lunch at local restaurant"
    ],
    exclusions: [
      "Personal expenses",
      "Gratuities"
    ],
    location: "Hartbeespoort",
    category: "Wildlife",
    difficulty: "Easy",
    minAge: 6,
    maxGroupSize: 10,
    availableDays: ["Tuesday", "Thursday"],
    itinerary: [
      {
        time: "08:00",
        title: "Hotel Pickup",
        description: "Meet your guide and depart for the Elephant Sanctuary"
      },
      {
        time: "09:30",
        title: "Sanctuary Introduction",
        description: "Learn about the sanctuary's mission and elephant conservation efforts"
      },
      {
        time: "10:00",
        title: "Elephant Interactions",
        description: "Interact with rescued elephants and learn about their behavior"
      },
      {
        time: "11:30",
        title: "Walking with Elephants",
        description: "Experience the unique opportunity to walk alongside elephants in their habitat"
      },
      {
        time: "13:00",
        title: "Lunch Break",
        description: "Enjoy lunch at the sanctuary's restaurant"
      },
      {
        time: "14:00",
        title: "Feeding Experiences",
        description: "Participate in feeding experiences and learn about elephant nutrition"
      },
      {
        time: "15:30",
        title: "Educational Programs",
        description: "Learn about elephant conservation and the sanctuary's breeding programs"
      },
      {
        time: "17:00",
        title: "Return to Hotel",
        description: "Return to your hotel with unforgettable elephant encounter memories"
      }
    ],
    images: [
      "/images/daytours/elephant_sanctuary_1.jpg",
      "/images/daytours/elephant_sanctuary_2.jpg",
      "/images/daytours/elephant_sanctuary_3.jpg",
      "/images/daytours/elephant_sanctuary_4.jpg",
      "/images/daytours/elephant_sanctuary_5.jpg",
      "/images/daytours/elephant_sanctuary_6.jpg",
    ]
  },
  {
    id: "ukuthula-lion-walk",
    name: "Ukuthula Lion Walk",
    duration: "Full Day",
    pickupTime: "08:00",
    returnTime: "17:00",
    price: { adult: 1500, child: 1200, currency: "ZAR" },
    description: "Experience the thrill of walking with lions in their natural environment, guided by experienced handlers and conservationists.",
    highlights: [
      "Lion walking experience",
      "Conservation education",
      "Professional handlers",
      "Photography opportunities",
      "Wildlife interaction"
    ],
    inclusions: [
      "Professional guide",
      "Transportation",
      "Entrance fees",
      "Lunch at local restaurant"
    ],
    exclusions: [
      "Personal expenses",
      "Gratuities"
    ],
    location: "Hartbeespoort",
    category: "Wildlife",
    difficulty: "Moderate",
    minAge: 12,
    maxGroupSize: 8,
    availableDays: ["Monday", "Wednesday", "Friday"],
    itinerary: [
      {
        time: "08:00",
        title: "Hotel Pickup",
        description: "Meet your guide and depart for Ukuthula Lion Walk"
      },
      {
        time: "09:30",
        title: "Safety Briefing",
        description: "Receive comprehensive safety briefing and learn about lion behavior"
      },
      {
        time: "10:00",
        title: "Lion Walking Experience",
        description: "Experience the thrill of walking with lions in their natural environment"
      },
      {
        time: "11:30",
        title: "Conservation Education",
        description: "Learn about lion conservation and the importance of wildlife protection"
      },
      {
        time: "13:00",
        title: "Lunch Break",
        description: "Enjoy lunch at the facility's restaurant"
      },
      {
        time: "14:00",
        title: "Photography Opportunities",
        description: "Capture amazing photos of lions during the walking experience"
      },
      {
        time: "15:30",
        title: "Wildlife Interaction",
        description: "Additional wildlife interaction opportunities with professional handlers"
      },
      {
        time: "17:00",
        title: "Return to Hotel",
        description: "Return to your hotel with incredible lion walking memories"
      }
    ],
    images: [
      "/images/daytours/ukuthula_lion_walk.jpg",
      "/images/daytours/ukuthula_lion_walk_2.jpg",
      "/images/daytours/ukuthula_lion_walk_3.jpg",
      "/images/daytours/ukuthula_lion_walk_4.jpg",
      "/images/daytours/ukuthula_lion_walk_5.jpg",
      "/images/daytours/ukuthula_lion_walk_6.jpg",
    ]
  },
  {
    id: "mabula-lodge",
    name: "Mabula Lodge",
    duration: "Full Day",
    pickupTime: "07:00",
    returnTime: "17:00",
    price: { adult: 1600, child: 1300, currency: "ZAR" },
    description: "Experience luxury wildlife viewing at Mabula Lodge with game drives, spa treatments, and world-class accommodation in a malaria-free area.",
    highlights: [
      "Game drives",
      "Luxury lodge experience",
      "Spa treatments",
      "Fine dining",
      "Wildlife photography"
    ],
    inclusions: [
      "Professional guide",
      "Transportation",
      "Entrance fees",
      "Lunch at lodge"
    ],
    exclusions: [
      "Personal expenses",
      "Gratuities",
      "Spa treatments"
    ],
    location: "Mabula Game Reserve",
    category: "Wildlife",
    difficulty: "Easy",
    minAge: 5,
    maxGroupSize: 8,
    availableDays: ["Tuesday", "Thursday"],
    itinerary: [
      {
        time: "07:00",
        title: "Hotel Pickup",
        description: "Meet your guide and depart for Mabula Lodge"
      },
      {
        time: "08:30",
        title: "Lodge Arrival",
        description: "Arrive at Mabula Lodge and receive welcome briefing"
      },
      {
        time: "09:00",
        title: "Morning Game Drive",
        description: "Experience an exciting morning game drive in search of the Big 5"
      },
      {
        time: "11:00",
        title: "Luxury Lodge Experience",
        description: "Enjoy the luxury lodge facilities and amenities"
      },
      {
        time: "13:00",
        title: "Fine Dining Lunch",
        description: "Enjoy a gourmet lunch at the lodge's restaurant"
      },
      {
        time: "14:30",
        title: "Afternoon Game Drive",
        description: "Embark on another game drive to spot more wildlife"
      },
      {
        time: "16:00",
        title: "Spa Treatments",
        description: "Optional spa treatments and relaxation time"
      },
      {
        time: "17:00",
        title: "Return to Hotel",
        description: "Return to your hotel with luxury wildlife experience memories"
      }
    ],
    images: [
      "/images/daytours/mabula_game_lodge.jpg",
      "/images/daytours/mabula_game_lodge_2.jpg",
      "/images/daytours/mabula_game_lodge_3.jpg",
      "/images/daytours/mabula_game_lodge_4.jpg",
      "/images/daytours/mabula_game_lodge_5.jpg",
      "/images/daytours/mabula_game_lodge_6.jpg",
    ]
  },
  {
    id: "pilanesberg-day-tour",
    name: "Pilanesberg Game Park Day Tour",
    duration: "Full Day",
    pickupTime: "07:00",
    returnTime: "17:00",
    price: { adult: 1400, child: 1100, currency: "ZAR" },
    description: "Experience the thrill of Pilanesberg Game Park in a day, with game drives and a picnic lunch.",
    highlights: [
      "Game drives in Pilanesberg Game Park",
      "Picnic lunch",
      "Professional guide"
    ],
    inclusions: [
      "Professional guide",
      "Transportation",
      "Entrance fees",
      "Lunch at local restaurant"
    ],
    exclusions: [
      "Personal expenses",
      "Gratuities"
    ],
    location: "Pilanesberg Game Park",
    category: "Wildlife",
    difficulty: "Moderate",
    minAge: 5,
    maxGroupSize: 10,
    availableDays: ["Monday", "Wednesday", "Friday"],
    itinerary: [
      {
        time: "07:00",
        title: "Hotel Pickup",
        description: "Meet your guide and depart for Pilanesberg Game Park"
      },
      {
        time: "08:30",
        title: "Park Arrival",
        description: "Arrive at Pilanesberg Game Park and receive park briefing"
      },
      {
        time: "09:00",
        title: "Morning Game Drive",
        description: "Embark on an exciting morning game drive in search of wildlife"
      },
      {
        time: "11:30",
        title: "Picnic Lunch",
        description: "Enjoy a picnic lunch in the beautiful surroundings of the park"
      },
      {
        time: "13:00",
        title: "Afternoon Game Drive",
        description: "Continue with afternoon game drive to spot more animals"
      },
      {
        time: "15:30",
        title: "Wildlife Photography",
        description: "Capture amazing photos of the park's diverse wildlife"
      },
      {
        time: "17:00",
        title: "Return to Hotel",
        description: "Return to your hotel with unforgettable wildlife memories"
      }
    ],
    images: [
      "/images/daytours/Pilanesberg_National_Park_1.jpg",
      "/images/daytours/Pilanesberg_National_Park_2.jpg",
      "/images/daytours/Pilanesberg_National_Park_3.jpg",
      "/images/daytours/Pilanesberg_National_Park_4.jpg",
    ]
  },
  {
    id: "sun-city-tour",
    name: "Sun City Tour",
    duration: "Full Day",
    pickupTime: "08:00",
    returnTime: "17:00",
    price: { adult: 1300, child: 1000, currency: "ZAR" },
    description: "Visit the luxurious Sun City resort, offering entertainment, golf, and a chance to see the Big 5.",
    highlights: [
      "Sun City Entertainment",
      "Golf Course",
      "Big 5 Game Viewing",
      "Casino"
    ],
    inclusions: [
      "Professional guide",
      "Transportation",
      "Entrance fees",
      "Lunch at local restaurant"
    ],
    exclusions: [
      "Personal expenses",
      "Gratuities"
    ],
    location: "Sun City",
    category: "Leisure",
    difficulty: "Easy",
    minAge: 5,
    maxGroupSize: 10,
    availableDays: ["Tuesday", "Thursday"],
    itinerary: [
      {
        time: "08:00",
        title: "Hotel Pickup",
        description: "Meet your guide and depart for Sun City resort"
      },
      {
        time: "09:30",
        title: "Resort Arrival",
        description: "Arrive at Sun City and receive resort orientation"
      },
      {
        time: "10:00",
        title: "Sun City Entertainment",
        description: "Explore the resort's entertainment facilities and attractions"
      },
      {
        time: "11:30",
        title: "Golf Course Visit",
        description: "Visit the world-class golf course and learn about its history"
      },
      {
        time: "13:00",
        title: "Lunch Break",
        description: "Enjoy lunch at one of Sun City's restaurants"
      },
      {
        time: "14:00",
        title: "Big 5 Game Viewing",
        description: "Experience game viewing opportunities in the surrounding area"
      },
      {
        time: "15:30",
        title: "Casino Experience",
        description: "Visit the casino and enjoy the entertainment facilities"
      },
      {
        time: "17:00",
        title: "Return to Hotel",
        description: "Return to your hotel with luxury resort experience memories"
      }
    ],
    images: [
      "/images/daytours/suncity_1.jpg",
      "/images/daytours/suncity_2.jpg",
      "/images/daytours/suncity_3jpg.jpg",
      "/images/daytours/suncity_4.jpg",
      "/images/daytours/suncity_5.jpg",
      "/images/daytours/suncity_5.webp"
    ]
  }
]

/**
 * Company information and contact details.
 * Centralized company data for consistent usage across the website.
 */
export const company = {
  name: "Fhulufhelo Tours",
  tagline: "25 Years of Tourism Excellence in South Africa",
  description: "Fhulufhelo Tours is a leading South African tour operator with 25 years of experience in providing tailor-made tourism experiences. We specialize in day tours, multi-day packages, and custom multi-city tours across South Africa's most iconic destinations.",
  credentials: {
    ttosRegistration: "TTOS Registered Tour Operator",
    visaServices: "Visa Application Services Available",
    processingTime: "2-5 working days processing time"
  },
  contact: {
    whatsapp: "+27 82 123 4567",
    email: "info@fhulufhelotours.co.za",
    phone: "+27 11 234 5678"
  },
  experience: {
    years: 25,
    specialization: "Tailor-made tourism experiences",
    markets: ["Domestic", "International", "Corporate", "Leisure"]
  }
}

/**
 * Custom multi-city tour packages.
 * Tailor-made experiences designed to specific requirements.
 */
export const customTours = [
  {
    id: "multi-city-standard",
    name: "Standard Multi-City Experience",
    duration: "Customizable",
    price: {
      startingFrom: 8000,
      currency: "ZAR",
      customizable: true
    },
    description: "Our signature multi-city tour covering Johannesburg, Sun City, wildlife reserves, and Cape Town with full customization options.",
    destinations: [
      "Johannesburg",
      "Sun City",
      "Mabula or Kruger National Park",
      "Cape Town"
    ],
    highlights: [
      "City exploration",
      "Wildlife experiences",
      "Scenic landscapes",
      "Cultural immersion",
      "Luxury accommodation"
    ],
    customizationOptions: [
      "Duration flexibility",
      "Accommodation preferences",
      "Activity selection",
      "Transportation options",
      "Special dietary requirements"
    ],
    inclusions: [
      "All accommodation",
      "Transportation between cities",
      "Professional guide",
      "Airport transfers",
      "Customized activities"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities"
    ],
    location: "Multiple cities across South Africa",
    category: "Custom",
    difficulty: "Easy",
    minAge: 5,
    maxGroupSize: 12,
    bookingLeadTime: "4-6 weeks"
  }
]

/**
 * Airport transfer services.
 * Reliable and comfortable airport transfer services across South Africa.
 */
export const airportTransfers = [
  {
    id: "johannesburg-airport",
    name: "Johannesburg Airport Transfers",
    locations: ["OR Tambo International Airport", "Lanseria International Airport"],
    destinations: ["Johannesburg", "Pretoria", "Sandton", "Rosebank"],
    price: {
      oneWay: 450,
      return: 800,
      currency: "ZAR"
    },
    vehicleTypes: [
      {
        type: "Sedan",
        capacity: "1-3 passengers",
        price: 450
      },
      {
        type: "SUV",
        capacity: "1-6 passengers",
        price: 650
      },
      {
        type: "Minibus",
        capacity: "1-12 passengers",
        price: 1200
      }
    ],
    features: [
      "Meet and greet service",
      "Flight monitoring",
      "Professional drivers",
      "Air-conditioned vehicles",
      "Luggage assistance"
    ],
    availableHours: "24/7",
    bookingLeadTime: "2 hours minimum"
  },
  {
    id: "cape-town-airport",
    name: "Cape Town Airport Transfers",
    locations: ["Cape Town International Airport"],
    destinations: ["Cape Town City", "Camps Bay", "Hout Bay", "Stellenbosch"],
    price: {
      oneWay: 550,
      return: 1000,
      currency: "ZAR"
    },
    vehicleTypes: [
      {
        type: "Sedan",
        capacity: "1-3 passengers",
        price: 550
      },
      {
        type: "SUV",
        capacity: "1-6 passengers",
        price: 750
      },
      {
        type: "Minibus",
        capacity: "1-12 passengers",
        price: 1400
      }
    ],
    features: [
      "Meet and greet service",
      "Flight monitoring",
      "Professional drivers",
      "Air-conditioned vehicles",
      "Luggage assistance"
    ],
    availableHours: "24/7",
    bookingLeadTime: "2 hours minimum"
  }
]

/**
 * Visa application services.
 * Professional visa application assistance with TTOS registration.
 */
export const visaServices = [
  {
    id: "visa-application",
    name: "Visa Application Assistance",
    description: "Complete visa application support for South Africa and neighboring countries",
    processingTime: "2-5 working days",
    price: {
      consultation: 200,
      application: 800,
      currency: "ZAR"
    },
    services: [
      "Visa consultation",
      "Application preparation",
      "Document verification",
      "Submission assistance",
      "Status tracking"
    ],
    supportedCountries: [
      "South Africa",
      "Botswana",
      "Namibia",
      "Zimbabwe",
      "Mozambique"
    ],
    requirements: [
      "Valid passport",
      "Recent photographs",
      "Travel itinerary",
      "Proof of accommodation",
      "Financial statements"
    ],
    ttosRegistration: "TTOS Registered Tour Operator",
    availableHours: "Monday - Friday, 08:00 - 17:00"
  }
]

/**
 * Booking process and contact information.
 * Centralized booking and contact details for consistent usage.
 */
export const booking = {
  process: {
    steps: [
      "Select service",
      "Choose dates",
      "Provide passenger details",
      "Add optional services",
      "Review and confirm",
      "Payment",
      "Confirmation"
    ],
    requiredFields: [
      "Full name",
      "Email address",
      "Phone number",
      "Travel dates",
      "Number of passengers",
      "Pickup location"
    ],
    optionalServices: [
      "Airport transfers",
      "Visa services",
      "Travel insurance",
      "Photography services"
    ]
  },
  contact: {
    primary: "WhatsApp",
    whatsapp: "+27 82 123 4567",
    email: "bookings@fhulufhelotours.co.za",
    phone: "+27 11 234 5678",
    responseTime: "Within 2 hours during business hours"
  },
  payment: {
    methods: [
      "Bank transfer",
      "Credit card",
      "PayPal",
      "Cash on arrival"
    ],
    deposit: "30% deposit required",
    balance: "Balance due 7 days before travel"
  }
}

/**
 * Seasonal information and recommendations.
 * Travel season data for optimal trip planning.
 */
export const seasons = {
  peak: ["December", "January", "February", "March", "April"],
  shoulder: ["May", "June", "September", "October"],
  low: ["July", "August", "November"],
  recommendations: {
    wildlife: "May to September (dry season)",
    beach: "November to March (summer)",
    cultural: "Year-round",
    adventure: "March to November"
  }
}

/**
 * Location information for tours and services.
 * Key destinations and attractions across South Africa.
 */
export const locations = {
  cities: [
    {
      name: "Johannesburg",
      description: "The economic hub of South Africa",
      highlights: ["Apartheid Museum", "Soweto", "Gold Reef City", "Constitution Hill"]
    },
    {
      name: "Pretoria",
      description: "The administrative capital",
      highlights: ["Union Buildings", "Voortrekker Monument", "Freedom Park"]
    },
    {
      name: "Cape Town",
      description: "The Mother City",
      highlights: ["Table Mountain", "Robben Island", "V&A Waterfront", "Cape Point"]
    },
    {
      name: "Sun City",
      description: "Entertainment capital",
      highlights: ["Valley of Waves", "Casino", "Golf courses", "Luxury resorts"]
    }
  ],
  parks: [
    {
      name: "Kruger National Park",
      description: "South Africa's premier wildlife destination",
      highlights: ["Big 5", "Diverse wildlife", "Scenic landscapes"]
    },
    {
      name: "Pilanesberg Game Park",
      description: "Malaria-free wildlife experience",
      highlights: ["Big 5", "Scenic beauty", "Luxury lodges"]
    },
    {
      name: "Madikwe Game Park",
      description: "Exclusive wildlife experience",
      highlights: ["Big 5", "Luxury lodges", "Exclusive access"]
    }
  ]
}