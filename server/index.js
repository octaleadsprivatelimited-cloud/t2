const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'"],
    },
  },
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

app.use('/api/', limiter);

// Middleware
app.use(compression());
app.use(cors({
  origin: (origin, callback) => callback(null, true),
  credentials: true
}));
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files from React build (if present)
const staticPath = path.join(__dirname, '../client/dist');
if (require('fs').existsSync(staticPath)) {
  app.use(express.static(staticPath));
}

// Always serve public assets for absolute paths like /insurtech/*
// 1) Legacy: client/public (older structure)
const publicAssetsPath = path.join(__dirname, '../client/public');
if (require('fs').existsSync(publicAssetsPath)) {
  app.use('/insurtech', express.static(path.join(publicAssetsPath, 'insurtech')));
}

// 2) Current: repo root public (new structure configured in Vite publicDir)
const rootPublicPath = path.join(__dirname, '../public');
if (require('fs').existsSync(rootPublicPath)) {
  app.use('/insurtech', express.static(path.join(rootPublicPath, 'insurtech')));
  app.use('/images', express.static(path.join(rootPublicPath, 'images')));
}

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/demo', require('./routes/demo'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/newsletter', require('./routes/newsletter'));
app.use('/api/analytics', require('./routes/analytics'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Import sitemap generator
const { generateSitemap } = require('./utils/sitemapGenerator');

// SEO and sitemap endpoints
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  res.send(`# Robots.txt for Trans Asia Tech
# Comprehensive robots.txt optimized for search engines and AI crawlers
# Last updated: ${new Date().toISOString().split('T')[0]}

# ============================================
# Standard Search Engines
# ============================================
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /*.json$
Disallow: /*?*utm_*
Crawl-delay: 1

# ============================================
# Google Search & AI
# ============================================
User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

User-agent: Googlebot-Image
Allow: /images/
Allow: /insurtech/
Disallow: /api/
Crawl-delay: 1

# Google AI (Gemini) - Allow for AI training
User-agent: Google-Extended
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

# ============================================
# OpenAI (ChatGPT, GPT-4, etc.)
# ============================================
User-agent: GPTBot
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

User-agent: ChatGPT-User
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

User-agent: CCBot
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

# ============================================
# Anthropic (Claude)
# ============================================
User-agent: anthropic-ai
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

User-agent: Claude-Web
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

User-agent: ClaudeBot
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

# ============================================
# Perplexity AI
# ============================================
User-agent: PerplexityBot
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

User-agent: Perplexity-ai
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

# ============================================
# Microsoft / Bing
# ============================================
User-agent: Bingbot
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

User-agent: BingPreview
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

# Bing AI (Copilot)
User-agent: msnbot
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

# ============================================
# Other AI Crawlers
# ============================================
# Applebot (Siri)
User-agent: Applebot-Extended
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

# Meta AI
User-agent: facebookexternalhit
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

# Cohere AI
User-agent: cohere-ai
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

# You.com AI
User-agent: YouBot
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

# Character.AI
User-agent: Character-ai
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

# Yandex
User-agent: Yandex
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

User-agent: YandexGPT
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

# Baidu
User-agent: Baiduspider
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 2

# DuckDuckGo
User-agent: DuckDuckBot
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

# ============================================
# Sitemaps
# ============================================
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-index.xml

# ============================================
# Host Information
# ============================================
Host: ${baseUrl.replace(/^https?:\/\//, '')}
`);
});

app.get('/sitemap.xml', (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  const sitemap = generateSitemap(baseUrl);
  
  res.type('application/xml');
  res.set('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
  res.send(sitemap);
});

// Sitemap index (for future expansion)
app.get('/sitemap-index.xml', (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  const lastmod = new Date().toISOString().split('T')[0];
  
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>`;
  
  res.type('application/xml');
  res.set('Cache-Control', 'public, max-age=3600');
  res.send(sitemapIndex);
});

// API 404 handler
app.use('/api/*', (req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested API resource was not found'
  });
});

// SPA fallback - serve index.html for all non-API routes
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '../client/dist/index.html');
  if (require('fs').existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
});

// Error handling middleware (must be last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
