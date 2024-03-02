import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Header() {
  const allLanguages = [
    { name: "english", value: "English" },
    { name: "hindi", value: "Hindi" },
    { name: "malayalam", value: "Malayalam" },
    { name: "tamil", value: "Tamil" },
    { name: "arabic", value: "Arabic" },
    { name: "french", value: "French" },
    { name: "german", value: "German" },
    { name: "italian", value: "Italian" },
    { name: "japanese", value: "Japanese" },
    { name: "korean", value: "Korean" },
    { name: "mandarin", value: "Mandarin" },
    { name: "portuguese", value: "Portuguese" },
    { name: "russian", value: "Russian" },
    { name: "spanish", value: "Spanish" },
  ];

  const storedLanguage = localStorage.getItem("language");
  if (!storedLanguage) localStorage.setItem("language", allLanguages[0].name);

  const [language, setLanguage] = useState(
    storedLanguage || allLanguages[0].name,
  );

  const handleLanguageChange = (event) => {
    let lang = event.target.value;
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // Hamburger handling
  function hamburgerExpand() {
    const hamburgerOpenButton = document.getElementById("hamburger-open");
    const hamburgerCloseButton = document.getElementById("hamburger-close");
    const hamburgerExpansion = document.getElementById("hamburger-expansion");
    hamburgerExpansion.classList.toggle("hidden");
    hamburgerExpansion.classList.toggle("flex");
    hamburgerOpenButton.classList.toggle("hidden");
    hamburgerCloseButton.classList.toggle("hidden");
  }

  function hamburgerClose() {
    const hamburgerOpenButton = document.getElementById("hamburger-open");
    const hamburgerCloseButton = document.getElementById("hamburger-close");
    const hamburgerExpansion = document.getElementById("hamburger-expansion");
    hamburgerExpansion.classList.toggle("hidden");
    hamburgerExpansion.classList.toggle("flex");
    hamburgerOpenButton.classList.toggle("hidden");
    hamburgerCloseButton.classList.toggle("hidden");
  }

  return (
    <>
      <header className="flex flex-row justify-between bg-neutral-900">
        <Link to="/" className="flex flex-row items-center">
          <img
            className="w-20 px-2 py-2 md:w-32 lg:w-44 lg:px-4"
            src="assets/nflxlogo.webp"
            alt="Netflix"
          />
        </Link>
        <div className="justify-auto hidden flex-row items-center space-x-4 px-4 py-3 hover:cursor-pointer sm:flex">
          <select
            name="languages"
            id="languages"
            className="rounded-lg border-2  border-neutral-900 bg-red-500 px-3 py-2 text-xs  font-normal text-white hover:border-red-500 hover:bg-neutral-900  md:text-base md:font-bold lg:text-base"
            value={language}
            onChange={handleLanguageChange}
          >
            {allLanguages.map((lang) => (
              <option className="bg-neutral-900 text-red-400" value={lang.name}>
                {lang.value}
              </option>
            ))}
          </select>
          <Button text="Sign Up" to="/signup" />
          <Button text="Sign In" to="/signin" />
        </div>
        <button
          className="block sm:hidden"
          id="hamburger-open"
          onClick={() => hamburgerExpand()}
        >
          <svg
            class="h-[24px] w-[24px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m8 7 4 4 4-4m-8 6 4 4 4-4"
            />
          </svg>
        </button>
        <button
          className="hidden sm:hidden"
          id="hamburger-close"
          onClick={() => hamburgerClose()}
        >
          <svg
            class="h-[24px] w-[24px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m16 17-4-4-4 4m8-6-4-4-4 4"
            />
          </svg>
        </button>
        {/* </div> */}
      </header>
      <div className="hidden flex-col bg-neutral-900" id="hamburger-expansion">
        <div className="flex flex-col items-end justify-end space-y-4 px-3 py-2 hover:cursor-pointer sm:hidden">
          <select
            name="languages"
            id="languages"
            className="rounded-lg border-2  border-neutral-900 bg-red-500 px-3 py-2 text-center text-xs font-medium text-white hover:border-red-500  hover:bg-neutral-900 md:text-base lg:text-base"
            value={language}
            onChange={handleLanguageChange}
          >
            {allLanguages.map((lang) => (
              <option className="bg-neutral-900 text-red-400" value={lang.name}>
                {lang.value}
              </option>
            ))}
          </select>
          <Button text="Sign Up" to="/signup" />
          <Button text="Sign In" to="/signin" />
        </div>
      </div>
    </>
  );
}

export default Header;
