import ProgramDetail from "@/app/ui/ProgramDetail";
import React from "react";
import personalize from "../../../public/icons/lightbulb.svg";

export default function BabyClass() {
  return (
    <>
      <section id="private-class" className="bg-[#0d3e84] h-[50vh] flex-center">
        <h1 className="title text-white mt-20">Baby class</h1>
      </section>
      <div className="container">
        <div className="row text-center">
          <p className="mb-4 md:px-10">
            Introduce your little one to the wonders of the water in our
            specially designed Baby Swimming Classes. Our gentle and nurturing
            environment provides the perfect setting for your baby&apos;s first
            aquatic adventures
          </p>
          <div className="flex flex-wrap">
            <ProgramDetail
              icon={personalize}
              title="Bonding "
              para="Enjoy quality bonding time with your baby in the soothing embrace of warm water, creating precious memories together"
            />
            <ProgramDetail
              icon={personalize}
              title="Safety"
              para="Learn essential water safety skills tailored to infants, ensuring your baby&apos;s safety around water"
            />
            <ProgramDetail
              icon={personalize}
              title="Guidance"
              para="Gain valuable knowledge and techniques from our instructors to continue fostering your baby&apos;s love for the water outside of class"
            />
            <ProgramDetail
              icon={personalize}
              title="Aqua Fun"
              para="Watch your baby giggle and delight in the fun water activities specially designed for their age group"
            />
            <ProgramDetail
              icon={personalize}
              title="Gentle Intro"
              para="Our experienced instructors create a gentle and supportive atmosphere for babies, making their first encounters with water stress-free and enjoyable"
            />
            <ProgramDetail
              icon={personalize}
              title="Social"
              para="Baby classes provide an opportunity for your little one to interact with other infants, fostering social skills in a fun and relaxed setting"
            />
          </div>
        </div>
      </div>
    </>
  );
}
