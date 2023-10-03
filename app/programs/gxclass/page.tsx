import React from "react";
import ProgramDetail from "@/app/ui/ProgramDetail";
import lightbulb from "../../../public/icons/lightbulb.svg";
import person from "../../../public/icons/person-arms-up.svg";
import gear from "../../../public/icons/gear.svg";
import heartpulse from "../../../public/icons/heart-pulse.svg";
import shield from "../../../public/icons/shield-check.svg";
import alarm from "../../../public/icons/alarm.svg";

export default function GxClass() {
  return (
    <>
      <section id="gx-class" className="bg-[#0d3e84] h-[50vh] flex-center">
        <h1 className="title text-white mt-20 text-center">
          Group Exercise class
        </h1>
      </section>
      <div className="cuscontainer">
        <div className="row text-center">
          <p className="mb-4 md:px-10">
            Dive into the refreshing world of fitness with GX Aquatic Classes!
            it&apos;s not just a workout; it&apos;s a water adventure that
            leaves you feeling invigorated and revitalized.
          </p>
          <div className="flex flex-wrap">
            <ProgramDetail
              icon={heartpulse}
              title="Intensity"
              para="Experience a full-body workout that is gentle on the joints while still delivering an intense and effective exercise session"
            />
            <ProgramDetail
              icon={lightbulb}
              title="Stress Relief"
              para="The soothing properties of water provide a calming environment, reducing stress and promoting relaxation"
            />
            <ProgramDetail
              icon={gear}
              title="Suitable "
              para="Regardless of age, fitness level, or physical condition, We offer a welcoming space for everyone to improve their health and fitness"
            />
            <ProgramDetail
              icon={alarm}
              title="Improved Sleep"
              para="Regular aquatic exercise can lead to improved sleep quality, a precious benefit for parents in need of rest"
            />
            <ProgramDetail
              icon={person}
              title="Community"
              para="Join a supportive community of people who are on a fitness journey, forming connections and friendships with like-minded individuals"
            />
            <ProgramDetail
              icon={shield}
              title="Low Risk"
              para="The low-impact nature of water workouts reduces the risk of injury, making GX Aquatic Classes suitable for individuals of all fitness levels and ages"
            />
          </div>
        </div>
      </div>
    </>
  );
}
