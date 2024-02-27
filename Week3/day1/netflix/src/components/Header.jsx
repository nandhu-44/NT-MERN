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

  return (
    <header className="flex flex-row justify-between bg-neutral-900">
      <Link to="/" className="flex flex-row items-center">
        <img
          className="w-44 px-4 py-2"
          src="assets/nflxlogo.webp"
          alt="Netflix"
        />
      </Link>
      <div className="justify-auto flex flex-row items-center space-x-4 px-4 py-3 hover:cursor-pointer">
        <select
          name="languages"
          id="languages"
          className="rounded-lg border-2  border-neutral-900 bg-red-500 px-3 py-2 font-bold  text-white hover:border-red-500 hover:bg-neutral-900"
          value={language}
          onChange={handleLanguageChange}
        >
          {allLanguages.map((lang) => (
            <option className="bg-neutral-900 text-green-400" value={lang.name}>
              {lang.value}
            </option>
          ))}
        </select>
        <Button text="Sign Up" to="/signup" />
        <Button text="Sign In" to="/signin" />
      </div>
    </header>
  );
}

export default Header;
