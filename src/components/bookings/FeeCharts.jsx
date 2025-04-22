import { useAppointment } from "@/context/BookingsProvider";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const FeeCharts = () => {
  const { lawyers = [] } = useAppointment();

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (lawyers.length) {
      const formatted = lawyers.map((lawyer) => ({
        name: lawyer?.name,
        fee: lawyer?.fee,
      }));
      setChartData(formatted);
    }
  }, [lawyers]);

  if (lawyers.length === 0) {
    return <></>;
  }

  return (
    <ResponsiveContainer className={"min-h-[300px]"}>
      <BarChart
        height={300}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tickLine={false}
          tick={{
            fontWeight: 500,
            color: "rgba(20, 20, 20, 0.6)",
          }}
          stroke="rgba(20, 20, 20, 0.6)"
        />
        <YAxis
          tickLine={false}
          tick={{
            fontWeight: 500,
            color: "rgba(20, 20, 20, 0.6)",
          }}
          stroke="rgba(20, 20, 20, 0.6)"
        />
        <Bar dataKey="fee" shape={<TriangleBar />} label={{ position: "top" }}>
          {chartData?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={"#176AE5"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FeeCharts;
