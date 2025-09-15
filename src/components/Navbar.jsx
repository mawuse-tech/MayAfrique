import React, { useState } from "react";
import logo from '../assets/log.png';

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
          <a href="#" className="hover:underline cursor-pointer">
            Home
          </a>

          {/* Desktop Dropdown - Collection */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="hover:underline">Collection</span>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-amber-500 shadow-lg border rounded-md py-3 w-60">
                <a href="#" className="block px-5 py-2 hover:bg-gray-100">
                  SUMMER UNAPOLOGETICALLY
                </a>
                <a href="#" className="block px-5 py-2 hover:bg-gray-100">
                  SUMMER 2.0
                </a>
                <a href="#" className="block px-5 py-2 hover:bg-gray-100">
                  SUMMER
                </a>
                <a href="#" className="block px-5 py-2 hover:bg-gray-100">
                  HOLIDAY EDIT 4.0
                </a>
                <a href="#" className="block px-5 py-2 hover:bg-gray-100">
                  HOLIDAY 3.0
                </a>
              </div>
            )}
          </div>

          <a href="#" className="hover:underline cursor-pointer">
            Shop
          </a>
          <a href="#" className="hover:underline cursor-pointer">
            About
          </a>
          <a href="#" className="hover:underline cursor-pointer">
            Lookbook
          </a>
          <a href="#" className="hover:underline cursor-pointer">
            Contacts
          </a>
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
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-amber-500 z-50 flex flex-col">
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
              className="cursor-pointer text-white absolute right-4"
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
          <div className="flex flex-col px-4 py-4 space-y-4 text-white text-sm border-b">
            <a href="#" className="hover:text-gray-500 text-2xl">
              Home
            </a>

            {/* Mobile Dropdown - Collection */}
            <div>
              <button
                onClick={() => setMobileCollectionOpen(!mobileCollectionOpen)}
                className="w-full flex justify-between items-center hover:text-gray-500 text-2xl"
              >
                Collection
                <span
                  className={`ml-2 transform transition-transform duration-200 text-4xl ${mobileCollectionOpen ? "rotate-180" : "rotate-0"
                    }`}
                >
                  ▾
                </span>
              </button>

              {mobileCollectionOpen && (
                <div className="mt-2 ml-4 space-y-2 flex flex-col gap-2">
                  <a href="#" className="block hover:text-gray-500">
                    SUMMER UNAPOLOGETICALLY
                  </a>
                  <a href="#" className="block hover:text-gray-500">
                    SUMMER 2.0
                  </a>
                  <a href="#" className="block hover:text-gray-500">
                    SUMMER
                  </a>
                  <a href="#" className="block hover:text-gray-500">
                    HOLIDAY EDIT 4.0
                  </a>
                  <a href="#" className="block hover:text-gray-500">
                    HOLIDAY 3.0
                  </a>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-7 text-2xl">
              <a href="#" className="hover:text-gray-500">
                Shop
              </a>
              <a href="#" className="hover:text-gray-500">
                About
              </a>
              <a href="#" className="hover:text-gray-500">
                Lookbook
              </a>
              <a href="#" className="hover:text-gray-500">
                Contacts
              </a>
            </div>
          </div>

          {/* Cart + Wishlist */}
          <div className="flex flex-col px-4 py-4 space-y-4 text-white text-sm mt-6">

            <div className="flex justify-between items-center text-2xl">
              <span>Shopping Cart</span>
              <div className="relative">
                <AiOutlineShoppingCart size={30} />
                <span className="absolute -top-2 -right-2 bg-[#7F0000] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center text-2xl">
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
            <div className="px-4 py-4 border-b text-2xl">
              <a href="#" className="hover:text-gray-500 text-white">
                Sign In
              </a>
            </div>

            <div className="flex justify-center space-x-6 px-4 py-6 text-[#7F0000]">
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
