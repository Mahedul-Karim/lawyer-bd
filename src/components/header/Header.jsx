import React from "react";
import Container from "../layout/Container";
import Logo from "../common/Logo";
import { Button } from "../ui/button";
import Nav from "../common/nav/Nav";
import { useLocation } from "react-router";
import MobileNav from "../common/nav/MobileNav";

const Header = () => {
  const location = useLocation();

  const isHome = location?.pathname === "/";

  return (
    <header
      className={`py-4 border-b border-solid ${
        !isHome ? "border-dark/10" : "border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Logo />
        <Nav className="md:block hidden" />
        <div className="md:block hidden">
          <Button className="rounded-full font-bold">Contact Now</Button>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
};

export default Header;
