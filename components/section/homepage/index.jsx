import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

// components
import HeroTexts from './heroText'
import AlbertImage from './albertImage'

function Homepage() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariants, setCursorVariants] = useState("default");

  const [ isHoliday, setIsHoliday] = useState(false);

  

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x -16,
      y: mousePosition.y -16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x -75,
      y: mousePosition.y -75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    }
  }

  const textEnter = () => {
    setIsHoliday(true);
    setCursorVariants("text")
  };

  const textLeave = () => {
    setIsHoliday(false);
    setCursorVariants("default")
  };

  return (
    <>
        {/* <Snow/> */}

        <div className='relative w-full h-full flex items-center justify-center cursor-none'>
            <motion.div
                className='bg-white pointer-events-none mix-blend-difference w-8 h-8 rounded-full fixed top-0 left-0 z-40'
                variants={variants}
                animate={cursorVariants}
            />
            <div className='px-4 md:px-10 lg:px-32 absolute top-0 left-0 w-full h-full flex items-center justify-center md:justify-between'>
                <HeroTexts 
                  onMouseEnter={textEnter} 
                  onMouseLeave={textLeave}
                  isHoliday={isHoliday}
                  holidayColor="text-red-500"
                />
                <AlbertImage/>
            </div>
        </div>
    </>
  )
}

export default Homepage