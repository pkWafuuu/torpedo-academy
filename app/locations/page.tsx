import React from "react";
import Location from "../ui/Location";
import arbor1 from "../../public/gallery/arbor/arbor1.jpeg";
import arbor2 from "../../public/gallery/arbor/arbor2.png";
import arbor3 from "../../public/gallery/arbor/arbor3.png";
import arbor4 from "../../public/gallery/arbor/arbor4.jpg";
import egc1 from "../../public/gallery/egc/egc1.jpg"
import egc2 from "../../public/gallery/egc/egc2.jpg"
import egc3 from "../../public/gallery/egc/egc3.jpg"
import egc4 from "../../public/gallery/egc/egc4.jpg"

export default function page() {
  const arborImgs: { pic: any }[] = [
    { pic: arbor1 },
    { pic: arbor2 },
    { pic: arbor3 },
    { pic: arbor4 },
  ];

  const egcImgs: { pic: any }[] = [
    { pic: egc1 },
    { pic: egc2 },
    { pic: egc3 },
    { pic: egc4 },
  ];

  return (
    <>
      <section id="location" className="bg-[#0d3e84] h-[50vh] flex-center">
        <h1 className="title text-white mt-20 text-center">OUR LOCATIONS</h1>
      </section>
      <div className="cuscontainer">
        <div className="flex-center flex-col">
          {/* <Location
            nameLoc="the arbor school"
            imgLoc={arborImgs}
            loc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.3308477027363!2d55.1340334753761!3d25.02284387782362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d32dbc8051f%3A0x7a531e6ff8bbf75d!2sThe%20Arbor%20School!5e0!3m2!1sen!2sae!4v1696330304069!5m2!1sen!2sae"
          /> */}
          <Location
            nameLoc="emirates golf club (EGC)"
            imgLoc={egcImgs}
            loc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.48850224556!2d55.157263174516345!3d25.08532003622464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b61c21f621d%3A0xf2da9896c4342fd7!2sEmirates%20Golf%20Club!5e0!3m2!1sen!2sae!4v1696330709596!5m2!1sen!2sae"
          />
        </div>
      </div>
    </>
  );
}
