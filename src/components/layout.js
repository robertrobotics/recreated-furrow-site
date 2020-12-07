import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// styled component
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'

// Components
import Header from './header'

// Context
import { useGlobalStateContext } from '../context/globalContext'

const GlobalStyle = createGlobalStyle` 
  ${normalize}
  * {
    text-decoration: none
    /* cursor: none; */
  }

  html {
    box-sizing: border-box;
    --webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: none;
  }

`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { currentTheme } = useGlobalStateContext(); 

  const lightTheme = {
    background: '#fff',
    text: '#000',
    red: '#ea291e'
  }

  const darkTheme = {
    background: '#000',
    text: '#fff',
    red: '#ea291e'
  }

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
