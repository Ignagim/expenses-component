import React, { useState } from "react";

function Charts({ day, amount, max }) {
  const [active, setActive] = useState(false);

  return (
    <div className="chart">
      <div
        onMouseOver={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        style={{ height: amount * 3.3 }}
        className={`chart__days ${max === amount ? "chart__days--max" : ""} }`}
      >
        {active ? <div className="chart__days--amount">${amount}</div> : null}

        <p>{day}</p>
      </div>
    </div>
  );
}

export default Charts;
