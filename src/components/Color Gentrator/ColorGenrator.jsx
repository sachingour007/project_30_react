import React, { useEffect, useState } from "react";
import "./style.css";

const ColorGenrator = () => {
  const [typeOfColor, setTypeOfColor] = useState("HEX");
  const [bgColor, setbgColor] = useState("#000000");

  useEffect(() => {
    if (typeOfColor === "HEX") {
      hexColorHandler();
    } else {
      rgbColorHandler();
    }
  }, [typeOfColor]);

  const colorUtilityFun = (length) => {
    return Math.floor(Math.random() * length);
  };

  const hexColorHandler = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let val = "#";

    for (let i = 0; i < 6; i++) {
      val += hex[colorUtilityFun(hex.length)];
    }
    setbgColor(val);
  };

  const rgbColorHandler = () => {
    const r = colorUtilityFun(256);
    const g = colorUtilityFun(256);
    const b = colorUtilityFun(256);

    setbgColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div style={{ background: bgColor, height: "100vh" }}>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div className="btns">
          <button onClick={() => setTypeOfColor("HEX")}>HEX Color</button>
          <button onClick={() => setTypeOfColor("RGB")}>RGB Color</button>
          <button
            onClick={typeOfColor === "HEX" ? hexColorHandler : rgbColorHandler}
          >
            Color Genrator
          </button>
        </div>
        <div className="detailOfColor">
          <h2>{typeOfColor}</h2>
          <h2>{bgColor}</h2>
        </div>
      </div>
    </div>
  );
};

export default ColorGenrator;
