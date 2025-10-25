import React from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: var(--bg-primary);
`

const ErrorTitle = styled.h1`
  font-size: 3rem;
  color: var(--accent-primary);
  margin-bottom: 1rem;
`

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
`

const ErrorButton = styled.button`
  padding: 1rem 2rem;
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-primary);
  }
`

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Oops! Something went wrong</ErrorTitle>
          <ErrorMessage>
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </ErrorMessage>
          <ErrorButton onClick={this.handleReload}>
            Reload Page
          </ErrorButton>
          
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{ marginTop: '2rem', textAlign: 'left' }}>
              <summary>Error Details (Development Only)</summary>
              <pre style={{ 
                background: 'var(--bg-secondary)', 
                padding: '1rem', 
                borderRadius: 'var(--border-radius)',
                marginTop: '1rem',
                overflow: 'auto',
                fontSize: '0.8rem'
              }}>
                {this.state.error && this.state.error.toString()}
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
        </ErrorContainer>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
