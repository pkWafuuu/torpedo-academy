import Image from "next/image";
import React from "react";
import landing from "../../public/gallery/landing-dots.png";
import Link from "next/link";

export default function Landing() {
  return (
    <section className="bg-[#0d3e84] h-[calc(100vh)] pt-14">
      <div className="row flex-center h-full flex-col text-center md:flex-row md:text-left">
        <div className="text-white md:w-1/2">
          <div className="uppercase text-[16px] md:text-[24px]">
            Swimming Made Simple
          </div>
          <h1 className="title text-center md:text-left">
            learn to swim with torpedo
          </h1>
          <h2 className="uppercase mt-4">Book a Free Assessment</h2>
          <Link
            href="https://wa.me/971586671868"
            target="blank"
            rel="noopener noreferrer"
            passHref={true}
          >
            <button className="styled__button mt-1">CONTACT US</button>
          </Link>
        </div>
        <Image
          src={landing}
          height={1000}
          width={1000}
          alt=""
          className="mt-6 md:w-1/2 "
        />
      </div>
      {/* <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div> */}
    </section>
  );
}
