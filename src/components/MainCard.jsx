import React from "react";
import SpendMonth from "./SpendMonth";
import SpendWeek from "./SpendWeek";

function MainCard() {
  return (
    <div className="main">
      <SpendWeek />
      <div
        style={{
          position: "absolute",
          height: 2,
          width: "94%",
          backgroundColor: "#00000030",
          bottom: "100px",
        }}
      ></div>
      <SpendMonth />
    </div>
  );
}

export default MainCard;
