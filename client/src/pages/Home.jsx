import React, { Suspense, lazy } from 'react'
import styled from 'styled-components'

// Lazy load components for better performance
const Hero = lazy(() => import('../components/Hero'))
const SecurityFeatures = lazy(() => import('../components/SecurityFeatures'))
const Solutions = lazy(() => import('../components/Solutions'))
const IndustrialPresence = lazy(() => import('../components/IndustrialPresence'))
const IndustryLeaders = lazy(() => import('../components/IndustryLeaders'))
const Geographies = lazy(() => import('../components/Geographies'))
const Testimonials = lazy(() => import('../components/Testimonials'))

const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    background: '#0a0a0a'
  }}>
    <div className="loading-spinner"></div>
  </div>
)

const HomeContainer = styled.div`
  min-height: 100vh;
`

const Home = () => {
  return (
    <HomeContainer>
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <SecurityFeatures />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Solutions />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <IndustrialPresence />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <IndustryLeaders />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Geographies />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>
    </HomeContainer>
  )
}

export default Home
