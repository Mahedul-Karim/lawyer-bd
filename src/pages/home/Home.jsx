import Banner from "@/components/home/Banner";
import BestLawyers from "@/components/home/BestLawyers";
import Counter from "@/components/home/Counter";
import Container from "@/components/layout/Container";
import React from "react";

const Home = () => {
  return (
    <Container className="my-4">
      <Banner />
      <BestLawyers />
      <Counter />
    </Container>
  );
};

export default Home;
