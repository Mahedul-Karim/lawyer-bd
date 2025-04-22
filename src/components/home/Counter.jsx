import React from "react";
import Section from "../common/section/Section";
import Title from "../common/section/Title";
import Paragraph from "../common/section/Paragraph";
import { COUNTER_DATA } from "@/lib/util/data";
import CounterCard from "../counter/CounterCard";

const Counter = () => {
  return (
    <Section>
      <div>
        <Title>We Provide Best Law Services</Title>
        <Paragraph>
          Our platform connects you with verified, experienced Lawyers across
          various specialities — all at your convenience.{" "}
        </Paragraph>
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-4 max-w-[800px] mx-auto">
        {COUNTER_DATA.length > 0 &&
          COUNTER_DATA.map((data, i) => (
            <CounterCard
              key={i}
              image={data.image}
              number={data.number}
              title={data.title}
            />
          ))}
      </div>
    </Section>
  );
};

export default Counter;
