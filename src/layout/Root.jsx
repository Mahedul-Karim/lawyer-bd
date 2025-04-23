import Footer from "@/components/common/Footer";
import FullPageSpinner from "@/components/common/loader/FullPageSpinner";
import Header from "@/components/header/Header";
import React from "react";
import { Outlet, useNavigation } from "react-router";

const Root = () => {
  const navigation = useNavigation();

  const isNavigating = Boolean(navigation.location);

  return (
    <>
      <Header />
      {isNavigating && <FullPageSpinner />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
