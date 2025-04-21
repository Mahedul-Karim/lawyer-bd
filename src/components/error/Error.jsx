import React from "react";
import Header from "../header/Header";
import { Link } from "react-router";
import { buttonVariants } from "../ui/button";
import Container from "../layout/Container";

const Error = () => {
  return (
    <>
      <Header />
      <Container className="flex flex-col items-center justify-center sm:py-16 py-8 gap-2">
        <div>
          <img src="/assets/404.png" alt="" className="max-h-[250px] xs:max-h-[340px] sm:max-h-[450px]" />
        </div>
        <p className=" sm:text-base text-sm text-center font-semibold text-dark/60 mb-4">
          Oops! The page you're looking for seems to have taken a different
          path. <br /> It might be under construction or doesn't exist.
        </p>
        <Link to="/" className={`!rounded-full ${buttonVariants({ variant: "default" })}`}>
          Back to home
        </Link>
      </Container>
    </>
  );
};

export default Error;
