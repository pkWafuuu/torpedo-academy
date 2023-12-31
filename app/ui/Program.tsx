import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Program({ pic, title, text, btnText, link }: any) {
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
            <p className="mt-2 px-6">{text}</p>
            <button className="styled__button mt-2">
                <Link href={link}>{btnText}</Link>
            </button>
        </div>
      </div>
    </div>
  );
}
