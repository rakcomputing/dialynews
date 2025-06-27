import React from "react";
import { Outlet } from "react-router-dom";
import { MdOutlinePhoneInTalk, MdOutlineMarkEmailRead } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="/">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-blue-900 font-bold text-xl">D</span>
                </div>
                <div className="text-2xl font-bold">
                  <span className="text-white">Doctor</span>
                  <span className="text-yellow-400">Net</span>
                  <span className="text-yellow-400">.</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <a
                href="/"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 hover:scale-105 no-underline"
              >
                Home
              </a>
              <a
                href="/news"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 hover:scale-105 no-underline"
              >
                News
              </a>
              <a
                href="/Health"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 hover:scale-105 no-underline"
              >
                Health
              </a>
              <a
                href="/sports"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 hover:scale-105 no-underline"
              >
                Sports
              </a>
              <a
                href="/worklife"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 hover:scale-105 no-underline"
              >
                Worklife
              </a>
              <a
                href="/travel"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 hover:scale-105 no-underline"
              >
                Travel
              </a>
              <a
                href="/tech"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 hover:scale-105 no-underline"
              >
                Tech
              </a>
              <a
                href="/culture"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 hover:scale-105 no-underline"
              >
                Culture
              </a>
            </nav>

            {/* Search and Sign In */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative hidden sm:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search news..."
                  className="w-64 pl-10 pr-4 py-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Sign In Button */}
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 font-semibold px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 transform">
                Sign In
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </a>
      </div>

      {/* Breaking News Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="font-bold text-white">BREAKING NEWS</span>
            </div>
            <span className="text-white opacity-90">
              Stay updated with the latest developments and breaking stories
              from around the world
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className=" mt-10 bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 rounded-sm px-4 py-2 w-fit bg-blue-50">
              <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm text-blue-800">
                  Doctor Net: Health and idea
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MdOutlinePhoneInTalk className="text-blue-500" />
                <span>212-837-5077 / 917-641-1097</span>
              </div>
              <div className="flex items-start space-x-2">
                <FaRegClock className="text-blue-500 mt-1 flex-shrink-0" />
                <span>
                  Office Hours: Mon-Sat: 7am-11:30am & 1:30pm-8:30pm, Sun:
                  7am-5pm
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <FaLocationDot className="text-blue-500 mt-1 flex-shrink-0" />
                <span>3562 Small Street 1038 New York, US </span>
              </div>
              <div className="flex items-center space-x-2">
                <MdOutlineMarkEmailRead className="text-blue-500" />
                <span>office.info@doctornet.blog</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🌐</span>
                <a
                  href="https://docidea.blog"
                  className="text-blue-600 hover:text-blue-400 transition-colors"
                >
                  www.dortornet.blog
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="hover:scale-110 transition-transform">
                <img
                  className="h-8 w-8"
                  src="https://freepnglogo.com/images/all_img/1713419057Facebook_PNG.png"
                  alt="Facebook"
                />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <img
                  className="h-8 w-8"
                  src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png"
                  alt="Website"
                />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <img
                  className="h-8 w-8"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                  alt="Telegram"
                />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <div className="rounded-sm px-6 py-1 w-fit bg-green-50">
              <p className="font-bold text-sm text-green-800">Quick Links</p>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Breaking News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Latest Updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Featured Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Editor's Pick
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Subscribe Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div className="space-y-6">
            <div className="rounded-sm px-6 py-1 w-fit bg-orange-50">
              <p className="font-bold text-sm text-orange-800">Categories</p>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Health & Wellness
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Travel & Tourism
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Business & Economy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Entertainment
                </a>
              </li>
            </ul>
          </div>

          {/* Download & Connect Column */}
          <div className="space-y-6">
            <div className="rounded-sm px-6 py-1 w-fit bg-purple-50">
              <p className="font-bold text-sm text-purple-800">
                Download & Connect
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Mobile App</h4>
                <p className="text-xs text-gray-500 mb-3">
                  Get our news app for instant updates
                </p>
                <div className=" ">
                  <p className="font-bold text-sm text-purple-800">
                    Download & Connect
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Global Reach</h4>
                <p className="text-xs text-gray-500">Serving readers in:</p>
                <p className="text-sm">United States, Asis Europe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © 2024 Doctor Health and idea News. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 pt-20 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
