import React from 'react'
import HeroTexts from './heroText'
import AlbertImage from './albertImage'

function Homepage() {
  return (
    <>
        <div className='relative w-full h-full flex items-center justify-center'>
            <div className='px-4 md:px-10 lg:px-32 absolute top-0 left-0 w-full h-full flex items-center justify-center md:justify-between'>
                <HeroTexts/>
                <AlbertImage/>
            </div>
        </div>
    </>
  )
}

export default Homepage