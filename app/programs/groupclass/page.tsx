import ProgramDetail from '@/app/ui/ProgramDetail'
import React from 'react'
import personalize from '../../../public/icons/lightbulb.svg'

export default function GroupClass() {
  return (
    <>
      <section id="private-class" className="bg-[#0d3e84] h-[50vh] flex-center">
        <h1 className="title text-white mt-20">Group class</h1>
      </section>
      <div className="container">
        <div className="row text-center">
          <p className="mb-4 md:px-10">
            Ready to make a splash with friends and fellow swimmers? Our Group Swimming Classes offer a fun and supportive environment to learn and improve your swimming skills.
          </p>
          <div className="flex flex-wrap">
            <ProgramDetail icon={personalize} title='Social' para='Dive into the joy of swimming with like-minded individuals. Group classes are a fantastic way to meet new people and share the aquatic adventure'/>
            <ProgramDetail icon={personalize} title='Support' para='Group classes provide a built-in support system with fellow swimmers cheering you on, helping you stay motivated and committed '/>
            <ProgramDetail icon={personalize} title='Safety' para='We maintain strict safety measures to ensure a secure and enjoyable swimming experience for all participants'/>
            <ProgramDetail icon={personalize} title='Age-Appropriate' para='We offer group swimming classes tailored to different age groups, ensuring customized instruction for kids, adults, and seniors'/>
            <ProgramDetail icon={personalize} title='Bonding' para='Foster lasting friendships and a sense of belonging among fellow swimmers who share your passion for the water'/>
            <ProgramDetail icon={personalize} title='Fun and Games' para='Beyond learning essential swimming skills, our group classes often include fun activities and games to keep the excitement alive'/>
          </div>
        </div>
      </div>
    </>
  )
}
