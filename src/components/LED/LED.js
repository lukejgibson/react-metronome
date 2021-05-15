import { React, useState } from "react";
import "./style.css";

export const LED = (beat) => {
  const [light, setLight] = useState();

  return (
    <div
      className="led-light"
      onMouseEnter={() => setLight(1)}
      onMouseLeave={() => setLight(0)}
      light={light}
    />
  );
};
