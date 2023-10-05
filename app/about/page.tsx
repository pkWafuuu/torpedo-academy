import React from "react";
import Image from "next/image";
import about from "../../public/gallery/landing-dots.png";
import kyle from "../../public/gallery/staff/kyle.png";
import fahim from "../../public/gallery/staff/fahim.png";
import abdelrahman from "../../public/gallery/staff/abdelrahman.png";
import rey from "../../public/gallery/staff/rey.png";
import francis from "../../public/gallery/staff/francis.png";
import Staff from "../ui/Staff";

export default function page() {
  const staff: { pic: any; name: string; position: string }[] = [
    { pic: kyle, name: "Coach Kyle", position: "Head Coach" },
    { pic: rey, name: "Coach Rey", position: "Senior Coach" },
    { pic: abdelrahman, name: "Coach Abu", position: "Swim Coach" },
    { pic: fahim, name: "Coach Fahim ", position: "Swim Coach" },
    { pic: francis, name: "Francis", position: "Lifeguard" },
  ];

  return (
    <>
      <div className="bg-[#0d3e84] h-[50vh] flex-center">
        <h1 className="title text-white mt-20">WHO WE ARE</h1>
      </div>
      <div className="cuscontainer">
        <div className="row">
          <div className="flex-center flex-col">
            <div className="flex-center flex-col-reverse md:flex-row">
              <Image
                src={about}
                objectFit="cover"
                alt=""
                className="p-8 md:w-1/2"
              />
              <div className="text-center md:w-1/2">
                <h1 className="mb-4 section__title"> ABOUT US </h1>
                <p>
                  Welcome to Torpedo Swimming Academy, where our passion for
                  swimming meets your journey. We&apos;re not just an academy;
                  we&apos;re your partners in the world of water. As we embark
                  on this new chapter, our goal is simple: to share our love for
                  swimming with you. We understand the joys, the challenges, and
                  the triumphs that come with it because we&apos;re swimmers
                  too. Together, let&apos;s explore the depths of the aquatic
                  world
                </p>
              </div>
            </div>
            <div className="text-center flex flex-col md:flex-row">
              <div className="p-1 md:w-1/2">
                <div className="h-full p-4 border-[4px] border-[#0d3f84f6] rounded">
                  <h1 className="mb-2">Mission</h1>
                  <p>
                    Our mission is to inspire a lifelong love for swimming and
                    water safety. We are committed to providing a nurturing and
                    inclusive environment where individuals of all ages and
                    abilities can develop their swimming skills, boost their
                    confidence in the water, and embark on a journey to a
                    healthier and more active lifestyle. Through expert
                    guidance, personalized instruction, and a strong sense of
                    community, we aim to empower our students to become skilled
                    swimmers who cherish the water.
                  </p>
                </div>
              </div>
              <div className="p-1 md:w-1/2">
                <div className="h-full p-4 border-[4px] border-[#0d3f84f6] rounded">
                  <h1 className="mb-2">Vision</h1>
                  <p>
                    Our vision at Torpedo Swimming Academy is to be recognized
                    as the premier destination for aquatic education and
                    fitness. We aspire to create a world where swimming is not
                    just a skill but a source of joy, confidence, and wellness
                    for people of all backgrounds. We envision a future where
                    our academy continues to expand its offerings, reaches even
                    more individuals, and contributes to a safer and healthier
                    society.
                  </p>
                </div>
              </div>
            </div>
            <div className="cuscontainer row">
              <div className="text-center">
                <h1>MEET OUR STAFF</h1>
                <p className="mb-4">
                  Our dedicated team of experienced and licensed instructors is
                  here to guide you
                </p>
                  <Staff staff={staff} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
