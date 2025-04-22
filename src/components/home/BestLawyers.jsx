import React, { useEffect, useState } from "react";
import Title from "../common/section/Title";
import Section from "../common/section/Section";
import Paragraph from "../common/section/Paragraph";
import { useLoaderData } from "react-router";
import LawyersCard from "../lawyers/LawyersCard";
import { Button } from "../ui/button";

const BestLawyers = () => {
  const data = useLoaderData();

  const [lawyers, setLawyers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (!data) return;

    setLawyers(data?.slice(0, 6));
  }, [data]);

  const handleShowAll = () => {
    if (!showAll) {
      setLawyers([...data]);
      setShowAll(true);
      return;
    }
    setLawyers(data?.slice(0, 6));
    setShowAll(false);
  };

  return (
    <Section>
      <div>
        <Title>Our Best Lawyers</Title>
        <Paragraph>
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine{" "}
          <br /> checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </Paragraph>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-4 lg:gap-6">
        {lawyers?.length > 0 &&
          lawyers?.map((lawyer, i) => (
            <LawyersCard
              key={i}
              image={lawyer.image}
              name={lawyer.name}
              speciality={lawyer.speciality}
              experience={lawyer.experience}
              licenseNumber={lawyer.licenseNumber}
            />
          ))}
      </div>
      <div className="mt-4 flex items-center justify-center">
        <Button className="rounded-full" onClick={handleShowAll}>
          {showAll ? "Show Less Lawyer" : "Show All Lawyer"}
        </Button>
      </div>
    </Section>
  );
};

export default BestLawyers;
