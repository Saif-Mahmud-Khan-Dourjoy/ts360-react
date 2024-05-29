import { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import alignRight from "../assets/align-right.svg";
import crossIcon from "../assets/cross.svg";
import logo from "../assets/logo.png";
import Home from "../layout/Home/Home";
import Login from "../layout/Login/Login";
import Register from "../layout/Login/Register";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  let Links = [
    { name: "HOME", link: "/" },
    { name: "RESOURCES", link: "/resources" },
    { name: "COMPANY", link: "/company" },
    { name: "CONTACT", link: "/contact" },
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          {/* logo section */}

          <div className="font-medium text-xl cursor-pointer flex items-center gap-1">
            <img className="w-11 h-11" src={logo} alt="logo" />
            <h1 className="font-bold text-lg ml-2">
              <span className="text-[#82D955]">Test</span>
              <span className="text-[#3AB6FF]">Sprint</span>360
            </h1>
          </div>

          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? (
              <img src={crossIcon} alt="crossIcon" />
            ) : (
              <img src={alignRight} alt="alignRight" />
            )}
          </div>

          {/* linked items */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            {Links?.map((link, index) => (
              <li className="md:ml-8 md:my-0 my-7 font-semibold" key={index}>
                <Link
                  to={link?.link}
                  onClick={handleLinkClick}
                  className={`text-gray-800 hover:text-blue-400 duration-500 ${
                    location.pathname === link.link ? "text-blue-400" : ""
                  }`}
                >
                  {link?.name}
                </Link>
              </li>
            ))}
            <Link to="/login" onClick={handleLinkClick}>
              <button className="btn bg-[#A2DEFF] text-[#0075B7] md:ml-8 font-semibold px-4 py-[6px] rounded-[30px] duration-500 md:static">
                Login
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
