import React from "react";
import FooterLink from "./FooterLink";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex h-fit flex-col items-center justify-center  bg-neutral-900 pt-4 lg:pt-10">
      <Link to="/">
        <img
          className=" w-16 md:w-32 lg:w-64"
          src="/assets/nflxlogo.webp"
          alt="Netflix"
        />
      </Link>
      <p className="mt-4 text-xs text-white md:mt-12  md:text-sm lg:mt-8">
        Entertain Your loved ones in home
      </p>
      <ul className="mt-4 flex flex-wrap space-x-4 px-2 text-xs md:text-sm lg:px-5 lg:text-base">
        <FooterLink text="About" />
        <FooterLink text="Premium" />
        <FooterLink text="Campaigns" />
        <FooterLink text="Blog" />
        <FooterLink text="Affiliate Program" />
        <FooterLink text="FAQs" />
        <FooterLink text="Contact" />
      </ul>
      <p className="mb-8 mt-2 text-xs text-slate-500 lg:mb-12 lg:mt-4 lg:text-sm">
        © 2021-2022 Netflix™. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
