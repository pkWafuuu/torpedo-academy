import Image from "next/image";
import React from "react";

export default function ProgramDetail({ icon, title, para }: any) {
  return (
    <div className="p-2 w-1/2 md:w-1/3">
      <div className="h-full py-4 px-2 flex flex-col text-center border-[4px] border-[#0d3e84] rounded">
        <div className="flex-center">
          <Image src={icon} objectFit="cover" alt="" className="w-8 mb-2" />
        </div>
        <h1 className="text-lg md:text-2xl">{title}</h1>
        <p className="text-sm md:text-base">{para}</p>
      </div>
    </div>
  );
}
