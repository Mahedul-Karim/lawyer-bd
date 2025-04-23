import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "../ui/button";
import { Link } from "react-router";

const dayMap = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const LawyersCard = ({
  image,
  name,
  speciality,
  experience,
  licenseNumber,
  availability,
}) => {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    if (!availability) return;

    const today = dayMap[new Date().getDay()];

    const lawyerAvailable = availability?.includes(today);

    if (lawyerAvailable) {
      setIsAvailable(true);
    }
  }, []);

  return (
    <Card className="border-stroke shadow-none">
      <CardContent className="flex xs:flex-row flex-col gap-4 lg:px-6 xs:px-3 px-6">
        <div className="shrink-0 md:shrink flex xs:block justify-center">
          <img
            src={image}
            alt="Lawyer Image"
            className="xs:w-[150px] object-cover w-[200px] h-[200px] xs:h-[150px] rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-1 grow justify-between">
          <div className="flex xs:items-center xs:flex-row flex-col gap-2">
            <Badge
              className={`rounded-full  ${
                isAvailable
                  ? "bg-primary/10 text-primary"
                  : "bg-tertiary/10 text-tertiary"
              } `}
            >
              {isAvailable ? "Available" : "Unavailable"}
            </Badge>
            <Badge className="rounded-full bg-secondary/10 text-secondary">
              {experience}+ Years Experience
            </Badge>
          </div>
          <h1 className="text-dark/70 font-extrabold text-xl">{name}</h1>
          <p className="font-medium text-dark/60">{speciality}</p>
          <p className="font-medium text-dark/60">
            &reg; License No: {licenseNumber}
          </p>
          <Link
            to={`/lawyer/${licenseNumber}`}
            className={`${buttonVariants({
              variant: "outline",
            })} !rounded-full hover:bg-transparent border-secondary/20 text-secondary !shadow-none hover:text-secondary`}
          >
            View Details
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default LawyersCard;
