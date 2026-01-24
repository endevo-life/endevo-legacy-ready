// Structured Data Schema.org markup for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ENDevo",
  "url": "https://endevo.life",
  "logo": "https://endevo.life/og-image.png",
  "description": "ENDevo helps individuals and organizations achieve Legacy Readiness & Digital Preparedness",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-484-545-4327",
    "contactType": "Customer Service",
    "availableLanguage": "English",
    "areaServed": "US"
  },
  "sameAs": [
    "https://twitter.com/endevo",
    "https://linkedin.com/company/endevo"
  ]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Legacy Planning and Digital Preparedness",
  "provider": {
    "@type": "Organization",
    "name": "ENDevo"
  },
  "areaServed": "US",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Legacy Readiness Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Individual Legacy Planning",
          "description": "AI-powered tools to help individuals organize essential documents and plan their digital legacy"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Employer Wellness Programs",
          "description": "Enterprise solutions for business continuity and employee wellness"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Service Provider Network",
          "description": "Connection to trusted professionals for comprehensive legacy planning"
        }
      }
    ]
  }
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://endevo.life${item.url}`
  }))
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const reviewSchema = (reviews: { author: string; rating: number; reviewBody: string; datePublished: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "ENDevo Legacy Readiness Platform",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length,
    "reviewCount": reviews.length
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "datePublished": review.datePublished,
    "reviewBody": review.reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5
    }
  }))
});
