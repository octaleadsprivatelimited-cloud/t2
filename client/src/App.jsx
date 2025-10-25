import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import ErrorBoundary from './components/ErrorBoundary'
import SEO from './components/SEO'

// Lazy load components for better performance
const Header = lazy(() => import('./components/Header'))
const Footer = lazy(() => import('./components/Footer'))
const BackgroundAnimation = lazy(() => import('./components/BackgroundAnimation'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))

// Lazy load page components
const Home = lazy(() => import('./pages/Home'))
const Insurtech = lazy(() => import('./pages/Insurtech'))
const Consulting = lazy(() => import('./pages/Consulting'))
const CyberSecurityProducts = lazy(() => import('./pages/CyberSecurityProducts'))
const CyberSecurityServices = lazy(() => import('./pages/CyberSecurityServices'))
const PressRelease = lazy(() => import('./pages/PressRelease'))
const PressReleaseDetail = lazy(() => import('./pages/PressReleaseDetail'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Careers = lazy(() => import('./pages/Careers'))
const About = lazy(() => import('./pages/About'))
const Team = lazy(() => import('./pages/Team'))
const Blog = lazy(() => import('./pages/Blog'))
const Insights = lazy(() => import('./pages/Insights'))
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Import dynamic routes
import { routes as dynamicRoutes } from './routes/config'

// Loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'var(--bg-primary)'
  }}>
    <div className="loading-spinner"></div>
  </div>
)

// Styled components
const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  background: var(--bg-primary);
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
`

const App = () => {
  return (
    <ErrorBoundary>
      <AppContainer>
        <SEO />
        
        <Suspense fallback={<LoadingSpinner />}>
          <BackgroundAnimation />
          <ScrollToTop />
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/insurtech" element={<Insurtech />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/products" element={<CyberSecurityProducts />} />
            <Route path="/services" element={<CyberSecurityServices />} />
            <Route path="/press" element={<PressRelease />} />
            <Route path="/press/:id" element={<PressReleaseDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<ArticleDetail />} />
            <Route path="/contact" element={<Contact />} />
            {dynamicRoutes.map(route => {
              const BasicPage = lazy(() => import('./pages/templates/BasicPage'))
              return (
                <Route 
                  key={route.path} 
                  path={route.path} 
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <BasicPage 
                        pill={route.pill} 
                        title={route.title} 
                        description={route.description} 
                      />
                    </Suspense>
                  } 
                />
              )
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          <Footer />
        </Suspense>
      </AppContainer>
    </ErrorBoundary>
  )
}

export default App
