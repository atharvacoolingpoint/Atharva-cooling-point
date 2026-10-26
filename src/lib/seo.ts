export const SITE_NAME = 'Atharva Cooling Point';
export const SITE_URL = 'https://www.atharvacoolingpointservice.center';
export const PHONE_NUMBER = '+91 90042 67813';
export const WHATSAPP_NUMBER = '919004267813';
export const FULL_ADDRESS = 'Charbhuja Arcade, Gala No. 2, New Kosad Road, Near Charbhuja Circle, Amroli, Surat, Gujarat.';
export const BUSINESS_ADDRESS = {
  streetAddress: 'Charbhuja Arcade, Gala No. 2, New Kosad Road, Near Charbhuja Circle, Amroli',
  addressLocality: 'Surat',
  addressRegion: 'Gujarat',
  postalCode: '394107',
  addressCountry: 'IN'
};

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    'name': 'Atharva Cooling Point - Washing Machine, AC, Microwave & Refrigerator Repair Service',
    'image': `${SITE_URL}/images/hero.jpg`,
    '@id': `${SITE_URL}/#organization`,
    'url': SITE_URL,
    'telephone': PHONE_NUMBER,
    'priceRange': '₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': BUSINESS_ADDRESS.streetAddress,
      'addressLocality': BUSINESS_ADDRESS.addressLocality,
      'addressRegion': BUSINESS_ADDRESS.addressRegion,
      'postalCode': BUSINESS_ADDRESS.postalCode,
      'addressCountry': BUSINESS_ADDRESS.addressCountry
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 21.1702,
      'longitude': 72.8311
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '08:00',
      'closes': '22:00'
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Surat' },
      { '@type': 'Place', 'name': 'Adajan' },
      { '@type': 'Place', 'name': 'Vesu' },
      { '@type': 'Place', 'name': 'Athwa' },
      { '@type': 'Place', 'name': 'Varachha' },
      { '@type': 'Place', 'name': 'Katargam' },
      { '@type': 'Place', 'name': 'Piplod' },
      { '@type': 'Place', 'name': 'City Light' },
      { '@type': 'Place', 'name': 'Pal' }
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '1480',
      'bestRating': '5',
      'worstRating': '1'
    }
  };
}

export function generateServiceSchema(serviceTitle: string, description: string, imagePath?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': serviceTitle,
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Atharva Cooling Point',
      'telephone': PHONE_NUMBER,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Surat',
        'addressRegion': 'Gujarat',
        'addressCountry': 'IN'
      }
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Surat'
    },
    'description': description,
    'image': imagePath ? `${SITE_URL}${imagePath}` : `${SITE_URL}/images/hero.jpg`,
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'INR',
      'price': '299',
      'availability': 'https://schema.org/InStock'
    }
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${SITE_URL}${item.url}`
    }))
  };
}
