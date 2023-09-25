import Image from "next/image";
import React from "react";

export default function Program({ pic, title, text }: any) {
  return (
    <div className="rounded p-2">
      <div className="rounded h-full shadow-xl pb-4 relative">
        <Image
          src={pic}
          objectFit="cover"
          alt="Image"
          className="mb-4 rounded-t"
        />
        <h1>{title}</h1>
        <div className="overlay flex-center flex-col">
            <h1>{title}</h1>
            <p className="mb-4">{text}</p>
        </div>
      </div>
    </div>
  );
}
