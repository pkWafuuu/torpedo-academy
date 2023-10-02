import ProgramDetail from "@/app/ui/ProgramDetail";
import React from "react";
import personalize from '../../../public/icons/lightbulb.svg'

export default function PrivateClass() {
  return (
    <>
      <section id="private-class" className="bg-[#0d3e84] h-[50vh] flex-center">
        <h1 className="title text-white mt-20">Private class</h1>
      </section>
      <div className="container">
        <div className="row text-center">
          <p className="mb-4 md:px-10">
            Are you ready to unlock your full aquatic potential? Experience the
            thrill of personalized swimming instruction like never before with
            our Private Swimming Classes. Whether you&apos;re a beginner looking to
            conquer your fear of water or an experienced swimmer striving to
            refine your technique, our classes cater to all ages and skill
            levels.
          </p>
          <div className="flex flex-wrap">
            <ProgramDetail icon={personalize} title='Personalized' para='Our private classes offer one-on-one instruction, ensuring your specific needs and goals are the focus of each session.'/>
            <ProgramDetail icon={personalize} title='Flexible' para='Flexible scheduling options, so you can learn at your own pace, when it&apos;s most convenient for you'/>
            <ProgramDetail icon={personalize} title='Fast Progress' para='With private lessons, you&apos;ll notice rapid improvement in your swimming skills.'/>
            <ProgramDetail icon={personalize} title='Customized' para='Whether you want to master the basics, prepare for a triathlon.Our classes are customized to meet your objectives.'/>
            <ProgramDetail icon={personalize} title='Feedback' para='Receive immediate tailored feedback after each session, helping you track your progress and identify areas for improvement'/>
            <ProgramDetail icon={personalize} title='Private' para='Enjoy the privacy of one-on-one lessons in a tranquil and distraction-free environment, promoting faster learning'/>
          </div>
        </div>
      </div>
    </>
  );
}
