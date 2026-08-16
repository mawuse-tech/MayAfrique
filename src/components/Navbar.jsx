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

import { FaFacebook, FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [searchOpen, setSearchOpen] = useState(false);


  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/15 bg-[#3a0e14] text-white shadow-[0_10px_40px_rgba(25,6,9,.12)] lg:bg-[#3a0e14]/90 lg:backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 sm:px-10 md:px-14 lg:px-20 lg:py-3">
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
              className="h-14 w-auto cursor-pointer object-contain brightness-0 invert lg:h-16"
            />
          </div>
        </div>

        {/* Center Section - Desktop Navigation */}
        <div className="hidden flex-grow justify-center space-x-10 text-[12px] uppercase tracking-[0.2em] text-white/85 lg:flex">
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
        <div className="fixed inset-0 z-[100] h-[100dvh] w-screen bg-black/60 lg:hidden" onClick={() => setIsOpen(false)}>
        <div
          className="relative z-[101] flex h-[100dvh] w-[90%] max-w-sm flex-col overflow-y-auto overscroll-contain bg-[#f5f1e9] text-[#211b18] shadow-[20px_0_60px_rgba(0,0,0,.28)] animate-[mobileMenuIn_.45s_cubic-bezier(.22,1,.36,1)]"
          onClick={(event) => event.stopPropagation()}
        >
          {/* Header */}
          <div className="relative flex items-center justify-between border-b border-white/15 bg-[#681821] px-5 py-5">
            <img
              src={logo}
              alt="May Afrique Logo"
              className="mx-auto h-12 w-auto object-contain brightness-0 invert"
            />
            <AiOutlineClose
              size={30}
              onClick={() => setIsOpen(false)}
              className="absolute right-5 cursor-pointer text-white"
            />
          </div>

          {/* Search Bar */}
          <div className="px-6 pb-4 pt-7">
            <div className="flex items-center rounded-full border border-[#681821]/20 bg-white/65 px-4 py-3 text-[#681821]">
              <AiOutlineSearch size={20} className="mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#211b18]/45"
              />
            </div>
          </div>

          {/* Mobile Nav Links */}
          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-1 border-b border-[#681821]/15 px-6 pb-6 pt-2 text-sm uppercase tracking-[0.2em]">

            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="w-full border-b border-[#211b18]/10 py-4 transition-colors hover:text-[#681821]"
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
              className="w-full border-b border-[#211b18]/10 py-4 text-left transition-colors hover:text-[#681821]"
            >
              Shop
            </button>

            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className="w-full border-b border-[#211b18]/10 py-4 transition-colors hover:text-[#681821]"
            >
              About
            </NavLink>

            <NavLink
              to="/contacts"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 transition-colors hover:text-[#681821]"
            >
              Contacts
            </NavLink>

          </div>

          {/* Cart + Wishlist */}
          <div className="mt-3 flex flex-col space-y-4 px-6 py-5 text-sm text-[#211b18]/75">

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
          <div className="mt-auto bg-[#eadfce]">
            <div className="border-b border-[#681821]/15 px-6 py-4">
              <a href="#" className="text-[#211b18] hover:text-[#681821]">
                Sign In
              </a>
            </div>

            <div className="flex justify-center space-x-6 px-4 py-7 text-[#681821]">
              <a
                href="https://www.instagram.com/bridal_by_mayafrique?igsh=OXJlM2xrMG90MHI1
             "
                aria-label="May Afrique on Instagram"
                className="transition-opacity hover:opacity-50"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="https://www.facebook.com/MayAfrique"
                aria-label="May Afrique on Facebook"
                className="transition-opacity hover:opacity-50"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="https://www.instagram.com/mayafrique?igsh=ZWNvcXd3MGh1MW40&utm_source=qr
             "
                aria-label="May Afrique on Instagram"
                className="transition-opacity hover:opacity-50"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="https://www.instagram.com/mayafrique_fashion_academy?igsh=MTZ5YWM3ZTU0OWlicA==
             "
                aria-label="May Afrique on Instagram"
                className="transition-opacity hover:opacity-50"
              >
                <FaInstagram size={17} />
              </a>
            </div>
          </div>
        </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
