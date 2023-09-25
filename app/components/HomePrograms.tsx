"use client"
import React, { Component } from "react";
import Program from "../ui/Program";
import groupclass from "../../public/gallery/qwer.png";
import privateclass from "../../public/gallery/privateclass.png"
import babyclass from "../../public/gallery/babyclass.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Nextarrow from "../ui/Nextarrow";
import Prevarrow from "../ui/Prevarrow";

export default class HomePrograms extends Component {
    render(){
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <Nextarrow />,
        prevArrow: <Prevarrow/>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <div className="row py-10 text-center">
      <h1>Programs</h1>
      <Slider {...settings} className="relative">
      {/* <div className="flex flex-wrap"> */}
        <Program pic={privateclass} title="Private Class" text="lorem ipsum gypsum burger mac and burger meal plus spaghetti meatballs" />
        <Program pic={groupclass} title="Group Class" text="description" />
        <Program pic={babyclass} title="Baby Class" text="description" />
        <Program pic={groupclass} title="GX Class" text="description" />
      {/* </div> */}
      </Slider>
    </div>
  );
    }
}
