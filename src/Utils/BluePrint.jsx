import React from "react";
import "./BluePrint.css";
const BluePrint = ({ header, main, style }) => {
  return (
    <div id="main">
      <div className="header">{header}</div>
      <div className={`${style}`}>{main}</div>
    </div>
  );
};

export default BluePrint;
