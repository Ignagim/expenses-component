import React from "react";
import Charts from "./Charts";
import data from "../data.json";

function SpendWeek() {
  const max = Math.max(...data.map((d) => d.amount));
  return (
    <div className="week">
      <h2>Spending - Last 7 days</h2>
      <div className="week__charts">
        {data.map((data) => (
          <Charts
            day={data.day}
            amount={data.amount}
            max={max}
            key={data.day}
          />
        ))}
      </div>
    </div>
  );
}

export default SpendWeek;
