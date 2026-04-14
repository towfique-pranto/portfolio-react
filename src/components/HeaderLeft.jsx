import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const HeaderLeft = () => {
  return (
    <div className="md:flex-1">
      <div className="min-h-screen top-0 hidden md:sticky md:flex items-center bg-teal-600 text-white">
        <ul className="flex flex-col gap-10">
          {["home", "projects", "certifications", "contact"].map((item) => (
            <li
              key={item}
              className="flex items-center justify-start cursor-pointer font-medium transition-all duration-200 group sm:text-lg mdLtext-xl xl:text-3xl"
            >
              <IoIosArrowDroprightCircle className="text-4xl -translate-x-5 opacity-0 transform transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
              <a
                href={`#${item}`}
                className="transition-all duration-200 hover:translate-x-3"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderLeft;
