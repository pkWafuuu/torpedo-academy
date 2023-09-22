import Image from "next/image";
import React from "react";
import logo from "../../public/icons/logo-horizontal-white.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" w-full h-28 flex-center bg-[#0d3e84] text-white">
      <div className="row flex justify-between">
        <Image src={logo} objectFit="cover" alt="" className="w-[170px]" />
        <ul className="hidden bg-[#ffffff46] rounded-[25px] my-2 px-10 md:flex md:items-center">
          <li className="nav__link">
            <Link href="/">Home</Link>
          </li>
          <li className="nav__link">
            <Link href="/programs">Programs</Link>
          </li>
          <li className="nav__link">
            <Link href="/locations">Locations</Link>
          </li>
          <li className="nav__link">
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
