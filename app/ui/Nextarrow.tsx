import Image from 'next/image'
import React from 'react'
import arrow from '../../public/icons/chevron-right.svg'

export default function Nextarrow({onClick}:any) {
  return (
    <button onClick={onClick} className='carousel-btn absolute -right-[14px] z-[1] top-[45%]'>
        <Image
            src={arrow}
            height={20}
            width={20}
            alt='prev'
            />
    </button>
  )
}
