import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { BiHomeAlt } from "react-icons/bi";
import { AiFillCloseSquare } from "react-icons/ai";
import Menu from "./data/MenuData";

const Navigation = () => {
  const [toggleNavBar, setToggleNavBar] = useState(false);

  const handleToggleNavBar = () => {
    setToggleNavBar(!toggleNavBar);
  };
  return (
    <aside className="h-[15%] bg-slate-900">
      <div className="border border-slate-900">
        <div onClick={handleToggleNavBar} className="ml-7 mt-7">
          <FaBars className="hover:text-amber-500 text-3xl hover:duration-300 text-white" />
        </div>

        <nav
          className={` w-[250px] h-screen bg-slate-900 text-white fixed top-0 duration-500 ${
            toggleNavBar ? `left-0` : `left-[-100%]`
          }`}
        >
          <AiFillCloseSquare
            className="w-[140px] h-[35px] mt-12 hover:text-amber-500 hover:duration-300"
            onClick={handleToggleNavBar}
          />
          <ul>
            {Menu.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center mt-10 gap-4 py-4 px-16 w-[100%] rounded-md hover:bg-amber-500 hover:text-black hover:duration-300"
                    onClick={handleToggleNavBar}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Navigation;
