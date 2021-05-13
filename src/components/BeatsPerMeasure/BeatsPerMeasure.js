import React, { useState } from "react";
import "./style.css";



export const BeatsPerMeasure = () => {

    const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);

    const handleBeatsChange = event => {
        setBeatsPerMeasure(event.target.value);

        const newBeatsPerMeasure = [2,3,4]

        if (newBeatsPerMeasure && !isNaN(newBeatsPerMeasure)) {
            setBeatsPerMeasure(parseInt(newBeatsPerMeasure, 10));
          } else {
            setBeatsPerMeasure(4);
          }
        }
    }

    return (
        <div>
            <button onClick={handleBeatsChange} className="dropbtn">{beatsPerMeasure}</button>
        </div>
    )
}