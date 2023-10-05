'use client'
import React, { Component } from "react";
import Prevarrow from "./Prevarrow";
import Nextarrow from "./Nextarrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

interface StaffProps {
    staff: { pic: any, name: string, position: string }[];
}

export default class Staff extends Component<StaffProps> {

    render(){

        const {staff} = this.props;

        const settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
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
            <Slider {...settings} className="relative">
                {staff?.map((item, index) => 
                    <div className="p-2" key={index}>
                        <Image 
                            src={item.pic}
                            objectFit="cover"
                            alt=""
                            className="mb-2"
                        />
                        <h1>{item.name}</h1>
                        <h2>{item.position}</h2>
                    </div>
                )}
            </Slider>
        )
    }
}
