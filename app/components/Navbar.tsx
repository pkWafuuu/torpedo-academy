import Image from "next/image";
import React from "react";
import logo from "../../public/icons/logo-horizontal-white.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full h-28 flex-center text-white">
      <div className="row flex justify-between">
        <Image src={logo} objectFit="cover" alt="" className="w-[170px]" />
        <ul className="hidden bg-[#ffffff46] rounded-[25px] my-2 px-10 md:flex md:items-center">
          <li className="nav__link">
            <Link href="/">Home</Link>
          </li>
          <li className="nav__link program__nav relative">
            <div className="cursor-pointer">Programs</div>
            <ul className="absolute program__nav--links left-0 bg-[#000000d2] p-3 rounded">
              <li className="program__nav--link">
                <Link href="/programs/privateclass">Private Class</Link>
              </li>
              <li className="program__nav--link">
                <Link href="/programs/groupclass">Group Class</Link>
              </li>
              <li className="program__nav--link">
                <Link href="/programs/babyclass">Baby Class</Link>
              </li>
              <li className="program__nav--link">
                <Link href="/programs/gxclass">GX Class</Link>
              </li>
            </ul>
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
