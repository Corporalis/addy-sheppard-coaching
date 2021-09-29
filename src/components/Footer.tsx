import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import styled from 'styled-components'

export const Footer = (): JSX.Element => {
  return (
    <SiteFooter>
      <FooterContainer>
        <ContactItems>
          <ContactLink
            href="mailto:a-sheppard@live.co.uk"
            title="Email Add Sheppard Coaching"
          >
            a-sheppard@live.co.uk
          </ContactLink>
        </ContactItems>
        <SocialLinks>
          <SocialLinkItem>
            <SocialLinkItemText>Follow me:</SocialLinkItemText>
          </SocialLinkItem>
          <SocialLinkItem>
            <a
              href="https://www.instagram.com/stopthesmalltalkcoaching/"
              rel="noopener noreferrer"
              title="Follow Addy Sheppard Coaching on Instagram"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="text-primary mb-4"
              />
            </a>
          </SocialLinkItem>
          <SocialLinkItem>
            <a
              href="https://www.linkedin.com/in/addy-sheppard-488021178/"
              rel="noopener noreferrer"
              title="Follow Addy Sheppard Coaching on LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="text-primary mb-4"
              />
            </a>
          </SocialLinkItem>
        </SocialLinks>
      </FooterContainer>
    </SiteFooter>
  )
}

const SiteFooter = styled.footer`
  display: flex;
  text-align: center;
  padding: 2em;
  background-color: ${({ theme }) => theme.colors.background};
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

const SocialLinks = styled.ul`
  display: inline-flex;
  margin: 0;
  padding: 0;
  list-style: none;
  list-style-type: none;
`

const SocialLinkItem = styled.li`
  padding: 0.2em;
`

const SocialLinkItemText = styled.span`
  padding-right: 0.8em;
`

const ContactItems = styled.div`
  display: inline-flex;
  span {
    padding: 1em;
  }
`

const ContactLink = styled.a``
