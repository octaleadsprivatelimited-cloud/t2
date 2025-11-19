import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = 'Trans Asia Tech | Cyber Risk Quantification & OT Security',
  description = 'Trans Asia Tech quantifies cyber risk and delivers vCISO, OT security, GRC, and incident response programs for regulated enterprises across India, the Middle East, APAC, Europe, and North America.',
  keywords = 'cyber risk quantification, virtual CISO services, OT cybersecurity, GRC consulting, cyber insurance readiness, incident response retainer, Trans Asia Tech',
  image = '/og-image.jpg',
  imageAlt = 'Trans Asia Tech - Advanced Cybersecurity Platform',
  url = 'https://transasia.tech',
  canonicalUrl,
  type = 'website',
  author = 'Trans Asia Tech',
  siteName = 'Trans Asia Tech',
  locale = 'en_US',
  alternateLocales = ['en_GB', 'en_IN', 'en_AE'],
  hreflangs = [],
  coverage = 'worldwide',
  distribution = 'global',
  areaServed = [],
  noindex = false,
  nofollow = false,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData = [],
  additionalMeta = []
}) => {
  const fullTitle = title.includes('Trans Asia Tech') ? title : `${title} | Trans Asia Tech`
  const canonical = canonicalUrl || url
  const normalizedBaseUrl = canonical.replace(/\/$/, '')
  const logoUrl = `${normalizedBaseUrl}/insurtech/logo.png`
  const areaServedList = areaServed.length ? areaServed : ['Worldwide', 'Global']

  const robotsDirectives = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1'
  ].join(', ')

  const aiDirectives = noindex ? 'noindex, nofollow' : 'index, follow'

  const defaultStructuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteName,
      legalName: 'Trans Asia Tech Private Limited',
      url,
      logo: logoUrl,
      sameAs: [
        'https://www.linkedin.com/company/transasia-tech/',
        'https://twitter.com/transasia_tech'
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-89258-34989',
          contactType: 'sales',
          areaServed: areaServedList.slice(0, 10),
          availableLanguage: ['en']
        }
      ],
      areaServed: areaServedList
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${normalizedBaseUrl}/?s={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    }
  ]

  if (type === 'article') {
    defaultStructuredData.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      image: [image],
      author: {
        '@type': 'Person',
        name: author
      },
      publisher: {
        '@type': 'Organization',
        name: siteName,
        logo: {
          '@type': 'ImageObject',
          url: logoUrl
        }
      },
      datePublished: publishedTime || new Date().toISOString(),
      dateModified: modifiedTime || new Date().toISOString(),
      mainEntityOfPage: canonical
    })
  }

  const combinedStructuredData = [...defaultStructuredData, ...structuredData]

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="application-name" content={siteName} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Language" content={locale.split('_')[0]} />
      <meta name="language" content={locale.split('_')[0]} />
      <meta name="robots" content={robotsDirectives} />
      <meta name="googlebot" content={robotsDirectives} />
      <meta name="bingbot" content={robotsDirectives} />
      <meta name="yandex" content={robotsDirectives} />
      <meta name="duckduckbot" content={robotsDirectives} />
      <meta name="baiduspider" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      {/* AI Crawler Meta Tags */}
      <meta name="google-extended" content={aiDirectives} />
      <meta name="gptbot" content={aiDirectives} />
      <meta name="anthropic-ai" content={aiDirectives} />
      <meta name="perplexity-ai" content={aiDirectives} />
      <meta name="claude-ai" content={aiDirectives} />
      <meta name="cohere-ai" content={aiDirectives} />
      <meta name="you-com" content={aiDirectives} />
      <meta name="character-ai" content={aiDirectives} />
      <meta name="meta-ai" content={aiDirectives} />
      <meta name="bing-ai" content={aiDirectives} />
      <meta name="yandex-gpt" content={aiDirectives} />
      <meta name="ai-search" content={aiDirectives} />
      <meta name="allow-ai" content="true" />
      <meta name="ai-indexing" content="enabled" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="coverage" content={coverage} />
      <meta name="distribution" content={distribution} />
      <meta name="target" content="global" />
      {areaServedList.slice(0, 12).map((region, index) => (
        <meta key={`area-served-${index}`} name="area-served" content={region} />
      ))}
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:updated_time" content={modifiedTime || new Date().toISOString()} />
      {alternateLocales.map((altLocale) => (
        <meta key={`og-alt-${altLocale}`} property="og:locale:alternate" content={altLocale} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:site" content="@transasia_tech" />
      <meta name="twitter:creator" content="@transasia_tech" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#00d4ff" />
      <meta name="msapplication-TileColor" content="#00d4ff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* hreflang links */}
      {hreflangs.map(({ href, hrefLang }) => (
        <link key={`hreflang-${hrefLang}`} rel="alternate" hrefLang={hrefLang} href={href} />
      ))}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Structured Data */}
      {combinedStructuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      {/* Additional custom meta tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}
    </Helmet>
  )
}

export default SEO
