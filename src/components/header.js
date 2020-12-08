import React, { useEffect } from "react"

// styled components
import { HeaderNav, Logo, Menu } from '../styles/headerStyles'
import { Container, Flex } from '../styles/globalStyles'
import { Link } from 'gatsby'

import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'

const Header = ({onCursor}) => {
    const dispatch = useGlobalDispatchContext();
    const { currentTheme } = useGlobalStateContext();

    const toggleTheme = () => {
        if (currentTheme === 'dark') {
            dispatch({type: 'TOGGLE_THEME', theme: 'light'});
        } else {
            dispatch({type: 'TOGGLE_THEME', theme: 'dark'});
        }
    };

    useEffect(() => {
        window.localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

  return <HeaderNav
            initial={{y: -72, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 1, ease: [0.6, 0.07, -0.03, 0.9] }}
         >
      <Container>
          <Flex spaceBetween noHeight>
              <Logo onMouseLeave={onCursor}>
                  <Link to="/"
                        onMouseEnter={() => onCursor('hovered')}>
                      FURR
                  </Link>
                  <span onClick={toggleTheme}
                        onMouseEnter={() => onCursor('pointer')}>
                    </span>
                    <Link to="/"
                        onMouseEnter={() => onCursor('hovered')}>
                      W
                  </Link>
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


