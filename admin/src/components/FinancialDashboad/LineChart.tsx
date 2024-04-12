/* eslint-disable @typescript-eslint/no-explicit-any */
import { Line } from "react-chartjs-2";

import {
  CategoryScale,
  Chart,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";

Chart.register(LinearScale, CategoryScale, PointElement, LineElement);

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Flight",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "green",
        backgroundColor: "green",
        tension: 0.1,
      },
      {
        label: "Visa",
        data: [30, 40, 10, 60, 45, 80, 60],
        fill: false,
        borderColor: "blue",
        backgroundColor: "blue",
        tension: 0.1,
      },
      {
        label: "Hotel",
        data: [10, 40, 70, 75, 70, 60, 60],
        fill: false,
        borderColor: "orange",
        backgroundColor: "orange",
        tension: 0.1,
      },
      {
        label: "Tour",
        data: [20, 25, 30, 35, 30, 45, 15],
        fill: false,
        borderColor: "purple",
        backgroundColor: "purple",
        tension: 0.1,
      },
    ],
  };

  const options :any = {
    indexAxis: "x",
    plugins: {
      legend: {
        position: "bottom",
        pointStyle: "circle",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          suggestedMax: 100,
        },
      },
    },
  };

  return (
    <div className=" py-5 max-w-4xl">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
