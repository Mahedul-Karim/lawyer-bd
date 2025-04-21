import Loader from "@/components/common/loader/Loader";
import Banner from "@/components/home/Banner";
import BestLawyers from "@/components/home/BestLawyers";
import Container from "@/components/layout/Container";
import React from "react";

const Home = () => {
  

  return (
    <Container className="my-4">
      <Banner />
      <BestLawyers />
    </Container>
  );
};

export default Home;
