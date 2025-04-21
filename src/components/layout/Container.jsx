import React from "react";

const Container = ({ className = "", children }) => {
  return (
    <section className={`max-w-7xl w-11/12 mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Container;
