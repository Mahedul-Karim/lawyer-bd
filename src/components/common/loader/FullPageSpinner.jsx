import React from "react";
import Loader from "./Loader";

const FullPageSpinner = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <Loader />
    </div>
  );
};

export default FullPageSpinner;
