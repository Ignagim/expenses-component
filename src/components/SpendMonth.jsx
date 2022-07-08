import React from "react";

function SpendMonth() {
  return (
    <div className="month">
      <div className="month__total">
        <h2 className="month__total--title">Total this month</h2>
        <h2 className="month__total--money">$478.33</h2>
      </div>
      <div className="month__percent">
        <h2 className="month__percent--dif">+2.4%</h2>
        <p>from las month</p>
      </div>
    </div>
  );
}

export default SpendMonth;
