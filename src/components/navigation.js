import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'gatsby'
import { Nav, NavHeader, CloseNav, NavList, NavFooter, NavVideos } from '../styles/navigationStyles'

// Styled components
import { Container, Flex } from '../styles/globalStyles'

const navRoutes = [
    { id: 0, title: 'not humble', path: '/not-humble', video: 'featured-video.mp4' },
    { id: 1, title: 'bleeping easy', path: '/bleeping-easy', video: 'easy.mp4' },
    { id: 2, title: 'make it zero', path: '/make-it-zero', video: 'make-it-zero.mp4' },
    { id: 3, title: 'it takes an island', path: '/it-takes-an-island', video: 'it-takes-an-island.mp4' },
    { id: 4, title: '50 beaches', path: '/50-beaches', video: '50-beaches.mp4' },
]

const Navigation = ({onCursor, toggleMenu, setToggleMenu}) => {

    const [revealVideo, setRevealVideo] = useState({
        show: true,
        video: 'featured-video.mp4',
        key: '0'
    })

    return (
        <>
            <AnimatePresence> 
                {toggleMenu && (
                        <Nav initial={{x: '-100%'}} 
                             exit={{x: '-100%'}} 
                             animate={{x: toggleMenu ? 0: '100%'}}
                             transition={{
                                 duration: 1,
                                 ease: [0.6, 0.05, -0.01, 0.9]
                             }}>
                            <Container>
                                <NavHeader>
                                    <Flex spaceBetween>
                                        <h2>Projects</h2>
                                        <CloseNav onClick={() => setToggleMenu(!toggleMenu)}
                                                  onMouseEnter={() => onCursor('pointer')}
                                                  onMouseLeave={() => onCursor('')}>
                                            <button>
                                                <span></span>
                                                <span></span>
                                            </button>
                                        </CloseNav>
                                    </Flex>
                                </NavHeader>
                                <NavList>
                                    <ul>
                                        {navRoutes.map(route => (
                                            <motion.li key={route.id}
                                                       onHoverStart={ () => setRevealVideo({ show: true, video: route.video, key: route.id }) }
                                                       onHoverEnd={ () => setRevealVideo({ show: false, video: route.video, key: route.id }) }>
                                                <Link to={`projects/${route.path}`}>
                                                    <motion.div initial={{ x: -100 }} 
                                                                whileHover={{ x: -40, transition: { duration: .3, ease: [.6, 0.05, -.01, .9]}  }} 
                                                                className='link'>
                                                        <span className='arrow'>
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 101 57">
                                                            <path d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                                                    fill="#FFF"
                                                                    fillRule="evenodd"/>
                                                            </svg>
                                                        </span>
                                                        {route.title}
                                                    </motion.div>
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </NavList>
                                <NavFooter></NavFooter>
                                <NavVideos>
                                    <motion.div animate={{ width: revealVideo.show ? 0: '100%' }} className='reveal' />
                                    <div className='video'>
                                        <AnimatePresence initial={false} exitBeforeEnter>
                                            <motion.video key={revealVideo.key} 
                                                          initial={{opacity: 0}} 
                                                          animate={{opacity: 1}}
                                                          exit={{opacity: 0}}
                                                          transition={{
                                                              duration: 0.2,
                                                              ease: 'easeInOut'
                                                          }}
                                                          loop 
                                                          autoPlay 
                                                          src={require(`../assets/video/${revealVideo.video}`)}></motion.video>
                                        </AnimatePresence>
                                    </div>
                                </NavVideos>
                            </Container>
                        </Nav>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navigation