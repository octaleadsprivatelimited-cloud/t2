const BASE_URL = 'https://transasia.tech'

const GLOBAL_AREA_SERVED = [
  'Worldwide',
  'United States',
  'Canada',
  'Mexico',
  'Brazil',
  'Argentina',
  'United Kingdom',
  'Ireland',
  'Germany',
  'France',
  'Spain',
  'Italy',
  'Netherlands',
  'Sweden',
  'Norway',
  'Finland',
  'Denmark',
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Oman',
  'India',
  'Bangladesh',
  'Sri Lanka',
  'Singapore',
  'Malaysia',
  'Hong Kong',
  'Japan',
  'South Korea',
  'Australia',
  'New Zealand',
  'South Africa',
  'Nigeria',
  'Kenya'
]

const defaultImage = `${BASE_URL}/og-image.jpg`
const defaultImageAlt = 'Trans Asia Tech - Advanced Cybersecurity Platform'

const DEFAULT_HREFLANGS = [
  { hrefLang: 'en', href: BASE_URL },
  { hrefLang: 'en-in', href: `${BASE_URL}/` },
  { hrefLang: 'x-default', href: BASE_URL }
]

const ALTERNATE_LOCALES = ['en_US', 'en_GB', 'en_IN', 'en_AE']

export const seoConfig = [
  {
    path: '/',
    title: 'Trans Asia Tech - Quantifying Cyber Risk for the Board',
    description:
      'Trans Asia Tech delivers research-backed Cyber Risk Quantification (CRQ), board-ready dashboards, and end-to-end cybersecurity services across India, UAE, Bangladesh, Sri Lanka, KSA, and the globe.',
    keywords:
      'Trans Asia Tech, Cyber Risk Quantification, CRQ, cyber insurance analytics, cybersecurity services, global cyber resilience, value at risk, cyber dashboards',
    image: defaultImage,
    imageAlt: defaultImageAlt,
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED,
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Trans Asia Tech - Quantifying Cyber Risk for the Board',
        url: BASE_URL,
        description:
          'Enterprise-ready cyber risk quantification, cyber insurance analytics, and cybersecurity services for board-level decision making.',
        inLanguage: 'en-US',
        hasPart: [
          {
            '@type': 'WebPageElement',
            name: 'Cyber Risk Quantification',
            position: 1
          },
          {
            '@type': 'WebPageElement',
            name: 'Cybersecurity Services',
            position: 2
          },
          {
            '@type': 'WebPageElement',
            name: 'Insurtech Solutions',
            position: 3
          }
        ]
      }
    ]
  },
  {
    path: '/insurtech',
    title: 'Trans Asia Tech Insurtech Solutions',
    description:
      'Discover Trans Asia Tech’s insurtech platforms including CYBERCAT™ and CASUALTYCAT™ for underwriting, cyber insurance analytics, casualty modelling, and value-at-risk reporting used across the globe.',
    keywords:
      'insurtech, CYBERCAT, CASUALTYCAT, cyber underwriting, cyber insurance analytics, actuarial modelling, value at risk, Trans Asia Tech insurtech',
    image: defaultImage,
    imageAlt: 'Trans Asia Tech Insurtech Solutions',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED,
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'CYBERCAT™',
        applicationCategory: 'Cybersecurity',
        operatingSystem: 'Cloud',
        url: `${BASE_URL}/insurtech`,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '54'
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock'
        },
        areaServed: GLOBAL_AREA_SERVED
      },
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'CASUALTYCAT™',
        applicationCategory: 'InsuranceApplication',
        operatingSystem: 'Cloud',
        areaServed: GLOBAL_AREA_SERVED,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock'
        }
      }
    ]
  },
  {
    path: '/consulting',
    title: 'Cybersecurity Consulting Services | Trans Asia Tech',
    description:
      'Expert cybersecurity consulting, cyber maturity assessments, and board-ready advisory across all global regions with Trans Asia Tech consultants.',
    keywords:
      'cybersecurity consulting, global cyber advisory, cyber maturity assessments, board advisory, resilience consulting, Trans Asia Tech services worldwide',
    image: defaultImage,
    imageAlt: 'Trans Asia Tech Consulting',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED,
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Trans Asia Tech Cybersecurity Consulting',
        serviceType: 'Cybersecurity Consulting',
        areaServed: GLOBAL_AREA_SERVED,
        provider: {
          '@type': 'Organization',
          name: 'Trans Asia Tech'
        }
      }
    ]
  },
  {
    path: '/products',
    title: 'Cybersecurity Products Portfolio | Trans Asia Tech',
    description:
      'Explore Trans Asia Tech’s cybersecurity product suite—TransGRC, VRMA, HunterCat, and BlackNet—designed for global enterprises needing compliance, remediation, and threat intelligence.',
    keywords:
      'TransGRC, VRMA, HunterCat, BlackNet, cybersecurity products, compliance automation, vulnerability remediation, threat intelligence',
    image: defaultImage,
    imageAlt: 'Trans Asia Tech Products',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED,
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'ProductCollection',
        name: 'Trans Asia Tech Cybersecurity Product Portfolio',
        url: `${BASE_URL}/products`,
        hasPart: [
          {
            '@type': 'Product',
            name: 'TransGRC',
            category: 'Governance, Risk and Compliance',
            areaServed: GLOBAL_AREA_SERVED
          },
          {
            '@type': 'Product',
            name: 'VRMA',
            category: 'Vulnerability Remediation Management',
            areaServed: GLOBAL_AREA_SERVED
          },
          {
            '@type': 'Product',
            name: 'HunterCat',
            category: 'Web Application Security',
            areaServed: GLOBAL_AREA_SERVED
          }
        ]
      }
    ]
  },
  {
    path: '/services',
    title: 'Cybersecurity Services | Trans Asia Tech',
    description:
      'Full-stack cybersecurity services covering vCISO, managed detection and response, OT security, red teaming, compliance, and cyber risk quantification delivered globally by Trans Asia Tech.',
    keywords:
      'global cybersecurity services, vCISO, managed detection, MDR, OT security, red team, compliance services, cyber risk quantification, Trans Asia Tech worldwide',
    image: defaultImage,
    imageAlt: 'Trans Asia Tech Services',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED,
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Global Cybersecurity Services',
        serviceType: 'Managed Cybersecurity',
        provider: {
          '@type': 'Organization',
          name: 'Trans Asia Tech'
        },
        areaServed: GLOBAL_AREA_SERVED
      }
    ]
  },
  {
    path: '/services-test',
    title: 'Cybersecurity Services Preview | Trans Asia Tech',
    description:
      'Preview Trans Asia Tech’s cybersecurity services including risk quantification, managed detection, OT security, and governance solutions available worldwide.',
    keywords:
      'cybersecurity services preview, Trans Asia Tech capabilities, global cyber services',
    image: defaultImage,
    imageAlt: 'Trans Asia Tech Services Overview',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED
  },
  {
    path: '/press',
    title: 'Press Releases | Trans Asia Tech',
    description:
      'Stay informed with Trans Asia Tech press releases, global partnerships, cybersecurity accolades, and product launch announcements.',
    keywords:
      'Trans Asia Tech press, cybersecurity news, product launches, global partnerships',
    image: defaultImage,
    imageAlt: 'Trans Asia Tech Press',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED
  },
  {
    path: '/press/:id',
    title: 'Press Release Detail | Trans Asia Tech',
    description:
      'Read the latest Trans Asia Tech press release covering cybersecurity innovations, global partnerships, and customer successes.',
    keywords:
      'cybersecurity press release, Trans Asia Tech news, global cyber partnerships',
    image: defaultImage,
    imageAlt: 'Trans Asia Tech Press Detail',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED,
    type: 'article',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'Trans Asia Tech Press Release',
        datePublished: new Date().toISOString(),
        dateModified: new Date().toISOString(),
        image: [defaultImage],
        areaServed: GLOBAL_AREA_SERVED
      }
    ]
  },
  {
    path: '/gallery',
    title: 'Cybersecurity Events & Media Gallery | Trans Asia Tech',
    description:
      'Browse the Trans Asia Tech media gallery featuring global cybersecurity events, awards, and industry participation.',
    keywords:
      'Trans Asia Tech gallery, cybersecurity events, global cybersecurity awards, media highlights',
    image: defaultImage,
    imageAlt: 'Trans Asia Tech Gallery',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED
  },
  {
    path: '/careers',
    title: 'Careers at Trans Asia Tech',
    description:
      'Join Trans Asia Tech’s global cybersecurity experts. Explore career opportunities in CRQ modelling, consulting, engineering, and customer success.',
    keywords:
      'Trans Asia Tech careers, global cybersecurity jobs, cyber consulting roles, cyber risk hiring worldwide',
    image: defaultImage,
    imageAlt: 'Careers at Trans Asia Tech',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED,
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: 'Cybersecurity Specialist',
        hiringOrganization: {
          '@type': 'Organization',
          name: 'Trans Asia Tech',
          sameAs: BASE_URL
        },
        jobLocationType: 'TELECOMMUTE',
        applicantLocationRequirements: {
          '@type': 'Country',
          name: 'Worldwide'
        }
      }
    ]
  },
  {
    path: '/about',
    title: 'About Trans Asia Tech',
    description:
      'Learn about Trans Asia Tech’s mission, leadership, and journey in delivering cutting-edge cybersecurity and insurtech solutions across every continent.',
    keywords:
      'about Trans Asia Tech, global cybersecurity leadership, insurtech solutions, Trans Asia mission',
    image: defaultImage,
    imageAlt: 'About Trans Asia Tech',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED
  },
  {
    path: '/team',
    title: 'Leadership Team | Trans Asia Tech',
    description:
      'Meet the global Trans Asia Tech leadership team driving innovation in cyber risk quantification, insurtech, and enterprise resilience.',
    keywords:
      'Trans Asia Tech leadership, cyber risk executives, global cybersecurity leaders',
    image: defaultImage,
    imageAlt: 'Trans Asia Tech Team',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED
  },
  {
    path: '/team/:slug',
    title: 'Team Profile | Trans Asia Tech',
    description:
      'Explore the profiles of Trans Asia Tech leaders, their global cybersecurity experience, and contributions to enterprise resilience.',
    keywords:
      'Trans Asia Tech team profile, cybersecurity leader, global cyber expertise',
    image: defaultImage,
    imageAlt: 'Trans Asia Tech Team Profile',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED,
    type: 'profile'
  },
  {
    path: '/blog',
    title: 'Cybersecurity Blog | Trans Asia Tech',
    description:
      'Insights, thought leadership, and cybersecurity best practices for global enterprises from Trans Asia Tech experts.',
    keywords:
      'cybersecurity blog, Trans Asia Tech insights, cyber risk articles, global cyber trends',
    image: defaultImage,
    imageAlt: 'Trans Asia Tech Blog',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED
  },
  {
    path: '/insights',
    title: 'Cybersecurity Insights & Resources | Trans Asia Tech',
    description:
      'Explore cybersecurity resources, whitepapers, and board-level insights for global organizations from Trans Asia Tech.',
    keywords:
      'cybersecurity insights, risk resources, Trans Asia Tech whitepapers, global cyber guidance',
    image: defaultImage,
    imageAlt: 'Trans Asia Tech Insights',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED
  },
  {
    path: '/insights/:id',
    title: 'Insight Article | Trans Asia Tech',
    description:
      'Read the latest global cybersecurity insight from Trans Asia Tech covering trends, risk management, and cyber resilience.',
    keywords:
      'Trans Asia Tech insight, cybersecurity article, global cyber trends, risk intelligence',
    image: defaultImage,
    imageAlt: 'Trans Asia Tech Insight Detail',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED,
    type: 'article'
  },
  {
    path: '/contact',
    title: 'Contact Trans Asia Tech',
    description:
      'Contact Trans Asia Tech for cybersecurity consulting, cyber risk quantification, insurtech platforms, and managed services available worldwide.',
    keywords:
      'contact Trans Asia Tech, cybersecurity consultation, global cyber risk enquiry, insurtech contact',
    image: defaultImage,
    imageAlt: 'Contact Trans Asia Tech',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED,
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Trans Asia Tech',
        url: `${BASE_URL}/contact`,
        mainEntity: {
          '@type': 'Organization',
          name: 'Trans Asia Tech',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-89258-34989',
            contactType: 'sales',
            areaServed: GLOBAL_AREA_SERVED,
            availableLanguage: ['en']
          }
        }
      }
    ]
  },
  {
    path: '/404',
    title: 'Page Not Found | Trans Asia Tech',
    description: 'The page you are looking for could not be found.',
    keywords: '404, page not found, Trans Asia Tech',
    noindex: true,
    nofollow: true,
    image: defaultImage,
    imageAlt: 'Trans Asia Tech 404',
    alternateLocales: ALTERNATE_LOCALES,
    hreflangs: DEFAULT_HREFLANGS,
    coverage: 'worldwide',
    distribution: 'global',
    areaServed: GLOBAL_AREA_SERVED
  }
]

export const defaultSeo = seoConfig[0]
export const seoBaseUrl = BASE_URL
