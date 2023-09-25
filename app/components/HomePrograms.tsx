"use client";
import React, { Component } from "react";
import Program from "../ui/Program";
import groupclass from "../../public/gallery/qwer.png";
import privateclass from "../../public/gallery/privateclass.png";
import babyclass from "../../public/gallery/babyclass.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Nextarrow from "../ui/Nextarrow";
import Prevarrow from "../ui/Prevarrow";

export default class HomePrograms extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <Nextarrow />,
      prevArrow: <Prevarrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
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
      <div className="row py-14 text-center">
        <h1 className="section__title text-center mb-4">Programs</h1>
        <Slider {...settings} className="relative">
          {/* <div className="flex flex-wrap"> */}
          <Program
            pic={privateclass}
            title="Private Class"
            text="Personalized one-on-one instruction. Flexible schedules.
            Boost your swimming skills and confidence."
            btnText="LEARN MORE"
          />
          <Program
            pic={groupclass}
            title="Group Class"
            text="Our Group Swimming Classes emphasize learning together, staying motivated, 
            and receiving top-notch instruction to elevate your swimming prowess."
            btnText="LEARN MORE"
          />
          <Program
            pic={babyclass}
            title="Baby Class"
            text="Explore water wonders with our tailored Baby Swimming Classes. 
            Our nurturing environment is perfect for your baby's first aquatic journey."
            btnText="LEARN MORE"
          />
          <Program
            pic={groupclass}
            title="GX Class"
            text="GX (Group Exercise) Aquatic Classes 
            for an exhilarating and refreshing approach to fitness. These water-based workouts 
            offer a dynamic and engaging way to stay active while enjoying the benefits of a 
            supportive group environment"
            btnText="COMING SOON"
          />
          {/* </div> */}
        </Slider>
      </div>
    );
  }
}
