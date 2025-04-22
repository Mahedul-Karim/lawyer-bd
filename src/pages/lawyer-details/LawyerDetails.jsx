import Footer from "@/components/common/Footer";
import Error from "@/components/error/Error";
import Header from "@/components/header/Header";
import AppointmentCard from "@/components/lawyers/details/AppointmentCard";
import DetailsCard from "@/components/lawyers/details/DetailsCard";
import TitleCard from "@/components/lawyers/details/TitleCard";
import Container from "@/components/layout/Container";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const LawyerDetails = () => {
  const data = useLoaderData();

  const { licenseNumber } = useParams();

  const lawyerDetail = data?.find(
    (lawyer) => lawyer.licenseNumber === licenseNumber
  );

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
        <AppointmentCard info={lawyerDetail} />
      </Container>
      {lawyerDetail && <Footer />}
    </>
  );
};

export default LawyerDetails;
