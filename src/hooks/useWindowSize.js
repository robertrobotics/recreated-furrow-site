import { useState, useEffect } from 'react'
export default function useWindowSize() {


    const [windowSize, setWindowSize] = useState({
        width: typeof window !== "undefined" && window.innerWidth ? window.innerWidth : 1920,
        height: typeof window !== "undefined" && window.innerHeight ? window.innerHeight : 1080
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);

        return () => { window.removeEventListener('resize', handleResize) };
    })

    return windowSize;
}