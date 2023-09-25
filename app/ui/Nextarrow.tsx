import Image from 'next/image'
import React from 'react'
import arrow from '../../public/icons/chevron-right.svg'

export default function Nextarrow({onClick}:any) {
  return (
    <button onClick={onClick} className='carousel-btn absolute -right-[20px] z-10 top-[45%]'>
        <Image
            src={arrow}
            height={32}
            width={32}
            alt='prev'
            />
    </button>
  )
}
