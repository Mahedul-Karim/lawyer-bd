import AppointmentCard from "@/components/bookings/AppointmentCard";
import FeeCharts from "@/components/bookings/FeeCharts";
import Container from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/button";
import { useAppointment } from "@/context/BookingsProvider";
import React, { useEffect } from "react";
import { Link } from "react-router";

const Bookings = () => {
  const { lawyers = [] } = useAppointment();

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  if (lawyers.length === 0) {
    return <Container className="flex flex-col items-center justify-center sm:py-16 py-8 gap-2">
    <div>
      <img
        src="/assets/empty.svg"
        alt=""
        className="h-[250px] xs:h-[340px] sm:h-[450px]"
      />
    </div>
    <p className=" sm:text-base text-sm text-center font-semibold text-dark/60 mb-4 whitespace-pre-wrap">
      Oops! You don&apos;t have any appointment today.
    </p>
    <Link
      to="/"
      className={`!rounded-full ${buttonVariants({ variant: "default" })}`}
    >
      Back to home
    </Link>
  </Container>
  }

  return (
    <Container className="py-8 sm:py-16">
      <FeeCharts />
      <div className="my-6">
        <h2 className="font-sans text-xl xs:text-2xl sm:text-3xl font-extrabold text-dark text-center">
          My Today&apos; Appointments
        </h2>
        <p className="mt-4 text-center text-dark text-xs xs:text-sm sm:text-base">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {lawyers?.map((lawyer, i) => (
          <AppointmentCard
            key={i}
            name={lawyer?.name}
            id={lawyer?.id}
            fee={lawyer?.fee}
            speciality={lawyer?.speciality}
          />
        ))}
      </div>
    </Container>
  );
};

export default Bookings;
