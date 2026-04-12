
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // ❌ Don't show navbar on Gallery page
//   if (location.pathname === "/gallery") return null;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Story", path: "/story" },
    { name: "Message", path: "/message" },
    { name: "Proposal", path: "/proposal" },
  ];

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">

      <div className="flex justify-center gap-6 md:gap-10 p-4 text-pink-600">

        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              className={`relative text-sm md:text-lg font-semibold transition duration-300
              
              ${isActive ? "text-red-400" : "text-pink-700"}
              
              hover:text-red-400`}
            >
              {item.name}

              {/* 🔥 UNDERLINE ANIMATION */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-300 transition-all duration-300
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>

            </Link>
          );
        })}

      </div>
    </div>
  );
};

export default Navbar;