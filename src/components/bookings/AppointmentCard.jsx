import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useAppointment } from "@/context/BookingsProvider";

const AppointmentCard = ({ name, id, fee, speciality }) => {
  const { lawyers, setLawyers } = useAppointment();

  const handleRemoveBooking = () => {
    const filteredAppointments = [...lawyers].filter(
      (lawyer) => lawyer.id !== id
    );
    setLawyers(filteredAppointments);

    localStorage.setItem("lawyers", JSON.stringify(filteredAppointments));
  };

  return (
    <Card className="border-stroke shadow-none">
      <CardHeader className="flex flex-col xs:flex-row gap-2 items-center justify-between">
        <CardTitle>
          <h3 className="text-lg font-bold text-dark">{name}</h3>
          <p className="font-medium text-dark/60 mt-2">{speciality}</p>
        </CardTitle>
        <CardDescription className="font-medium text-dark/60">
          Appointment fee: {fee}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <hr className="border-dashed border-stroke" />
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full rounded-full border-tertiary font-semibold text-tertiary hover:bg-tertiary hover:text-white transition-all duration-300"
          onClick={handleRemoveBooking}
        >
          Cancel Appointment
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AppointmentCard;
