import { useAppointment } from "@/context/BookingsProvider";
import React, { useEffect, useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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

  const colors = useMemo(
    () =>
      chartData?.map(() => {
        return `rgb(${Math.round(Math.random() * 255)},${Math.round(
          Math.random() * 255
        )},${Math.round(Math.random() * 255)})`;
      }),
    [chartData]
  );

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
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FeeCharts;
