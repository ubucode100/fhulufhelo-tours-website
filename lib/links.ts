/**
 * Navigation and Footer Links Constants
 * 
 * This file contains all the navigation links and footer links for the Fhulufhelo Tours website.
 * Links are organized by category and include both internal routes and external URLs.
 */

import { dayTours, tourPackages, company } from "@/data/packages"

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

  // Popular day tours - dynamically generated from packages.ts
  popularDayTours: {
    title: 'Popular Day Tours',
    links: dayTours.slice(0, 12).map(tour => ({
      label: tour.name,
      href: `/day-tours/${tour.id}`,
      description: tour.description
    }))
  },

  // Tour packages - dynamically generated from packages.ts
  tourPackages: {
    title: 'Tour Packages',
    links: tourPackages.map(pkg => ({
      label: pkg.name,
      href: `/packages/${pkg.id}`,
      description: pkg.description
    }))
  },

  // Company information
  company: {
    title: 'Company',
    links: [
      {
        label: 'About Us',
        href: '/about',
        description: `${company.experience.years} years of tourism experience`
      },
      {
        label: 'TTOS Registration',
        href: '/credentials/ttos',
        description: 'Tourism authority registration'
      },
      {
        label: 'Visa Services',
        href: '/services/visa-services',
        description: company.credentials.processingTime
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