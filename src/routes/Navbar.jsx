import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import alignRight from "../assets/align-right.svg";
import crossIcon from "../assets/cross.svg";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let Links = [
    // { name: "HOME", link: "/" },
    {
      name: "RESOURCES", link: "/resources", children: true, child: [
        {
          name: 'AUTOMATION ARTICLE', link: '/automation-article', parent: 'RESOURCES'
        },
        {
          name: 'DEMO VIDEO', link: '/demo-video', parent: 'RESOURCES'
        },

      ]
    },
    {
      name: "COMPANY", link: "/company", children: true, child: [
        {
          name: 'ABOUT US', link: '/about-us', parent: 'COMPANY'
        },
        {
          name: 'CAREER', link: '/career', parent: 'COMPANY'
        },

      ]
    },
    { name: "CONTACT", link: "/contact" },
  ];

  const handleLinkClick = () => {
    setDropdownOpen(null);
    setOpen(false);
  };

  const handleDropdownEnter = (name) => {
    if (dropdownOpen === name) {
      setDropdownOpen(name);
    } else {
      setDropdownOpen(name);
    }
  };
  

  const handleDropdownClick = (name)=>{
    if (dropdownOpen === name) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(name);
    }
  }

  return (
    <>


      <div className="shadow-md w-full fixed top-0 left-0" style={{zIndex:'9999'}} ref={navbarRef}>
        <div className="lg:flex items-center justify-between bg-white py-8 lg:px-10 px-7">
          {/* logo section */}

          <Link to='/'>
          <div className="font-medium text-xl cursor-pointer flex items-center gap-1">
            <img className="w-11 h-11" src={logo} alt="logo" />
            <h1 className="font-bold text-lg ml-2">
              <span className="text-[#82D955]">Test</span>
              <span className="text-[#3AB6FF]">Sprint</span>360
            </h1>
          </div>
          </Link> 

          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-11 cursor-pointer lg:hidden w-7 h-7"
          >
            {open ? (
              <img src={crossIcon} alt="crossIcon" />
            ) : (
              <img src={alignRight} alt="alignRight" />
            )}
          </div>

          {/* linked items */}
          <ul
            className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-10  transition-all duration-500 ease-in ${open ? "top-12" : "top-[-490px]"
              }`}
          >
            {Links?.map((link, index) => (
              link?.children ? (
                <li className="lg:ml-8 lg:my-0 my-7 font-semibold lg:relative " key={index}>
                  <span onClick={() => handleDropdownClick(link.name)} onMouseEnter={() => handleDropdownEnter(link.name)}  className="cursor-pointer text-[#818181] hover:text-blue-400 duration-500">
                    {link.name} <span className="ml-3"> {dropdownOpen === link.name ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />  }</span>
                </span>
                  {dropdownOpen === link.name && (
                    <ul className={`lg:absolute top-8 left-0 lg:bg-gray-800 w-max margin mt-3 lg:mt-0 lg:py-2 lg:rounded-b-xl`} ref={dropdownRef}>
                      {link.child.map((child, childIndex) => (
                        

                        <>
                        <li key={`${index}-${childIndex}`} className=" px-3 py-3 font-semibold ">
                          <Link
                            to={child.link}
                            onClick={handleLinkClick}
                            className={` text-[#818181] lg:text-white hover:text-blue-400 duration-500 ${location.pathname === child.link ? "text-blue-400" : ""
                              }`}
                          >
                            {child.name}
                          </Link>
                        </li>

                       { link.child.length -1 > childIndex && <hr/> }
                        </>
                      ))}
                    </ul>
                  )}
                </li>)

                : <li className="lg:ml-8 lg:my-0 my-7 font-semibold" key={index}>

                  <Link
                    to={link?.link}
                    onClick={handleLinkClick}
                    className={`text-[#818181] hover:text-blue-400 duration-500 ${location.pathname === link.link ? "text-blue-400" : ""
                      }`}
                  >
                    {link?.name}
                  </Link>
                </li>
            ))}
            <Link className=" block lg:hidden" to="/login" onClick={handleLinkClick}>
            <button className="hover:text-blue-400 text-xl  text-[#818181] lg:ml-8 font-semibold lg:px-4 pb-[6px] rounded-[30px] duration-500 lg:static">
              Login
            </button>
          </Link>
          </ul>
          <Link className=" hidden lg:block" to="/login" onClick={handleLinkClick}>
            <button className="hover:text-blue-400  text-xl text-[#818181] lg:ml-8 font-semibold px-4 py-[6px] rounded-[30px] duration-500 lg:static">
              Login
            </button>
          </Link>

        </div>
      </div>
    </>
  );
};

export default Navbar;
