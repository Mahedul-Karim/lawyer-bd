import React from "react";

const Banner = () => {
  return (
    <section className="bg-[url('/assets/banner-img-1.png')] bg-cover bg-center bg-no-repeat rounded-3xl py-26 flex flex-col items-center justify-center gap-2 md:min-h-[490px] px-4">
      <h1 className="text-center text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.4]">
        It avoids subjective claims or <br /> exaggeration that might raise red{" "}
        <br /> flags legally
      </h1>
      <p className="font-medium text-xs sm:text-sm md:text-base text-white/70 text-center" >Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
    </section>
  );
};

export default Banner;
