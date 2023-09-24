import Image from 'next/image'
import React from 'react'

export default function Program({pic, title, text}:any) {
  return (
    <div className='rounded p-2 md:w-1/2 lg:w-1/3'>
        <div className='rounded h-full shadow-xl'>
            <Image 
                src={pic}
                objectFit="cover"
                alt="Image"
                className='mb-4 rounded-t'
            />
            <h1>{title}</h1>
            <p className='mb-4'>{text}</p>
        </div>
    </div>
  )
}
