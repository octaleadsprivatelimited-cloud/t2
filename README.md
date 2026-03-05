# Trans Asia Tech - Modern Cybersecurity Platform

A modern, high-performance cybersecurity platform built with React 18, Vite, and optimized for Vercel deployment.

## 🚀 Features

- **Modern React 18** with hooks and functional components
- **Vite Build System** for lightning-fast development and builds
- **Lazy Loading** for optimal performance
- **Error Boundaries** for robust error handling
- **SEO Optimized** with React Helmet Async
- **Responsive Design** with modern CSS
- **TypeScript Support** for better development experience
- **Vercel Optimized** deployment configuration

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, TypeScript
- **Styling**: Styled Components, CSS Modules
- **Routing**: React Router v6
- **Animations**: Framer Motion, AOS
- **SEO**: React Helmet Async
- **Build**: Vite (replacing Create React App)
- **Deployment**: Vercel

## 📦 Installation

```bash
# Install dependencies
cd client
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

The application is optimized for Vercel deployment with:

- **Automatic builds** from Git pushes
- **Edge functions** for API routes
- **Static site generation** for optimal performance
- **CDN distribution** for global speed

### Vercel Configuration

The `vercel.json` file contains optimized settings for:
- Node.js 22.x runtime
- Automatic dependency installation
- Build optimization
- Route handling

## 📁 Project Structure

```
client/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Layout.jsx       # Main layout component
│   │   ├── SEO.jsx          # SEO optimization
│   │   └── ErrorBoundary.jsx # Error handling
│   ├── pages/               # Page components
│   ├── hooks/               # Custom React hooks
│   ├── utils/                # Utility functions
│   ├── styles/              # Global styles
│   └── App.jsx              # Main application
├── public/                  # Static assets
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
└── vercel.json             # Vercel deployment config
```

## 🎨 Styling

The application uses a modern CSS approach with:
- **CSS Custom Properties** for theming
- **Styled Components** for component styling
- **Global CSS** for base styles
- **Responsive design** with mobile-first approach

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Environment Variables

Copy `env.example` to `.env` and configure:

```bash
cp env.example .env
```

## 🚀 Performance Optimizations

- **Code Splitting** with React.lazy()
- **Bundle Optimization** with Vite
- **Image Optimization** with modern formats
- **Lazy Loading** for components and images
- **Service Worker** for caching (PWA ready)

## 🔒 Security

- **Content Security Policy** headers
- **XSS Protection** with React
- **HTTPS Only** in production
- **Secure Headers** with Helmet

## 📱 Mobile Optimization

- **Responsive Design** for all screen sizes
- **Touch-friendly** interactions
- **Fast loading** on mobile networks
- **Progressive Web App** capabilities

## 🌐 SEO & Analytics

- **Meta Tags** optimization
- **Open Graph** support
- **Twitter Cards** integration
- **Sitemap** generation
- **Analytics** ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: contact@transasiatec.com
- LinkedIn: [Trans Asia Tech](https://linkedin.com/company/transasia-tech)
- Twitter: [@transasia_tech](https://twitter.com/transasia_tech)

---

**Built with ❤️ by Trans Asia Tech**