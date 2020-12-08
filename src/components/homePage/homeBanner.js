import React, { useEffect, useRef }  from 'react'

import { Banner, Video, Canvas, BannerTitle, HeadLine } from "../../styles/homeStyles"

// Custom hooks
import useWindowSize from '../../hooks/useWindowSize'

// Context
import { useGlobalStateContext } from '../../context/globalContext'

const HomeBanner = ({onCursor}) => {
    let canvas = useRef(null);
    let size = useWindowSize()
    const { currentTheme } = useGlobalStateContext();

    useEffect(() => {
        let renderingElement = canvas.current;
        let drawingElement = renderingElement.cloneNode();

        let drawingContext = drawingElement.getContext('2d')
        let renderingContext = renderingElement.getContext('2d')

        let lastX;
        let lastY;
        let moving = false;

        renderingContext.globalCompositeOperation = 'source-over';
        renderingContext.fillStyle = currentTheme === 'dark' ? '#000000' : '#ffffff';
        renderingContext.fillRect(0,0,size.width, size.height);

        renderingElement.addEventListener('mouseover', e => {
            moving = true;
            lastX = e.pageX - renderingElement.offsetLeft;
            lastY = e.pageY - renderingElement.offsetTop;
        })

        renderingElement.addEventListener('mouseup', e => {
            moving = false;
            lastX = e.pageX - renderingElement.offsetLeft;
            lastY = e.pageY - renderingElement.offsetTop;
        })

        renderingElement.addEventListener('mousemove', e => {
            if (moving) {
                drawingContext.globalCompositeOperation = 'source-over';
                renderingContext.globalCompositeOperation = 'destination-out';
                let currentX = e.pageX - renderingElement.offsetLeft;
                let currentY = e.pageY - renderingElement.offsetTop;
                drawingContext.lineJoin = 'round';
                drawingContext.moveTo(lastX, lastY);
                drawingContext.lineTo(currentX, currentY);
                drawingContext.closePath();
                drawingContext.lineWidth = 120;
                drawingContext.stroke();
                lastX = currentX;
                lastY = currentY;
                renderingContext.drawImage(drawingElement, 0, 0);
            }
        }) 
    }, [currentTheme])

    const parent = {
        initial: {y: 800},
        animate: {
            y: 0,
            transition: {
                staggerChildren: .2,
            }
        }
    }

    const child = {
        initial: {y: 800},
        animate: {
            y: 0,
            transition: {
                duration: 1,
                ease: [.6, .05, -.01, .1]
            }
        }
    }

    return (
        <Banner>
            <Video>
                <video height='100%'
                       width='100%'
                       loop
                       autoPlay
                       src={require('../../assets/video/video.mp4')}/>
            </Video>
            <Canvas height={size.height} width={size.width} ref={canvas} onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor}/>
            <BannerTitle variants={parent} initial='initial' animate='animate'>
                <HeadLine variants={child}>DIG</HeadLine>
                <HeadLine>DEEP</HeadLine>
            </BannerTitle>
        </Banner>
    )
}

export default HomeBanner
