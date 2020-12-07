import React from "react"

// styled components
import { HeaderNav, Logo, Menu } from '../styles/headerStyles'
import { Container, Flex } from '../styles/globalStyles'
import { Link } from 'gatsby'

const Header = () => {
  return <HeaderNav>
      <Container>
          <Flex spaceBetween noHeight>
              <Logo>
                  <Link to="/">FURR</Link>
                  <span></span>
                  <Link to="/">W</Link>
              </Logo>
              <Menu>
                  <button>
                      <span></span>
                      <span></span>
                  </button>
              </Menu>
          </Flex>
      </Container>
  </HeaderNav>
}

export default Header


