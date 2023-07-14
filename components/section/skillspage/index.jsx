import React from 'react'
import data from '@/components/utils'
import SkillTools from './skillTools'

function SkillsPage() {
  return (
    <div className='bg-bg_color flex flex-col px-4 md:px-10 lg:px-32 items-center h-full'>
        <h1 className='text-white text-4xl'>My skills</h1>
        <p className='text-gray-300 text-sm mb-10'>{"Here's what I do best"}</p>
        <SkillTools data = {data}/>
    </div>
  )
}

export default SkillsPage