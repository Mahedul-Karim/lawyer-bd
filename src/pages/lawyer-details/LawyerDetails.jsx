import Footer from "@/components/common/Footer";
import Error from "@/components/error/Error";
import Header from "@/components/header/Header";
import AppointmentCard from "@/components/lawyers/details/AppointmentCard";
import DetailsCard from "@/components/lawyers/details/DetailsCard";
import TitleCard from "@/components/lawyers/details/TitleCard";
import Container from "@/components/layout/Container";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const dayMap = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const LawyerDetails = () => {
  const data = useLoaderData();

  const { licenseNumber } = useParams();
  const [isAvailable, setIsAvailable] = useState(false);

  const lawyerDetail = data?.find(
    (lawyer) => lawyer.licenseNumber === licenseNumber
  );

  useEffect(() => {
    if (!lawyerDetail) return;

    const today = dayMap[new Date().getDay()];

    const lawyerAvailable = lawyerDetail?.availability?.includes(today);

    if (lawyerAvailable) {
      setIsAvailable(true);
    }
  }, [lawyerDetail]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!lawyerDetail) {
    return (
      <Error
        text={`No lawyer has been found for this license: ${licenseNumber}`}
      />
    );
  }

  return (
    <>
      <Header />
      <Container className="py-8 sm:py-16">
        <TitleCard />
        <DetailsCard
          image={lawyerDetail?.image}
          name={lawyerDetail?.name}
          speciality={lawyerDetail?.speciality}
          experience={lawyerDetail?.experience}
          licenseNumber={lawyerDetail?.licenseNumber}
          fee={lawyerDetail?.fee}
          availability={lawyerDetail?.availability}
          
        />
        <AppointmentCard info={lawyerDetail} isAvailable={isAvailable} />
      </Container>
      {lawyerDetail && <Footer />}
    </>
  );
};

export default LawyerDetails;
