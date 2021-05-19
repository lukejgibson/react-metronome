import { useState, useEffect } from "react";

import click1 from "./click1.wav";
import click2 from "./click2.wav";
import { LEDBox } from "./components/LEDBox/LedBox";

export const FunctionalMetronome = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [bpm, setBpm] = useState(100);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const [timer, setTimer] = useState();

  const soundOne = new Audio(click1);
  const soundTwo = new Audio(click2);

  const playClick = () => {
    if (count % beatsPerMeasure === 0) {
      soundTwo.play();
    } else {
      soundOne.play();
    }
    setCount((prevState) => {
      return (prevState + 1) % beatsPerMeasure;
    });
    console.log({ count });
  };

  const startStop = () => {
    if (isPlaying) {
      setTimer(clearInterval(timer));
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      setTimer(setInterval(playClick, (60 / bpm) * 1000));
      setCount(0);
    }
  };
  const handleBpmChange = (event) => {
    if (isPlaying) {
      setTimer(clearInterval(timer));
      setCount(0);
      setBpm(event.target.value);
      setTimer(setInterval(playClick, (60 / bpm) * 1000));
    } else {
      setBpm(event.target.value);
    }
  };

  return (
    <div className="metronome">
      <div className="bpm-slider">
        <div className="tempo">
          <div>Tempo: {bpm} BPM</div>
          <div>TS: 4/4 </div>
        </div>
        <LEDBox />

        <LEDBox />

        <LEDBox />

        <LEDBox />

        <input
          type="range"
          min="60"
          max="240"
          value={bpm}
          onChange={handleBpmChange}
        />
      </div>
      <button onClick={startStop}>{isPlaying ? "Stop" : "Start"}</button>
    </div>
  );
};
