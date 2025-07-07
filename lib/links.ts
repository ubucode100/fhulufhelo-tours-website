/**
 * Navigation and Footer Links Constants
 * 
 * This file contains all the navigation links and footer links for the Fhulufhelo Tours website.
 * Links are organized by category and include both internal routes and external URLs.
 */

// Main navigation links for the header
export const NAVIGATION_LINKS = {
  // Primary service categories
  services: {
    dayTours: {
      label: 'Day Tours',
      href: '/services/day-tours',
      description: 'Individual day tours and excursions'
    },
    tourPackages: {
      label: 'Tour Packages',
      href: '/services/tour-packages',
      description: 'Multi-day tour packages and experiences'
    },
    customTours: {
      label: 'Custom Tours',
      href: '/services/custom-tours',
      description: 'Tailor-made multi-city tour experiences'
    },
    airportTransfers: {
      label: 'Airport Transfers',
      href: '/services/airport-transfers',
      description: 'Reliable airport transfer services'
    }
  },
  
  // Company information
  company: {
    about: {
      label: 'About Us',
      href: '/about',
      description: 'Learn about our 25 years of experience'
    },
    credentials: {
      label: 'Credentials',
      href: '/credentials',
      description: 'TTOS registration and visa services'
    },
    contact: {
      label: 'Contact',
      href: '/contact',
      description: 'Get in touch with our team'
    }
  }
} as const;

// Footer links organized by category
export const FOOTER_LINKS = {
  // Service categories in footer
  services: {
    title: 'Our Services',
    links: [
      {
        label: 'Day Tours',
        href: '/services/day-tours',
        description: 'Individual day tours and excursions'
      },
      {
        label: 'Tour Packages',
        href: '/services/tour-packages',
        description: 'Multi-day tour packages'
      },
      {
        label: 'Custom Tours',
        href: '/services/custom-tours',
        description: 'Tailor-made experiences'
      },
      {
        label: 'Airport Transfers',
        href: '/services/airport-transfers',
        description: 'Reliable transfer services'
      }
    ]
  },

  // Popular day tours
  popularDayTours: {
    title: 'Popular Day Tours',
    links: [
      {
        label: 'Soweto Tour',
        href: '/services/day-tours/soweto-tour',
        description: 'Explore the vibrant township'
      },
      {
        label: 'Johannesburg Inner City',
        href: '/services/day-tours/johannesburg-inner-city',
        description: 'Discover the city center'
      },
      {
        label: 'Gold Reef City',
        href: '/services/day-tours/gold-reef-city',
        description: 'Theme park and gold mine experience'
      },
      {
        label: 'Apartheid Museum',
        href: '/services/day-tours/apartheid-museum',
        description: 'Historical significance tour'
      },
      {
        label: 'Pretoria City Tour',
        href: '/services/day-tours/pretoria-city-tour',
        description: 'Administrative capital exploration'
      },
      {
        label: 'Cullinan Diamond Mine',
        href: '/services/day-tours/cullinan-diamond-mine',
        description: 'Diamond mine experience'
      },
      {
        label: 'Lion and Cheetah Sanctuary',
        href: '/services/day-tours/lion-cheetah-sanctuary',
        description: 'Wildlife sanctuary visit'
      },
      {
        label: 'Elephant Sanctuary',
        href: '/services/day-tours/elephant-sanctuary',
        description: 'Elephant interaction experience'
      },
      {
        label: 'Ukuthula Lion Walk',
        href: '/services/day-tours/ukuthula-lion-walk',
        description: 'Lion walking experience'
      },
      {
        label: 'Mabula Lodge',
        href: '/services/day-tours/mabula-lodge',
        description: 'Luxury lodge experience'
      },
      {
        label: 'Pilanesberg Game Park',
        href: '/services/day-tours/pilanesberg-game-park',
        description: 'Wildlife game drive'
      },
      {
        label: 'Sun City',
        href: '/services/day-tours/sun-city',
        description: 'Entertainment complex tour'
      }
    ]
  },

  // Tour packages
  tourPackages: {
    title: 'Tour Packages',
    links: [
      {
        label: 'Pilanesberg Wildlife Experience',
        href: '/services/tour-packages/pilanesberg-wildlife',
        description: '2 nights wildlife package'
      },
      {
        label: 'Madikwe Wildlife Experience',
        href: '/services/tour-packages/madikwe-wildlife',
        description: '2 nights game park package'
      },
      {
        label: 'Kruger National Park & Panorama',
        href: '/services/tour-packages/kruger-panorama',
        description: '3 nights safari experience'
      },
      {
        label: 'Triland Route Experience',
        href: '/services/tour-packages/triland-route',
        description: '7 days multi-destination tour'
      }
    ]
  },

  // Company information
  company: {
    title: 'Company',
    links: [
      {
        label: 'About Us',
        href: '/about',
        description: '25 years of tourism experience'
      },
      {
        label: 'TTOS Registration',
        href: '/credentials/ttos',
        description: 'Tourism authority registration'
      },
      {
        label: 'Visa Services',
        href: '/services/visa-services',
        description: '2-5 working days processing'
      },
      {
        label: 'Contact Us',
        href: '/contact',
        description: 'Get in touch with our team'
      }
    ]
  },

  // Contact and support
  contact: {
    title: 'Contact & Support',
    links: [
      {
        label: 'WhatsApp',
        href: 'https://wa.me/your-whatsapp-number',
        description: 'Quick messaging support',
        isExternal: true
      },
      {
        label: 'Email',
        href: 'mailto:info@fhulufhelotours.com',
        description: 'Email inquiries',
        isExternal: true
      },
      {
        label: 'Phone',
        href: 'tel:+27123456789',
        description: 'Call us directly',
        isExternal: true
      },
      {
        label: 'Quote Request',
        href: '/quote-request',
        description: 'Request a custom quote'
      }
    ]
  }
} as const;

// Social media links
export const SOCIAL_LINKS = {
  facebook: {
    label: 'Facebook',
    href: 'https://facebook.com/fhulufhelotours',
    icon: 'facebook'
  },
  instagram: {
    label: 'Instagram',
    href: 'https://instagram.com/fhulufhelotours',
    icon: 'instagram'
  },
  twitter: {
    label: 'Twitter',
    href: 'https://twitter.com/fhulufhelotours',
    icon: 'twitter'
  },
  whatsapp: {
    label: 'WhatsApp',
    href: 'https://wa.me/your-whatsapp-number',
    icon: 'whatsapp'
  }
} as const;

// Utility function to get all navigation links as a flat array
export function getAllNavigationLinks() {
  const links: Array<{ label: string; href: string; description: string }> = [];
  
  // Add service links
  Object.values(NAVIGATION_LINKS.services).forEach(service => {
    links.push(service);
  });
  
  // Add company links
  Object.values(NAVIGATION_LINKS.company).forEach(company => {
    links.push(company);
  });
  
  return links;
}

// Utility function to get all footer links as a flat array
export function getAllFooterLinks() {
  const links: Array<{ label: string; href: string; description: string; isExternal?: boolean }> = [];
  
  Object.values(FOOTER_LINKS).forEach(category => {
    if (Array.isArray(category.links)) {
      links.push(...category.links);
    }
  });
  
  return links;
}

// Type definitions for better TypeScript support
export type NavigationLink = {
  label: string;
  href: string;
  description: string;
};

export type FooterLink = {
  label: string;
  href: string;
  description: string;
  isExternal?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
}; 