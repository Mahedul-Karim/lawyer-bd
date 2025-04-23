import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const BlogsCard = ({ question, answer }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <Card className="border-stroke shadow-none pt-0 overflow-clip">
      <CardHeader className="bg-secondary">
        <CardTitle className="text-white text-xl font-bold py-6">
          {question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-dark/60 font-medium">
          {!showAll ? answer?.substring(0, 280) + "..." : answer}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-secondary/10 text-secondary hover:bg-secondary/10 hover:text-secondary"
          onClick={() => {
            setShowAll((prev) => !prev);
          }}
        >
          {showAll ? "Read Less" : "Read More"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogsCard;
