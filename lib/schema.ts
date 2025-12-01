import { BUSINESS_INFO, TESTIMONIALS } from "./constants";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_INFO.website,
    name: BUSINESS_INFO.name,
    image: `${BUSINESS_INFO.website}/images/logo.png`,
    description: `${BUSINESS_INFO.tagline}. Professional DJ, MC, Photo Booth, and Photography services for weddings, quinceañeras, corporate events, and private parties in Los Angeles and Orange County.`,
    url: BUSINESS_INFO.website,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      addressCountry: BUSINESS_INFO.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "33.835649",
      longitude: "-118.0405815",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Los Angeles",
        "@id": "https://en.wikipedia.org/wiki/Los_Angeles",
      },
      {
        "@type": "City",
        name: "Orange County",
        "@id": "https://en.wikipedia.org/wiki/Orange_County,_California",
      },
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS_INFO.rating.toString(),
      reviewCount: BUSINESS_INFO.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.youtube,
      BUSINESS_INFO.social.facebook,
    ],
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  price: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      url: BUSINESS_INFO.website,
    },
    description: service.description,
    areaServed: {
      "@type": "State",
      name: "California",
    },
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "USD",
    },
  };
}

export function generateReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS_INFO.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS_INFO.rating.toString(),
      reviewCount: BUSINESS_INFO.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: TESTIMONIALS.slice(0, 5).map((testimonial) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.name,
      },
      datePublished: testimonial.date,
      reviewBody: testimonial.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
    })),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.state,
      },
    },
    performer: {
      "@type": "PerformingGroup",
      name: BUSINESS_INFO.name,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.website,
    logo: `${BUSINESS_INFO.website}/images/logo.png`,
    description: BUSINESS_INFO.tagline,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      addressCountry: BUSINESS_INFO.address.country,
    },
    sameAs: [
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.youtube,
      BUSINESS_INFO.social.facebook,
    ],
  };
}
