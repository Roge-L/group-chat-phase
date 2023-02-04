import React from 'react';
import '../styles/DayAvailability.css';
import { useState } from "react";

const Entry = (props) => {

    function formatTime(time) {
        if (time < 10)
            return `0${time}:00`;
        else
            return `${time}:00`
    }

    return (
        <div className="entry-outer">
            <div className="entry-outer-time">{formatTime(props.time)}</div>
            <div className="entry-inner">
                <div className="entry-inner-line">line</div>
                <div className="entry-inner-wrapper">
                    <div >10:00 11:00</div>
                    <div>people</div>
                </div>
            </div>
        </div>
    )
}

const DayAvailability = () => {

    const [schedule, setSchedule] = useState([]);
    const start = 8
    const nHours = 20
    const hoursArr =  Array.from(Array(nHours), (_, index) => index + 1).map(n => n + start - 1);

    return (
        <div className="day-availability-main">
            {hoursArr.map(n => <Entry time={n}></Entry>)}
        </div>
    )
}

export default DayAvailability;