import { useState, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

function TextSpan({children, onMouseEnter, onMouseLeave}) {
    const controls = useAnimationControls();
    const [isPlaying, setIsplaying] = useState(false);

    const rubberBand = () => {
        controls.start({
            transform: [
                "scale3d(1,1,1)",
                "scale3d(1.4,.55,1)",
                "scale3d(.75,1.25,1)",
                "scale3d(1.25,.85,1)",
                "scale3d(.9,1.05,1)",
                "scale3d(1,1,1)",
            ],

            transition: {
                times: [0,.4,.6,.7,.8,.9],
                ease: "easeInOut",
            }
        })
        setIsplaying(true)
    }

    return (
        <>
            <motion.span 
                animate={controls}
                onMouseOver={() => {
                    if(!isPlaying)
                        rubberBand()
                }}
                onAnimationComplete={() => setIsplaying(false)}
                className={"select-none inline-block font-iskry text-white text-6xl md:text-8xl font-bold"}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {children}
            </motion.span>
        </>
    )
}

export default TextSpan