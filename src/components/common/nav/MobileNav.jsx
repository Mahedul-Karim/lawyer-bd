import React from "react";
import { AlignRight } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../../ui/button";
import Logo from "../Logo";
import Nav from "./Nav";

const MobileNav = () => {
  return (
    <div className="md:hidden flex items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="hover:bg-transparent border-none h-auto"
          >
            <AlignRight className="size-7" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex items-center justify-center">
              <Logo closeOnClick />
            </SheetTitle>
            <SheetDescription className="sr-only">
              This a navigation bar
            </SheetDescription>
            <div className="mt-2">
              <Nav closeOnClick />
            </div>
          </SheetHeader>

          <SheetFooter>
            <SheetClose asChild>
              <Button className="rounded-full font-bold">Contact Now</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
