import React, { useState } from "react";
import img10 from "../Image/img/logo.png";
import { QuestionMarkCircleIcon, ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    ["Home", "/"],
    ["About", "/about"],
    ["Gallery", "/gallery"],
    ["Membership", "/membership"],
    ["Success Stories", "/success-stories"],
    ["Contact", "/contact"],
  ];

  const helpLinks = [
    ["Live Help", "#"],
    ["Contact Us", "/contact"],
    ["Feedback", "#"],
    ["Business Queries", "#"],
    ["Retail Stores", "#"],
  ];

  return (
    <>
      {/* 🔹 Top Language Bar */}
      <div className="bg-gradient-to-r from-pink-100 via-white to-pink-50 text-center text-sm text-gray-700 py-2 border-b border-pink-200 shadow-sm">
        <div className="flex flex-wrap justify-center gap-3 font-medium tracking-wide">
          {["Assamese","Bengali","Gujarati","Hindi","Kannada","Malayalam","Marathi","Punjabi","Tamil","Telugu","Urdu"].map((lang, index) => (
            <React.Fragment key={lang}>
              <a
                href="#"
                className="hover:text-pink-600 transition-colors duration-200 hover:underline underline-offset-4"
              >
                {lang}
              </a>
              {index < 10 && <span className="text-gray-400">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-pink-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src={img10}
              alt="Global Rishte Matrimonial Services"
              className="h-10 sm:h-12 hover:scale-110 transition-transform duration-300 drop-shadow-md"
            />
          </a>

          {/* Navbar Links (Desktop) */}
          <nav className="hidden md:flex space-x-4">
            {navLinks.map(([label, link]) => (
              <a
                key={label}
                href={link}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-50 hover:text-blue-600 transition duration-200 font-medium text-gray-800 shadow-sm"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right Side (Desktop) */}
          <div className="hidden md:flex items-center space-x-5">
            <span className="text-sm font-bold text-gray-800">Already a member?</span>
            <a
              href="/login"
              className="text-sm text-white bg-gradient-to-r from-pink-600 to-pink-500 border border-pink-600 px-5 py-1.5 rounded-full font-medium hover:from-pink-700 hover:to-pink-600 hover:shadow-lg transition-all duration-300"
            >
              Login
            </a>

            {/* Help Dropdown */}
            <div className="relative group">
              <div className="flex items-center text-sm text-gray-800 hover:text-pink-600 cursor-pointer">
                <QuestionMarkCircleIcon className="h-4 w-4 text-gray-500 mr-1" />
                Help
                <ChevronDownIcon className="h-4 w-4 text-gray-500 ml-1 transition-transform duration-300 group-hover:rotate-180" />
              </div>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-200 rounded-2xl shadow-2xl p-5 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <p className="text-sm font-semibold text-gray-900 mb-3 border-b pb-2 border-pink-100">24x7 Help</p>
                <p className="text-sm text-gray-700">India: <span className="font-medium text-pink-600">+91 8144998877</span></p>
                <p className="text-sm text-gray-700 mb-3">UAE: <span className="font-medium text-pink-600">+971 525060879</span></p>
                <ul className="space-y-2 text-sm">
                  {helpLinks.map(([text, link]) => (
                    <li key={text}>
                      <a href={link} className="text-gray-700 hover:text-pink-600 block transition">{text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XMarkIcon className="h-7 w-7 text-gray-700" /> : <Bars3Icon className="h-7 w-7 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-white shadow-lg border-t border-gray-100`}
        >
          <ul className="flex flex-col space-y-4 px-5 py-5 text-gray-700 font-bold text-[15px]">
            {navLinks.map(([label, link]) => (
              <li key={label}>
                <a
                  href={link}
                  className="block px-4 py-2 rounded-lg border border-gray-200 hover:bg-pink-50 hover:text-pink-600 transition duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <span className="text-sm text-gray-700">Already a member?</span>
              <a
                href="/login"
                className="text-pink-600 font-medium border border-pink-600 px-5 py-1.5 rounded-full block mt-2 text-center hover:bg-pink-50 transition"
              >
                Login
              </a>
            </li>
            <li>
              <span className="text-sm text-gray-700">Help</span>
              <ul className="mt-2 space-y-2">
                {helpLinks.map(([text, link]) => (
                  <li key={text}>
                    <a href={link} className="text-gray-700 hover:text-pink-600 block transition">{text}</a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
