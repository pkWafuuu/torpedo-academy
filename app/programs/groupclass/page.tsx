import ProgramDetail from '@/app/ui/ProgramDetail'
import React from 'react'
import personalize from '../../../public/icons/lightbulb.svg'
import social from '../../../public/icons/person-arms-up.svg'
import heart from '../../../public/icons/balloon-heart.svg'
import shield from '../../../public/icons/shield-check.svg'
import people from '../../../public/icons/people.svg'
import laugh from '../../../public/icons/emoji-laughing.svg'
import Link from 'next/link'

export default function GroupClass() {
  return (
    <>
      <section id="private-class" className="bg-[#0d3e84] h-[50vh] flex-center">
        <h1 className="title text-white mt-20">Group class</h1>
      </section>
      <div className="cuscontainer">
        <div className="row text-center">
          <p className="mb-4 md:px-10">
            Ready to make a splash with friends and fellow swimmers? Our Group Swimming Classes offer a fun and supportive environment to learn and improve your swimming skills.
          </p>
          <div className="flex flex-wrap mb-4">
            <ProgramDetail icon={social} title='Social' para='Dive into the joy of swimming with like-minded individuals. Group classes are a fantastic way to meet new people and share the aquatic adventure'/>
            <ProgramDetail icon={heart} title='Support' para='Group classes provide a built-in support system with fellow swimmers cheering you on, helping you stay motivated and committed '/>
            <ProgramDetail icon={shield} title='Safety' para='We maintain strict safety measures to ensure a secure and enjoyable swimming experience for all participants'/>
            <ProgramDetail icon={personalize} title='Age-Appropriate' para='We offer group swimming classes tailored to different age groups, ensuring customized instruction for kids, adults, and seniors'/>
            <ProgramDetail icon={people} title='Bonding' para='Foster lasting friendships and a sense of belonging among fellow swimmers who share your passion for the water'/>
            <ProgramDetail icon={laugh} title='Fun and Games' para='Beyond learning essential swimming skills, our group classes often include fun activities and games to keep the excitement alive'/>
          </div>
          <Link
            href="https://wa.me/971586671868"
            target="blank"
            rel="noopener noreferrer"
            passHref={true}
          >
            <button className="styled__button mt-1">CONTACT US</button>
          </Link>
        </div>
      </div>
    </>
  )
}
