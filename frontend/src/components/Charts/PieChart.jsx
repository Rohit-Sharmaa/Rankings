import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./pieChart.css";
import { Chart as ChartJS } from "chart.js/auto";

export default function PieChart({
  val4,
  val4name,
  val5,
  val5name,
  val6,
  val6name,
  platform,
}) {
  console.log(val4, " ", val4name);

  // Filter out undefined values
  const sourceData = [
    { label: val4name, value: val4 },
    { label: val5name, value: val5 },
    { label: val6name, value: val6 },
  ].filter((data) => data.value !== undefined && data.label !== undefined);

  const chartLabel =
    platform === "leetcode" || platform === "gfg" ? "Solved" : "Rating";

  return (
    <div className="pie_container">
      <div className="dataCard">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: chartLabel,
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(124, 248, 111, 1)",
                  "rgba(255, 255, 0, 1)",
                  "rgba(255, 0, 0, 1)",
                ],
                borderColor: [
                  "rgba(124, 248, 111, 1)",
                  "rgba(255, 255, 0, 1)",
                  "rgba(255, 0, 0, 1)",
                ],
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
