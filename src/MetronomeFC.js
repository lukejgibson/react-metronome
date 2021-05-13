import React, { useState, useEffect, useCallback } from 'react';
import './Metronome.css';
import click1 from './click1.wav';
import click2 from './click2.wav';
import { LED } from './components/LED';
import { LEDBox } from './components/LEDBox/LedBox';



const MetronomeFC = () => {
    const [playing, setPlaying] = useState(false);
    const [count, setCount] = useState();
    const [bpm, setBpm] = useState(100);
    const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
    let timer;


   const playClick = () => {

        const clickSound1 = new Audio(click1);
        const clickSound2 = new Audio(click2);

        if (count % beatsPerMeasure === 0) {
            clickSound2.play();
        } else {
            clickSound1.play();
        }
        setCount((count + 1) % beatsPerMeasure)
   };

    const handleBpmChange = event => {
    
        setBpm(event.target.value);

        if (playing) {
            clearInterval();
            setPlaying(false);
            setCount(0);
            setBpm(bpm)
        }
        else
            setBpm(bpm);
            //clearInterval(interval);
            //timer = setInterval();
            //setCount(0);
    
    };
    

   const startStop = () => {
        if (playing) {
            setPlaying(false);
            clearInterval();
        } else {
            setPlaying(true);
            setCount(0);
            setInterval(() => playClick(),(60/bpm) * 1000);
    };
}


    /*const beatsPerChange = () => {
        const one = document.getElementById("one");
        const four = document.getElementById("four");

        if(beatsPerMeasure === 3 && four.style.display === "inline"){
            four.style.display="hidden";
        } else if(beatsPerMeasure === 2 && one.style.display === "inline"){
            one.style.display="hidden";
            
        } else {
            one.style.display="inline";
            four.style.display="inline";
        }
    }*/

    const beatsChange = () => {
        if(beatsPerMeasure === 4) {
            setBeatsPerMeasure(3);
        } else if (beatsPerMeasure === 3) {
            setBeatsPerMeasure(2)
        } else {
            setBeatsPerMeasure(4)
        }
    }

    //this works to run a continuous click, but not bpm change
    //useEffect(() => {
     //  return() => {
    //   setInterval(() => {
     //      playClick();
     //     },(60 / bpm) * 1000);
     //   }
    //,[bpm, playing]);

        return ( 
            <div className="metronome">
                <div className="tempo">
                    <div>Tempo: {bpm} BPM</div>
                    TS: <button className="bpmButton" onClick={() => beatsChange()}>{beatsPerMeasure}</button>/4
                    </div>
                        <div id="boxes">
                            <LEDBox />
                            <LEDBox />
                            <LEDBox />
                            <LEDBox />
                        </div>
                        <div className="bpm-slider">
                    <input type="range" min="60" max="240" value={bpm} onChange={handleBpmChange} />
                </div> 
                <button onClick={() => startStop()}>{playing ? 'Stop' : 'Start'}</button>
            </div>
        )
};

export default MetronomeFC;