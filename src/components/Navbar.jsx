import React, { useState } from "react";
import logo from '../assets/log.png';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineUser,
  AiOutlineClose,
} from "react-icons/ai";

import { FaFacebook, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop dropdown
  const [mobileCollectionOpen, setMobileCollectionOpen] = useState(false); // mobile dropdown
  const [searchOpen, setSearchOpen] = useState(false);


  return (
    <nav className="bg-amber-500 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-3 py-10 lg:py-6">
        {/* Left Section - Logo and Menu Icon */}
        <div className="flex items-center space-x-4">
          {/* Hamburger */}
          <div className="lg:hidden text-[#7F0000]">
            {isOpen ? (
              <AiOutlineClose
                size={28}
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              />
            ) : (
              <AiOutlineMenu
                size={28}
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer text-white"
              />
            )}
          </div>

          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="May Afrique Logo"
              className="h-16 md:h-12 lg:h-20 w-auto object-contain cursor-pointer"
            />
          </div>
        </div>

        {/* Center Section - Desktop Navigation */}
        <div className="hidden lg:flex flex-grow justify-center space-x-8 text-[17px] text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "underline cursor-pointer"
                : "hover:underline cursor-pointer"
            }
          >
            Home
          </NavLink>

          {/* <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? "underline cursor-pointer"
                : "hover:underline cursor-pointer"
            }
          >
            Collection
          </NavLink> */}

          <button
            type="button"
            onClick={() =>
              toast("Shop is coming soon! We're working on it.")
            }
            className="cursor-pointer hover:underline"
          >
            Shop
          </button>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "underline cursor-pointer"
                : "hover:underline cursor-pointer"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive
                ? "underline cursor-pointer"
                : "hover:underline cursor-pointer"
            }
          >
            Contacts
          </NavLink>
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center space-x-4 text-white">
          <AiOutlineUser size={24} className="cursor-pointer hidden lg:block" />

          {/* Search Icon + Input */}
          <div className="relative hidden lg:block">
            <div
              className={`flex items-center border rounded-md px-2 py-1 transition-all duration-500 ease-in-out overflow-hidden ${searchOpen ? "w-52 opacity-100" : "w-0 opacity-0"
                }`}
            >
              <input
                type="text"
                placeholder="Search..."
                className="outline-none text-sm w-80 h-8 bg-transparent"
              />
              <AiOutlineClose
                size={30}
                className="ml-2 cursor-pointer"
                onClick={() => setSearchOpen(false)}
              />
            </div>

            {!searchOpen && (
              <AiOutlineSearch
                size={24}
                className="cursor-pointer absolute top-2"
                onClick={() => setSearchOpen(true)}
              />
            )}
          </div>

          {/* Wishlist */}
          <div className="relative cursor-pointer hidden lg:block">
            <AiOutlineHeart size={24} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <AiOutlineShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </div>
        </div>


      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-4 border-b relative">
            <img
              src={logo}
              alt="May Afrique Logo"
              className="h-12 w-auto object-contain mx-auto"
            />
            <AiOutlineClose
              size={30}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-black absolute right-4"
            />
          </div>

          {/* Search Bar */}
          <div className="px-4 py-3">
            <div className="flex items-center border px-3 py-2 rounded-md text-[#7F0000]">
              <AiOutlineSearch size={20} className="mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="w-full text-sm outline-none"
              />
            </div>
          </div>

          {/* Mobile Nav Links */}
          {/* Mobile Nav Links */}
          <div className="flex flex-col px-4 py-4 gap-7 text-black text-sm border-b">

            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="w-fit hover:text-gray-500"
            >
              Home
            </NavLink>

            {/* <NavLink
              to="/collection"
              onClick={() => setIsOpen(false)}
              className="w-fit hover:text-gray-500"
            >
              Collection
            </NavLink> */}

            <button
              type="button"
              onClick={() => {
                toast("Shop is coming soon! We're working on it.");
                setIsOpen(false);
              }}
              className="w-fit p-0 text-left hover:text-gray-500"
            >
              Shop
            </button>

            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className="w-fit hover:text-gray-500"
            >
              About
            </NavLink>

            <NavLink
              to="/contacts"
              onClick={() => setIsOpen(false)}
              className="w-fit hover:text-gray-500"
            >
              Contacts
            </NavLink>

          </div>

          {/* Cart + Wishlist */}
          <div className="flex flex-col px-4 py-4 space-y-4 text-black text-sm mt-6">

            <div className="flex justify-between items-center">
              <span>Shopping Cart</span>
              <div className="relative">
                <AiOutlineShoppingCart size={30} />
                <span className="absolute -top-2 -right-2 bg-[#7F0000] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span>Wishlist</span>
              <div className="relative">
                <AiOutlineHeart size={30} />
                <span className="absolute -top-2 -right-2 bg-[#7F0000] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
          </div>

          {/* Bottom - Sign In + Social */}
          <div className="mt-auto">
            <div className="px-4 py-4 border-b">
              <a href="#" className="hover:text-gray-500 text-black">
                Sign In
              </a>
            </div>

            <div className="flex justify-center space-x-6 px-4 py-10 text-[#7F0000]">
              <a href="#">
                <FaTwitter size={30} />
              </a>
              <a href="#">
                <FaFacebook size={30} />
              </a>
              <a href="#">
                <FaInstagram size={30} />
              </a>
              <a href="#">
                <FaPinterestP size={30} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
