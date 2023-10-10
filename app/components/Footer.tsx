import React from "react";
import logo from "../../public/icons/logo-horizontal-white.png";
import Image from "next/image";
import instagram from "../../public/icons/instagram.svg";
import whatsapp from "../../public/icons/whatsapp.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="row py-14">
        <div className="flex flex-col">
          <div className="mb-6 flex-center">
              <Image src={logo} objectFit="cover" alt="" className="w-52" />
          </div>
          <ul className="flex-center mb-4">
            <li className="footer__link">
              <Link href="/">Home</Link>
            </li>
            <li className="footer__link">
              <Link href="/locations">Locations</Link>
            </li>
            <li className="footer__link">
              <Link href="/about">About</Link>
            </li>
          </ul>
          <div className="border-b-[1px] border-[#ffffff41] w-full mb-6" />
          <div className="flex-center flex-col">
            <div>
              <ul className="flex-center mb-2">
                <li className="social-icon--wrapper">
                  <Link href="/">
                    <Image
                      src={whatsapp}
                      objectFit="cover"
                      alt=""
                      className="social-icon filter__white"
                    />
                  </Link>
                </li>
                <li className="social-icon--wrapper">
                  <Link href="https://www.instagram.com/torpedoswimacademy/" target="_blank">
                    <Image
                      src={instagram}
                      objectFit="cover"
                      alt=""
                      className="social-icon filter__white"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <h2 className="text-center">Copyright © 2022 - 2023 Torpedo Swimming Academy</h2>
          </div>
        </div>
      </div>
    </footer>
  );
}
