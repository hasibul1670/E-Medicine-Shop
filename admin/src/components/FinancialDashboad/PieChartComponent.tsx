import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);


export interface ChartOptions {
  plugins: {
    legend: {
      display: boolean;
      position: "top" | "bottom" | "left" | "right"; // Allowed positions
      labels: {
        color: string;
      };
    };
    tooltip: {
      enabled: boolean;
    };
  };
}

const PieChartComponent = () => {
  const data = {
    labels: ["Flight", "Visa", "Hotel", "Tour"],
    datasets: [
      {
        label: "Sells",
        data: [10000, 5000, 25000, 54000],
        backgroundColor: ["green", "blue", "orange", "purple"],
      },
    ],
  };


  const options: ChartOptions = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "black",
        },
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="px-1">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartComponent;
