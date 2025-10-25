import React from 'react'
import styled from 'styled-components'

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
  position: relative;
`

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Main>
        {children}
      </Main>
    </LayoutContainer>
  )
}

export default Layout
