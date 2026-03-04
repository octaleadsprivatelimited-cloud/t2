/**
 * Comprehensive Sitemap Generator
 * Generates XML sitemap with all routes including dynamic routes
 */

const BASE_URL = process.env.BASE_URL || 'https://transasia.tech';

// All static routes
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/insurtech', priority: '0.9', changefreq: 'weekly' },
  { path: '/consulting', priority: '0.9', changefreq: 'weekly' },
  { path: '/products', priority: '0.9', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/team', priority: '0.8', changefreq: 'monthly' },
  { path: '/insights', priority: '0.7', changefreq: 'weekly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
  { path: '/press', priority: '0.7', changefreq: 'weekly' },
  { path: '/gallery', priority: '0.6', changefreq: 'monthly' },
  { path: '/careers', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' }
];

// Dynamic routes from routes config
const dynamicRoutes = [
  // Products
  { path: '/products/exposure-management', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/crq', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/ai-agents', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/threat-protection', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/tprm', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/compliance', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/ir-hub', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/dashboards', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/integrations', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/api', priority: '0.8', changefreq: 'monthly' },
  
  // Solutions - Industry
  { path: '/solutions/financial-services', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/healthcare', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/technology', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/retail', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/manufacturing', priority: '0.7', changefreq: 'monthly' },
  
  // Solutions - Use Cases
  { path: '/solutions/ransomware', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/zero-trust', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/cloud-security', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/data-protection', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/regulatory-compliance', priority: '0.7', changefreq: 'monthly' },
  
  // Company
  { path: '/company/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/company/leadership', priority: '0.6', changefreq: 'monthly' },
  { path: '/company/careers', priority: '0.6', changefreq: 'monthly' },
  { path: '/company/press', priority: '0.6', changefreq: 'monthly' },
  { path: '/company/partners', priority: '0.6', changefreq: 'monthly' },
  { path: '/company/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/company/offices', priority: '0.6', changefreq: 'monthly' },
  
  // Support
  { path: '/support/help-center', priority: '0.5', changefreq: 'monthly' },
  { path: '/support/status', priority: '0.5', changefreq: 'daily' },
  { path: '/support/security', priority: '0.5', changefreq: 'monthly' },
  { path: '/support/trust-center', priority: '0.5', changefreq: 'monthly' },
  
  // Legal
  { path: '/support/legal/privacy', priority: '0.4', changefreq: 'yearly' },
  { path: '/support/legal/terms', priority: '0.4', changefreq: 'yearly' },
  { path: '/support/legal/cookies', priority: '0.4', changefreq: 'yearly' }
];

/**
 * Generate XML sitemap
 * @param {string} baseUrl - Base URL of the website
 * @returns {string} XML sitemap content
 */
function generateSitemap(baseUrl = BASE_URL) {
  const normalizedBaseUrl = baseUrl.replace(/\/$/, '');
  const lastmod = new Date().toISOString().split('T')[0];
  
  // Combine all routes
  const allRoutes = [...staticRoutes, ...dynamicRoutes];
  
  // Generate XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  allRoutes.forEach(route => {
    const loc = `${normalizedBaseUrl}${route.path}`;
    xml += `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  xml += `</urlset>`;
  
  return xml;
}

/**
 * Escape XML special characters
 * @param {string} str - String to escape
 * @returns {string} Escaped string
 */
function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Get all routes for programmatic access
 * @returns {Array} Array of route objects
 */
function getAllRoutes() {
  return [...staticRoutes, ...dynamicRoutes];
}

module.exports = {
  generateSitemap,
  getAllRoutes,
  staticRoutes,
  dynamicRoutes
};
