import React from "react";
import Program from "../ui/Program";
import privateclass from "../../public/gallery/qwer.png";

export default function HomePrograms() {
  return (
    <div className="row py-10 text-center">
      <h1>Programs</h1>
      <div className="flex flex-wrap">
        <Program pic={privateclass} title="Private Class" text="lorem ipsum gypsum burger mac and burger meal plus spaghetti meatballs" />
        <Program pic={privateclass} title="Group Class" text="description" />
        <Program pic={privateclass} title="Baby Class" text="description" />
        <Program pic={privateclass} title="Private Class" text="description" />
      </div>
    </div>
  );
}
