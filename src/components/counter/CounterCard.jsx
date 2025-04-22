import React from "react";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import CountUp from "react-countup";

const CounterCard = ({ image, number, title }) => {
  return (
    <Card className="border-stroke shadow-none bg-dark/5">
      <CardContent className="flex flex-col gap-2 xs:px-6 px-4" >
        <div>
            <img src={image} alt="" className="size-12 xs:size-14" />
        </div>
        <p className="text-2xl xs:text-3xl font-extrabold text-dark/70">
            <CountUp end={number} duration={5} suffix="+" />
        </p>
        <p className="text-dark/60 font-medium text-sm xs:text-base" >{title}</p>
      </CardContent>
    </Card>
  );
};

export default CounterCard;
