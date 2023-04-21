import {useState, useEffect } from 'react'

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        // default window size
        width: 0,
        height: 0
    })

    // function to handle window resize || update windowSize whenever window is resized
    function handleResize(width, height) {
        setWindowSize({
            width,
            height
        })
    }

    useEffect(() => {
        // check if window is available
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', function() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            });
            // call handleResize to set initial window size
            handleResize(window.innerWidth, window.innerHeight)
            return () =>
                // remove event listener
                window.removeEventListener('resize', function() {
                    // update windowSize
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                })
        }
    }, [])
  return windowSize
}

export default useWindowSize