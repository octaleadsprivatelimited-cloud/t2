const BASE_URL = 'https://transasia.tech'

const GLOBAL_AREA_SERVED = [
  'Global',
  'Worldwide',
  'India',
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
  'Oman',
  'Bahrain',
  'Singapore',
  'Malaysia',
  'Indonesia',
  'Philippines',
  'Thailand',
  'Vietnam',
  'Hong Kong',
  'Japan',
  'South Korea',
  'Australia',
  'New Zealand',
  'United States',
  'Canada',
  'Mexico',
  'Brazil',
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
  'South Africa',
  'Kenya',
  'Nigeria'
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
    title: 'Trans Asia Tech - Cyber Risk Quantification & Managed Security',
    description:
      'Trans Asia Tech delivers cyber risk quantification, vCISO leadership, OT security, and compliance programs for enterprises across India, the GCC, APAC, the UK, and North America.',
    keywords:
      'cyber risk quantification platform, vCISO services India, OT cybersecurity GCC, GRC consulting APAC, cyber insurance analytics, managed detection and response Middle East, Trans Asia Tech',
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
        name: 'Trans Asia Tech - Cyber Risk Quantification & Managed Security',
        url: BASE_URL,
        description:
          'Board-ready cyber risk quantification, cyber insurance analytics, and managed cybersecurity services for regulated industries across global markets.',
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
    title: 'Insurtech Platforms CYBERCAT & CASUALTYCAT | Trans Asia Tech',
    description:
      'Trans Asia Tech’s CYBERCAT and CASUALTYCAT platforms power cyber insurance underwriting, exposure modelling, and actuarial reporting for carriers across India, the Middle East, APAC, the UK, and North America.',
    keywords:
      'CYBERCAT underwriting analytics, CASUALTYCAT actuarial modelling, cyber insurance analytics GCC, insurtech platform APAC, cyber exposure modelling, Trans Asia Tech insurtech',
    image: defaultImage,
    imageAlt: 'Trans Asia Tech Insurtech Platforms',
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
        description:
          'CYBERCAT delivers cyber insurance underwriting analytics, loss modelling, and value-at-risk reporting for global carriers.',
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
        description:
          'CASUALTYCAT equips casualty underwriters with actuarial models and portfolio insights across global markets.',
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
      'Expert cybersecurity consulting, cyber maturity assessments, and board advisory delivered across India, the GCC, APAC hubs, the UK, and North America by Trans Asia Tech consultants.',
    keywords:
      'cybersecurity consulting India, cyber maturity assessment GCC, board cyber advisory APAC, resilience consulting Middle East, Trans Asia Tech services',
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
      'Explore Trans Asia Tech’s cybersecurity product suite—TransGRC, VRMA, HunterCat, and BlackNet—built for enterprises in India, the Middle East, APAC, Europe, and North America that require compliance, remediation, and threat intelligence.',
    keywords:
      'TransGRC compliance automation, VRMA vulnerability remediation, HunterCat application security, BlackNet threat intelligence, cybersecurity products Middle East, Trans Asia Tech',
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
      'Full-stack cybersecurity services covering vCISO leadership, managed detection, OT security, red teaming, compliance, and cyber risk quantification for enterprises in India, the GCC, APAC, Europe, and North America.',
    keywords:
      'vCISO services Middle East, managed detection and response APAC, OT security India, red team assessment GCC, compliance readiness Europe, cyber risk quantification North America, Trans Asia Tech',
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
      'Preview Trans Asia Tech’s cybersecurity services—including risk quantification, managed detection, OT security, and governance solutions—delivered across India, the Middle East, APAC, Europe, and North America.',
    keywords:
      'cybersecurity services preview, Trans Asia Tech capabilities, global cyber services, OT security preview, vCISO preview',
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
      'Stay informed with Trans Asia Tech press releases covering global partnerships, cybersecurity accolades, and product launches across India, the Middle East, APAC, Europe, and North America.',
    keywords:
      'Trans Asia Tech press, cybersecurity news India, product launches Middle East, global cyber partnerships, insurtech announcements',
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
      'Read the latest Trans Asia Tech press release covering cybersecurity innovations, global partnerships, and customer successes across India, the GCC, APAC, Europe, and North America.',
    keywords:
      'cybersecurity press release, Trans Asia Tech news, global cyber partnerships, cyber insurance announcement, OT security update',
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
      'Browse the Trans Asia Tech media gallery featuring cybersecurity events, awards, and industry participation across India, the Middle East, APAC, Europe, and North America.',
    keywords:
      'Trans Asia Tech gallery, cybersecurity events India, global cybersecurity awards, media highlights Middle East, insurtech events',
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
      'Join Trans Asia Tech’s global cybersecurity experts. Explore remote and hybrid roles in CRQ modelling, consulting, engineering, and customer success across India, the Middle East, APAC, Europe, and North America.',
    keywords:
      'Trans Asia Tech careers, global cybersecurity jobs, cyber consulting roles, cyber risk hiring India, insurtech jobs Middle East',
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
      'Learn about Trans Asia Tech’s mission, leadership, and journey in delivering cyber risk quantification, insurtech, and managed security programs across India, the Middle East, APAC, Europe, and North America.',
    keywords:
      'about Trans Asia Tech, global cybersecurity leadership, insurtech solutions India, cyber risk mission Middle East, OT security leadership',
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
      'Meet the Trans Asia Tech leadership team driving cyber risk quantification, insurtech, and resilience initiatives for clients across India, the Middle East, APAC, Europe, and North America.',
    keywords:
      'Trans Asia Tech leadership, cyber risk executives India, global cybersecurity leaders, insurtech leadership Middle East',
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
      'Explore the profiles of Trans Asia Tech leaders, their cybersecurity experience, and contributions to enterprise resilience programs across India, the Middle East, APAC, Europe, and North America.',
    keywords:
      'Trans Asia Tech team profile, cybersecurity leader India, global cyber expertise, insurtech leadership GCC',
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
      'Insights, thought leadership, and cybersecurity best practices for enterprises in India, the Middle East, APAC, Europe, and North America from Trans Asia Tech experts.',
    keywords:
      'cybersecurity blog, Trans Asia Tech insights, cyber risk articles India, global cyber trends, OT security thought leadership',
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
      'Explore cybersecurity resources, whitepapers, and board-level insights for organizations across India, the Middle East, APAC, Europe, and North America from Trans Asia Tech.',
    keywords:
      'cybersecurity insights, risk resources India, Trans Asia Tech whitepapers, global cyber guidance, board-ready cyber reports',
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
      'Read the latest cybersecurity insight from Trans Asia Tech covering trends, risk management, and resilience programs across India, the Middle East, APAC, Europe, and North America.',
    keywords:
      'Trans Asia Tech insight, cybersecurity article India, global cyber trends, risk intelligence Middle East, board-ready cyber guidance',
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
      'Contact Trans Asia Tech for cybersecurity consulting, cyber risk quantification, insurtech platforms, and managed services across India, the Middle East, APAC, Europe, and North America.',
    keywords:
      'contact Trans Asia Tech, cybersecurity consultation India, cyber risk enquiry Middle East, insurtech contact APAC, OT security enquiry',
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
