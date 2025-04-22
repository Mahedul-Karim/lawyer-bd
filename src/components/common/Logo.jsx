import React from "react";
import { Link } from "react-router";
import SheetCloseWrapper from "./nav/SheetCloseWrapper";

const Logo = ({ closeOnClick = false,isWhite }) => {
  return (
    <SheetCloseWrapper closeOnClick={closeOnClick}>
      <Link to="/" className="flex items-center gap-1">
        <img src={isWhite ? "/assets/logo-footer.png" : "/assets/logo.png"} className="size-11" />
        <p className={`${isWhite ? 'text-white' : 'text-dark/80'} font-extrabold text-xl font-sans`}>Law.BD</p>
      </Link>
    </SheetCloseWrapper>
  );
};

export default Logo;
