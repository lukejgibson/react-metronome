import React from "react"
import { LED } from "../LED/LED";
import "./style.css"


export const LEDBox = (beat) => {
    return (
        <div className="led-box">
            <LED beat={beat} />
        </div>
    )
}