import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarScroll, setNavbarScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed left-0 right-0 top-0 z-[9999999] ${navbarScroll ? "bg-white/10 backdrop-blur-sm" : ""}`}>
      <div className="flex items-center justify-between p-4 md:px-8 lg:px-28 lg:py-8">
        <h2 className="font-bold md:w-1/2">Rental.Ly</h2>
        <IoMenu className="text-lg md:hidden" onClick={() => setNavbarOpen((prev) => !prev)} />
        <div className={`absolute left-0 top-16 flex w-full origin-top flex-col gap-4 overflow-hidden transition-all duration-300 ${navbarOpen ? "h-fit" : "h-0"} md:static md:h-fit md:w-full md:flex-row md:justify-between md:bg-inherit`}>
          <ul className="flex flex-col gap-4 font-semibold md:flex-row lg:gap-10">
            <li className="cursor-pointer">
              <Link to="home" spy={true} smooth={true} offset={0} duration={300}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="list" spy={true} smooth={true} offset={0} duration={300}>
                Order
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="about" spy={true} smooth={true} offset={0} duration={300}>
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="contact" spy={true} smooth={true} offset={0} duration={300}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex gap-4 font-semibold lg:gap-10">
            <h3 className="cursor-pointer">Login</h3>
            <h3 className="cursor-pointer">Sign Up</h3>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
