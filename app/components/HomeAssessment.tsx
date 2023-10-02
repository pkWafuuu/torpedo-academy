import React from "react";
import Icon from "../ui/Icon";
import tadpole from "../../public/icons/tadpole.png";
import clownfish from "../../public/icons/clownfish.png";
import penguin from "../../public/icons/penguin.png";
import octopus from "../../public/icons/octopus.png";
import turtle from "../../public/icons/turtle.png";
import stingray from "../../public/icons/stingray.png";
import dolphin from "../../public/icons/dolphin.png";
import shark from "../../public/icons/shark.png";
import Link from "next/link";

export default function HomeAssessment() {
  return (
    <div className="row pb-14 flex flex-col">
      <h1 className="section__title text-center mb-4">ASSESSMENT</h1>
      <p className="text-center mb-4">
        At Torpedo Swimming Academy, we believe that every journey in the water
        begins with the right assessment. We offer a complimentary swimming
        assessment to pinpoint your current skill level accurately.Our
        assessment helps you find your place among our aquatic adventurers,
        ranging from:
      </p>
      <div className="flex-center flex-wrap mx-auto">
        <Icon level="LVL 0" icon={tadpole} levelName="Tadpole" />
        <Icon level="LVL 1" icon={clownfish} levelName="Clownfish" />
        <Icon level="LVL 2" icon={penguin} levelName="Penguin" />
        <Icon level="LVL 3" icon={octopus} levelName="octopus" />
        <Icon level="LVL 4" icon={turtle} levelName="turtle" />
        <Icon level="LVL 5" icon={stingray} levelName="stingray" />
        <Icon level="LVL 6" icon={dolphin} levelName="dolphin" />
        <Icon level="LVL 7" icon={shark} levelName="shark" />
      </div>
      <Link
        href="https://wa.me/971586671868"
        target="blank"
        rel="noopener noreferrer"
        passHref={true}
        className="mx-auto"
      >
        <button className="styled__button text-white mt-4">
          BOOK A FREE ASSESSMENT
        </button>
      </Link>
    </div>
  );
}
