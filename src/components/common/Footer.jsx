import React from "react";
import Container from "../layout/Container";
import Logo from "./Logo";
import { NAV_DATA } from "@/lib/util/data";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-16 bg-dark/70">
      <Container>
        <div className="flex items-center justify-center">
          <Logo isWhite />
        </div>
        <ul className="flex flex-col xs:flex-row items-center justify-center text-white/70 my-4 gap-6 flex-wrap">
          {NAV_DATA.length > 0 &&
            NAV_DATA.map((data, i) => (
              <li key={i}>
                <Link className="" to={data.to}>
                  {data.label}
                </Link>
              </li>
            ))}
        </ul>
        <hr className="border-dashed border-white/20 mb-4" />
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link target="_black" to="https://www.facebook.com">
            <img src="/assets/facebook.png" alt="" className="size-7" />
          </Link>
          <Link target="_black" to="https://www.x.com">
            <img src="/assets/x.png" alt="" className="size-7" />
          </Link>
          <Link target="_black" to="https://www.linkedin.com">
            <img src="/assets/linkedin.png" alt="" className="size-7"/>
          </Link>
          <Link target="_black" to="https://www.youtube.com">
            <img src="/assets/youtube.png" alt="" className="size-7" />
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
