import React from "react";
import { Link } from "react-router";
import SheetCloseWrapper from "./nav/SheetCloseWrapper";

const Logo = ({ closeOnClick = false }) => {
  return (
    <SheetCloseWrapper closeOnClick={closeOnClick}>
      <Link to="/" className="flex items-center gap-1">
        <img src="/assets/logo.png" className="size-11" />
        <p className="text-dark/80 font-extrabold text-xl">Law.BD</p>
      </Link>
    </SheetCloseWrapper>
  );
};

export default Logo;
