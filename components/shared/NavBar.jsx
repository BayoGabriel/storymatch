"use client"
import { LiaTimesSolid } from "react-icons/lia";
import { CiSearch, CiHeart, CiMenuFries, CiShoppingCart, CiUser } from "react-icons/ci";
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Navlinks = [
    {
      title: "Home",
      route: "/"
    },
    {
      title: "Rules",
      route: "/rules"
    },
    {
      title: "Blog",
      route: "/blog"
    },
    {
      title: "About Us",
      route: "/about"
    },
    {
      title: "FAQ",
      route: "/faq"
    },
    {
        title: "Support",
        route: "/contact"
    }
  ]
  
  return (
    <div className="bg-transparent w-full">
      <div className="py-4 flex justify-between items-center ">
      <Link href="/" className="px-6 py-2 text-darkest">
        LOGO
      </Link>
        <div className="hidden lg:flex relative items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-[40px] bg-dlightest w-[400px] appearance-none block border border-gray-300 placeholder-gray-500 text-ddarkest focus:outline-none focus:ring-darker focus:border-darker sm:text-sm"
          />
          <CiSearch className="absolute right-4 mr-2" />
        </div>
        <div className="hidden lg:flex items-center gap-4">
            {Navlinks.map((item, index) => {})}
        </div>
      <div className="flex items-center">
        <a className="flex items-center text-dlightest text-decoration-none cursor-pointer py-2 px-6 bg-darkest rounded-lg" ><CiUser className=" mr-[2px]" />Account</a>
        <div className="lg:hidden">
          {isMenuOpen ? (
            <LiaTimesSolid className="text-ddarkest cursor-pointer h-[1em]" onClick={toggleMenu} />
          ) : (
            <CiMenuFries className="text-ddarkest cursor-pointer h-[1em]" onClick={toggleMenu} />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden z-4 flex rounded-20 flex-col items-center justify-center absolute top-20 left-1/2 transform -translate-x-1/2 bg-dlighter p-4 w-full">
        {Navlinks.map((item, index) => {
          return (
            <Link href={item.route} key={index} className="text-ddarkest items-center text-decoration-none mb-4 w-full text-left">{item.title}</Link>
          );
        })}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-4 py-2 pl-10 rounded-lg bg-white text-ddarkest w-full appearance-none block border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-darker focus:border-darker sm:text-sm"
          />
          <div className="absolute top-0 right-4 flex items-center h-full pl-3">
            <CiSearch />
          </div>
        </div>
      </div>
            
      )}
      </div>
    </div>
    
  );
};

export default Navbar;
