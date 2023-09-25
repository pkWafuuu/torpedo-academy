import Image from 'next/image'
import React from 'react'
import arrow from '../../public/icons/chevron-left.svg'

export default function Prevarrow({onClick}:any) {
  return (
    <button onClick={onClick} className='carousel-btn absolute -left-[20px] z-10 top-[45%] '>
        <Image
            src={arrow}
            height={32}
            width={32}
            alt='prev'
            />
    </button>
  )
}
