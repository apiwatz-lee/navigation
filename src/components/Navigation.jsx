import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { BiHomeAlt } from "react-icons/bi";
import { AiFillCloseSquare } from "react-icons/ai";

const Navigation = () => {
  const [toggleNavBar, setToggleNavBar] = useState(false);

  const handleToggleNavBar = () => {
    setToggleNavBar(!toggleNavBar);
  };
  return (
    <aside>
      <div>
        <div onClick={handleToggleNavBar}>
          <FaBars className="hover:text-slate-400 text-3xl" />
        </div>

        <nav
          className={` w-[250px] h-screen bg-slate-900 text-white fixed top-0 duration-500 ${
            toggleNavBar ? `left-0` : `left-[-100%]`
          }`}
        >
          <AiFillCloseSquare
            className="w-[140px] h-[35px] mt-12 hover:text-slate-400"
            onClick={handleToggleNavBar}
          />
          <ul>
            <li>
              <Link to="#" className="flex items-center mt-10 ml-16 gap-4">
                <BiHomeAlt />
                <span>Homepage</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center mt-10 ml-16 gap-4">
                <BiHomeAlt />
                <span>Members</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center mt-10 ml-16 gap-4">
                <BiHomeAlt />
                <span>Products</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Navigation;
