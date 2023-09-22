import Image from 'next/image'
import React from 'react'
import landing from '../../public/gallery/landing.png'

export default function Landing() {
  return (
    <section className='bg-[#0d3e84] h-[calc(100vh)]'>
        <div className="row flex-center h-full flex-col text-center md:flex-row md:text-left">
            <div className='text-white md:w-1/2'>
                <div>Swimming Made Simple</div>
                <h1 className='title'>learn to swim with torpedo</h1>
                <h2 className='uppercase'>Book a Free Assessment</h2>
                <button className='styled__button'>CONTACT US</button>
            </div>
            <Image 
              src={landing}
              height={1000}
              width={1000}
              alt=''
              className='mt-6 md:w-1/2 '
            />

        </div>
    </section>
  )
}
