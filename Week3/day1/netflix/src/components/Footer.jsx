import React from "react";
import FooterLink from "./FooterLink";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center">
      <img className="w-64" src="/assets/nflxlogo.webp" alt="Netflix" />
      <p className="text-white mt-8">Entertain Your loved ones in home</p>
      <ul className="flex flex-wrap px-5 mt-4 space-x-4">
        <FooterLink text="About" />
        <FooterLink text="Premium" />
        <FooterLink text="Campaigns" />
        <FooterLink text="Blog" />
        <FooterLink text="Affiliate Program" />
        <FooterLink text="FAQs" />
        <FooterLink text="Contact" />
      </ul>
        <p className="text-slate-500 text-sm mt-4 mb-12">© 2021-2022 Netflix™. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
