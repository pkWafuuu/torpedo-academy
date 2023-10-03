"use client";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Nextarrow from "./Nextarrow";
import Prevarrow from "./Prevarrow";
import Image from "next/image";

interface LocationProps {
  nameLoc: string; // Assuming nameLoc is a string, adjust the type as needed
  imgLoc?: { pic: any }[];
  loc: any;
}

export default class Location extends Component<LocationProps> {
  render() {
    const { nameLoc, imgLoc, loc} = this.props;

    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <Nextarrow />,
      prevArrow: <Prevarrow />,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className=" row text-center">
        <h1 className="section__title text-center mb-4">{nameLoc}</h1>
        <Slider {...settings} className="relative">
          {imgLoc?.map((item, index) => (
            <div className="p-1" key={index}>
              <Image 
                objectFit="cover"
                alt=""
                src={item.pic}
                className="rounded"
              />
            </div>
          ))}
        </Slider>
        <iframe src={loc} width="100%" height="350" loading="lazy" className="rounded mb-8"></iframe>
      </div>
    );
  }
}
