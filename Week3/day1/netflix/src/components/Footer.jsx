import React from "react";
import FooterLink from "./FooterLink";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center">
      <Link to="/">
        <img className="w-64" src="/assets/nflxlogo.webp" alt="Netflix" />
      </Link>
      <p className="mt-8 text-white">Entertain Your loved ones in home</p>
      <ul className="mt-4 flex flex-wrap space-x-4 px-5">
        <FooterLink text="About" />
        <FooterLink text="Premium" />
        <FooterLink text="Campaigns" />
        <FooterLink text="Blog" />
        <FooterLink text="Affiliate Program" />
        <FooterLink text="FAQs" />
        <FooterLink text="Contact" />
      </ul>
      <p className="mb-12 mt-4 text-sm text-slate-500">
        © 2021-2022 Netflix™. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
