import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DetailsCard = ({
  image,
  name,
  speciality,
  experience,
  licenseNumber,
  fee,
  availability = [],
}) => {
  return (
    <Card className="my-6 border-stroke shadow-none ">
      <CardContent className="flex flex-col sm:flex-row items-center gap-4">
        <div className="">
          <img
            src={image}
            alt=""
            className="rounded-[20px] w-[270px] h-[270px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <Badge className="bg-secondary/10 text-secondary rounded-full">
              {experience}+ Years Experience
            </Badge>
          </div>
          <h3 className="font-extrabold text-dark text-2xl">{name}</h3>
          <div className="flex items-center gap-4">
            <p className="font-medium text-dark/60">{speciality}</p>
            <p className="font-medium text-dark/60">
              &reg; License No: {licenseNumber}
            </p>
          </div>
          <div className="flex  gap-5">
            <p className="text-dark/70 font-bold">Availability</p>
            <div className="flex items-center gap-3 flex-wrap">
              {availability.length > 0 &&
                availability.map((day, i) => (
                  <Badge
                    key={i}
                    className="rounded-full bg-yellow/10 text-yellow border border-solid border-yellow/20"
                  >
                    {day}
                  </Badge>
                ))}
            </div>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-dark/70 font-bold">Consultation Fee:</p>
            <p className="text-primary font-extrabold">Taka: {fee}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
