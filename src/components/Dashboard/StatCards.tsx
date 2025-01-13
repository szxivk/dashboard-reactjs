import React from "react";

export const StatCards = () => {
  return (
    <>
      <Card
        title="Gross Revenue"
        value="₹1,04,00,799.11"
        pillText="2.75%"
        trend="up"
        period="From Jul 1st - Dec 31st"
      />
      <Card
        title="Avg Order"
        value="₹2,339.12"
        pillText="1.01%"
        trend="down"
        period="From Jul 1st - Dec 31st"
      />
      <Card
        title="Trailing year"
        value="₹2,40,78,843"
        pillText="60.75%"
        trend="up"
        period="Previous 365 days"
      />
    </>
  );
};

const Card = ({
  title,
  value,
  pillText,
  trend,
  period,
}: {
  title: string;
  value: string;
  pillText: string;
  trend: "up" | "down";
  period: string;
}) => {
  return <div className="p-4 rounded col-span-4 border border-stone-300"></div>;
};
