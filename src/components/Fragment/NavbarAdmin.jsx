import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import NavAdmin from "../Elements/Items/NavAdmin";
import { UserCircle, LogOut, ChevronDown } from "lucide-react";

const NavbarAdmin = (props) => {
  const { type } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <nav className="bg-white z-50 fixed px-8 shadow-md w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16">
          <div className="flex h-full items-center">
            <img
              src="/images/cemenLogo.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
            <div className="ml-6 h-full flex space-x-8">
              <Navigation type={type} />
            </div>
          </div>
          <div className="flex items-center relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center group hover:bg-gray-50 rounded-lg transition-all duration-150 ease-in-out"
            >
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Bro
                  </span>
                  <span className="text-xs text-gray-500 group-hover:text-gray-700">
                    Internship
                  </span>
                </div>
                <img
                  src="/images/avatar.svg"
                  alt="Profile"
                  className="h-9 w-9 rounded-full ring-2 ring-gray-100 group-hover:ring-gray-200"
                />

                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            <div
              className={`
                        absolute right-0 top-full mt-1 w-60 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5
                        transform transition-all duration-200 ease-in-out
                        ${
                          isDropdownOpen
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-0 -translate-y-2 invisible"
                        }
                      `}
            >
              <div className="p-2">
                <div className="text-xs font-medium text-gray-400 px-3 py-2">
                  Account Settings
                </div>

                <Link
                  to="/profile"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600">
                    <UserCircle className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">Edit Profile</span>
                    <span className="text-xs text-gray-500">
                      Manage your account
                    </span>
                  </div>
                </Link>

                <div className="h-px bg-gray-100 my-2"></div>

                <button
                  onClick={() => {
                    handleLogout();
                    setIsDropdownOpen(false);
                  }}
                  className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-50 text-red-600">
                    <LogOut className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Log Out</span>
                    <span className="text-xs text-red-500">
                      End your session
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Navigation = ({ type }) => {
  if (type === "dashboard") {
    return <NavAdmin />;
  } else if (type === "internship") {
    return <NavAdmin />;
  } else if (type === "absensi") {
    return <NavAdmin />;
  } else if (type === "logbook") {
    return <NavAdmin />;
  } else {
    return <NavAdmin />;
  }
};

export default NavbarAdmin;
