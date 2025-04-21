import { NAV_DATA } from "@/lib/util/data";
import React from "react";
import { Link, useLocation } from "react-router";
import SheetCloseWrapper from "./SheetCloseWrapper";

const Nav = ({ className = "", closeOnClick = false }) => {
  const location = useLocation();

  return (
    <nav className={className}>
      <ul className="flex flex-col md:flex-row items-center gap-2">
        {NAV_DATA.length > 0 &&
          NAV_DATA.map((nav, i) => (
            <li key={i} className="w-full md:w-auto" >
              <SheetCloseWrapper closeOnClick={closeOnClick}>
                <Link
                  to={nav.to}
                  className={`font-medium ${
                    location.pathname === nav.to
                      ? "border-primary text-primary"
                      : "text-dark/70 border-transparent"
                  }  border border-solid  hover:border-primary hover:text-primary transition-all duration-300 px-3 py-1 rounded-sm w-full md:w-auto flex items-center justify-center`}
                >
                  {nav.label}
                </Link>
              </SheetCloseWrapper>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
