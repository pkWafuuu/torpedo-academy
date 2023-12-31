"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/icons/logo-horizontal-white.png";
import circleLogo from "../../public/icons/logo-circle.png";
import burger from "../../public/icons/burger.svg";
import exit from "../../public/icons/cross.svg";
import Link from "next/link";
import chevright from "../../public/icons/chevron-right.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function openBurger() {
    let burg = document.querySelector(".burger");
    burg?.classList.add("burger--open");
  }

  function closeBurger() {
    let burg = document.querySelector(".burger");
    burg?.classList.remove("burger--open");
  }

  return (
    <nav className="absolute top-0 left-0 z-10 w-full h-28 flex-center text-white">
      <div className="row flex justify-between">
        <Link href="/">
          <Image src={logo} objectFit="cover" alt="" className="w-[170px]" />
        </Link>
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
        <button className="md:hidden" onClick={openBurger}>
          <Image
            src={burger}
            height={50}
            width={50}
            alt=""
            className="filter__white "
          />
        </button>
        <div className=" burger fixed top-0 right-0 w-full h-[100vh] transition duration-300 ease-in translate-x-[75vh] bg-[#0000008e] md:hidden">
          <ul className="fixed top-0 right-0 w-[75%] h-full z-50 bg-white text-[#000]">
            <Image
              src={exit}
              height={50}
              width={50}
              alt=""
              className="absolute top-[10px] right-[10px]"
              onClick={closeBurger}
            />
            <Image
              src={circleLogo}
              height={50}
              width={100}
              alt=""
              className="mt-4 ml-4 mb-4"
            />
            <li className="program__nav--link-burger">
              <Link href="/" onClick={closeBurger}>
                Home
              </Link>
            </li>
            <li
              className="program__nav--link-burger"
              onClick={() => setOpen((prev) => !prev)}
            >
              PROGRAMS
              {open && (
                <ul className="mt-2">
                  <li className="p-1">
                    <Link
                      href="/programs/privateclass"
                      onClick={closeBurger}
                      className="flex"
                    >
                      <Image src={chevright} objectFit="cover" alt="" />
                      PRIVATE CLASS
                    </Link>
                  </li>
                  <li className="p-1">
                    <Link
                      href="/programs/groupclass"
                      onClick={closeBurger}
                      className="flex"
                    >
                      <Image src={chevright} objectFit="cover" alt="" />
                      GROUP CLASS
                    </Link>
                  </li>
                  <li className="p-1">
                    <Link
                      href="/programs/babyclass"
                      onClick={closeBurger}
                      className="flex"
                    >
                      <Image src={chevright} objectFit="cover" alt="" />
                      BABY CLASS
                    </Link>
                  </li>
                  <li className="p-1">
                    <Link
                      href="/programs/gxclass"
                      onClick={closeBurger}
                      className="flex"
                    >
                      <Image src={chevright} objectFit="cover" alt="" />
                      GX CLASS
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="program__nav--link-burger">
              <Link href="/locations" onClick={closeBurger}>
                Locations
              </Link>
            </li>
            <li className="program__nav--link-burger">
              <Link href="/about" onClick={closeBurger}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
