import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex flex-row justify-between bg-neutral-900">
      <Link to="/" className="flex flex-row items-center">
        <img
          className="w-20 px-2 py-2 md:w-32 lg:w-44 lg:px-4"
          src="assets/nflxlogo.webp"
          alt="Netflix"
        />
      </Link>
      <div className="justify-auto flex flex-row items-center space-x-4 px-4 py-3 hover:cursor-pointer">
        <select
          name="languages"
          id="languages"
          className="rounded-lg border-2  border-neutral-900 bg-red-500 px-3 py-2 text-xs font-bold text-white hover:border-red-500  hover:bg-neutral-900 md:text-base lg:text-xl"
          value={language}
          onChange={handleLanguageChange}
        >
          {allLanguages.map((lang) => (
            <option className="bg-neutral-900 text-red-400" value={lang.name}>
              {lang.value}
            </option>
          ))}
        </select>
        <div className="justify-auto hidden flex-row items-center space-x-4 px-4 py-3 hover:cursor-pointer sm:flex">
          <Button text="Sign Up" to="/signup" />
          <Button text="Sign In" to="/signin" />
        </div>
        <div className="block sm:hidden">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                opacity="0.5"
                d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"
                fill="#ffffff"
              ></path>{" "}
              <path
                d="M18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z"
                fill="#ffffff"
              ></path>{" "}
              <path
                d="M18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12Z"
                fill="#ffffff"
              ></path>{" "}
              <path
                d="M18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16Z"
                fill="#ffffff"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
