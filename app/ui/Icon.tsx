import Image from 'next/image'
import React from 'react'

export default function Icon({level, icon, levelName}:any) {
  return (
    <div className='p-2 w-1/2 md:w-1/4'>
        <div className='flex-center flex-col border-[4px] border-[#0d3e84] rounded '>
            <h1 className='my-2'>{level}</h1>
            <Image 
            src={icon}
            width={80}
            height={80}
            alt='icon'
            className='filter__blue'
            />
            <h1 className='my-2'>{levelName}</h1>
        </div>
    </div>
  )
}
