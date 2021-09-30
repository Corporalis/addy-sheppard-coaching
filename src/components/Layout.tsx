import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import styled, { StyledProps, ThemeProvider } from 'styled-components'

import {
  faPhone,
  faClock,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faPhone, faClock, faCalendarDay)

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

import './layout.scss'
import Scrollable from './scroll/Scrollable'
import { GlobalStyles } from '../GlobalStyles'
import { theme } from '../theme'
import { Footer } from './Footer'
import media from 'styled-media-query'

interface SEOStaticQuery {
  site: {
    siteMetadata: {
      title: string
    }
  }
  logo: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

interface NavProps {
  $scrolled: boolean
}

const TemplateWrapper = ({ children }: JSX.ElementChildrenAttribute) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [activeClass] = useState<string>('inactive')
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    var pageContentRect = document.body.getBoundingClientRect()
    console.log(pageContentRect.top < -40)
    setScrolled(pageContentRect.top < -40)
  }

  const menuButtonClick = () => {
    setCollapsed(!collapsed)
  }

  const navigationClick = () => {
    if (collapsed) {
      menuButtonClick()
    }
  }

  const { site, logo } = useStaticQuery<SEOStaticQuery>(graphql`
    query LayoutIndexQuery {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 100, height: 100)
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Helmet title={site.siteMetadata.title}></Helmet>
        <Scrollable onWindowScroll={handleScroll}></Scrollable>
        <Navbar
          $scrolled={scrolled}
          className={`navbar navbar-expand-lg navbar-light fixed-top py-3`}
        >
          <Container>
            <GatsbyImage
              image={logo.childImageSharp.gatsbyImageData}
              alt="logo"
            />

            <button
              className={`navbar-toggler navbar-toggler-right ${
                collapsed ? 'collapsed' : ''
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={menuButtonClick}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`collapse navbar-collapse ${collapsed ? 'show' : ''}`}
            >
              <NavbarNav className="navbar-nav ml-auto my-2 my-lg-0">
                <NavbarNavItem className="nav-item">
                  <NavbarNavItemLink
                    $scrolled={scrolled}
                    activeClass={activeClass}
                    to="coaching"
                    spy={true}
                    smooth={true}
                    offset={-132}
                    duration={500}
                    onClick={navigationClick}
                  >
                    Coaching
                  </NavbarNavItemLink>
                </NavbarNavItem>
                <NavbarNavItem className="nav-item">
                  <NavbarNavItemLink
                    $scrolled={scrolled}
                    activeClass={activeClass}
                    to="offerings"
                    spy={true}
                    smooth={true}
                    offset={-132}
                    duration={500}
                    onClick={navigationClick}
                  >
                    When we meet
                  </NavbarNavItemLink>
                </NavbarNavItem>
                <NavbarNavItem className="nav-item">
                  <NavbarNavItemLink
                    $scrolled={scrolled}
                    activeClass={activeClass}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-132}
                    duration={500}
                    onClick={navigationClick}
                  >
                    About
                  </NavbarNavItemLink>
                </NavbarNavItem>
              </NavbarNav>
            </div>
          </Container>
        </Navbar>
        <PageContent id="page-content" className="pageContent">
          {children}
        </PageContent>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default TemplateWrapper

const PageContent = styled.div`
  flex: 1;
`

const NavbarNav = styled.ul``

const NavbarNavItem = styled.li``

const NavbarNavItemLink = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.shadow.medium};
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0.75rem 0;
  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.primary.main};
  }
  &.active {
    color: ${({ theme }) => theme.colors.primary.main} !important;
  }

  ${media.greaterThan('large')`
  color: ${({ theme }) => theme.colors.shadow.dark};
  padding: 0 1rem;
`}

  ${(props: StyledProps<NavProps>) =>
    props.$scrolled &&
    media.greaterThan('large') &&
    `
      color: ${props.theme.colors.shadow.dark};
      &:hover {
        color: ${props.theme.colors.primary.main};
      }
`}
`

const Navbar = styled.nav`
  transition: background-color 0.2s ease;
  ${media.greaterThan('large')`
  box-shadow: none;
  background-color: ${({ theme }) => theme.colors.background};
`}

  ${(props: StyledProps<NavProps>) =>
    props.$scrolled &&
    media.greaterThan('large') &&
    `
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    background-color: ${props.theme.colors.background} !important;
`}
`
