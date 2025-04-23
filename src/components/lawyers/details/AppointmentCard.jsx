import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";
import { toast } from "sonner";
import { useAppointment } from "@/context/BookingsProvider";
import { useNavigate } from "react-router";

const AppointmentCard = ({ info, isAvailable }) => {
  const { lawyers, setLawyers } = useAppointment();

  const navigate = useNavigate();

  const handleAppointment = () => {
    if (!isAvailable) {
      toast.error(`${info.name} is not available today`);
      return;
    }

    const allAppointments = [...lawyers];

    const existingAppointment = allAppointments.find(
      (app) => app.id === info.id
    );

    if (existingAppointment) {
      toast.error(`You already have set an appointment with ${info?.name}`);
      return;
    }

    allAppointments.push(info);
    localStorage.setItem("lawyers", JSON.stringify(allAppointments));
    setLawyers(allAppointments);
    toast.success(
      `You have successfully booked an appointment with ${info.name}`
    );
    navigate("/my-bookings");
  };

  return (
    <Card className="border-stroke shadow-none">
      <CardHeader>
        <CardTitle
          className={
            "font-bold text-xl text-dark text-center border-b border-dashed border-stroke pb-4"
          }
        >
          Book an Appointment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between pb-4 border-b border-solid border-stroke">
          <h4 className="text-dark font-sans font-bold">Availability</h4>
          <div>
            <Badge
              className={`rounded-full  border border-solid  ${
                isAvailable
                  ? "bg-primary/10 text-primary border-primary/20"
                  : "bg-tertiary/10 text-tertiary border-tertiary/20"
              } `}
            >
              {isAvailable
                ? "Lawyer Available Today"
                : "Lawyer Unavailable Today"}
            </Badge>
          </div>
        </div>
        <div>
          <Badge className="rounded-full bg-yellow/10 text-yellow border border-solid border-yellow/20 mt-4 text-sm [&>svg]:size-4 flex  gap-2 whitespace-pre-wrap">
            <CircleAlert className="shrink-0" /> Due to high client volume, we
            are currently accepting appointments for today only. We appreciate
            your understanding and cooperation.
          </Badge>
        </div>
        <Button
          className="mt-4 w-full rounded-full"
          onClick={handleAppointment}
        >
          Book Appointment Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
