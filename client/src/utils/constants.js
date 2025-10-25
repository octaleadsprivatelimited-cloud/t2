// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.transasia.tech'

// Animation Durations
export const ANIMATION_DURATION = {
  FAST: 300,
  NORMAL: 500,
  SLOW: 1000
}

// Breakpoints
export const BREAKPOINTS = {
  MOBILE: '768px',
  TABLET: '1024px',
  DESKTOP: '1200px'
}

// Theme Colors
export const COLORS = {
  PRIMARY: '#00d4ff',
  SECONDARY: '#ff6b35',
  TERTIARY: '#8b5cf6',
  SUCCESS: '#2ed573',
  ERROR: '#ff4757',
  WARNING: '#ffa502',
  INFO: '#3742fa'
}

// Social Links
export const SOCIAL_LINKS = {
  LINKEDIN: 'https://linkedin.com/company/transasia-tech',
  TWITTER: 'https://twitter.com/transasia_tech',
  GITHUB: 'https://github.com/transasia-tech',
  EMAIL: 'contact@transasia.tech'
}

// Navigation Items
export const NAVIGATION_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' }
]

// Feature Flags
export const FEATURE_FLAGS = {
  ENABLE_ANALYTICS: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
  ENABLE_DEBUG: process.env.NODE_ENV === 'development',
  ENABLE_PWA: process.env.REACT_APP_ENABLE_PWA === 'true'
}
