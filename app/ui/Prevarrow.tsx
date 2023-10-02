import Image from 'next/image'
import React from 'react'
import arrow from '../../public/icons/chevron-left.svg'

export default function Prevarrow({onClick}:any) {
  return (
    <button onClick={onClick} className='carousel-btn absolute -left-[14px] z-[1] top-[45%] '>
        <Image
            src={arrow}
            height={20}
            width={20}
            alt='prev'
            />
    </button>
  )
}
