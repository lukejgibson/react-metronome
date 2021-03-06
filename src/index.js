import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Metronome from "./Metronome.js";
import MetronomeFC from "./MetronomeFC";
import reportWebVitals from "./reportWebVitals";
import { FunctionalMetronome } from "./Thomas_Metronome";

ReactDOM.render(<FunctionalMetronome />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
