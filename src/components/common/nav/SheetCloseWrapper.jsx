import { SheetClose } from "@/components/ui/sheet";
import React, { Fragment } from "react";

const SheetCloseWrapper = ({ children, closeOnClick = false }) => {
  return (
    <>
      {closeOnClick ? (
        <SheetClose asChild>{children}</SheetClose>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </>
  );
};

export default SheetCloseWrapper;
